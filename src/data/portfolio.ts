import type { PersonalInfo, Project, Skill, Education, Activity } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Trương Minh Trung Huy',
  shortName: 'Trung Huy',
  role: 'Fullstack Developer',
  subtitle: 'Intern / Fresher',
  phone: '0795508242',
  email: 'huytrung0102@gmail.com',
  facebook: 'https://facebook.com/huytrung',
  github: 'https://github.com/TrungHuy242',
  location: 'Đà Nẵng, Việt Nam',
  bio: 'Final-year IT student passionate about Fullstack Development with a strong backend foundation in Django & REST API. Experienced in building end-to-end web systems, database design, and deploying real-world applications.',
  bioVi:
    'Sinh viên năm cuối ngành CNTT, định hướng phát triển theo hướng Fullstack Developer với nền tảng backend vững (Django, REST API). Có kinh nghiệm xây dựng hệ thống web end-to-end, thiết kế database và triển khai quy trình xử lý dữ liệu thực tế.',
};

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Nike Performance Store',
    period: '03/2026 — 04/2026',
    role: 'Fullstack Developer',
    description: 'E-commerce platform bán giày Nike với hệ thống quản lý đầy đủ',
    tech: ['Next.js 16', 'TypeScript', 'Prisma 7', 'MySQL', 'NextAuth'],
    highlights: [
      'Xây dựng E-commerce fullstack với Next.js 16 App Router và Prisma ORM',
      'Tích hợp xác thực NextAuth, phân quyền admin/user, quản lý đơn hàng',
      'Docker deployment lên Railway, database migration tự động qua CI/CD',
    ],
    github: 'https://github.com/TrungHuy242/nike-store',
    liveUrl: 'https://nike-store-production.up.railway.app',
    image: '/images/projects/nike-store.jpg',
    gridClass: 'col-span-12 md:col-span-7',
  },
  {
    id: '02',
    title: 'Clinic Appointment System',
    period: '01/2026 — 04/2026',
    role: 'Fullstack Developer',
    description: 'Hệ thống đặt lịch khám bệnh trực tuyến',
    tech: ['ReactJS', 'Django REST', 'PostgreSQL', 'JWT'],
    highlights: [
      'Xây dựng hệ thống đặt lịch khám bệnh với ReactJS và Django REST Framework',
      'Thiết kế REST API, xử lý đăng nhập, phân quyền và quản lý lịch hẹn',
      'Deploy backend Render, frontend Vercel với PostgreSQL trên Neon',
    ],
    github: 'https://github.com/TrungHuy242/clinic-appointment-system',
    liveUrl: 'https://clinic-appointment-system-amber.vercel.app/',
    image: '/images/projects/clinic.jpg',
    gridClass: 'col-span-12 md:col-span-5',
  },
  {
    id: '03',
    title: 'URL Shortener',
    period: '05/2026',
    role: 'Fullstack Developer',
    description: 'Hệ thống rút gọn URL hiện đại với analytics chi tiết',
    tech: ['Node.js', 'Express 5', 'PostgreSQL', 'Redis', 'React'],
    highlights: [
      'Redis cache cho redirect nhanh, analytics tracking (IP, location, device, browser)',
      'Rate limiting, Helmet.js security, cron job cleanup expired URLs',
      'Dashboard thống kê với charts: top countries, browsers, daily clicks',
    ],
    github: 'https://github.com/TrungHuy242/url_short_link',
    liveUrl: 'https://url-short-link.vercel.app',
    image: '/images/projects/url-shortener.jpg',
    gridClass: 'col-span-12 md:col-span-6',
  },
  {
    id: '04',
    title: 'Mask Face Detection',
    period: '10/2025 — 11/2025',
    role: 'AI Developer',
    description: 'Ứng dụng AI phát hiện khẩu trang realtime',
    tech: ['Next.js 16', 'FastAPI', 'TensorFlow', 'OpenCV', 'WebSocket'],
    highlights: [
      'AI model MobileNetV2 phát hiện 3 trạng thái: đeo đúng, đeo sai, không đeo',
      'Webcam real-time detection qua WebSocket, upload ảnh phân tích',
      'Backend FastAPI + Python, Frontend Next.js với TypeScript',
    ],
    github: 'https://github.com/TrungHuy242/Mask_Face_Detection',
    liveUrl: 'https://mask-face-detection.vercel.app',
    image: '/images/projects/mask-detection.jpg',
    gridClass: 'col-span-12 md:col-span-6',
  },
  {
    id: '05',
    title: 'Task Manager Realtime',
    period: '04/2026',
    role: 'Fullstack Developer',
    description: 'Quản lý công việc với file đính kèm và chat nhóm realtime',
    tech: ['React 19', 'TypeScript', 'Express', 'Supabase', 'Realtime'],
    highlights: [
      'Task management với trạng thái workflow: open → in_progress → done',
      'File attachments qua Supabase Storage, chat nhóm realtime',
      'Deploy monorepo lên Vercel, CI/CD với GitHub Actions',
    ],
    github: 'https://github.com/TrungHuy242/Task_Attachments',
    image: '/images/projects/task-manager.jpg',
    gridClass: 'col-span-12 md:col-span-8',
  },
];

