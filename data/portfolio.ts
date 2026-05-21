// ============================================================
// portfolio.ts — Site-wide configuration & personal data
// src/data/portfolio.ts
// ============================================================

// ─── Interfaces ─────────────────────────────────────────────

export interface Personal {
  name: string
  title: string
  subtitle: string
  description: string
  location: string
  email: string
  phone?: string
  avatar: string
  resume: string
}

export interface Links {
  github: string
  linkedin: string
  googleScholar: string
  ieee: string
  email: string
  kaggle: string
}

export interface Education {
  degree: string
  institution: string
  shortName: string
  location: string
  duration: string
  cgpa: number | null
}

export interface Stat {
  id: string
  value: string
  label: string
}

export interface Role {
  id: string
  title: string
  organization: string
  description: string
  category: string
}

export interface About {
  intro: string[]
  focusAreas: string[]
  roles: Role[]
}

export interface SkillItem {
  name: string
  icon: string | null
}

export interface SkillCategory {
  category: string
  items: SkillItem[]
}

export interface Publication {
  id: string
  title: string
  venue: string
  year: number
  authors: string[]
  doi: string
  url: string
  abstract: string
}

export type AchievementPlace = "1st" | "2nd" | "3rd" | "Best" | "Top 15" | string

export interface Achievement {
  id: string
  year: string
  title: string
  organization: string
  description: string
  certificateUrl: string
  place: AchievementPlace
}

export interface NavItem {
  label: string
  href: string
}

export interface SEO {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  siteUrl: string
}

export interface Portfolio {
  personal: Personal
  links: Links
  education: Education
  stats: Stat[]
  about: About
  skills: SkillCategory[]
  featuredProjectIds: string[]
  publications: Publication[]
  achievements: Achievement[]
  nav: NavItem[]
  seo: SEO
}

// ─── Data ────────────────────────────────────────────────────

