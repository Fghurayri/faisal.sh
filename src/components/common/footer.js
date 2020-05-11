import { Link, Stack, IconButton } from "@chakra-ui/core";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

let footerItems = [
  {
    href: "https://twitter.com/FGhurayri",
    ariaLabel: "Faisal's Twitter",
    icon: FiTwitter,
  },
  {
    href: "https://github.com/Fghurayri",
    ariaLabel: "Faisal's Github",
    icon: FiGithub,
  },
  {
    href: "https://www.linkedin.com/in/fghurayri/",
    ariaLabel: "Faisal's LinkedIn",
    icon: FiLinkedin,
  },
  {
    href: "mailto:hi@faisal.sh",
    ariaLabel: "Faisal's Email",
    icon: AiOutlineMail,
  },
];

export default function Footer() {
  return (
    <Stack as="footer" isInline spacing="6" my="50px">
      {footerItems.map((item) => (
        <Link key={item.ariaLabel} href={item.href} isExternal>
          <IconButton aria-label={item.ariaLabel} icon={item.icon} />
        </Link>
      ))}
    </Stack>
  );
}
