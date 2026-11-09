export const profile = {
  name: 'Mathanraj Kanagaraj',
  roles: ['Software Engineer', 'Full Stack Developer (MERN)', 'React Component Engineer'],
  company: 'Syncfusion Software (Former)',
  location: 'Tamil Nadu, India',
  email: 'kmathan301@gmail.com',
  linkedin: 'https://linkedin.com/in/mathanrajkanagaraj-7891011b4',
  github: 'https://github.com/', // placeholder or user can customize
  bio: 'Former Software Engineer Level 3 at Syncfusion with 3 years and 11 months of experience building enterprise-grade React UI components, full-stack MERN applications, and cross-platform mobile apps. Passionate about performant UI architecture, clean TypeScript code, and scalable state management.',
  stats: [
    { label: 'Experience', value: '3 Years and 11 Months' },
    { label: 'Former Role', value: 'Level 3 @ Syncfusion' },
    { label: 'Promotions', value: '4 Levels' },
    { label: 'Certifications', value: '8 Completed' },
  ],
}

export const nav = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['certificates', 'Certificates'],
  ['contact', 'Contact'],
]

export const aboutHighlights = [
  {
    icon: 'react',
    title: 'Enterprise React Components',
    desc: 'Core contributor to Syncfusion React UI libraries, shipping tested, accessible, and performant components used by developers worldwide.',
  },
  {
    icon: 'stack',
    title: 'Full Stack MERN & Mobile',
    desc: 'Designing end-to-end web & mobile architectures using React, React Native, Node.js, Express, MongoDB, and Cloudinary.',
  },
  {
    icon: 'shield',
    title: 'TypeScript & Testing',
    desc: 'Championing strict type safety, unit and integration testing with Jest & React Testing Library, and rigorous code reviews.',
  },
  {
    icon: 'growth',
    title: 'Proven Track Record',
    desc: 'Promoted across 4 engineering levels at Syncfusion (Junior → L1 → L2 → L3) through technical ownership and customer impact.',
  },
]

export const experience = [
  {
    title: 'Software Engineer Level 3',
    when: 'Feb 2025 – Jan 2026',
    current: false,
    company: 'Syncfusion Software, Chennai',
    text: 'Developed and maintained Syncfusion React UI components as part of a dedicated React product team. Shipped new component features, resolved product issues, and reviewed code for React and TypeScript best practices.',
    skills: ['React', 'TypeScript', 'Component Architecture', 'Performance Tuning', 'Code Reviews'],
  },
  {
    title: 'Software Engineer Level 2',
    when: 'Jul 2023 – Feb 2025',
    current: false,
    company: 'Syncfusion Software, Chennai',
    text: 'Resolved escalated support cases for TypeScript, JavaScript, and React, built sample projects and REST API integration examples, and reported bugs to the development team.',
    skills: ['React', 'TypeScript', 'Escalated Support', 'REST APIs', 'Sample Apps'],
  },
  {
    title: 'Software Engineer Level 1',
    when: 'Nov 2022 – Jul 2023',
    current: false,
    company: 'Syncfusion Software, Chennai',
    text: 'Supported customers on React, TypeScript, and JavaScript components, reproduced reported issues, and authored comprehensive documentation and technical FAQs.',
    skills: ['React Components', 'Debugging', 'Issue Reproduction', 'Documentation'],
  },
  {
    title: 'Junior Software Developer',
    when: 'Mar 2022 – Nov 2022',
    current: false,
    company: 'Syncfusion Software, Chennai',
    text: 'Worked on support and development for web UI component libraries and built two React Native training projects.',
    skills: ['JavaScript', 'HTML5/CSS3', 'React Native', 'Web Components'],
  },
]

export const project = {
  name: 'Tunexa',
  badge: 'Featured Full Stack Project',
  sub: 'Mobile audio streaming and social podcast platform',
  text: 'A high-performance audio streaming platform built with React Native and modern web technologies. Tunexa enables users to discover, stream, and share audio tracks with custom playlist curation, favorites, listening history, dynamic playing queue, and variable playback speed control.',
  features: [
    { title: 'Audio Player Engine', desc: 'Seamless streaming playback with dynamic queue, speed controls, and background audio.' },
    { title: 'Dual-Layer State', desc: 'Redux Toolkit for client UI state synchronized with TanStack Query for server caching.' },
    { title: 'Scalable REST API', desc: 'Node.js & Express backend with MongoDB database models and secure media delivery via Cloudinary.' },
    { title: 'Cross-Platform Experience', desc: 'Polished mobile UI with native responsiveness, smooth animations, and touch-first ergonomics.' },
  ],
  tags: ['React Native', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
  url: 'https://tunexa-mu.vercel.app/',
}

export const skills = [
  ['Languages', 'TypeScript, JavaScript, Python'],
  ['Frontend', 'React, Next.js, HTML5, CSS3, Webpack, Vite'],
  ['State Management', 'Redux, Redux Toolkit, Context API, TanStack Query'],
  ['Mobile Development', 'React Native'],
  ['Backend & Database', 'Node.js, Express, MongoDB, Cloudinary'],
  ['Testing & Quality', 'Jest, React Testing Library'],
  ['Tools & Workflows', 'Git, VS Code, CI/CD, REST APIs, Agile'],
]

// Put each image in public/certificates/ using the file name below.
export const certificates = [
  { file: 'react-native-redux-express.jpg', title: 'React Native, Redux & Express – Full Stack React Native', by: 'Udemy', category: 'Mobile & Backend' },
  { file: 'typescript.jpg', title: 'Understanding TypeScript', by: 'Udemy', category: 'Language' },
  { file: 'jest-rtl.jpg', title: 'Testing React Applications with Jest and React Testing Library', by: 'LinkedIn Learning', category: 'Testing' },
  { file: 'ai-for-react.jpg', title: 'AI for React Developers', by: 'LinkedIn Learning', category: 'AI & React' },
  { file: 'git-vscode.jpg', title: 'Using Git with Visual Studio Code', by: 'LinkedIn Learning', category: 'Tools' },
  { file: 'css.jpg', title: 'CSS – The Complete Guide (Flexbox, Grid & Sass)', by: 'Udemy', category: 'Frontend' },
  { file: 'react-complete-guide.jpg', title: 'React – The Complete Guide (Next.js, Redux)', by: 'Udemy', category: 'Frontend' },
  { file: 'react-native-practical.jpg', title: 'React Native – The Practical Guide', by: 'Udemy', category: 'Mobile' },
]
