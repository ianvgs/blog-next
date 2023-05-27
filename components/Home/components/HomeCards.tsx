import React from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    HStack,
    Tag,
    WrapItem,
    SpaceProps,
    Flex,
    Wrap,
} from '@chakra-ui/react';



interface IBlogTags {
    tags: Array<string>;
    marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props: any) => {
    const typesVariants = ["subtle", "solid", "outline"]
    return (
        <Wrap spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag: any, index: number) => {
                return (
                    <WrapItem key={index}>
                        <Tag size={'md'} variant={typesVariants[1]} colorScheme={tag.color}  >
                            {tag.tag}
                        </Tag>
                    </WrapItem>
                )
            })}
        </Wrap>
    )
};

export default function HomeCards({ mural, data, chosenLayout }: any) {
    /*   console.log(data) */
    /* const base64Data = Buffer.from(data?.imageData?.data).toString('base64');
    let scr = `data:image/jpeg;base64,${base64Data}`;*/

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
        <WrapItem width={mural ? muralConfigs[chosenLayout] : isCarouselWrapItemSettings}  >
            <Box w="100%">

                {/* #######################Categorias em cima do titulo se  for mural####################### */}
                {mural ?
                    <Heading fontSize="15" fontWeight={"bold"} color={'gray.600'} position={"relative"} mb={1} >
                        <Link textDecoration="aqua" _hover={{ color: 'gray' }} textTransform={'uppercase'}>
                            {data?.categoria.nome}
                        </Link>
                    </Heading>
                    :
                    null
                }


                <Box borderRadius="md" overflow="hidden" >
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
                        />
                    </Link>
                </Box>



                {/* #######################Tags entre o titulo e a imagem se nao for mural####################### */}
                {mural ?
                    null
                    :

                    <BlogTags tags={data?.tags || ['Engineering', 'Product']} marginTop="3" />

                }



                <Heading fontSize="xl" >
                    <Link href={`/categoria/noticia/${data.id}`} textDecoration="none" _hover={{ textDecoration: 'none', color: 'gray' }}>
                        {data?.titulo}
                    </Link>
                </Heading>
            </Box>
        </WrapItem>
    )
}














