import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";

const TodoCard: FC<TodoCard> = ({ todo }) => {
  return (
    <Flex bgColor="gray.50" px={4} py={2} rounded="lg" gap={1}>
      <Text fontSize={20} bgColor="purple.100" w={48} isTruncated={true}>
        {todo.content}
      </Text>
      <Button colorScheme="purple">
        <FiEdit3 />
        수정
      </Button>
      <Button colorScheme="purple">
        <FiTrash2 />
      </Button>
    </Flex>
  );
};

export default TodoCard;
