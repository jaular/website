import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-black md:text-5xl dark:text-white">
            José Aular
          </h1>
          <h2 className="text-slate-600 dark:text-slate-400">
            Ingeniero Informático
          </h2>
        </div>

        <div className="space-y-2">
          <p className="text-black dark:text-white">
            Bienvenido a mi sitio web, aquí encontrarás información sobre{" "}
            <em className="font-bold text-violet-400 dark:text-violet-100 font-gloria-hallelujah">
              tecnología
            </em>{" "}
            y{" "}
            <em className="font-bold text-violet-400 dark:text-violet-100 font-gloria-hallelujah">
              desarrollo web
            </em>
            .
          </p>
          <p className="text-black dark:text-white">
            Créditos para{" "}
            <a
              href="https://twitter.com/leeerob"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 dark:text-blue-100 decoration-2 decoration-dotted hover:underline hover:decoration-blue-200 focus:outline-none focus:underline focus:decoration-blue-200"
            >
              Lee Robinson
            </a>{" "}
            y{" "}
            <a
              href="https://twitter.com/delba_oliveira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 dark:text-blue-100 decoration-2 decoration-dotted hover:underline hover:decoration-blue-200 focus:outline-none focus:underline focus:decoration-blue-200"
            >
              Delba De Oliveira
            </a>
            .
          </p>
        </div>
        <div className="flex flex-col flex-none w-full mx-auto space-y-4 sm:w-auto sm:flex-row sm:items-start sm:space-y-0 sm:space-x-5">
          <div>
            <Link href="/proyectos">
              <a className="inline-flex items-center justify-center w-full px-8 border border-transparent py-2.5 text-white duration-300 ease-in-out bg-blue-400 rounded-md shadow-lg focus:outline-none sm:w-auto hover:bg-blue-400/80 shadow-blue-300/20 hover:shadow-none focus:bg-blue-300/80 focus:shadow-none">
                <span className="capsize">Proyectos</span>
              </a>
            </Link>
          </div>

          <div>
            <Link href="/blog">
              <a className="inline-flex items-center justify-center w-full px-8 py-2.5 text-black duration-300 ease-in-out border rounded-md shadow-lg dark:text-white border-violet-400 dark:border-violet-100 focus:outline-none sm:w-auto shadow-violet-300/20 hover:shadow-none focus:shadow-none">
                <span className="capsize">Blog</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
