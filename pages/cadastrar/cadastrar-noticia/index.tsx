import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import CreateNoticiaForm from "../../../components/Form/CreateNoticiaForm";
import axiosNest from "../../../services/axiosNest";
import { HStack, VStack } from "@chakra-ui/react";
import CreateCategoriaForm from "../../../components/Form/CreateCategoriaForm";
import CreateTagForm from "../../../components/Form/CreateTagForm";

const CadastrarNoticia: NextPage = (props: any) => {
  const { categorias, tags, colaboradores } = props.data;
  return (

    <VStack>
      <HStack>
        <CreateTagForm />
        <CreateCategoriaForm />
      </HStack>
      <CreateNoticiaForm categs={categorias} tags={tags} colabs={colaboradores} />
    </VStack>
  )
};

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  const cookies = ctx.req.cookies;
  let data: any = [];
  try {
    const response = await axiosNest.get("/news/cad-noticia-form");
    data = response.data[0];

  } catch { }
  return {
    props: {
      data,
    },
  };
};

export default CadastrarNoticia;
