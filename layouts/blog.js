import Container from "@/components/Container";
import ViewCounter from "@/components/ViewCounter";
import { parseISO, format } from "date-fns";
import { es } from "date-fns/locale";

export default function BlogLayout({ children, post }) {
  return (
    <Container
      title={`José Aular | ${post.title}`}
      description={post.summary}
      image={`https://jaular.vercel.app${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="space-y-8">
        <h1 className="text-4xl font-bold text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>

        <div className="space-y-1 md:space-y-0 md:flex md:justify-between">
          <div>
            <p className="text-sm capitalize text-slate-600 dark:text-slate-400">
              {"José Aular | "}
              {format(parseISO(post.publishedAt), "MMMM dd, yyyy", {
                locale: es,
              })}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {post.readingTime.text} {` | `}
              <ViewCounter slug={post.slug} />
            </p>
          </div>
        </div>

        <div className="leading-relaxed prose max-w-none prose-article">
          {children}
        </div>
      </article>
    </Container>
  );
}
