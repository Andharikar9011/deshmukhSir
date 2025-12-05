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
import vinayk from "../../public/vinayaak_01.jpg";
import A16_01 from "../../public/A16_01.jpg";
import A16_02 from "../../public/A16_02.jpg";
import A18_01 from "../../public/A18_01.jpg";
import A18_02 from "../../public/A18_02.jpg";
import AKD_01 from "../../public/Akashdeep_01.jpg";
import AB_01 from "../../public/arvindbansode_01.jpg";
import DC_01 from "../../public/deepakchavan_01.png";
import DR_01 from "../../public/rivera_01.png";
import GD_01 from "../../public/ghadge_01.jpg";
import GO_01 from "../../public/gohil_01.jpg";
import KI_01 from "../../public/kailasIngle_01.png";

// TODO: Replace with actual project data from CMS or JSON file
const projects = [
  {
    id: 1,
    title: "VINAYAK DEVELOPERS",
    location: "TALEGAON DABHADE, MAVAL, PUNE.",
    year: "2025",
    area: "Plot: 474 SQ.M | Built-up Area: 1059.52 SQ.M | Carpet Area: 918 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "interior"],
    image: vinayk,
    description: "",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "",
    photos: [vinayk],
  },
  {
    id: 2,
    title: "A16",
    location: " DHANORI EXT, HAVELI, PUNE",
    year: "2023",
    area: "Plot: 473.92 SQ.M | Built-up Area: 599.20 SQ.M | Carpet Area: 587.24 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: A16_02,
    description:
      "“A modern multi-residential apartment crafted with clean geometric lines and warm, textured materials. The façade blends contemporary red cladding with stone accents, creating a bold yet inviting presence. Expansive balconies on every level encourage open-air living, while large windows flood each unit with natural light. Elevated on a landscaped plinth, the structure feels airy and connected to its lush surroundings—offering residents a serene, spacious, and thoughtfully designed place to call home.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/yfHBtRWFo6w?playlist=yfHBtRWFo6w&autoplay=1&loop=1&controls=0&disablekb=1&fs=0",
    photos: [A16_01, A16_02],
  },
  {
    id: 3,
    title: "A18",
    location: " DHANORI EXT, HAVELI, PUNE",
    year: "2024",
    area: "Plot: 473.92 SQ.M | Built-up Area: 692.40 SQ.M | Carpet Area: 681.15 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: A18_02,
    description:
      "“A sleek minimalist apartment block defined by clean white geometry and warm recessed accents. Its subtle vertical fins and deep-set balconies create a calm, elegant rhythm, offering residents a modern retreat surrounded by open green views.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/KVFcIa143II?autoplay=1&loop=1&playlist=KVFcIa143II&controls=0&disablekb=1&fs=0",
    photos: [A18_01, A18_02],
  },
  {
    id: 4,
    title: "AKASHDEEP",
    location: "BHOSALE NAGAR, PUNE",
    year: "2025",
    area: "Plot: 590.79 SQ.M | Built-up Area: 2490 SQ.M | Carpet Area: 2377.50 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: AKD_01,
    description:
      "“A striking high-rise with bold vertical lines and warm, glowing balconies, this modern tower brings a sleek urban elegance to the skyline—designed for refined living with a dramatic nighttime presence.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/WErUeZzhQMk?autoplay=1&loop=1&playlist=WErUeZzhQMk&controls=0&disablekb=1&fs=0",
    photos: [AKD_01],
  },
  {
    id: 5,
    title: "ARVIND BANSODE",
    location: "DHANORI, HAVELI, PUNE.",
    year: "2024",
    area: "Plot: 455 SQ.M | Built-up Area: 447.26 SQ.M | Carpet Area: 435.70 SQ.M ",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: AB_01,
    description:
      "“A vibrant contemporary residence defined by bold geometric frames and dynamic color blocks. Its playful façade and deep-cut balconies create a striking architectural rhythm, offering modern living with a confident, artistic edge.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/Ry2EEnXAUUY?autoplay=1&loop=1&playlist=Ry2EEnXAUUY&controls=0&disablekb=1&fs=0",
    photos: [AB_01],
  },
  {
    id: 6,
    title: "DEEPAK CHAVAN",
    location: "KONDHWA, HAVELI, PUNE",
    year: "2025",
    area: "Plot: 183.75 SQ.M | Built-up Area: 199.43 SQ.M | Carpet Area: 187.14 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: DC_01,
    description:
      "A crisp modern apartment with clean cubic forms and airy glass balconies, crafted to feel both stylish and tranquil—nestled seamlessly within lush green surroundings.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/jcGKlQOj6Hs?autoplay=1&loop=1&playlist=jcGKlQOj6Hs&controls=0&disablekb=1&fs=0",
    photos: [DC_01],
  },
  {
    id: 7,
    title: "DREAM’S RIVIERA",
    location: "KADAMVAKVASTI ,HAVELI ,PUNE",
    year: "2025",
    area: "Plot: 5500 SQ.M| Built-up Area: 6113.05 SQ.M| Carpet Area: 6084.95 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: DR_01,
    description:
      "“A sleek modern residential block defined by clean lines, repeating balconies, and a bold framed façade—designed to offer bright, airy living with a refreshing sense of openness.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/qi8E6WT4cd4?autoplay=1&loop=1&playlist=qi8E6WT4cd4&controls=0&disablekb=1&fs=0",
    photos: [DR_01],
  },
  {
    id: 8,
    title: "RAJASHREE  M. GHADGE",
    location: "DHANORI, HAVELI, PUNE",
    year: "2025",
    area: "Plot: 293.67 SQ.M | Built-up Area: 227.86 SQ.M | Carpet Area: 219.43 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: GD_01,
    description:
      "“A modern low-rise apartment combining beige stone-finish walls with a bold brick façade, featuring spacious glass balconies and a clean, minimal architectural profile.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/18T7IYfdYco?autoplay=1&loop=1&playlist=18T7IYfdYco&controls=0&disablekb=1&fs=0",
    photos: [GD_01],
  },
  {
    id: 9,
    title: "GOHIL /R.B GROUP",
    location: "YERWADA, HAVELI, PUNE.",
    year: "2023",
    area: "Plot: 385.71 SQ.M | Built-up Area: 347.14 SQ.M | Carpet Area: 335.9 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: GO_01,
    description:
      "“A bold modern apartment defined by its striking black-and-white façade, deep balconies, and crisp geometric lines—crafted to stand out while blending seamlessly with the open green surroundings.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/-PjELgAWl3I?autoplay=1&loop=1&playlist=-PjELgAWl3I&controls=0&disablekb=1&fs=0",
    photos: [GO_01],
  },
  {
    id: 10,
    title: "KAILASH  F..INGALE & ASHWINI K.  INGALE",
    location: "DHANORI , PUNE",
    year: "2025",
    area: "Plot: 193.5 SQ .M | Built-up Area: 212.85 SQ.M | Carpet Area: 247.17 SQ.M",
    category: "Appartments",
    tags: ["Appartments", "Sustainable"],
    image: KI_01,
    description:
      "“A vibrant modern residence accented with warm terracotta tones and elegant jali work, balanced by clean white balconies and lush green surroundings—offering a stylish, inviting, and contemporary urban charm.”",
    role: "Lead Architects",
    collaborators:
      "Architects: Acumen Architects, Interiors: Acumen Architects",
    url: "https://www.youtube.com/embed/c9cHUY0GHCk?autoplay=1&loop=1&playlist=c9cHUY0GHCk&controls=0&disablekb=1&fs=0",
    photos: [KI_01],
  },
];

