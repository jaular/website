import Image from "next/image";

export default function Cards({ data }) {
  return (
    <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3">
      {data.map((item) => (
        <li key={item.id}>
          <div className="space-y-4">
            <div className="rounded-md aspect-w-3 aspect-h-2">
              <Image
                className="object-cover rounded-md bg-slate-200 dark:bg-steel-gray-300"
                src={item.imgUrl}
                alt={item.title}
                layout="fill"
                priority
              />
            </div>
            <div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-black md:text-lg dark:text-white dark:hover:text-blue-100 hover:text-blue-400 focus:outline-none dark:focus:text-blue-100 focus:text-blue-400"
              >
                {item.title}
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
