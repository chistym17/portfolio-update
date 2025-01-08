import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Stay-Vista",
    description: "A travel booking website",
    image: "/vista.jpeg",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/chistym17/vista",
    liveUrl: "https://vista-omega.vercel.app/",
  },
  {
    title: "Docu-Mind",
    description: "A document parser and summarizer",
    image: "/documind.jpeg",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/chistym17/document-parser-backend",
    liveUrl: "https://task-manager-demo.com",
  },
  {
    title: "Youvid",
    description: "A simple youtube clone",
    image: "/youvid.jpeg",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/chistym17/YouVid",
    liveUrl: "https://you-r9xtoff8e-chisty17s-projects.vercel.app/",
  },
  {
    title: "Job-Fit",
    description: "A simple ATS checker",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/chistym17/ATS-checker-project",
    liveUrl: "http://ec2-13-60-62-91.eu-north-1.compute.amazonaws.com:3000/",
  },
];

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 px-4 md:px-8 max-w-7xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};