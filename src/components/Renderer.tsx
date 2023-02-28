import { Text } from "@chakra-ui/react";
import { FC, useMemo } from "react";

interface IProps {
  value: string;
}

const Renderer: FC<IProps> = ({ value }) => {
  const fontSize = useMemo(() => {
    const fontSize = value.length > 30 ? 1 : 2;
    return `${fontSize}xl`;
  }, [value.length]);

  const topMargin = useMemo(() => {
    const topMargin = value.length > 20 ? 39 : 40;
    return `${topMargin}%`;
  }, [value.length]);

  console.log(fontSize);

  return (
    <Text
      fontSize={fontSize}
      fontWeight="black"
      textTransform="uppercase"
      pos="absolute"
      left="40%"
      top={topMargin}
      maxW="72"
      lineHeight="1"
    >
      {value}
    </Text>
  );
};

export { Renderer };
