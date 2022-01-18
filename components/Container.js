import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Container(props) {
  const { children, site, ...customMeta } = props;
  const router = useRouter();

  const meta = {
    title: "José Aular",
    description: `Ingeniero Informático.`,
    image: "https://jaular.vercel.app/static/banner.png",
    type: "website",
    ...customMeta,
  };

  const currentPage = router.asPath;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://jaular.vercel.app${currentPage}`}
        />
        <link
          rel="canonical"
          href={`https://jaular.vercel.app${currentPage}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="José Aular" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jaular" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Header currentPage={currentPage} />

      <main className="container flex-grow max-w-2xl px-4 mx-auto my-10 font-sans antialiased leading-relaxed sm:px-6 md:my-12 lg:px-8">
        {children}
      </main>

      <Footer />
    </>
  );
}