export const SKILLS: Skill[] = [
  { name: 'PYTHON', fullName: 'Python', category: 'language' },
  { name: 'JAVASCRIPT', fullName: 'JavaScript', category: 'language' },
  { name: 'TYPESCRIPT', fullName: 'TypeScript', category: 'language' },
  { name: 'DART', fullName: 'Dart', category: 'language' },
  { name: 'REACTJS', fullName: 'React.js', category: 'frontend' },
  { name: 'NEXT.JS', fullName: 'Next.js', category: 'frontend' },
  { name: 'HTML5', fullName: 'HTML5', category: 'frontend' },
  { name: 'CSS3', fullName: 'CSS3', category: 'frontend' },
  { name: 'FLUTTER', fullName: 'Flutter', category: 'frontend' },
  { name: 'DJANGO', fullName: 'Django', category: 'backend' },
  { name: 'FLASK', fullName: 'Flask', category: 'backend' },
  { name: 'EXPRESS', fullName: 'Express.js', category: 'backend' },
  { name: 'FASTAPI', fullName: 'FastAPI', category: 'backend' },
  { name: 'REST API', fullName: 'REST API', category: 'backend' },
  { name: 'POSTGRESQL', fullName: 'PostgreSQL', category: 'tool' },
  { name: 'MYSQL', fullName: 'MySQL', category: 'tool' },
  { name: 'REDIS', fullName: 'Redis', category: 'tool' },
  { name: 'GIT', fullName: 'Git', category: 'tool' },
  { name: 'DOCKER', fullName: 'Docker', category: 'tool' },
  { name: 'SUPABASE', fullName: 'Supabase', category: 'tool' },
];

export const EDUCATION: Education = {
  school: 'Trường Đại học Kiến Trúc Đà Nẵng',
  major: 'Công nghệ Thông tin',
  period: '2022 — 2027',
};

export const ACTIVITIES: Activity[] = [
  {
    title: 'Team Lead — Dự án nhóm môn Công nghệ phần mềm',
    organization: 'Trường Đại học Kiến Trúc Đà Nẵng',
    period: '12/2025 — 04/2026',
    description:
      'Dẫn dắt nhóm 4 thành viên trong quá trình thực hiện dự án môn học. Phân công công việc, theo dõi tiến độ và phối hợp hoàn thiện các chức năng đúng thời hạn. Tham gia thiết kế cơ sở dữ liệu, trao đổi hướng xử lý và hỗ trợ các thành viên trong quá trình phát triển.',
  },
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;

// Public Web3Forms access key. Configure it in .env.local as VITE_WEB3FORMS_KEY.
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY?.trim() ?? '';
