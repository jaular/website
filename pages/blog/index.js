import { useState } from "react";
import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { pick } from "@/lib/utils";
import { allBlogs } from ".contentlayer/data";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="José Aular | Blog"
      description="Blog sobre tecnología y desarrollo web."
    >
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-black md:text-5xl dark:text-white">
            Blog
          </h1>
          <h2 className="text-slate-600 dark:text-slate-400">{`En total, he escrito ${posts.length} artículos en mi blog`}</h2>
        </div>
        <div className="relative w-full">
          <input
            aria-label="Buscar publicaciones"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Buscar publicaciones"
            className="block w-full px-4 py-2 text-black rounded-md placeholder-slate-600 dark:placeholder:text-slate-400 dark:text-white bg-slate-200 dark:bg-steel-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400 dark:focus:ring-blue-100"
          />
          <svg
            className="absolute w-5 h-5 text-slate-400 right-3 top-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="space-y-6">
          <p className="text-2xl font-bold text-black dark:text-white md:text-3xl">
            Publicaciones
          </p>
          {!filteredBlogPosts.length && (
            <p className="text-slate-600 dark:text-slate-400">
              No se han encontrado publicaciones
            </p>
          )}

          <ul className="space-y-4">
            {filteredBlogPosts.map((post) => (
              <BlogPost key={post.title} {...post} />
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt"])
  );

  return { props: { posts } };
}
