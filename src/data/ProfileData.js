import { MdEmail, MdPlace, MdTranslate } from "react-icons/md"
import { FaGithub, FaInstagram } from "react-icons/fa"
import Logo from "../assets/images/Icon-256.svg"

export const ProfileData = {
  username: "eightgran",
  name: "Michael Grigorenko",
  email: "eightgran@gmail.com",
  slogan: "is making software",
  logoSvgSmall: Logo,
  emailIcon: MdEmail,
  characteristics: [
    { label: "Germany", icon: MdPlace },
    { label: "German, English", icon: MdTranslate },
  ],
  socialMediaProfiles: [
    {
      label: "github",
      link: "https://www.github.com/eightgran",
      icon: FaGithub,
    },
    {
      label: "instagram",
      link: "https://www.instagram.com/eightgran",
      icon: FaInstagram,
    },
  ],
}