const categories = ["All", "Bunglow", "Appartments", "Redevelopment"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
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

  // keep the same image array used by the thumbnails
  // const lightboxImages = [
  //   project1,
  //   project2,
  //   project3,
  //   project1,
  //   project2,
  //   project2,
  //   project3,
  //   project1,
  //   project2,
  // ];

  // open at index
  function openLightbox(index: number) {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    // focus the modal for keyboard events
    setTimeout(() => {
      const el = document.activeElement as HTMLElement | null;
      if (el?.blur) el.blur();
      // the modal div is focusable (tabIndex={0}) so focus it
      const modal = document.querySelector(
        '[role="dialog"]'
      ) as HTMLElement | null;
      modal?.focus();
    }, 0);
  }

  function closeLightbox() {
    setIsLightboxOpen(false);
  }

  function nextImage() {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  }

  function prevImage() {
    setCurrentImageIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );
  }

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
              <div className="relative aspect-video bg-muted overflow-hidden">
                {/* If video exists, show as first slide */}
                {selectedProject.url && currentImageIndex === 0 && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedProject.url}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    className="w-full h-full"
                  ></iframe>
                )}

                {/* Images follow after the video (if video exists) */}
                {(!selectedProject.url &&
                  selectedProject.photos[currentImageIndex]) ||
                (selectedProject.url && currentImageIndex > 0) ? (
                  <img
                    src={
                      selectedProject.url
                        ? selectedProject.photos[currentImageIndex - 1]
                        : selectedProject.photos[currentImageIndex]
                    }
                    alt="Project visual"
                    className="w-full h-full object-cover"
                  />
                ) : null}

                {/* Prev Button */}
                <button
                  onClick={() => {
                    const totalSlides = selectedProject.url
                      ? selectedProject.photos.length + 1 // video + images
                      : selectedProject.photos.length;
                    setCurrentImageIndex(
                      (prev) => (prev - 1 + totalSlides) % totalSlides
                    );
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
                >
                  <ChevronLeft className="text-white w-6 h-6" />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => {
                    const totalSlides = selectedProject.url
                      ? selectedProject.photos.length + 1
                      : selectedProject.photos.length;
                    setCurrentImageIndex((prev) => (prev + 1) % totalSlides);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
                >
                  <ChevronRight className="text-white w-6 h-6" />
                </button>
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
                  </Button>
                  <Button
                    onClick={() => scrollToContact(selectedProject.title)}
                    className="bg-accent hover:bg-accent/90 group"
                  >
                    Enquire About This Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                <div className="mt-10 pt-8 w-[calc(82vw-2.5rem)] mx-auto border-t border-border">
                  <h4 className="text-lg font-semibold mb-4">
                    Project Gallery
                  </h4>

                  {selectedProject.photos &&
                  selectedProject.photos.length > 0 ? (
                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                      {selectedProject.photos.map((img, index) => (
                        <div
                          key={index}
                          className="flex-none w-60 h-40 relative rounded-md overflow-hidden snap-center cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => {
                            if (selectedProject.url) {
                              setCurrentImageIndex(index + 1);
                            } else {
                              setCurrentImageIndex(index);
                            }
                          }}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                              openLightbox(index);
                          }}
                          aria-label={`Open image ${index + 1} in full screen`}
                        >
                          <img
                            src={img}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          {/* --- LIGHTBOX (full-screen modal) --- */}
          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
              role="dialog"
              aria-modal="true"
              aria-label="Image viewer"
              onClick={(e) => {
                if (e.target === e.currentTarget) closeLightbox();
              }}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (e.key === "Escape") closeLightbox();
                if (e.key === "ArrowRight") nextImage();
                if (e.key === "ArrowLeft") prevImage();
              }}
              tabIndex={0}
            >
              {/* Close Button (top-right) */}
              <button
                onClick={closeLightbox}
                aria-label="Close image viewer"
                className="absolute top-6 right-6 z-40 rounded-full bg-white/10 hover:bg-white/20 p-2"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
                className="absolute left-6 z-40 rounded-full bg-white/10 hover:bg-white/20 p-2"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
                className="absolute right-6 z-40 rounded-full bg-white/10 hover:bg-white/20 p-2"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>

              {/* Image container */}
              <div className="max-w-[100vw] max-h-[100vh] flex items-center justify-center">
                <img
                  src={lightboxImages[currentImageIndex]}
                  alt={`Full-screen image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-md shadow-lg"
                  onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking image
                />
              </div>

              {/* optional caption / counter */}
              <div className="absolute bottom-8 text-sm text-white/80">
                {currentImageIndex + 1} / {lightboxImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
