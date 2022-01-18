import Link from "next/link";
import Container from "@/components/Container";

export default function Custom404() {
  return (
    <Container title="404: No se pudo encontrar esta página">
      <div className="space-y-10">
        <h1 className="text-4xl font-bold text-black md:text-5xl dark:text-white">
          No se pudo encontrar esta página
        </h1>
        <div className="flex flex-col flex-none w-full mx-auto space-y-4 sm:w-auto sm:flex-row sm:items-start sm:space-y-0 sm:space-x-5">
          <div>
            <Link href="/">
              <a className="inline-flex items-center justify-center w-full px-8 border border-transparent py-2.5 text-white duration-300 ease-in-out bg-blue-400 rounded-md shadow-lg focus:outline-none sm:w-auto hover:bg-blue-400/80 shadow-blue-300/20 hover:shadow-none focus:bg-blue-300/80 focus:shadow-none">
                <span className="capsize">Inicio</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
