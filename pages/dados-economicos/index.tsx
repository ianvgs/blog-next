import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
    tableDados: ReactElement;
}

const TableDados = () => {
    return (
        <TableContainer>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>IPCA - Indice preço consumidor atacado</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Mês</Th>
                        <Th>Valor</Th>
                        <Th isNumeric>Acumulado 12 meses</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>12%</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>12%</Td>
                        <Td isNumeric>30.4</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>12%</Td>
                        <Td isNumeric>0.9</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

const Feature = ({ title, text, icon, tableDados }: FeatureProps) => {
    return (
        <Stack justifyContent={"space-between"}>
            <Flex
                w={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}
            >
                {icon}

            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
            <Flex >
                {tableDados}
            </Flex>
        </Stack>
    );
};

export default function SimpleThreeColumns() {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    title={'Lifetime Support'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...vLorem ipsum dLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..olor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor re..  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.. '

                    }
                    tableDados={
                        <TableDados />
                    }
                />
                <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={'Unlimited Donations'}
                    text={
                        'LorLLLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.. labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                    tableDados={
                        <TableDados />
                    }
                />
                <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={'Instant Delivery'}
                    text={
                        'Lorem ipsuLLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..m dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                    tableDados={
                        <TableDados />
                    }
                />
            </SimpleGrid>


        </Box>
    );
}