export const HEADER = {
  name: "Jonas Monteiro",
  role: "Front-end Developer",
  descriptionOne:
    "Front-end developer with 2 years of experience, I like combining my technical knowledge with design to make beautiful and efficient applications. My goal is to build scalable and efficient software while providing engaging and flawless user experiences.",
  descriptionTwo:
    "When I'm not coding, you’ll find me at the gym lifting weights, reading a good book or taking a walk with my girlfriend. I believe that combining my passion for art and technology helps me create more engaging and visually appealing web experiences.",
  btnCV: "Download CV",
  textProjects: "SIDE PROJECTS",
};

export const HEADER_PT = {
  name: "Jonas Monteiro",
  role: "Desenvolvedor Front-end",
  descriptionOne:
    "Desenvolvedor Front-end com 2 anos de experiência, gosto de combinar meu conhecimento técnico com design para criar aplicações bonitas e eficientes. Meu objetivo é desenvolver softwares escaláveis que ofereçam experiências de usuário envolventes e impecáveis.",
  descriptionTwo:
    "Quando não estou programando, você vai me encontrar na academia levantando pesos, lendo um bom livro ou passeando com a minha namorada. Acredito que unir minha paixão por arte e tecnologia me permite criar experiências web visualmente atraentes e altamente envolventes.",
  btnCV: "Baixar CV",
  textProjects: "PROJETOS PARALELOS",
};
export const EXPERIENCE = [
  {
    id: 1,
    date: "Aug 2023 - Present",
    company: "B2X Care Solutions",
    description: (
      <>
        {`I solved various software problems and assisted customers with technical support:

        - Diagnosis and repair of mobile phones, tablets, and laptops.
        - Solving hardware and software issues, including connectivity and performance.
        - Providing technical support for Samsung devices.
        - Focusing on problem-solving and customer satisfaction.`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: "IT Technician",
  },
  {
    id: 2,
    date: "Oct 2022 - May 2023",
    company: "eKaizen Digital",
    description: (
      <>
        {`I developed for a factory management software:

        - Web application development using Angular, TypeScript, HTML, and SCSS.
        - Creation of responsive and interactive interfaces, applying OOP and componentization concepts.
        - Implementation of resources and functionalities, ensuring maintainability and scalability.
        - Use of Git and GitLab for version control and team collaboration.
        - Application of best development practices and efficient teamwork.`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: [
      "Angular",
      "TypeScript",
      "HTML",
      "SCSS",
      "Node.js",
      "Git",
      "UX/UI",
      "Figma",
    ],
  },
  {
    id: 3,
    date: "Mar 2022 - Oct 2022",
    company: "Sankhya",
    description: (
      <>
        {`I developed for the Sankhya ERP, creating customizations, reports, and custom features within the ERP for clients:

        - Backend development using SQL Oracle and Java.
        - Creation of customizations for clients, addressing specific demands.
        - Development of reports, dashboards, procedures, and triggers.
        - Learning and implementing customizations in front-end with HTML5 and JavaScript.
        - Process optimization, impacting over 100 users and improving operational efficiency.`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: ["Java", "SQL Oracle", "JavaScript", "HTML", "Power BI", "ERP"],
  },
  {
    id: 4,
    date: "Sep 2021 - Mar 2022",
    company: "Unimax University",
    description: (
      <>
        {`I worked as technical support at the university, assisting with maintenance, teacher support, and all IT infrastructure:

        - Maintenance of computers, printers, and peripherals, ensuring the proper functioning of equipment.
        - Technical support for teachers, students, and staff, efficiently solving technical issues.
        - Knowledge in audiovisual, including operation of sound desks, light desks, projectors, and spotlights.
        - Maintenance of cables, crimping, and wiring, ensuring connectivity and system organization.`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: "IT Technician",
  },
];

export const EXPERIENCE_PT = [
  {
    id: 1,
    date: "Ago 2023 - Atual",
    company: "B2X Care Solutions",
    description: (
      <>
        {`Solucionei diversos problemas de software e auxiliei os clientes no suporte técnico.
        - Diagnóstico e reparação de celulares, tablets e notebooks
        - Solução de problemas de hardware e software, incluindo conectividade e desempenho
        - Atendimento ao cliente com suporte técnico especializado para dispositivos Samsung
        - Foco na resolução de problemas e na satisfação do cliente`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: "Suporte Técnico",
  },
  {
    id: 2,
    date: "Out 2022 - Mai 2023",
    company: "eKaizen Digital",
    description: (
      <>
        {`Desenvolvi para um software de gestão de fábrica. 
        - Desenvolvimento de aplicações web utilizando Angular, TypeScript, HTML e SCSS
        - Criação de interfaces responsivas e interativas, aplicando conceitos de POO e componentização
        - Implementação de recursos e funcionalidades, garantindo manutenibilidade e escalabilidade
        - Uso de Git e GitLab para versionamento e colaboração em equipe
        - Aplicação de boas práticas de desenvolvimento e trabalho eficiente em equipe`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: [
      "Angular",
      "TypeScript",
      "HTML",
      "SCSS",
      "Node.js",
      "Git",
      "UX/UI",
      "Figma",
    ],
  },
  {
    id: 3,
    date: "Mar 2022 - Out 2022",
    company: "Sankhya",
    description: (
      <>
        {`Desenvolvi para o ERP Sankhya, criando customizações, relatórios e personalizações dentro do ERP para os clientes.
        - Desenvolvimento back-end utilizando SQL Oracle e Java
        - Criação de personalizações para clientes, atendendo demandas específicas
        - Desenvolvimento de relatórios, dashboards, procedures e triggers
        - Aprendizado e implementação de customizações no front-end com HTML5 e JavaScript
        - Otimização de processos, impactando mais de 100 usuários e melhorando a eficiência operacional`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: ["Java", "SQL Oracle", "JavaScript", "HTML", "Power BI", "ERP"],
  },
  {
    id: 4,
    date: "Set 2021 - Mar 2022",
    company: "Faculdade UNIMAX",
    description: (
      <>
        {`Atuei como suporte técnico na faculdade, auxiliando na manutenção, suporte aos professores e toda infraestrutura de T.I
        - Manutenção de computadores, impressoras e periféricos, garantindo o bom funcionamento dos equipamentos
        - Suporte técnico a professores, alunos e funcionários, solucionando questões técnicas com eficiência
        - Conhecimento em áudiovisual, incluindo operação de mesa de som, mesa de luz, projetor e holofotes
        - Manutenção de cabos, crimpagem e passagem de fios, assegurando conectividade e organização dos sistemas`
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </>
    ),
    stack: "Suporte Técnico",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "SnapQR - QRCode Generator",
    description:
      "Generate QR codes from valid URLs and download them in PNG format quickly and easily.",
    stacks: "React - TypeScript - Tailwind - Framer Motion - Node.js",
  },
];

export const PROJECTS_PT = [
  {
    id: 1,
    name: "Em breve",
    description:
      "Gere QR Codes a partir de URLs válidas e baixe em formato PNG de forma rápida e simples.",
    stacks: "React - TypeScript - Tailwind - Framer Motion",
  },
];

export const STACKS = {
  name: "STACKS & TOOLS",
  stack: [
    "HTML",
    "CSS",
    "Framer Motion",
    "JavaScript",
    "React",
    "TypeScript",
    "Angular",
    "SQL",
    "Git",
    "Figma",
  ],
};
export const STACKS_PT = {
  name: "STACKS E FERRAMENTAS",
  stack: [
    "HTML",
    "CSS",
    "Framer Motion",
    "JavaScript",
    "React",
    "TypeScript",
    "Angular",
    "SQL",
    "Git",
    "Figma",
  ],
};
