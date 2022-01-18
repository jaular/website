import Link from "next/link";
import useSWR from "swr";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";
import Spin from "@/components/Spin";
import fetcher from "@/lib/fetcher";

export default function BlogPost({ title, publishedAt, slug }) {
  const { data } = useSWR(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <li>
      <div className="flex justify-between space-x-8">
        <div>
          <Link href={`/blog/${slug}`}>
            <a className="text-base text-black dark:text-white md:text-lg dark:hover:text-blue-100 hover:text-blue-400 focus:outline-none dark:focus:text-blue-100 focus:text-blue-400">
              {title}
            </a>
          </Link>
          <p className="text-sm capitalize text-slate-600 dark:text-slate-400">
            {format(parseISO(publishedAt), "MMMM dd, yyyy", { locale: es })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">
            {views ? `${new Number(views).toLocaleString()} visitas` : <Spin />}
          </p>
        </div>
      </div>
    </li>
  );
}
