import { Heading, Image } from "@chakra-ui/core";

import Paragraph from "./paragraph";
import ListItem from "./list-item";
import { Pre } from "./pre";
import MDXLink from "./link";
import CodeBlock from "./code-block";
import BlockQuote from "./quote";
import InlineCode from "./inline-code";
import Strong from "./strong";

export default {
  h1: (props) => (
    <Heading as="h1" size="xl" lineHeight="1.8" m="4" {...props} />
  ),
  h2: (props) => (
    <Heading as="h2" size="lg" lineHeight="1.8" m="4" {...props} />
  ),
  h3: (props) => (
    <Heading as="h3" size="md" lineHeight="1.8" m="4" {...props} />
  ),
  h4: (props) => <Heading as="h4" lineHeight="1.8" m="4" {...props} />,
  p: (props) => <Paragraph {...props} />,
  strong: (props) => <Strong {...props} />,
  img: (props) => <Image rounded="10px" m="auto" {...props} />,
  li: (props) => <ListItem {...props} />,
  pre: (props) => <Pre dir="ltr" {...props} />,
  code: (props) => <CodeBlock {...props} />,
  inlineCode: (props) => <InlineCode dir="ltr" {...props} />,
  blockquote: (props) => <BlockQuote {...props} />,
  a: (props) => <MDXLink {...props} />,
};