export const portfolio: Portfolio = {
  personal: {
    name: "Shivam Shetty",
    title: "AI / Machine Learning Engineer",
    subtitle: "Full-Stack AI Systems Developer",
    description:
      "Building intelligent systems using machine learning, geospatial data processing, and scalable web applications.",
    location: "Udupi, Karnataka, India",
    email: "shettyshivam209@gmail.com",
    avatar: "/assets/images/avatar.jpg",
    resume: "/assets/resume/shivam_shetty_resume.pdf",
  },

  links: {
    github: "https://github.com/SHETTYSHIVAM",
    linkedin: "https://www.linkedin.com/in/shivam-shetty-3674b4301",
    googleScholar: "https://scholar.google.com/citations?user=eFH0EUcAAAAJ",
    ieee: "https://ieeexplore.ieee.org/author/112959628809695",
    email: "mailto:shettyshivam209@gmail.com",
    kaggle: "https://www.kaggle.com/shivamshetty"
  },

  education: {
    degree: "B.E. in Artificial Intelligence and Machine Learning",
    institution: "Shri Madhwa Vadiraja Institute of Technology",
    shortName: "SMVIT",
    location: "Udupi, Karnataka",
    duration: "2023 – 2027",
    cgpa: null,
  },

  stats: [
    { id: "projects", value: "5+", label: "Projects Built" },
    { id: "publication", value: "1", label: "IEEE Publication" },
    { id: "hackathons", value: "4", label: "Hackathon Wins" },
    { id: "dataset", value: "3k+", label: "Dataset Images" },
    { id: "users", value: "120+", label: "Users Served" },
    { id: "eureka", value: "Top 15", label: "IEEE Eu-Reka 2025" },
  ],

  about: {
    intro: [
      "AI/ML undergraduate at SMVIT, Udupi, focused on building real-world intelligent systems — not just models, but complete end-to-end pipelines that go from raw satellite imagery or camera frames to deployed APIs and user-facing applications.",
      "I work at the intersection of machine learning research and systems engineering. Whether it's processing ERA5 meteorological datasets for forest fire prediction, training U-Net models for medical imaging, or deploying containerized inference APIs, I care about production-grade correctness.",
      "IEEE-published researcher. Hackathon winner. Builder.",
    ],
    focusAreas: [
      "Computer Vision",
      "Geospatial Machine Learning",
      "Medical Imaging",
      "AI for Agriculture",
      "Full-Stack ML Systems",
    ],
    roles: [
      {
        id: "aikya",
        title: "Technical Lead",
        organization: "Aikya Club",
        description:
          "Overseeing peer learning sessions, technical workshops, and student-led engineering events.",
        category: "Leadership",
      }
    ],
  },

  skills: [
    {
      category: "AI / Machine Learning",
      items: [
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
        { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
        { name: "Keras", icon: "https://cdn.simpleicons.org/keras" },
        { name: "scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
        { name: "YOLO", icon: "https://cdn.prod.website-files.com/680a070c3b99253410dd3dcf/68e4ec2bdb0747b7b58b1397_Ultralytics%20YOLO-Icon.svg" },
      ],
    },
    {
      category: "Data Engineering",
      items: [
        { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
        { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
        { name: "Matplotlib", icon: "https://matplotlib.org/3.5.0/_images/sphx_glr_logos2_001_2_0x.png" },
        { name: "Seaborn", icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
        { name: "GDAL", icon: "https://www.osgeo.org/wp-content/uploads//gdal-2-380x380.png" },
        { name: "RasterIO", icon: "https://raw.githubusercontent.com/rasterio/rasterio/5d7a6a4c7a1fafd6906509ee6347c2984f0e6e75/docs/img/rasterio_logo.svg" },
        { name: "Xarray", icon: "https://xarray.dev/Xarray-assets/RGB/Xarray_Logo_RGB_Final.svg" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi" },
        { name: "Django", icon: "https://cdn.simpleicons.org/django" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express" },
        { name: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit" },
        { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
      ],
    },
    {
      category: "Databases & Cloud",
      items: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
        { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
        { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
      ],
    },
    {
      category: "Languages",
      items: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "SQL", icon: "https://cdn.simpleicons.org/mysql" },
      ],
    },
    {
      category: "Specialized Tools",
      items: [
        { name: "Unity", icon: "https://cdn.simpleicons.org/unity" },
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git" },
        { name: "Roboflow", icon: "/roboflow.png" },
      ],
    },
  ],

  featuredProjectIds: [
    "medical-image-segmentation",
    "khandava-forest-fire",
    "coffee-ripeness-detection",
    "department-voting-platform",
  ],

  publications: [
    {
      id: "steam-ar-vr-2026",
      title:
        "Enhancing STEAM Education Using Virtual Technologies: An Augmented Reality and Virtual Reality-Based Approach",
      venue: "IEEE Xplore",
      year: 2026,
      authors: [
        "Swasthik Yesh",
        "Manvitha Ravi Salian",
        "Shivam Shetty",
        "Gowri Bhat",
      ],
      doi: "https://doi.org/10.1109/PuneCon67554.2025.11378526",
      url: "https://ieeexplore.ieee.org/document/11378526",
      abstract:
        "This paper explores the application of Augmented Reality (AR) and Virtual Reality (VR) technologies to enhance STEAM education, presenting a framework and implementation case study.",
    },
  ],

  achievements: [
    {
      id: "monaithon-2025",
      year: "2025",
      title: "1st Place — MONAITHON Hackathon",
      organization: "JNNCE, Shivamogga",
      description: "Medical image segmentation with MONAI + U-Net + FastAPI deployment.",
      certificateUrl: "/assets/certificates/monaithon.jpeg",
      place: "1st",
    },
    {
      id: "ieee-eureka-2025",
      year: "2025",
      title: "Top-15 Finalist — IEEE Eu-Reka 2025",
      organization: "IEEE Pune Section",
      description:
        "Selected among top 15 teams in a national STEAM education innovation competition organized by the IEEE Pune Section.",
      certificateUrl: "/assets/certificates/eureka.jpeg",
      place: "Top 15",
    },
    {
      id: "algorithm-roulette-2025",
      year: "2025",
      title: "1st Place — Algorithm Roulette ML Competition",
      organization: "College Tech Fest",
      description: "Competitive machine learning challenge at departmental tech fest.",
      certificateUrl: "/assets/certificates/algorithm-roulette.jpeg",
      place: "1st",
    },
    {
      id: "uiux-yugma-2025",
      year: "2025",
      title: "1st Place — UI/UX Design Sprint",
      organization: "YUGMA TechFest, JNNCE",
      description: "Interface design and user experience sprint competition.",
      certificateUrl: "/assets/certificates/yugma-ui-ux.jpeg",
      place: "1st",
    },
    {
      id: "hackyugma-2025",
      year: "2025",
      title: "3rd Place — HackYugma Hackathon",
      organization: "YUGMA TechFest, JNNCE",
      description: "AR 3D Car Visualization built with Unity-based augmented reality.",
      certificateUrl: "/assets/certificates/hack-yugma.jpeg",
      place: "3rd",
    },
    {
      id: "lost-found-2024",
      year: "2024",
      title: "Best Project — Lost and Found Portal",
      organization: "SMVIT, First-Year Mini Project",
      description: "First-year mini project awarded best in class.",
      certificateUrl: "/assets/certificates/lost-found-best-project.jpeg",
      place: "Best",
    },
  ],

  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/#research" },
    { label: "Achievements", href: "/#achievements" },
    { label: "Contact", href: "/contact" },
  ],

  seo: {
    title: "Shivam Shetty — AI/ML Engineer",
    description:
      "Portfolio of Shivam Shetty — AI/ML undergraduate at SMVIT building real-world intelligent systems, geospatial ML pipelines, and full-stack AI applications.",
    keywords: [
      "AI",
      "Machine Learning",
      "Computer Vision",
      "Geospatial AI",
      "FastAPI",
      "PyTorch",
      "MONAI",
    ],
    ogImage: "/assets/images/og-image.png",
    siteUrl: "https://shivamshetty.dev",
  },
}

export default portfolio