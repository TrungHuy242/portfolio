import type { PersonalInfo, Project, Skill, Education, Activity } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Trương Minh Trung Huy",
  shortName: "Trung Huy",
  role: "Fullstack Developer",
  subtitle: "Intern / Fresher",
  phone: "0795508242",
  email: "huytrung0102@gmail.com",
  facebook: "https://facebook.com/huytrung",
  github: "https://github.com/TrungHuy242",
  location: "Đà Nẵng, Việt Nam",
  bio: "Final-year IT student passionate about Fullstack Development with a strong backend foundation in Django & REST API. Experienced in building end-to-end web systems, database design, and deploying real-world applications.",
  bioVi: "Sinh viên năm cuối ngành CNTT, định hướng phát triển theo hướng Fullstack Developer với nền tảng backend vững (Django, REST API). Có kinh nghiệm xây dựng hệ thống web end-to-end, thiết kế database và triển khai quy trình xử lý dữ liệu thực tế.",
};

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Clinic Appointment System",
    period: "01/2026 — 04/2026",
    role: "Fullstack Developer",
    description: "Hệ thống đặt lịch khám bệnh trực tuyến",
    tech: ["ReactJS", "Django REST", "PostgreSQL"],
    highlights: [
      "Xây dựng hệ thống đặt lịch khám bệnh bằng ReactJS và Django REST Framework",
      "Thiết kế REST API, xử lý đăng nhập, phân quyền và quản lý lịch hẹn",
      "Thiết kế cơ sở dữ liệu PostgreSQL và kết nối dữ liệu giữa frontend/backend",
    ],
    github: "https://github.com/TrungHuy242/clinic-appointment-system",
    image: "/images/projects/clinic.jpg",
    gridClass: "col-span-12 md:col-span-7",
  },
  {
    id: "02",
    title: "StudyFlow",
    period: "04/2024 — 04/2026",
    role: "Flutter Developer",
    description: "Ứng dụng học tập đa nền tảng",
    tech: ["Flutter", "Dart", "Supabase"],
    highlights: [
      "Phát triển ứng dụng StudyFlow theo hướng MVP bằng Flutter",
      "Xây dựng cấu trúc ứng dụng đa nền tảng gồm Android, iOS, Web",
      "Tích hợp Supabase và tổ chức source code theo hướng dễ mở rộng",
    ],
    github: "https://github.com/TrungHuy242/StudyFlow",
    image: "/images/projects/studyflow.jpg",
    gridClass: "col-span-12 md:col-span-6 md:col-start-7 md:-mt-24",
  },
  {
    id: "03",
    title: "Shoe Ecommerce",
    period: "09/2025 — 11/2025",
    role: "Fullstack Developer",
    description: "Website bán giày trực tuyến",
    tech: ["ReactJS", "Django REST", "MySQL", "JWT"],
    highlights: [
      "Xây dựng website bán giày bằng ReactJS và Django REST Framework",
      "Phát triển các chức năng tìm kiếm, lọc sản phẩm, giỏ hàng, đặt hàng",
      "Thiết kế API, xử lý xác thực JWT và làm việc với MySQL",
    ],
    github: "https://github.com/TrungHuy242/shoe-ecommerce",
    image: "/images/projects/shoe.jpg",
    gridClass: "col-span-12 md:col-span-8",
  },
];

export const SKILLS: Skill[] = [
  { name: "PYTHON", fullName: "Python", category: "language" },
  { name: "JAVASCRIPT", fullName: "JavaScript", category: "language" },
  { name: "TYPESCRIPT", fullName: "TypeScript", category: "language" },
  { name: "DART", fullName: "Dart", category: "language" },
  { name: "REACTJS", fullName: "React.js", category: "frontend" },
  { name: "HTML5", fullName: "HTML5", category: "frontend" },
  { name: "CSS3", fullName: "CSS3", category: "frontend" },
  { name: "FLUTTER", fullName: "Flutter", category: "frontend" },
  { name: "DJANGO", fullName: "Django", category: "backend" },
  { name: "FLASK", fullName: "Flask", category: "backend" },
  { name: "REST API", fullName: "REST API", category: "backend" },
  { name: "POSTGRESQL", fullName: "PostgreSQL", category: "tool" },
  { name: "MYSQL", fullName: "MySQL", category: "tool" },
  { name: "GIT", fullName: "Git", category: "tool" },
  { name: "SUPABASE", fullName: "Supabase", category: "tool" },
];

export const EDUCATION: Education = {
  school: "Trường Đại học Kiến Trúc Đà Nẵng",
  major: "Công nghệ Thông tin",
  period: "2022 — 2027",
};

export const ACTIVITIES: Activity[] = [
  {
    title: "Team Lead — Dự án nhóm môn Công nghệ phần mềm",
    organization: "Trường Đại học Kiến Trúc Đà Nẵng",
    period: "12/2025 — 04/2025",
    description:
      "Dẫn dắt nhóm 4 thành viên trong quá trình thực hiện dự án môn học. Phân công công việc, theo dõi tiến độ và phối hợp hoàn thiện các chức năng đúng thời hạn. Tham gia thiết kế cơ sở dữ liệu, trao đổi hướng xử lý và hỗ trợ các thành viên trong quá trình phát triển.",
  },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

// Web3Forms access key — get yours free at https://web3forms.com
export const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";
