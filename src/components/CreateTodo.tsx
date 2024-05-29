import { Button, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";

const CreateTodo: FC = () => {
  return (
    <Flex
      px={9}
      gap={4}
      bgColor="purple.100"
      h={32}
      justifyContent="center"
      alignItems="center"
    >
      <Input />
      <Button>만들기</Button>
    </Flex>
  );
};

export default CreateTodo;
