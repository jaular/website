import Container from "@/components/Container";
import Cards from "@/components/Cards";
import Spin from "@/components/Spin";
import prisma from "@/lib/prisma";

export default function Proyectos({ data }) {
  return (
    <Container
      title="José Aular | Proyectos"
      description="Proyectos en los que he trabajado."
    >
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-black md:text-5xl dark:text-white">
            Proyectos
          </h1>
          <h2 className="text-slate-600 dark:text-slate-400">
            Estos son algunos de mis proyectos
          </h2>
        </div>

        <div>
          {data.length === 0 ? (
            <Spin />
          ) : (
            <>
              <Cards data={data} />
            </>
          )}
        </div>

        <div>
          <a
            href="https://github.com/jaular?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-8 py-2.5 text-black duration-300 ease-in-out border rounded-md shadow-lg dark:text-white border-violet-400 dark:border-violet-100 focus:outline-none sm:w-auto shadow-violet-300/20 hover:shadow-none focus:shadow-none"
          >
            <span className="capsize">Más proyectos</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  let data;
  try {
    const resp = await prisma.projects.findMany();
    data = await JSON.parse(JSON.stringify(resp));
  } catch (error) {
    data = [];
  }

  return {
    props: {
      data,
    },
  };
}
