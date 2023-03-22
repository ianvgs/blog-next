import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import CreateNoticiaForm from "@/components/Form/CreateNoticiaForm";
import axiosNest from "@/services/axiosNest";

const CadastrarNoticia: NextPage = (props: any) => {
  const { categorias, tags, colaboradores } = props.data;
  return <CreateNoticiaForm categs={categorias} tags={tags} colabs={colaboradores} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  const cookies = ctx.req.cookies;
  let data: any = [];
  try {
    const response = await axiosNest.get("/news/cad-noticia-form");
    data = response.data[0];
    console.log(data)
  } catch { }
  return {
    props: {
      data,
    },
  };
};

export default CadastrarNoticia;
