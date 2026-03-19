export interface ProjectLink {
  label: string;
  url: string;
  type: 'primary' | 'outline';
}

export interface Project {
  id: string;
  title: string;
  emoji: string;
  description: string;
  /** Matches the #anchor id used in experience.astro */
  companyId: string;
  /** Display label shown as a tag on the project card */
  company: string;
  period: string;
  links?: ProjectLink[];
}

/**
 * Single source of truth for all projects.
 * Ordered newest first by START date.
 * Both /projects and /experience import from here — do not duplicate content elsewhere.
 */
export const projects: Project[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────
  {
    id: 'labster-accessibility-ai',
    title: 'AI Simulation Accessibility Uplift',
    emoji: '♿',
    description:
      'Developing an AI-driven system to automatically uplift legacy VR/3D simulations for web accessibility. ' +
      'The system analyzes legacy code and assets to inject ARIA readout text, descriptive tooltips, ' +
      'smart autocompletes, and keyboard-navigable paths. This ensures hundreds of specialized science ' +
      'simulations meet modern accessibility standards without requiring manual per-simulation refactoring.',
    companyId: 'labster',
    company: 'Labster',
    period: 'Feb 2026 – Present',
  },

  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    id: 'labster-automation',
    title: 'AI Course Automation System',
    emoji: '⚡',
    description:
      'Labster produces VR/3D interactive science simulations for universities and high schools — ' +
      'immersive and high-quality, but expensive to build. I redesigned the internal course-creation ' +
      'process end-to-end using AI and low-code automation: Airtable as the structured data backbone, ' +
      'n8n as the workflow engine, and Claude + OpenAI as the AI layer. The result cut course ' +
      'development time by 90%, making each simulation dramatically faster and cheaper to produce ' +
      'without sacrificing educational quality. I also built tailored AI-assisted workflows for ' +
      'Learning Experts and Subject Matter Experts — covering learning objectives, driving questions, ' +
      "Bloom's taxonomy levels, and Simpson's skill levels — bridging cutting-edge AI with sound " +
      'pedagogical frameworks.',
    companyId: 'labster',
    company: 'Labster',
    period: 'Apr 2025 – Jan 2026',
  },
  {
    id: 'video-movement-prediction',
    title: 'Video Movement Prediction Model',
    emoji: '🎥',
    description:
      'Designed and trained a PyTorch-based deep learning model for video movement prediction — ' +
      'from architecture design and dataset preparation through to training and evaluation. ' +
      '(NDA — further details confidential.)',
    companyId: 'freelance',
    company: 'Freelance',
    period: 'Mar 2025 – Jun 2025',
  },

  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    id: 'santander-ai-mvp',
    title: 'Banco Santander — Internal AI MVP',
    emoji: '🏦',
    description:
      'Designed an MVP concept for safe, scalable internal AI adoption at one of the world\'s ' +
      'largest financial institutions. Researched and synthesized how leading global companies ' +
      'govern AI internally — policies, tooling, access control, audit trails — and translated ' +
      'those patterns into an actionable, enterprise-ready proposal tailored to Banco Santander\'s ' +
      'specific constraints and culture.',
    companyId: 'sngular',
    company: 'SNGULAR',
    period: 'Dec 2024 – Mar 2025',
  },
  {
    id: 'uve-valuation-ai',
    title: 'AI Automated Property Valuation',
    emoji: '📸',
    description:
      'Developed an AI system to estimate property costs by analyzing interior photos. ' +
      'Used image embeddings to train custom Machine Learning models that automatically ' +
      'rated the state of specific rooms (from 0 to 1). The system compared these ratings ' +
      'against an internal valuation database to provide objective, data-driven cost estimates.',
    companyId: 'sngular',
    company: 'UVE Valoraciones',
    period: 'Aug 2024 – Dec 2024',
    links: [
      { label: '🌐 v-valoraciones.com', url: 'https://v-valoraciones.com/', type: 'primary' },
    ],
  },
  {
    id: 'real-estate-ai',
    title: 'Real Estate Document Analysis Platform',
    emoji: '🏠',
    description:
      'Built an end-to-end AI pipeline for UVE Valoraciones that ingested legal and technical ' +
      'property documents (contracts, cadastral records, technical reports) and extracted ' +
      'structured data into a relational database. The system replaced manual expert review, ' +
      'enabling fast and consistent real estate due diligence at scale.',
    companyId: 'sngular',
    company: 'UVE Valoraciones',
    period: 'Jan 2024 – Jul 2024',
    links: [
      { label: '🌐 v-valoraciones.com', url: 'https://v-valoraciones.com/', type: 'primary' },
    ],
  },

  // ── 2023 ──────────────────────────────────────────────────────────────
  {
    id: 'junction-2023-rag',
    title: 'Knowledge Graph Visualization & RAG',
    emoji: '🌐',
    description:
      'Participated in Helsinki International Junction 2023 among 1,000 international participants. ' +
      'Developed an internal knowledge graph visualization system (similar to Obsidian) using a ' +
      'RAG (Retrieval-Augmented Generation) pipeline for intelligent data exploration.',
    companyId: 'side',
    company: 'Side Project',
    period: 'Nov 2023',
  },
  {
    id: 'junction-malaga-steganography',
    title: 'Examfy — Image Leak Detection System',
    emoji: '🔐',
    description:
      'Winner of the Local Málaga Junction Hackathon (earning a spot for Helsinki International Junction). ' +
      'Developed a steganographic system for Examfy to insert hidden tracking codes into school images. ' +
      'This allowed identifying the source of any leaked materials by tracing back the personal copy ' +
      'to the original recipient.',
    companyId: 'side',
    company: 'Side Project',
    period: 'Oct 2023',
    links: [
      { label: '🚀 Live Demo', url: 'https://snapguard.streamlit.app/', type: 'primary' },
    ],
  },
  {
    id: 'embassy-basketball-ai',
    title: 'The Embassy — Real-Time Basketball AI',
    emoji: '🏀',
    description:
      'Developed a real-time AI basketball match evaluation tool for The Embassy, the academy ' +
      'run by KM Calderón — Spanish NBA champion and former NBA player. The system used ' +
      'computer vision to track players and the ball live on court, feeding a dashboard of ' +
      'performance analytics: shot detection, player positioning heatmaps, and match statistics. ' +
      'Designed to run in real time during training sessions with no manual tagging required.',
    companyId: 'sngular',
    company: 'SNGULAR',
    period: 'Jul 2023 – Aug 2023',
    links: [
      {
        label: '🌐 theembassytc.com',
        url: 'https://www.theembassytc.com/',
        type: 'primary',
      },
    ],
  },
  {
    id: 'mlops-cookbook',
    title: 'MLOps Cookbook',
    emoji: '👨‍🍳',
    description:
      'Designed and delivered a comprehensive MLOps curriculum. Covers the full lifecycle: ' +
      'experiment tracking with MLflow, containerisation with Docker, CI/CD pipelines for ML, ' +
      'and model serving. Includes a hands-on "cookbook" repository used by students to master ' +
      'production-grade Machine Learning workflows.',
    companyId: 'codespace',
    company: 'Codespace Academy',
    period: 'Jan 2023 – Dec 2025',
    links: [
      { label: '🚀 Course Web', url: 'https://matesanz.github.io/mlops-cookbook/', type: 'primary' },
      { label: '💻 Repo', url: 'https://github.com/Matesanz/mlops-cookbook', type: 'outline' },
    ],
  },
  {
    id: 'python-ml-course',
    title: 'Python for Machine Learning Cookbook',
    emoji: '🐍',
    description:
      'Core curriculum for Machine Learning fundamentals. From Python basics and data manipulation ' +
      'with Pandas/NumPy to building and evaluating deep learning models. This course serves as ' +
      'the technical foundation for bootcamp students entering the AI field.',
    companyId: 'codespace',
    company: 'Codespace Academy',
    period: 'Jan 2023 – Dec 2025',
    links: [
      { label: '🚀 Course Web', url: 'https://matesanz.github.io/python-machine-learning-course/', type: 'primary' },
      { label: '💻 Repo', url: 'https://github.com/Matesanz/python-machine-learning-course', type: 'outline' },
    ],
  },
  {
    id: 'padmi-startup',
    title: 'PADMI — 3D Padel Analytics Startup',
    emoji: '🎾',
    description:
      'Six-month intensive sprint: built the initial AI system from scratch and launched a fully ' +
      'working prototype for 3D computer vision padel performance analysis. PADMI went from zero ' +
      'to a demo-ready product using multi-camera 3D tracking, size estimation, and biomechanical ' +
      'metrics. The system analysed player technique, shot speed, and court coverage in real time. ' +
      'Responsible for the full AI stack: camera calibration, stereo reconstruction, model ' +
      'training, and the analytics pipeline.',
    companyId: 'sngular',
    company: 'SNGULAR',
    period: 'Jan 2023 – Jul 2023',
    links: [
      { label: '🌐 padmi.es', url: 'https://www.padmi.es/', type: 'primary' },
    ],
  },

  // ── 2022 ──────────────────────────────────────────────────────────────
  {
    id: 'mercadona-cashierless',
    title: 'Mercadona — Cashierless Store MVP',
    emoji: '🛒',
    description:
      "Developed a cashierless retail store MVP for Mercadona Tech, Spain's largest supermarket " +
      'chain. The system used 3D computer vision and AI to track customers and products throughout ' +
      'the store — detecting what items are picked up or put back, and automating the checkout ' +
      'process entirely. Key challenges included multi-person tracking under occlusion, real-time ' +
      'inference on in-store hardware, and handling the combinatorial complexity of a full product ' +
      'catalogue.',
    companyId: 'sngular',
    company: 'SNGULAR',
    period: 'Mar 2022 – Dec 2022',
  },
  {
    id: 'face-expression-recognition',
    title: 'Face Expression Recognition',
    emoji: '😄',
    description:
      'End-to-end facial expression recognition pipeline: face keypoint detection for data ' +
      'acquisition, geometric normalization to suppress head rotation, manual labeling of six ' +
      'expression classes (normal, angry, happy, sad, surprised, winking), k-NN classifier ' +
      'training, and live webcam inference. Deployed as an interactive Streamlit app — anyone ' +
      'in the audience could test it live during the talk.',
    companyId: 'side',
    company: 'Side Project',
    period: 'May 2022',
    links: [
      { label: '🚀 Live Demo', url: 'https://face-expression-recognition.streamlit.app/', type: 'primary' },
      { label: '💻 Code', url: 'https://github.com/Matesanz/face-expression-recognition', type: 'outline' },
    ],
  },

  // ── 2021 ──────────────────────────────────────────────────────────────
  {
    id: 'aeorum-embedded-tracking',
    title: 'Embedded People & Car Tracking',
    emoji: '🚗',
    description:
      'Implemented real-time aerial object detection and tracking (people and vehicles) ' +
      'using YOLO and SSD-MobileNet. Deployed these models on both GPU servers and ' +
      'resource-constrained embedded systems on-board drones, ensuring low-latency performance ' +
      'for critical surveillance and monitoring tasks.',
    companyId: 'aeorum',
    company: 'Aeorum',
    period: 'Dec 2021 – Mar 2022',
  },
  {
    id: 'aeorum-solar-panels',
    title: 'Autonomous Solar Panel Inspection',
    emoji: '☀️',
    description:
      'Built a thermal anomaly detection system for autonomous photovoltaic panel inspection ' +
      'using drone imagery. Developed Computer Vision models to identify hotspots and ' +
      'malfunctions on solar farms, significantly reducing inspection time compared to ' +
      'manual methods.',
    companyId: 'aeorum',
    company: 'Aeorum',
    period: 'Jul 2021 – Nov 2021',
  },
  {
    id: 'pet-detector',
    title: 'Pet Detector with YOLOv3',
    emoji: '🐈',
    description:
      'Custom YOLOv3 object detection model trained from scratch to recognise a specific cat ' +
      '(Mocka 😂). Used the ImageAI library inside a Jupyter Notebook, covering the full ' +
      'pipeline: collecting hundreds of photos, annotating bounding boxes, training, and ' +
      'validating with the mAP metric. Presented live at TabularConf 2021, my first national ' +
      'conference.',
    companyId: 'side',
    company: 'Side Project',
    period: 'Jan 2021',
    links: [
      { label: '▶ Watch Talk', url: 'https://www.youtube.com/watch?v=Fr8t0SuHASA', type: 'primary' },
      { label: '💻 Code', url: 'https://github.com/Matesanz/pet-detector', type: 'outline' },
    ],
  },

  // ── 2020 ──────────────────────────────────────────────────────────────
  {
    id: 'aeorum-orthophotos',
    title: 'Multispectral Orthomosaic Pipeline',
    emoji: '🗺️',
    description:
      'Developed a proprietary pipeline for generating high-resolution multispectral GeoTIFFs ' +
      'from multiple aerial drone cameras. This enabled agronomists to assess crop health via ' +
      'wavelength orthomosaics. Built using C++, Docker, and ROS to handle large-scale image ' +
      'stitching and geographic coordinate alignment.',
    companyId: 'aeorum',
    company: 'Aeorum',
    period: 'Sep 2020 – Jul 2021',
  },
  {
    id: 'mri-superresolution',
    title: 'MRI Super-Resolution with GANs',
    emoji: '🧠',
    description:
      'Master\'s thesis project (graduated with honors): developed a 3D MRI super-resolution ' +
      'model using Generative Adversarial Networks (WGAN-GP), achieving a 4× improvement in ' +
      'image quality. The model learned to reconstruct high-resolution volumetric MRI scans ' +
      'from low-resolution inputs, with potential applications in reducing scan time and ' +
      'improving diagnostic quality in resource-constrained settings.',
    companyId: 'side',
    company: 'Side Project',
    period: 'Mar 2020 – Jun 2020',
    links: [
      { label: '📄 Thesis', url: 'https://1drv.ms/b/s!AgDuqWQZkjwxj79zyt5colGiRdNT1g?e=1cslcH', type: 'primary' },
      { label: '💻 Code', url: 'https://github.com/Matesanz/WGAN-GP_MRI_Super_Resolution', type: 'outline' },
    ],
  },

  // ── 2019 ──────────────────────────────────────────────────────────────
  {
    id: 'monkeat-pwa',
    title: 'Monkeat — Live Marketplace PWA',
    emoji: '🕵️',
    description:
      'Co-founded Monkeat, a real-time marketplace helping pubs boost customer acquisition ' +
      'through live offers during off-peak hours. As CTO, designed the full system architecture ' +
      'and built the Progressive Web App from scratch using Vue + Ionic on the frontend, ' +
      'MongoDB for the database, Flask for the backend API, and Firebase for real-time updates ' +
      'and authentication. Developed inside the Demium incubation program. We could not ' +
      'ultimately validate the MVP and closed the project after a few months — but shipping a ' +
      'full-stack product as a first-time CTO was an invaluable experience.',
    companyId: 'monkeat',
    company: 'Monkeat',
    period: 'Mar 2019 – Oct 2019',
  },

  // ── 2018 ──────────────────────────────────────────────────────────────
  {
    id: 'dias2p',
    title: 'DIAS2P — Pedestrian Safety System',
    emoji: '🚦',
    description:
      'Part of the Smart-Campus I research projects at the University of Malaga. Built an ' +
      'embedded computer vision system that attached to traffic signs and detected pedestrians ' +
      'in real time, triggering audio and visual warnings to alert drivers — reducing the risk ' +
      'of car-pedestrian collisions. Used YOLO, SSD-MobileNet, and Mask-RCNN running on a ' +
      'Jetson Nano, with Hungarian Algorithm-based object tracking. Research published at CIPI 2019.',
    companyId: 'uma',
    company: 'Univ. Malaga',
    period: 'Dec 2018 – Mar 2020',
    links: [
      { label: '📄 CIPI 2019 Paper', url: 'https://riuma.uma.es/xmlui/bitstream/handle/10630/18443/CIPI_2019_paper_37.pdf', type: 'primary' },
      { label: '💻 DIAS2P', url: 'https://github.com/Matesanz/DIAS2P', type: 'outline' },
    ],
  },
  {
    id: 'streetqr',
    title: 'StreetQR — Smart Campus Analytics',
    emoji: '📱',
    description:
      'Developed a smart signage and analytics system for the University of Malaga campus. ' +
      'Built a Firebase API to log and visualize pedestrian crossing statistics and interaction data. ' +
      'Part of the larger Smart-Campus initiative focusing on urban mobility and data-driven infrastructure.',
    companyId: 'uma',
    company: 'Univ. Malaga',
    period: 'Dec 2018 – Mar 2020',
    links: [
      { label: '💻 StreetQR', url: 'https://github.com/Matesanz/StreetQR', type: 'outline' },
    ],
  },
  {
    id: 'malaga-ai-association',
    title: 'Málaga AI Association',
    emoji: '🧠',
    description:
      'Co-founded the Málaga chapter of the Spain AI Association — a community for sharing ' +
      'knowledge about Artificial Intelligence through talks, workshops, and courses. ' +
      'Organised and delivered multiple events including bootcamps, meetups, and online courses ' +
      'that reached up to 200 students per session. The association is still active and ' +
      'continues to grow the local AI community.',
    companyId: 'side',
    company: 'Side Project',
    period: 'Sep 2018 – Dec 2023',
    links: [
      { label: '🐦 Twitter', url: 'https://twitter.com/aimalaga', type: 'outline' },
    ],
  },
];

/** Returns all projects belonging to a given companyId, preserving array order (newest first). */
export function getProjectsByCompany(companyId: string): Project[] {
  return projects.filter((p) => p.companyId === companyId);
}
