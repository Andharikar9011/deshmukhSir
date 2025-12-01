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
import project1 from "../../public/project-1.jpg";
import project2 from "../../public/project-2.jpg";
import project3 from "../../public/project-3.jpg";
import vinayk from "../../public/vinayaak_01.jpg";

const projects_temp = [
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
    "id": 1,
    "title": "VINAYAK DEVELOPERS",
    "location": "TALEGAON DABHADE, MAVAL, PUNE.",
    "year": "",
    "area": "Plot: 474 SQ.M\nBUILT | Built-up: 1059.52 SQ.M\nCARPET AREA | Carpet: 918 SQ.M\nADDRESS",
    "category": "commercial",
    "tags": ["commercial","interior"],
    "image": vinayk,
    "description": "",
    "role": "Lead Architects",
    "collaborators": "Architects: Acumen Architects, Interiors: Acumen Architects",
    "url": "",
    "photos": [vinayk]
  },
  {
    "id": 2,
    "title": "MR.KISHORE JADHAV(SWASTIK 6.75R)",
    "location": "LAXMIBAUG COLONY AT TALEGAON DABHADE, TALUKA MAVAL, DISTRICT PUNE.",
    "year": "",
    "area": "Plot: 628.52 SQ.M\nBUILT | Built-up: 1550.05 SQ.M\nCARPET AREA | Carpet: 1256.80 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 3,
    "title": "AKSHAY ASHOK RUDRAKSHA(SAITWAL)",
    "location": "KHARADI, PUNE.",
    "year": "",
    "area": "Plot: 232.34 SQ.M\nBUILT | Built-up: 248.98 SQ.M\nCARPET AREA | Carpet: 126.84 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 4,
    "title": "MR. NARAYAN SHINDE AND MR.PRADAN GAYAKWAD",
    "location": "OF BUILDING  IN S NO. 35/3, VILLAGE – BHUGAON, TAL.- MULSHI, DIST.- PUNE",
    "year": "",
    "area": "Plot: 1302.77\nBUILT | Built-up: 1300\nCARPET AREA | Carpet: 962.3\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 5,
    "title": "MR. NARAYAN SHINDE AND MR.PRADAN GAYAKWAD",
    "location": "OF BUILDING  IN S NO. 35/3, VILLAGE – BHUGAON, TAL.- MULSHI, DIST.- PUNE",
    "year": "",
    "area": "Plot: 1302.77\nBUILT | Built-up: 1300\nCARPET AREA | Carpet: 962.3\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 6,
    "title": "PRADEEP R. RASTOGI",
    "location": "DHANORI, TALUKA HAVELI, DIST. PUNE.",
    "year": "",
    "area": "Plot: 269.02 SQ.M\nBUILT | Built-up: 358.04 SQ.M\nCARPET AREA | Carpet: 238.36 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 7,
    "title": "TARA PANDEY",
    "location": "DHANORI, TALUKA HAVELI, DIST. PUNE.",
    "year": "",
    "area": "Plot: 284.98 SQ.M\nBUILT | Built-up: 315.87 SQ.M\nCARPET AREA | Carpet: 296.13 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 8,
    "title": "PANKAJ GARIBE",
    "location": "RAJARAM PATIL NAGAR, KHARADI,PUNE",
    "year": "",
    "area": "Plot: 297 SQ.M\nBUILT | Built-up: 495.41 SQ.M\nCARPET AREA | Carpet: 147.72 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 9,
    "title": "MOHAN PURANDARE",
    "location": "KHED SHIVAPUR, TAL-HAVELI, DIST-PUNE",
    "year": "",
    "area": "Plot: 800 SQ.M\nBUILT | Built-up: 558.48 SQ.M\nCARPET AREA | Carpet: 547.23 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "“A fresh, modern apartment building featuring crisp white façades and soft pastel balconies, creating a light and airy look. Its clean lines, generous windows, and orderly terraces give it a bright, contemporary charm perfect for comfortable urban living.”",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 10,
    "title": "KAILASH  F..INGALE & ASHWINI K.  INGALE",
    "location": "Plot No:B-34 Revenue S.No: 15/1+15/2,Final Plot No:B-34 Mauje DHANORI Society B.U. BHANDHARI  GREENS CO.OP.HOUSING SOC.LTD",
    "year": "",
    "area": "Plot: 193.5 SQ .M\nBUILT | Built-up: 212.85 SQ.M\nCARPET AREA | Carpet: 247.17 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 11,
    "title": "GOHIL /R.B GROUP",
    "location": "YERWADA, TALUKA HAVELI, DIST. PUNE.",
    "year": "",
    "area": "Plot: 385.71 SQ.M\nBUILT | Built-up: 347.14 SQ.M\nCARPET AREA | Carpet: 335.9 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 12,
    "title": "RAJASHREE  M. GHADGE",
    "location": "DHANORI, TALUKA HAVELI, DIST. PUNE",
    "year": "",
    "area": "Plot: 293.67 SQ.M\nBUILT | Built-up: 227.86 SQ.M\nCARPET AREA | Carpet: 219.43 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 13,
    "title": "MANGESH THORAT",
    "location": "KADAMVAKVASTI  ,TAL-HAVELI-DIST-PUNE",
    "year": "",
    "area": "Plot: 5500 SQ.M\nBUILT | Built-up: 6113.05 SQ.M\nCARPET AREA | Carpet: 6084.95 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 14,
    "title": "DEEPAK CHAVAN",
    "location": "B.U.BHANDARI GREENS CO. OP. SOCIETY KONDHWA, TALUKA HAVELI, DIST. PUNE.",
    "year": "",
    "area": "Plot: 183.75 SQ.M\nBUILT | Built-up: 199.43 SQ.M\nCARPET AREA | Carpet: 187.14 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "\"A crisp modern apartment with clean cubic forms and airy glass balconies, crafted to feel both stylish and tranquil—nestled seamlessly within lush green surroundings.”",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 15,
    "title": "ARVIND BANSODE",
    "location": "DHANORI, TALUKA HAVELI, DIST. PUNE.",
    "year": "",
    "area": "Plot: 455 SQ.M\nBUILT | Built-up: 447.26 SQ.M\nCARPET AREA | Carpet: 435.70 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "“A vibrant contemporary residence defined by bold geometric frames and dynamic color blocks. Its playful façade and deep-cut balconies create a striking architectural rhythm, offering modern living with a confident, artistic edge.”",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 16,
    "title": "AKASHDEEP",
    "location": "BHOSALE NAGAR, PUNE 411007",
    "year": "",
    "area": "Plot: 590.79 SQ.M\nBUILT | Built-up: 2490 SQ.M\nCARPET AREA | Carpet: 2377.50 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 17,
    "title": "A18",
    "location": "BORDER ROAD COOPERATIVE HOUSING SOCIETY AT VILLAGE DHANORI EXT, PUNE, TALUKA HAVELI, DISTRICT PUNE",
    "year": "",
    "area": "Plot: 473.92 SQ.M\nBUILT | Built-up: 692.40 SQ.M\nCARPET AREA | Carpet: 681.15 SQ.M\nADDRESS",
    "category": "",
    "tags": [],
    "image": "",
    "description": "“A sleek minimalist apartment block defined by clean white geometry and warm recessed accents. Its subtle vertical fins and deep-set balconies create a calm, elegant rhythm, offering residents a modern retreat surrounded by open green views.”",
    "role": "",
    "collaborators": "",
    "url": "",
    "photos": [
      "pho1",
      "pho2"
    ]
  },
  {
    "id": 18,
    "title": "A16",
    "location": "BORDER ROAD COOPERATIVE HOUSING SOCIETY AT VILLAGE DHANORI EXT, PUNE, TALUKA HAVELI, DISTRICT PUNE",
    "year": "2023",
    "area": "Plot: 473.92 SQ.M\nBUILT | Built-up: 599.20 SQ.M\nCARPET AREA | Carpet: 587.24 SQ.M",
    "category": "Commercial",
    "tags": ["Commercial", "Sustainable"],
    "image": "",
    "description": "“A modern multi-residential apartment crafted with clean geometric lines and warm, textured materials. The façade blends contemporary red cladding with stone accents, creating a bold yet inviting presence. Expansive balconies on every level encourage open-air living, while large windows flood each unit with natural light. Elevated on a landscaped plinth, the structure feels airy and connected to its lush surroundings—offering residents a serene, spacious, and thoughtfully designed place to call home.”",
    "role": "Lead Architects",
    "collaborators": "Architects: Acumen Architects, Interiors: Acumen Architects",
    "url": "https://www.youtube.com/embed/yfHBtRWFo6w?si=Is9hS9_D0rHQSViz&autoplay=1&loop=1&playlist=-EFA1EKWsBo&controls=0&disablekb=1&fs=0",
    "photos": [
      project1,
      project2
    ]
  }
]
// TODO: Replace with actual project data from CMS or JSON file
const projects = [
  {
    "id": 1,
    "title": "VINAYAK DEVELOPERS",
    "location": "TALEGAON DABHADE, MAVAL, PUNE.",
    "year": "",
    "area": "Plot: 474 SQ.M | Built-up Area: 1059.52 SQ.M | Carpet Area: 918 SQ.M",
    "category": "commercial",
    "tags": ["commercial","interior"],
    "image": vinayk,
    "description": "",
    "role": "Lead Architects",
    "collaborators": "Architects: Acumen Architects, Interiors: Acumen Architects",
    "url": "",
    "photos": [vinayk]
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
  },
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
                {/* --- NEW GALLERY SECTION STARTS HERE (LIGHTBOX ENABLED) --- */}
                <div className="mt-10 pt-8 w-[calc(82vw-2.5rem)] mx-auto border-t border-border">
                  <h4 className="text-lg font-semibold mb-4">
                    Project Gallery
                  </h4>

                  {/* Thumbnails */}
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                    {selectedProject.photos.map((img, index) => (
                      <div
                        key={index}
                        className="flex-none w-60 h-40 relative rounded-md overflow-hidden snap-center cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => {
                          setLightboxImages(selectedProject.photos)
                          openLightbox(index)
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
