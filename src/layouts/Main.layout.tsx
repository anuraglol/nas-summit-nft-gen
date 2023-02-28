import { Footer } from "@/components/Nav/Footer";
import { Header } from "@/components/Nav/Header";
import { Box, Flex } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const MainLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Box minH="100vh" bgColor="#EFF3F4">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export { MainLayout };
