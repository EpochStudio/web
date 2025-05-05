export interface TeamMember {
  name: string
  id: string
  title: string
  type: "developer" | "staff"
  avatar?: string
  aboutMe: string
  github?: string
  twitter?: string
}

export const teamMembers: TeamMember[] = [
  // Developers
  {
    name: "Uthsho",
    id: "747870498221719592",
    title: "Founder",
    type: "developer",
    aboutMe: "The Founder of Galaxies.",
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
  {
    name: "chrissch_dhil.dev",
    id: "592663451978039298",
    title: "Lead Developer In-charge",
    type: "developer",
    aboutMe:
      "Hello! I am Chris, a developer from Hong Kong. Currently still in High School, and currently majors in Biology and Computer Science. I specialize in Javascript, Typescript and Python, and is currently learning Kotlin and Rust!\n\nI am also the Lead-Developer of Galaxies if you haven't realized by now! If you have any suggestions/feedback about Galaxies, please do send me a DM on discord!",
    github: "https://github.com/chrissch",
  },
  {
    name: '"Shimeji" Rin',
    id: "586913853804249090",
    title: "Acting Lead Developer",
    type: "developer",
    aboutMe: "experimenting so you (hopefully) don't have to",
    github: "https://github.com/buttermiilk_",
    twitter: "https://twitter.com/buttermiilk",
  },
  {
    name: "SilentJungle",
    id: "738362958253522976",
    title: "System Administrator",
    type: "developer",
    aboutMe: "",
    github: "https://github.com",
  },
  {
    name: "adf.dev",
    id: "1248492933875765328",
    title: "General Back-end Developer",
    type: "developer",
    aboutMe: "",
    github: "https://github.com/HackerADF",
  },
  {
    name: "Aniket",
    id: "474255126228500480",
    title: "App Developer",
    type: "developer",
    aboutMe: "",
    github: "https://github.com",
  },
  {
    name: "SyntaxSavior",
    id: "474529598504304641",
    title: "Web Developer",
    type: "developer",
    aboutMe: "",
    github: "https://github.com",
  },

  // Staff
  {
    name: "n1nsoka",
    id: "209490561378418699",
    title: "Update Direction Affairs Manager",
    type: "staff",
    aboutMe: "",
  },
  {
    name: "liaisalwayssleepy",
    id: "1118547483635744768",
    title: "Update Direction Affairs Manager\nCommunity Manager",
    type: "staff",
    aboutMe: "",
  },
  {
    name: "commandnikhil",
    id: "728991780317691934",
    title: "Community Manager",
    type: "staff",
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    name: ".eletric.1",
    id: "769791662636531743",
    title: "Moderator",
    type: "staff",
    aboutMe: "",
  },
  {
    name: "sujal1048d",
    id: "668090704601415691",
    title: "Moderator",
    type: "staff",
    aboutMe: "",
  },
]
