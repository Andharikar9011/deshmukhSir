import { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

// TODO: Replace with actual project data from CMS or JSON file
const projects = [
  {
    id: 1,
    title: "Modern Lakeside Residence",
    location: "Lake District, UK",
    year: "2023",
    area: "3,500 sq ft",
    category: "Residential",
    tags: ["Residential", "Sustainable"],
    image: project1,
    description:
      "A contemporary family home that seamlessly integrates with its natural surroundings. The design emphasizes indoor-outdoor living with floor-to-ceiling windows and a cantilevered deck overlooking the lake.",
    role: "Lead Architects",
    collaborators: "Landscape: Green Studio, Interiors: Design Co.",
    url: "https://www.youtube.com/embed/-EFA1EKWsBo?autoplay=1&loop=1&playlist=-EFA1EKWsBo&controls=0&disablekb=1&fs=0",
  },
  {
    id: 2,
    title: "Minimalist Urban Loft",
    location: "London, UK",
    year: "2023",
    area: "2,200 sq ft",
    category: "Interior",
    tags: ["Interior", "Residential"],
    image: project2,
    description:
      "An open-plan loft conversion featuring clean lines, natural materials, and abundant natural light. The design celebrates the building's industrial heritage while introducing contemporary comfort.",
    role: "Interior Design & Renovation",
    collaborators: "Structural Engineer: Build Right",
  },
  {
    id: 3,
    title: "Tech Campus Expansion",
    location: "Manchester, UK",
    year: "2023",
    area: "45,000 sq ft",
    category: "Commercial",
    tags: ["Commercial", "Public"],
    image: project3,
    description:
      "A mixed-use development combining commercial office space with public amenities. The design prioritizes sustainability and community engagement with green roofs and ground-floor retail.",
    role: "Master Planning & Architecture",
    collaborators: "Engineering: Tech Build, Sustainability: Eco Consult",
  },
  {
    id: 4,
    title: "Sustainable Community Center",
    location: "Bristol, UK",
    year: "2022",
    area: "8,500 sq ft",
    category: "Public",
    tags: ["Public", "Sustainable"],
    image: project2,
    description:
      "A LEED Platinum certified community center designed to serve as a neighborhood hub. Features include solar panels, rainwater harvesting, and passive cooling systems.",
    role: "Architecture & Sustainability Consulting",
    collaborators: "MEP: Green Engineers",
  },
  {
    id: 5,
    title: "Coastal Villa Retreat",
    location: "Cornwall, UK",
    year: "2022",
    area: "4,200 sq ft",
    category: "Residential",
    tags: ["Residential"],
    image: project1,
    description:
      "A luxury coastal residence designed to capture panoramic ocean views. The architecture responds to the dramatic clifftop site with terraced levels and protected outdoor spaces.",
    role: "Full Architectural Services",
    collaborators: "Interiors: Coastal Design",
  },
  {
    id: 6,
    title: "Historic Building Renovation",
    location: "Edinburgh, UK",
    year: "2022",
    area: "12,000 sq ft",
    category: "Commercial",
    tags: ["Commercial", "Renovation"],
    image: project3,
    description:
      "Sensitive restoration and adaptive reuse of a Victorian warehouse into modern office space. The project preserves historic character while meeting contemporary workplace needs.",
    role: "Restoration & Adaptive Reuse",
    collaborators: "Conservation: Heritage Architects",
  }
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Renovation",
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedCategory));

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const scrollToContact = (projectTitle: string) => {
    setSelectedProject(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      // TODO: Pre-fill contact form with project title
      setTimeout(() => {
        const subjectInput = document.getElementById(
          "subject"
        ) as HTMLInputElement;
        if (subjectInput) {
          subjectInput.value = `Enquiry about ${projectTitle}`;
        }
      }, 500);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-secondary"
      style={{ paddingTop: "0rem" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProjects(6);
                }}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-accent hover:bg-accent/90"
                    : "hover:bg-secondary"
                }
                aria-pressed={selectedCategory === category}
              >
                <span className="font-body">{category}</span>
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedProject(project);
                  }
                }}
                className="group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description.substring(
                      0,
                      100
                    )}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-primary-foreground">
                      <p className="text-sm mb-1">
                        {project.location} • {project.year}
                      </p>
                      <p className="text-xs">{project.area}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div className="text-center">
              <Button
                onClick={() => setVisibleProjects((prev) => prev + 6)}
                variant="outline"
                size="lg"
                className="hover:bg-secondary"
              >
                Load More Projects
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => {
          setSelectedProject(null);
          setIsVideoPlaying(false); // Add this line to reset video on close
        }}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto p-0">
          {selectedProject && (
            <div>
              {/* Project Image */}
              {/* <div
                className="relative aspect-video bg-muted cursor-pointer group"
                // On click, we switch to video mode instead of lightbox
                onClick={() => setIsVideoPlaying(true)}
                role="button"
                tabIndex={0}
              >
                {isVideoPlaying ? (
                  // <iframe
                  //   width="100%"
                  //   height="100%"
                  //   // This ID (-EFA1EKWsBo) is from the link you provided.
                  //   // autoplay=1 makes it start immediately.
                  //   src="https://www.youtube.com/embed/-EFA1EKWsBo?autoplay=1"
                  //   title="YouTube video player"
                  //   frameBorder="0"
                  //   // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  //   allow="accelerometer; gyroscope; picture-in-picture"
                  //   allowFullScreen
                  //   className="w-full h-full"
                  // ></iframe>
                  <iframe
                    width="100%"
                    height="100%"
                    // 1. controls=0: Hides the bottom player bar
                    // 2. disablekb=1: Disables keyboard shortcuts (space to pause, arrows to skip)
                    // 3. fs=0: Hides the fullscreen button
                    src="https://www.youtube.com/embed/-EFA1EKWsBo?autoplay=1&loop=1&playlist=-EFA1EKWsBo&controls=0&disablekb=1&fs=0"
                    // src={vid1}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    // Removed allowFullScreen since you don't want them to do anything

                    // pointer-events-none: This effectively disables ALL mouse interaction (clicking to pause/play)
                    className="w-full h-full pointer-events-none"
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} - detailed view`}
                      className="w-full h-full object-cover"
                    />
                    {/* Optional: Add a Play Icon overlay so user knows to click // tap to play video 
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                        <ArrowRight className="w-8 h-8 text-white fill-current" />
                      </div>
                    </div>
                  </>
                )}
              </div> */}
              <div className="relative aspect-video bg-muted">
                <iframe
                  width="100%"
                  height="100%"
                  // 1. autoplay=1: Starts video immediately on load
                  // 2. loop=1 & playlist: Ensures it loops forever
                  // 3. controls=0/disablekb=1/fs=0: Hides all controls
                  src="https://www.youtube.com/embed/02sJDS60ysE?autoplay=1&loop=1&playlist=02sJDS60ysE&controls=0&disablekb=1&fs=0"
                  // src="https://www.youtube.com/embed/02sJDS60ysE?autoplay=1&loop=1&playlist=02sJDS60ysE"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; "
                  // pointer-events-none: Prevents clicking to pause
                  className="w-full h-full pointer-events-none"
                ></iframe>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-3xl font-serif font-semibold mb-4">
                  {selectedProject.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Location</p>
                    <p className="font-medium">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Year</p>
                    <p className="font-medium">{selectedProject.year}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Area</p>
                    <p className="font-medium">{selectedProject.area}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Role</p>
                    <p className="font-medium">{selectedProject.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Collaborators
                  </p>
                  <p className="text-sm">{selectedProject.collaborators}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="group">
                    <Download className="mr-2 h-4 w-4" />
                    Download Case Study
                    {/* TODO: Link to actual PDF */}
                  </Button>
                  <Button
                    onClick={() => scrollToContact(selectedProject.title)}
                    className="bg-accent hover:bg-accent/90 group"
                  >
                    Enquire About This Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                {/* --- NEW GALLERY SECTION STARTS HERE --- */}
                <div className="mt-10 pt-8 w-[calc(85vw-2.5rem)] mx-auto border-t border-border">
                  <h4 className="text-lg font-semibold mb-4">Project Gallery</h4>
                  
                  {/* Horizontal Scroll Container */}
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                    {/* We are mapping a dummy array to simulate a gallery. 
                        Replace [project1, project2, project3, project1, project2] 
                        with selectedProject.galleryImages in the future */}
                    {[project1, project2, project3, project1, project2 , project2, project3, project1, project2].map((img, index) => (
                      <div 
                        key={index} 
                        className="flex-none w-60 h-40 relative rounded-md overflow-hidden snap-center cursor-pointer hover:opacity-90 transition-opacity"
                        // Optional: logic to change the main view when clicked
                        // onClick={() => handleGalleryClick(img)} 
                      >
                        <img
                          src={img}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsLightboxOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setIsLightboxOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={0}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
