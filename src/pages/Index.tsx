import { ProfileSidebar } from "@/components/ProfileSidebar";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Experience } from "@/components/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary">
      {isMobile && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-sidebar rounded-md text-sidebar-foreground"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}
      <div
        className={`${
          isMobile
            ? `fixed inset-y-0 left-0 z-40 transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out`
            : "fixed"
        }`}
      >
        <ProfileSidebar />
      </div>
      <main
        className={`${
          isMobile ? "ml-0 pt-16" : "ml-64"
        } min-h-screen transition-all duration-300`}
      >
        <div className="p-4 md:p-8">
          <Tabs defaultValue="projects" className="w-full flex flex-col items-center">
            <TabsList className="mb-8 p-1 text-lg">
              <TabsTrigger value="projects" className="px-8 py-3 text-lg">Projects</TabsTrigger>
              <TabsTrigger value="experience" className="px-8 py-3 text-lg">Experience</TabsTrigger>
            </TabsList>
            <div className="w-full max-w-7xl mx-auto">
              <TabsContent value="projects" className="mt-6">
                <h2 className="text-3xl font-bold mb-8 text-secondary-foreground">My Projects</h2>
                <ProjectGrid />
              </TabsContent>
              <TabsContent value="experience" className="mt-6">
                <h2 className="text-3xl font-bold mb-8 text-secondary-foreground">My Experience</h2>
                <Experience />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;