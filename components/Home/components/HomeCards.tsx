import React from 'react';
import {
    Heading,
    Link,
    Image,
    WrapItem,
} from '@chakra-ui/react';
import { BlogTags } from '@/components/Tags';


export default function HomeCards({ mural, data, chosenLayout }: any) {
    const muralConfigs = [
        {
            base: "100%"
            /* precisa inicializar esse no indice 0 */
        },
        { base: "100%", md: "45%", lg: "32%" },
        { base: "100%", md: "45%" },
    ];

    const isCarouselWrapItemSettings = {
        base: "100%",
        sm: "100%",
        md: "45%",
        lg: "22%",
    };

    return (
        <WrapItem
            width={mural ? muralConfigs[chosenLayout] : isCarouselWrapItemSettings}
            flexDir={"column"}
            justifyContent="center"
            alignItems="center"
        >

            {/* ####################### CATEGORIA ####################### */}
            {mural ?
                <Heading fontSize="15" fontWeight={"bold"} color={'gray.600'} position={"relative"} mb={1} >
                    <Link textDecoration="aqua" _hover={{ color: 'gray' }} textTransform={'uppercase'}>
                        {data?.categoria.nome}
                    </Link>
                </Heading>
                :
                null
            }

            {/* ####################### IMAGEM ####################### */}
            <Link href={`categoria/noticia/${data.id}`} >
                <Image
                    src={data?.imgPath ??
                        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                    }
                    alt={data?.imgAlterText ?? "Texto explicativo..."}
                    h="200px"
                    w="340px"
                    transform="scale(1.0)"
                    transition="0.3s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)',
                    }}
                    objectFit="contain"
                    borderRadius="lg"
                />
            </Link>


            {/* ####################### TAGS ####################### */}
            {mural ?
                null
                :
                <BlogTags tags={data?.tags || ['Engineering', 'Product']} />

            }

            {/* ####################### TITULO ####################### */}
            <Heading fontSize="xl" >
                <Link href={`/categoria/noticia/${data.id}`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
                    {data?.titulo}
                </Link>
            </Heading>
        </WrapItem>
    )
}














