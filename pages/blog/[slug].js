import components from "@/components/MDXComponents";
import BlogLayout from "@/layouts/blog";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from ".contentlayer/data";

export default function Post({ post }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component
        components={{
          ...components,
        }}
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    // Return 404 page if path is not returned by getStaticPaths
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  return { props: { post } };
}
