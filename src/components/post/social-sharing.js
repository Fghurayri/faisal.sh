import {
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Flex, Box } from "@chakra-ui/core";

export default function SocialSharing({ url, title }) {
  return (
    <Flex justifyContent="center" my="4">
      <Box mx="2">
        <EmailShareButton url={url} subject={title}>
          <EmailIcon size={30} round />
        </EmailShareButton>
      </Box>
      <Box mx="2">
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={30} round />
        </LinkedinShareButton>
      </Box>
      <Box mx="2">
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={30} round />
        </TelegramShareButton>
      </Box>
      <Box mx="2">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={30} round />
        </TwitterShareButton>
      </Box>
      <Box mx="2">
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
      </Box>
    </Flex>
  );
}
