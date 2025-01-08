import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export const ProfileSidebar = () => {
  return (
    <div className="h-screen w-80 bg-[#241f1d] text-gray-100 p-8 border-r border-[#3b322f]/50">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-[#453a36] ring-offset-2 ring-offset-[#241f1d]">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">John Doe</h1>
          <p className="text-[#cec2bd] font-medium">Full Stack Developer</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#453a36] to-transparent" />
        
        <p className="text-sm text-[#cec2bd] text-center leading-relaxed">
          Passionate developer crafting beautiful and functional web experiences
        </p>

        <div className="flex gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-[#453a36] text-[#cec2bd] hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-[#453a36] text-[#cec2bd] hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-[#453a36] text-[#cec2bd] hover:text-white transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-[#453a36] text-[#cec2bd] hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};