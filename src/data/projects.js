import ddwImg from "../photo/ddw.png";
import kanbanImg from "../photo/kanban.png";


export const projects = [
  {
    id: 1,
    title: "Clinic Website (SPA)",
    description:
      "Single-page clinic website with a clean layout, clear sections, and contact-focused flow.",
    problem:
      "The clinic needed a modern and trustworthy website to clearly present services, contact information, and build confidence with potential patients. The old approach lacked structure and was not user-friendly on mobile devices.",
    solution:
      "I built a responsive single-page application with clear sections, readable typography, and a simple navigation flow. The layout focuses on clarity, accessibility, and easy contact, ensuring a smooth experience on both desktop and mobile.",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    image: ddwImg, // ✅
    live: "https://ddw.az",
    github: "https://github.com/ToghrulZulfaliev/DDW-Client",
  },

  {
    id: 2,
    title: "Kanban Board",
    description:
      "Interactive Kanban board for managing tasks with drag-and-drop and a clean, intuitive workflow.",
    problem:
      "Tracking tasks across tools makes priorities unclear and slows down daily work.",
    solution:
      "A visual Kanban board with drag-and-drop that keeps tasks organized and easy to manage.",
    tags: ["React", "Redux Toolkit", "Drag & Drop"],
    image: kanbanImg, // ✅
    live: "https://react-kanban-board-ruddy.vercel.app/",
    github: "https://github.com/ToghrulZulfaliev/React-Kanban-Board",
  },

  {
    id: 3,
    title: "Easy Buy — E-commerce",
    description:
      "E-commerce UI with product listing, cart flow, and responsive layout. Built for real-life shopping experience.",
    tags: ["React", "Redux Toolkit", "Tailwind", "API"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80", // bu qalır ✅
    live: "https://example.com",
    github: "https://github.com/ToghrulZulfaliev",
  },
];
