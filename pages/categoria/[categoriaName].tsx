
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import CategoriaListaNoticias from "@/components/CategoriaListaNoticias";
import axiosNest from "@/services/axiosNest";
import PaginaNaoEncontrada from "../404";

const EventoHome: NextPage = (props: any) => {

  /* categoria: {
    id: 1,
    nome: 'Esportes',
    descricao: 'Sobre esportes',
    img: 'img',
    bloqueio: 's',
    ativo: 's',
    dataVencimento: null,
    createdAt: '2023-03-23T01:27:28.317Z',
    updatedAt: '2023-03-23T01:44:34.594Z',
    noticias: [
      [Object], [Object],      
    ]
  } */


  console.log(props)
  if (props.hasError) {

    return (
      <>
        <PaginaNaoEncontrada />
      </>
    );
  }

  return (
    <>
      <CategoriaListaNoticias {...props} />;
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let data: any = [];
  try {
    const response = await axiosNest.get(`news/categoria/${ctx.params.categoriaName}`);
    data = response.data;
  } catch (error) {

  }
  if (!data) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      categoria: data,
    },
    revalidate: 10,
  };
};

export default EventoHome;
