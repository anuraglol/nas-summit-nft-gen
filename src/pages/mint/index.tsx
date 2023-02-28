import { Box, Image } from "@chakra-ui/react";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <Box
      minH="100vh"
      w="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src="/api/image?name=Some%20Random%20Long%20Name%20Still%20going?"
        alt="mint"
        height="96"
        width="80"
      />
    </Box>
  );
};

export default Index;
