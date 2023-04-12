interface ExperienceI {
  from: string;
  to: string;
  contract: string;
  role: string;
  company: {
    name: string;
    link: string;
  };
  location: string;
  responsibilities: string[];
}

export const experiences: ExperienceI[] = [
  {
    from: "May 2022",
    to: "now",
    contract: "full-time",
    role: "Frontend Lead",
    company: {
      name: "Kashier.io",
      link: "https://kashier.io",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Architecture long term plan with Angular stack",
      "Architecture refactor plan following best practices and code standards & make reusable component and private NPM packages",
      "Lead Frontend process",
      "Participated in creating CI/CD pipeline on Bitbucket to automate building and deploying web apps",
      "Reduced the Merchant portal loading time by adding (Service workers, GZIP compress, and another awesome stuff).",
      "Monorepo Architecture plan in the newest theme",
      "Unit testing with Angular",
      "Integration test using cypress (basics)",
      "SEO optimization",
      "Leading Frontend Pull Requests to make sure they follow best practices and code standards",
      "Worked in an Agile based environment",
      "Security checks for Merchant & Agent portals",
      "Leading the interviews for Frontend positions",
      "Leading code analysis updates with Sonarqube",
    ],
  },
  {
    from: "Oct 2021",
    to: "May 2022",
    contract: "full-time",
    role: "Senior Frontend Engineer",
    company: {
      name: "El-dokan",
      link: "https://www.el-dokan.com",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Architecture long-term plan with React stack",
      "Architecture refactor plan following best practices and code standards & make reusable component and NPM packages",
      "Lead marketing requirements and changes in the SAAS project and PWA",
      "Participated in creating CI/CD pipeline on Jenkins to automate building and deploying web apps on AWS EC2",
      "Reduced the SAAS product initial page loading time by adding Service workers to cache static assets",
      "React.js in the newest theme",
      "Unit testing with React.js & Angular & vanilla JS",
      "Integration test",
      "SEO optimization",
      "Review Pull Requests from other coworkers to make sure they follow best practices and code standards",
      "Worked in an Agile-based environment",
      "Basic security checks",
      "Leading the interviews for Frontend positions",
    ],
  },
  {
    from: "Dec 2018",
    to: "Jul 2021",
    contract: "part-time",
    role: "Senior Frontend Engineer",
    company: {
      name: "Areeb Group",
      link: "https://www.areebgroup.com",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Revamped and Refactored invesna.com following best practices and code standards",
      "Migrate the existing Angular v5 to Angular v12 and RxJS v5 to v6",
      "Participated in creating CI/CD pipeline on Microsoft Azure to automate building and deploying web apps on AWS",
      "Reduced invesna.com  initial page loading time by adding Service workers to cache static assets",
      "Create automation scripts on lambda service using Node.js",
      "Node.js automation scripts & bots (with Slack)",
      "React.js (internal tool)",
      "Vue.js (internal tool)",
      "Unit testing with React.js & Angular & vanilla JS",
      "Integration test",
      "SEO optimization",
      "Review Pull Requests from other coworkers to make sure they follow best practices and code standards",
      "Worked in an Agile-based environment",
      "Makes security Checks & reports Monthly",
      "Change any manual tasks to automation scripts",
      "Act as an interviewer for Frontend positions",
    ],
  },
  {
    from: "Oct 2019",
    to: "Feb 2020",
    contract: "part-time",
    role: "Senior Frontend Engineer",
    company: {
      name: "CoatConnect",
      link: "https://coatconnect.com",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Acting as a Technical Team Lead",
      "Code review",
      "Planning",
      "Monitoring more than 8 people",
      "Web application penetration testing",
      "Working with Agile",
      "SEO optimization",
      "Interviewer for Frontend positions",
      "Create project Infrastructure",
    ],
  },
  {
    from: "Sep 2018",
    to: "Nov 2018",
    contract: "Contract",
    role: "Senior Frontend Engineer",
    company: {
      name: "LeGate Online Booking",
      link: "https://www.hotelgate.com",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Revamp the website to fit the new business requirements",
      "SEO optimization",
      "Making weekly sessions with the Frontend team to get in touch",
      "Learning new UX concepts",
      "Working with microservices in Frontend",
    ],
  },
  {
    from: "Feb 2018",
    to: "Aug 2018",
    contract: "full-time",
    role: "Senior Frontend Engineer",
    company: {
      name: "AMIT Software",
      link: "http://www.amit-software.com",
    },
    location: "Cairo, Egypt",
    responsibilities: ["Code review", "SEO optimization", "Team Planning"],
  },
  {
    from: "Jun 2017",
    to: "Dec 2017",
    contract: "full-time",
    role: "Frontend Engineer",
    company: {
      name: "Anspire Agency",
      link: "https://anspire.agency",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Convert PSD to HTML & CSS & jQuery",
      "Security Testing reports",
      "Build Grunt.js workflow",
      "Revamp Grunt.js workflow to Gulp.js",
      "Work with Pug.js & SCSS",
      "Speed test report Weekly",
      "SEO optimization",
    ],
  },
  {
    from: "Aug 2016",
    to: "Jan 2017",
    contract: "full-time",
    role: "Frontend Engineer",
    company: {
      name: "Media Pan Arab",
      link: "https://mediapanarab.com",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Convert PSD to HTML & CSS & jQuery",
      "Security Testing reports",
      "Build Grunt.js workflow",
      "Revamp Grunt.js workflow to Gulp.js",
      "Work with Pug.js & SCSS",
      "Speed test report Weekly",
      "SEO optimization",
    ],
  },
  {
    from: "Mar 2016",
    to: "Jul 2016",
    contract: "full-time",
    role: "Frontend Engineer",
    company: {
      name: "Nerds Arena",
      link: "https://nerdsarena.com",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Convert PSD to HTML & CSS & jQuery",
      "Security Testing reports",
      "Work with Pug.js & SCSS",
      "Speed test report Weekly",
      "SEO optimization",
    ],
  },
  {
    from: "Jan 2015",
    to: "Mar 2016",
    contract: "full-time",
    role: "Frontend Engineer",
    company: {
      name: "Go Web Egypt",
      link: "",
    },
    location: "Cairo, Egypt",
    responsibilities: [
      "Convert PSD to HTML & CSS & jQuery",
      "Work with Bootstrap",
      "Speed test report Weekly",
      "SEO optimization",
    ],
  },
];
