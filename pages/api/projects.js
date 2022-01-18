import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const projects = await prisma.projects.findMany();
        return res.status(200).json(projects);
      } catch (e) {
        return res.status(500).json({ message: e.message });
      }
      break;

    default:
      console.log("deault");
      break;
  }
}
