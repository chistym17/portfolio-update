import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2020 - Present",
    description: "Led development of enterprise applications using React and Node.js. Managed team of 5 developers and implemented CI/CD pipelines.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2018 - 2020",
    description: "Developed and maintained multiple web applications. Worked with React, TypeScript, and AWS services.",
  },
  {
    title: "Frontend Developer",
    company: "WebTech Studios",
    period: "2016 - 2018",
    description: "Created responsive web interfaces using React and Redux. Collaborated with UX designers to implement pixel-perfect designs.",
  },
];

export const Experience = () => {
  return (
    <div className="grid gap-6 p-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
            <div className="text-sm text-muted-foreground">
              {exp.company} • {exp.period}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-secondary-foreground">{exp.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};