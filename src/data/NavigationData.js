import { FaGithub } from "react-icons/fa"

export const NavigationData = {
  headerLinks: [
    { title: "Home", link: "/", showOnHeader: true },
    { title: "Projects", link: "/projects", showOnHeader: false },
    {
      title: "Dunkelheit",
      link: "/dunkelheit",
      showOnHeader: false,
    },
  ],
  headerButtonLink: {
    link: "https://www.github.com/eightgran",
    label: "GITHUB",
    icon: FaGithub,
  },
}
