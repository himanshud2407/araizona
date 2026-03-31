// ===============================
// 📁 Service Data (Typed for TypeScript)
// ===============================

// 🖼 Import Images
import simg1 from "../images/service/image-1.jpg";
import simg2 from "../images/service/image-2.jpg";
import simg3 from "../images/service/image-3.jpg";
import simg4 from "../images/service/image-4.jpg";

import singleImg1 from "../images/service-single/single.jpg";
import singleImg2 from "../images/service-single/single2.jpg";
import singleImg3 from "../images/service-single/single3.jpg";
import singleImg4 from "../images/service-single/single4.jpg";

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  simg: any;
  ssImg: any;
}

const Services: Service[] = [
  {
    id: "1",
    title: "AI Student Management System",
    slug: "ai-student-management-system",
    description:
      "Automate admissions, track attendance, manage fees, and empower educators — all from one platform.",
    simg: simg1,
    ssImg: singleImg1,
  },
  {
    id: "2",
    title: "AI Team Management Software",
    slug: "ai-team-management-software",
    description:
      "Manage projects, track team performance, and deliver on time — powered by AI-driven insights.",
    simg: simg2,
    ssImg: singleImg2,
  },
  {
    id: "3",
    title: "AI Learning Management System",
    slug: "ai-learning-management-system",
    description:
      "Scale training at the speed of learning with government-certified courses and a proprietary LMS.",
    simg: simg3,
    ssImg: singleImg3,
  },
  {
    id: "4",
    title: "Healthcare OS",
    slug: "healthcare-os",
    description:
      "From patient records to diagnostics — digitized and AI-driven.",
    simg: simg4,
    ssImg: singleImg4,
  },
];

export default Services;
