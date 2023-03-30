import React, { useState } from "react";
import {
  Heading,
  VStack,
  Input,
  useToast,
  Box,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";
import axiosNest from "@/services/axiosNest";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Stats from "./components/Stats";
import { ReactSelect } from "@/components/Select";
import { noticiaFormValidation } from "./validations";
import TinyMCE from "../TinyMCE";


type CreateNoticiaFormValues = {
  titulo: string;
  resumo: string;
  texto: string;
  idColaborador: number | null;
  idCategoria: number | null;
  tags: any[];
};

const cadastrarIdeiaSchema = yup
  .object()
  .shape({
    ...noticiaFormValidation,
  })
  .required();

export default function CreateNoticiaForm({ categs, tags, colabs }: any) {

  const toast = useToast();
  const [data, setData] = useState();
  const defaultValues = {
    titulo: "",
    resumo: "",
    texto: "",
    idColaborador: null,
    idCategoria: null,
    tags: [""],
  };


  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateNoticiaFormValues>({
    defaultValues,
    resolver: yupResolver(cadastrarIdeiaSchema),
  });

  const onSubmit = async (data: any) => {
    let tagArray: [] = []

    if (data.tags) {
      tagArray = data?.tags.map((each: any) => {
        const userData = {
          id: ""
        }
        userData.id = each?.value
        return userData
      })
    }
    const noticiaData = {
      titulo: data?.titulo,
      resumo: data?.resumo,
      texto: data?.texto,
      idCategoria: data?.idCategoria?.value,
      idColaborador: data?.idColaborador?.value,
      tags: tagArray
    }
    axiosNest
      .post("http://localhost:8000/api/news/noticia", {
        ...noticiaData
      })
      .then((res) => {
        reset(defaultValues);

        toast({
          title: "Noticia Cadastrada com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

      })
      .catch(() => {
        toast({
          title: "Não foi possivel criar a Noticia!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
    reset();
  };

  const [content, setContent] = useState('')
  const onDirty = (e: any, editor: any) => {
    setContent(editor.getContent())
  }



  return (
    <>
      <HStack width={"80%"} justifyContent={"space-evenly"} >
        <TinyMCE defaultValue={content} onDirty={onDirty} />
        <Box>
          <div dangerouslySetInnerHTML={{ __html: content }} />

          <div>{content}</div>
        </Box>
      </HStack>
      <VStack mt={8} spacing="3px">
        <Heading as="h1" > Cadastrar Noticia</Heading >
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack width={500}>
            <div style={{ width: 500 }}>
              <ReactSelect
                key="idCategoria"
                name={"idCategoria"}
                options={categs}
                control={control}
                placeholder="Selecione uma categoria"
              />
              <span role="alert">{errors.idCategoria?.message}</span>
              <ReactSelect
                key="idColaborador"
                name={"idColaborador"}
                options={colabs}
                control={control}
                placeholder="Selecione um colaborador"
              />
              <span role="alert">{errors.idColaborador?.message}</span>
            </div>
            <Input type="text" placeholder="Título" {...register("titulo")} />
            <span role="alert">{errors.titulo?.message}</span>
            <Input
              h={100}
              type="text"
              placeholder="Escreva um resumo..."
              {...register("resumo")}
            />
            <span role="alert">{errors.resumo?.message}</span>
            <Input
              type="text"
              placeholder="Texto"
              {...register("texto")}
            />
            <span role="alert">{errors.texto?.message}</span>
            <div style={{ width: 500 }}>
              <ReactSelect
                key="tags"
                name={"tags"}
                isColored
                options={tags}
                control={control}
                isMulti
                placeholder="Adicionar tags"
              />
            </div>
            <Button
              borderRadius="md"
              bg="cyan.600"
              _hover={{ bg: "cyan.200" }}
              variant="ghost"
              type="submit"
            >
              Cadastrar
            </Button>
          </VStack>
        </form>
        {data && <Stats data={data} />}

      </VStack>
    </>
  );
}
