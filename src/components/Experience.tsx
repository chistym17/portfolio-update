import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Full Stack Developer (Intern)",
    company: "MindtideAI",
    period: "October 2024 - Present",
    description: [
      "Led the development of third-party integrations for SiteBot (AI Chatbot), successfully implementing Zendesk, Zoho, and Google Chat integrations",
      "Enhanced crawler performance by optimizing sitemap fetching and implementing support for both static and dynamic websites",
      "Architected and implemented AI agents workflow to improve chatbot response quality and follow-up question capabilities",
      "Developed specialized chatbot variants for lead generation and sales automation",
      "Designed and built responsive integration interfaces and customizable bot appearance settings",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="grid gap-6 p-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="animate-fade-in border border-zinc-800 bg-zinc-900/50">
          <CardHeader className="space-y-4">
            <div className="space-y-1">
              <CardTitle className="text-xl font-bold text-white">
                {exp.title}
              </CardTitle>
              <div className="text-sm text-white font-medium">
                {exp.company} • {exp.period}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-300">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};