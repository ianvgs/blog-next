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
import { ReactSelect } from "@/components/Select";
import { tagFormValidation } from "./validations";



import config from '../../public/siteConfig.json';



type CreateTagFormValues = {
    tag: string;
    color: string;
};


const cadastrarTagSchema = yup
    .object()
    .shape({
        ...tagFormValidation,
    })
    .required();

export default function CreateTagForm() {
    const idSite = config['idSite'];
    const apiUrl = config["apiUrl"]


    const colorSchemeOptions = [{ value: 'blackAlpha', label: 'blackAlpha', color: 'blackAlpha' }, { value: 'gray', label: 'gray', color: 'gray' }, { value: 'red', label: 'red', color: 'red' }, { value: 'orange', label: 'orange', color: 'orange' }, { value: 'yellow', label: 'yellow', color: 'yellow' }, { value: 'green', label: 'green', color: 'green' }, { value: 'teal', label: 'teal', color: 'teal' }, { value: 'blue', label: 'blue', color: 'blue' }, { value: 'cyan', label: 'cyan', color: 'cyan' }, { value: 'purple', label: 'purple', color: 'purple' }, { value: 'pink', label: 'pink', color: 'pink' }, { value: 'linkedin', label: 'linkedin', color: 'linkedin' }, { value: 'facebook', label: 'facebook', color: 'facebook' }, { value: 'messenger', label: 'messenger', color: 'messenger' }, { value: 'whatsapp', label: 'whatsapp', color: 'whatsapp' }, { value: 'twitter', label: 'twitter', color: 'twitter' }, { value: 'telegram', label: 'telegram', color: 'telegram' }]

    const toast = useToast();
    const defaultValues = {
        //////Categoria Fields
        tag: "",
        color: "",
    };

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateTagFormValues>({
        defaultValues,
        resolver: yupResolver(cadastrarTagSchema),
    });

    const onTagSubmit = async (data: any) => {
        const tagData = {
            tag: data?.tag,
            color: data?.color.value,
            idSite
        }

        axiosNest
            .post(`${apiUrl}/news/tag`, {
                ...tagData
            })
            .then((res) => {
                reset(defaultValues);
                toast({
                    title: "Tag Cadastrada com sucesso!",
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
            <form onSubmit={handleSubmit(onTagSubmit)}>
                <VStack border={"1px"} borderColor={"gray.400"} shadow={"lg"} w="400px" minW="400px" padding={3} rounded="lg" >
                    <Heading fontSize={"lg"} as="h1"> Cadastrar Tag</Heading >

                    <ReactSelect
                        key="color"
                        name={"color"}
                        options={colorSchemeOptions}
                        control={control}
                        placeholder="Selecione uma cor"
                    />
                    <span role="alert">{errors.color?.message}</span>


                    <Input margin={2} type="text" placeholder="Tag" {...register("tag")} />
                    <span role="alert">{errors.tag?.message}</span>

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
