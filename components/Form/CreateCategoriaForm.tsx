import React from "react";
import {
    Heading,
    VStack,
    Input,
    useToast,
    Button,
    HStack,
} from "@chakra-ui/react";
import axiosNest from "@/services/axiosNest";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { categoriaFormValidation } from "./validations";

type CreateCategoriaFormValues = {
    nome: string;
    sufixurl: string;
    descricao: string;
    ////////
    idSite?: number;
};

const cadastrarCategoriaSchema = yup
    .object()
    .shape({
        ...categoriaFormValidation,
    })
    .required();

export default function CreateCategoriaForm() {
    const toast = useToast();

    const defaultValues = {
        nome: "",
        sufixurl: "",
        descricao: ""
    };

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateCategoriaFormValues>({
        defaultValues,
        resolver: yupResolver(cadastrarCategoriaSchema),
    });


    const onCategoriaSubmit = async (data: any) => {
        const categoriaData = {
            nome: data?.nome,
            sufixurl: data?.sufixurl,
            descricao: data?.descricao,
            idSite: 1
        }
        axiosNest
            .post("http://localhost:8000/api/news/categoria", {
                ...categoriaData
            })
            .then((res) => {
                reset(defaultValues);
                toast({
                    title: "Categoria Cadastrada com sucesso!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            })
            .catch(() => {
                toast({
                    title: "Não foi possivel criar a Noticia!",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            });
    };

    return (

        <HStack paddingY={30} justifyContent="space-around" >
            <form onSubmit={handleSubmit(onCategoriaSubmit)}>
                <VStack border={"1px"} borderColor={"gray.400"} shadow={"lg"} w="400px" minW="400px" padding={3} rounded="lg" >
                    <Heading fontSize={"lg"} as="h1"> Cadastrar Categoria</Heading >
                    <Input margin={2} type="text" placeholder="Nome" {...register("nome")} />
                    <span role="alert">{errors.nome?.message}</span>

                    <Input margin={2} type="text" placeholder="Sufixo da url 'categoria/sufixo?'" {...register("sufixurl")} />
                    <span role="alert">{errors.sufixurl?.message}</span>

                    <Input margin={2} type="text" placeholder="Descrição" {...register("descricao")} />
                    <span role="alert">{errors.descricao?.message}</span>


                    <HStack>
                        <Button
                            margin={2}
                            borderRadius="md"
                            bg="cyan.600"
                            _hover={{ bg: "cyan.200" }}
                            variant="ghost"
                            type="submit"
                        >
                            Cadastrar
                        </Button>

                    </HStack>
                </VStack >
            </form >
        </HStack >



    );
}
