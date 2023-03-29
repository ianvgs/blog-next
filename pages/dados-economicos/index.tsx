import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import axiosNest from '@/services/axiosNest';
import PaginaNaoEncontrada from '../404';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
    tableDados: ReactElement;
}

interface IndicesDataProps {
    id: number;
    indice: string;
    mes: string;
    valor: number;
    valorAcumulado: number;
    createdAt: string;
    updatedAt: string;
}

interface TableDataProps {
    dados: IndicesDataProps[]
}

const TableDados = ({ dados }: TableDataProps) => {
    let tableTitle = ''
    if (dados[0].indice === "IPCA") {
        tableTitle = "IPCA - INDIDE DE PREÇO"
    }
    if ((dados[0].indice === "INPC")) {
        tableTitle = "INPC - INDIDE DE PREÇO"
    }
    if ((dados[0].indice === "IGPM")) {
        tableTitle = "IGPM - INDIDE DE PREÇO"
    }

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha'>
                <TableCaption>{tableTitle}</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Mês</Th>
                        <Th>Valor</Th>
                        <Th isNumeric>Acum 12 m</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {dados.map((indiceEconomico: any, index: number) => {
                        return (<>
                            <Tr>
                                <Td>{indiceEconomico.mes}</Td>
                                <Td isNumeric>{indiceEconomico.valor}%</Td>
                                <Td isNumeric>{indiceEconomico.valorAcumulado}%</Td>
                            </Tr>
                        </>)
                    })}
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

export default function SimpleThreeColumns({ dadosEconomicos, hasError }: any) {
    const [dadosIpca, dadosInpc, dadosIgpm] = dadosEconomicos

    if (hasError) {
        return (
            <>
                <PaginaNaoEncontrada />
            </>
        );
    }

    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    title={'IPCA'}
                    text={
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...vLorem ipsum dLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..olor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor re..  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.. '

                    }
                    tableDados={
                        <TableDados dados={dadosIpca} />
                    }
                />
                <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={'INPC'}
                    text={
                        'LorLLLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.. labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                    tableDados={
                        <TableDados dados={dadosInpc} />
                    }
                />
                <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={'IGPM'}
                    text={
                        'Lorem ipsuLLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..m dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                    }
                    tableDados={
                        <TableDados dados={dadosIgpm} />
                    }
                />
            </SimpleGrid>


        </Box>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx: {
    req: { cookies: any };
}) => {

    let dadosEconomicos: any = [];

    try {
        const response = await axiosNest.get('/news/dados-economicos-ipca-inpc-igpm')
        dadosEconomicos = response.data
    } catch (error) {
        return {
            props: { hasError: true },
        };

    }
    if (!dadosEconomicos) {
        return {
            props: { hasError: true },
        };
    }

    return {
        props: {
            dadosEconomicos
        },
    };
};