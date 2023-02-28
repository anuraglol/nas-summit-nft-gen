import { Box } from "@chakra-ui/react";
import { FC, RefObject } from "react";
import { Renderer } from "./Renderer";

const Card: FC<{
  passedRef: RefObject<HTMLDivElement>;
}> = ({ passedRef }) => {
  return (
    <Box
      bgImage="url(/assets/base-bg.svg)"
      h="96"
      w="80"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      rounded="md"
      display="flex"
      alignItems="center"
      ref={passedRef}
    >
      <Renderer value="Hello World" />
    </Box>
  );
};

export { Card };
