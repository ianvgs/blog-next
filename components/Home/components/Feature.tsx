
import React, { ReactElement } from 'react';
import {
    Text,
    Stack,
    Flex,
} from '@chakra-ui/react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}
export const Feature = ({ text, icon }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex>
                {icon}
            </Flex>
            <Text fontWeight={500} >{text}</Text>
        </Stack >
    );
};