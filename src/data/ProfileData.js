import { MdEmail, MdPlace, MdTranslate } from "react-icons/md"
import { FaGithub, FaInstagram } from "react-icons/fa"

export const ProfileData = {
  username: "eightgran",
  name: "Michael Grigorenko",
  characteristics: [
    { label: "Germany", icon: MdPlace },
    { label: "German, English", icon: MdTranslate },
  ],
  socialMediaProfiles: [
    {
      label: "email",
      link: "mailto:eightgran@gmail.com",
      icon: MdEmail,
    },
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
