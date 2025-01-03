import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const ProfileSidebar = () => {
  return (
    <div className="h-screen w-64 bg-sidebar text-sidebar-foreground p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold">John Doe</h1>
        <p className="text-sm text-gray-300">Full Stack Developer</p>
        <p className="text-sm text-center text-gray-300 mt-4">
          Passionate developer crafting beautiful and functional web experiences
        </p>
        <div className="flex space-x-2 md:space-x-3 mt-6">
          <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:text-primary">
            <Github className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:text-primary">
            <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:text-primary">
            <Twitter className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:text-primary">
            <Mail className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};