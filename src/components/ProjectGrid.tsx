import { ProjectCard } from "./ProjectCard";
import { useState } from "react";

const projects = {
  fullstack: [
    {
      title: "Stay-Vista",
      description: "A travel booking website",
      image: "/vista.jpeg",
      technologies: ["React", "Tailwind CSS", "Nodejs", "MongoDB", "Express"],
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
      title: "Task Manager",
      description: "A collaborative task management platform",
      image: "/task-manager.jpeg",
      technologies: ["React", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://task-manager-demo.vercel.app",
    },
    {
      title: "E-Learning Platform",
      description: "An interactive learning management system",
      image: "/elearning.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/yourusername/elearning",
      liveUrl: "https://elearning-demo.vercel.app",
    }
  ],
  mlmodels: [
    {
      title: "ANN Model",
      description: "A simple ANN model",
      image: "/ml/ann.png",
      technologies: ["Python", "TensorFlow", "Streamlit"],
      githubUrl: "https://github.com/chistym17/ANN-implementation",
      liveUrl: "https://ann-implementation.streamlit.app",
    },
    {
      title: "Image Classifier",
      description: "CNN implementation for image classification",
      image: "/classifier.jpeg",
      technologies: ["Python", "PyTorch", "OpenCV"],
      githubUrl: "https://github.com/yourusername/image-classifier",
      liveUrl: "https://classifier-demo.herokuapp.com",
    }
  ],
  prototypes: [
    {
      title: "CLI Task Manager",
      description: "Command-line productivity tool",
      image: "/cli-tool.jpeg",
      technologies: ["Python", "Click", "SQLite"],
      githubUrl: "https://github.com/yourusername/cli-task-manager",
      liveUrl: "https://www.npmjs.com/package/cli-task-manager",
    },
    {
      title: "Redis Cache Implementation",
      description: "Custom caching system prototype",
      image: "/redis-proto.jpeg",
      technologies: ["Node.js", "Redis", "Express"],
      githubUrl: "https://github.com/yourusername/redis-cache-proto",
      liveUrl: "https://redis-proto-demo.herokuapp.com",
    }
  ],
};

const categories = {
  fullstack: "Full-Stack Applications",
  mlmodels: "ML Model Implementations",
  prototypes: "Prototypes & System Design",
};

export const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof projects>("fullstack");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as keyof typeof projects)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {projects[activeCategory].map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};