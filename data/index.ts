export const navItems = [
   { name: "About", link: "#about" },
   { name: "Experience", link: "#experience" },
   { name: "Approach", link: "#approach" },
   { name: "Contact", link: "#contact" },
]

export const gridItems = [
   {
      id: 1,
      title: "I value clear communication and strong client collaboration.",
      description: "Great results come from great collaboration.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
   },
   {
      id: 2,
      title: "I'm very flexible with  time zones for seamless collab",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
   },
   {
      id: 3,
      title: "My tech stack",
      description: "Always learning and improving",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
   },
   {
      id: 4,
      title: "Passionate tech enthusiast, always exploring and evolving in development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
   },

   {
      id: 5,
      title: "Currently building an AI Platform for Interview preparation",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
   },
   {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
   },
]

export const projects = [
   {
      id: 1,
      title: "Telegram ID & Crypto Bot",
      des: "Dynamic Telegram bot for ID creation and crypto transactions. Features multilingual support and live chat.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "next.svg", "/tail.svg", "/ts.svg", "s.svg", "redux.svg", "/fm.svg"],
      link: "confidential",
   },
   {
      id: 2,
      title: "AI Article Summarizer",
      des: "Web app using React, Redux, and OpenAI's GPT-4 to summarize articles from URLs or text input.",
      img: "/p2.svg",
      iconLists: ["/re.svg", "/redux.svg", "/c.svg"],
      link: "https://main--opensummarizer.netlify.app/",
   },
   {
      id: 3,
      title: "Talentf - Freelance Job Portal",
      des: "Job portal for freelancers with social media features, real-time chat, and admin control panel.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/redux.svg", "/s.svg", "/socket.svg"],
      link: "https://github.com/abhijith2213/talentf",
   },
   {
      id: 4,
      title: "Muebles - E-commerce Website",
      des: "Full-featured e-commerce platform with admin panel, user/product management, and secure sessions.",
      img: "/p4.svg",
      iconLists: ["/host.svg", "/node.svg", "/s.svg", "jquery.svg"],
      link: "https://github.com/abhijith2213/Muebles-Ecommerce",
   },
]

export const testimonials = [
   {
      quote: "Abhijith is a highly skilled and dedicated developer. He's a great team player and always willing to go the extra mile. I was particularly impressed with his problem-solving abilities and his commitment to delivering high-quality work. He's a valuable asset to any team.",
      name: "Sanjay",
      title: "Colleague at Globination",
   },
   {
      quote: "Abhijith's contributions to our projects at Globination were significant. He's a talented full-stack developer with a strong understanding of both front-end and back-end technologies. He's also a quick learner and adapts well to new challenges. I highly recommend him.",
      name: "Britto Vincent",
      title: "Colleague at Globination",
   },
   {
      quote: "Abhijith was a great help to me as a junior developer. He patiently guided me through complex coding concepts and helped me improve my skills significantly. He's a fantastic mentor and I'm very grateful for his support.",
      name: "Athul Raj",
      title: "Junior Colleague at 9x Technology",
   },
   {
      quote: "Abhijith is a talented and passionate developer. He's always eager to learn new things and is always willing to help others. His technical skills are impressive, and he's a valuable member of our team at 9x Technology. I highly recommend him.",
      name: "Sk Noor",
      title: "Colleague at 9x Technology",
   },
   {
      quote: "Abhijith delivered a fantastic web application for my business. He was very responsive to my feedback and made sure to incorporate all of my requirements. The app is exactly what I envisioned, and I'm very happy with the final product. I highly recommend his freelance services.",
      name: "Farseen",
      title: "Freelance Client",
   },
]
export const stacks = [
   {
      id: 1,
      name: "react",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
   },
   {
      id: 2,
      name: "NextJs",
      img: "/app.svg",
      nameImg: "/appName.svg",
   },
   {
      id: 3,
      name: "Express",
      img: "/host.svg",
      nameImg: "/hostName.svg",
   },
   {
      id: 4,
      name: "mongoDB",
      img: "/s.svg",
      nameImg: "/streamName.svg",
   },
   {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
   },
   {
      id: 6,
      name: "nest.",
      img: "/nest.svg",
      nameImg: "/nestName.svg",
   },
   {
      id: 6,
      name: "typescript.",
      img: "/ts.svg",
      nameImg: "/typeScriptName.svg",
   },
   {
      id: 8,
      name: "PostgreSQL.",
      img: "/postgre.svg",
      nameImg: "/postgreName.svg",
   },
]
export const workExperience = [
   {
      id: 1,
      title: "MERN Stack Developer",
      company: "9x Technology, UAE",
      desc: "Developed and maintained core features of a web platform using React.js, Next.js, and Tailwind CSS. Optimized performance, integrated APIs, and implemented security measures.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
   },
   {
      id: 2,
      title: "Full-stack Developer",
      company: "Globination, India",
      desc: "Contributed to the development of e-commerce and travel websites using Redux, JWT authentication, and payment integrations (Paypal, Razorpay). Built admin panels and performed testing.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
   },
   {
      id: 3,
      title: "Full-stack Developer Intern",
      company: "Packapeer, India",
      desc: "Learned and applied MERN stack technologies (MongoDB, Express.js, React.js, Node.js) to develop basic web application components and perform CRUD operations.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
   },
]
export const socialMedia = [
   {
      id: 1,
      link: "https://github.com/abhijith2213",
      img: "/git.svg",
   },
   //  {
   //     id: 2,
   //     link: "",
   //     img: "/twit.svg",
   //  },
   {
      id: 3,
      link: "https://www.linkedin.com/in/abhijith-a-s",
      img: "/link.svg",
   },
]
