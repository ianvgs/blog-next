import React, { useState } from "react";
import {
  Heading,
  VStack,
  Input,
  useToast,
  Button,
  HStack,

} from "@chakra-ui/react";
import axiosNest from "../../services/axiosNest";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactSelect } from "../../components/Select";
import { noticiaFormValidation } from "./validations";
import TinyMCE from "../TinyMCE";
import config from '../../public/siteConfig.json';
import UploadArquivo from "../UploadArquivo";

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

  const idSite = config['idSite'];


  const toast = useToast();
  const [textContent, setTextContent] = useState('')
  const onEditorChange = (e: any, editor: any) => {
    setTextContent(editor.getContent())
  }

  const defaultValues = {
    titulo: "",
    resumo: "",
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
      idSite,
      titulo: data?.titulo,
      resumo: data?.resumo,
      idCategoria: data?.idCategoria?.value,
      idColaborador: data?.idColaborador?.value,
      tags: tagArray,
      texto: textContent
    }

    axiosNest
      .post("http://localhost:8000/api/news/noticia", {
        ...noticiaData
      })
      .then((res) => {
        reset(defaultValues);
        setTextContent('')
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
          duration: 5000,
          isClosable: true,
        });
      });
  };




  {/* <Box>
    <div dangerouslySetInnerHTML={{ __html: textContent }} />
    <div>{textContent}</div>
  </Box> */}

  return (
    <HStack paddingY={30} justifyContent="space-evenly" alignItems={"self-start"} >

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack border={"1px"} borderColor={"gray.400"} shadow={"lg"} w="400px" minW="400px" padding={3} rounded="lg" alignItems={"center"}>
          <UploadArquivo />

          <Heading fontSize={"lg"} as="h1"> Cadastrar Noticia</Heading >
          <ReactSelect
            key="idColaborador"
            name={"idColaborador"}
            options={colabs}
            control={control}
            placeholder="Selecione um colaborador"
          />
          <span role="alert">{errors.idColaborador?.message}</span>
          <ReactSelect
            key="idCategoria"
            name={"idCategoria"}
            options={categs}
            control={control}
            placeholder="Selecione uma categoria"
          />
          <span role="alert">{errors.idCategoria?.message}</span>
          <ReactSelect
            margin={2}
            key="tags"
            name={"tags"}
            isColored
            options={tags}
            control={control}
            isMulti
            placeholder="Adicionar tags"
          />
          <Input margin={2} type="text" placeholder="Título" {...register("titulo")} />
          <span role="alert">{errors.titulo?.message}</span>
          <Input
            margin={2}
            h={150}
            type="text"
            placeholder="Escreva um resumo..."
            {...register("resumo")}
          />
          <span role="alert">{errors.resumo?.message}</span>
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


      <TinyMCE defaultValue={textContent} onEditorChange={onEditorChange} />



    </HStack >
  );
}
