import React, { useState } from "react";
import {
  Heading,
  VStack,
  Input,
  useToast,
  Box,
  Button,
} from "@chakra-ui/react";
import axiosNest from "@/services/axiosNest";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Stats from "./components/Stats";
import { ReactSelect } from "@/components/Select";
import { noticiaFormValidation } from "./validations";

type CreateNoticiaFormValues = {
  titulo: string;
  resumo: string;
  observacao: string;
  idColaborador: number;
  idCategoria: number;
  ativo: "S" | "N";
};

const cadastrarIdeiaSchema = yup
  .object()
  .shape({
    ...noticiaFormValidation,
  })
  .required();

export default function CreateNoticiaForm({ categs, tags }: any) {
  const colabs = [{ value: 1, label: "Ian" }]
  const toast = useToast();
  const [data, setData] = useState();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNoticiaFormValues>({
    resolver: yupResolver(cadastrarIdeiaSchema),
  });

  const onSubmit = async (data: any) => {

    const noticiaData = {
      titulo: data?.titulo,
      resumo: data?.resumo,
      observacao: data?.observacao,
      idCategoria: data?.idCategoria?.value,
      idColaborador: data?.idColaborador?.value,
    }
    axiosNest
      .post("http://localhost:8000/api/news/noticia", {
        ...noticiaData
      })
      .then((res) => {
        toast({
          title: "Noticia Cadastrada com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log(res.data)
        /* setData(data); */
      })
      .catch(() => {
        toast({
          title: "Não foi possivel criar a Noticia!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
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
            <ReactSelect
              key="idColaborador"
              name={"idColaborador"}
              options={colabs}
              control={control}
              placeholder="Selecione uma categoria"
            />
          </div>
          <Input type="text" placeholder="Título" {...register("titulo")} />
          <Input
            h={100}
            type="text"
            placeholder="Escreva um resumo..."
            {...register("resumo")}
          />
          <Input
            type="text"
            placeholder="Observação"
            {...register("observacao")}
          />
          <span role="alert">{errors.observacao?.message}</span>
          <div style={{ width: 500 }}>
            <ReactSelect
              key="tags"
              isColored
              name={"tags"}
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

  );
}
