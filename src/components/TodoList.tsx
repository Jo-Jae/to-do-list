import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TodoCard from "./TodoCard";

const TodoList: FC = () => {
  return (
    <Flex
      bgColor="red.100"
      flexGrow={1}
      flexDir="column"
      alignItems="center"
      pt={8}
    >
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Flex>
  );
};

export default TodoList;
