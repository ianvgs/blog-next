import { VStack, Text } from "@chakra-ui/react";
import moment from "moment";
import { AuthorProps } from "../@types";

export const Author = ({ date, autor }: AuthorProps) => {
    return (
        <VStack alignSelf="end">
            <Text fontWeight="bold" fontSize={14} alignSelf={'end'}>Por {autor}, {moment(date).format('ll')}</Text>
        </VStack>
    );
};
