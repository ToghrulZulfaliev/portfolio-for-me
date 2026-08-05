import ddwImg from "../photo/ddw.png";
import kanbanImg from "../photo/kanban.png";
import wizardImg from "../photo/wizard.png";
import teacherImg from "../photo/teacher.jpg";


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
  id: 4,
  title: "Booking Wizard ",
  description:
    "Multi-step appointment booking flow with smooth UX and responsive design.",
  tags: ["React", "Redux Toolkit", "Tailwind", ],
  image: wizardImg  ,
  problem:
  "Tracking tasks across different tools makes priorities unclear and slows down team productivity.",

solution:
  "Built a visual Kanban board with drag-and-drop functionality to organize tasks clearly and manage workflow efficiently.",

  live: "https://booking-wizard-lake.vercel.app",
  github: "https://github.com/ToghrulZulfaliev/booking-wizard",
},
{
  id: 5,
  title: "Teacher Panel — Question Editor",
  problem:
  "Creating exam questions with plain inputs makes formatting, formulas, and images difficult to manage.",

solution:
  "Built a teacher panel with rich text editor, math formula support, and inline image handling for structured question creation.",

  description:
    "Teacher dashboard for creating exam questions with rich text editor, math formulas, and image support.",
  tags: ["React", "Rich Text Editor", "Math Formula", ],
  image: teacherImg  ,
  live: "https://teacher-panel-question-editor.vercel.app",
  github: "https://github.com/ToghrulZulfaliev/teacher-panel-question-editor",
},


];
