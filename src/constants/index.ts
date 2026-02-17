export interface NavLink {
  id: number;
  name: string;
  type: string;
}

export interface NavIcon {
  id: number;
  img: string;
}

export interface DockApp {
  id: string;
  name: string;
  icon: string;
  canOpen: boolean;
}

export interface BlogPost {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface Social {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface PhotosLink {
  id: number;
  icon: string;
  title: string;
}

export interface GalleryItem {
  id: number;
  img: string;
}

export type FileKind = "file" | "folder";

export interface BaseItem {
  id: number;
  name: string;
  icon: string;
  kind: FileKind;
  position?: string;
  windowPosition?: string;
  // optional file-specific fields
  fileType?: "txt" | "url" | "img" | "fig" | "pdf";
  href?: string;
  imageUrl?: string;
  description?: string[];
  subtitle?: string;
}

export interface FolderItem extends BaseItem {
  kind: "folder";
  children: Array<Location | BaseItem>;
}

export interface FileItem extends BaseItem {
  kind: "file";
}

export interface Location extends FolderItem {
  type: "work" | "about" | "resume" | "trash";
}

export type LocationsMap = {
  work: Location;
  about: Location;
  resume: Location;
  trash: Location;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons: NavIcon[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps: DockApp[] = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "Feb 17, 2026",
    title: "What 6 years in enterprise React projects taught me",
    image: "/images/blog1.png",
    link: "https://www.linkedin.com/pulse/what-6-years-enterprise-react-projects-taught-me-martinez-de-jesus-xrn2e/",
  },
];

const techStack: TechCategory[] = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Next.js", "Redux"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express"],
  },
  {
    category: "Testing",
    items: ["Jest", "Cypress", "JUnit"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Database",
    items: ["PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
];

const socials: Social[] = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ludwing979",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/lud.andresmartinez/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/ludwing97andres",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ludwingandresmtz/",
  },
];

const photosLinks: PhotosLink[] = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery: GalleryItem[] = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION: Location = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Gym Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Gym Website Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project is a responsive frontend gym website built with React and deployed using GitHub Pages.",
            "It serves as a modern landing page for a fitness brand or gym, showcasing key elements like:",
            "- Eye-catching hero section",
            "- Services or training programs",
            "- Trainer introductions",
            "- Pricing plans",
            "- Contact and newsletter layout",
            "- Mobile-friendly responsive design",
            "The goal is to demonstrate practical frontend skills — including component structure, responsive layout, and React fundamentals — in a real-world UI project that could be adapted for a gym or fitness business. (Deployed live at your GitHub Pages link.)",
          ],
        },
        {
          id: 2,
          name: "ludwing_gym.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ludwing979.github.io/gym_website/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "gym.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "ReactFlix Movie App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "ReactFlix Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This is a movie discovery web application built with React on the frontend and deployed on Render. It allows users to:",
            "- Search for movies by title",
            "- View detailed movie information (poster, overview, genre, rating, release date)",
            "- Save favorites to a watchlist",
            "- Navigate interactive UI components with smooth UX",
            "The app demonstrates modern React skills including:",
            "- API integration (fetching data from a movie database)",
            "- Component-based architecture",
            "- User interaction and state management",
            "- Clean UI design with responsive layouts",
            "- Deployment to a live host",
          ],
        },
        {
          id: 2,
          name: "Reactflix.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://movie-app-pgwm.onrender.com/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "reactflix.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Summarize Articles with OpenAI API",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Summarize Articles with OpenAI API Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This is a web application that summarizes articles using the OpenAI API.",
            "It allows users to paste article URLs and receive concise summaries.",
            "The app demonstrates integration with external APIs, handling asynchronous data fetching, and building responsive UIs.",
            "It's built with React and TypeScript, showcasing modern frontend development practices.",
          ],
        },
        {
          id: 2,
          name: "summarize-articles-openai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ai-summarizer-br9c.onrender.com/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "summarize-articles-openai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION: Location = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/ludwing.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/ludwing-2.jpg",
    },
    {
      id: 3,
      name: "exercise-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/ludwing-3.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      imageUrl: "/images/ludwing.jpg",
      description: [
        "I’m a Senior Frontend Developer with 6+ years of experience building modern web applications using React, TypeScript, and JavaScript.",
        "I’ve worked on enterprise projects for companies like USAA and Nike, focusing on scalable architectures, testing, and performance.",
        "I enjoy building clean UI experiences, mentoring teammates, and continuously improving both code quality and development processes.",
      ],
    },
  ],
};

const RESUME_LOCATION: Location = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION: Location = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations: LocationsMap = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
