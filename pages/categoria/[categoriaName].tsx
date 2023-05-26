
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import CategoriaListaNoticias from "../../components/CategoriaListaNoticias";
import axiosNest from "../../services/axiosNest";
import PaginaNaoEncontrada from "../../components/404/404";
import config from '../../public/siteConfig.json'


const EventoHome: NextPage = (props: any) => {
  /* ({ hasError, noticia }: any) */
  if (props.hasError === true) {
    return (
      <PaginaNaoEncontrada />
    )
  }

  return (
    <CategoriaListaNoticias {...props} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = config["links-categorias"].map((item) => ({
    params: {
      categoriaName: item["next-path"],
    },
  }));
  return {
    paths,
    fallback: "blocking",
    /*  revalidate: 60, */
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  let data: any = [];
  try {
    const response = await axiosNest.get(`news/categoria/${ctx.params.categoriaName}`,
      {
        params: {
          idSite: config.idSite
        }
      });
    data = response.data;
  } catch (error) {
    return {
      props: { hasError: true },
    }
  }
  return {
    props: {
      categoria: data,
      hasError: false
    },
  };
};

export default EventoHome;
