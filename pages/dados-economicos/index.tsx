import { ReactElement } from 'react';
import { SimpleGrid, Icon, Text, Stack, Flex, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { FcPodiumWithSpeaker, FcDonate, FcSalesPerformance } from 'react-icons/fc';
import axiosNest from '../../services/axiosNest';
import PaginaNaoEncontrada from '../../components/404/404';
import { GetServerSideProps, GetStaticProps } from 'next';

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
        tableTitle = "IPCA - Índice de Preços ao Consumidor Amplo"
    }
    if ((dados[0].indice === "INPC")) {
        tableTitle = "INPC - Índice Nacional de Preços ao Consumidor"
    }
    if ((dados[0].indice === "IGPM")) {
        tableTitle = "IGPM -Indicador Geral de Preços do Mercado"
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
                            <Tr key={index}>
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
        <Stack align={"center"} w={400}>
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
    if (hasError) {
        return (
            <>
                <PaginaNaoEncontrada />
            </>
        );
    }

    const [dadosIpca, dadosInpc, dadosIgpm] = dadosEconomicos

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} p={10} justifyItems={"center"} >
            <Feature
                icon={<Icon as={FcDonate} w={10} h={10} />}
                title={'IPCA - Índice de Preços ao Consumidor Amplo'}
                text={
                    'O IPCA mede a inflação de produtos e serviços do varejo, referentes ao consumo das famílias'

                }
                tableDados={
                    <TableDados dados={dadosIpca} />
                }
            />
            <Feature
                icon={<Icon as={FcPodiumWithSpeaker} w={10} h={10} />}
                title={'INPC - Índice Nacional de Preços ao Consumidor'}
                text={
                    'O INPC mede a inflação da cesta de consumo da população com baixo rendimento.'
                }
                tableDados={
                    <TableDados dados={dadosInpc} />
                }
            />
            <Feature
                icon={<Icon as={FcSalesPerformance} w={10} h={10} />}
                title={'IGPM -Indicador Geral de Preços do Mercado'}
                text={
                    'O IGPM mede os itens do cotidiano como transporte, alimentação e vestuário.'
                }
                tableDados={
                    <TableDados dados={dadosIgpm} />
                }
            />
        </SimpleGrid>



    );
}

export const getStaticProps: GetStaticProps = async () => {

    let dadosEconomicos: any = [];

    try {
        const response = await axiosNest.get('/news/dados-economicos-ipca-inpc-igpm',
            {
                headers: {
                    'Project': 'abc'
                }
            }
        )
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
        revalidate: 10,
    };
};