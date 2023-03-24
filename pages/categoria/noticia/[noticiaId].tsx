
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NoticiaDetails from "@/components/NoticiaDetails";
import PaginaNaoEncontrada from "@/pages/404";
import axiosNest from "@/services/axiosNest";

const IdeiaHome: NextPage = ({ hasError, noticia }) => {
  if (hasError) {
    return <PaginaNaoEncontrada />;
  }
  return <NoticiaDetails {...noticia} />;
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
    const response = await axiosNest.get(
      `/news/noticia/${ctx.params.noticiaId}`
    );

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
      noticia: data,
    },
    revalidate: 10,
  };
};

export default IdeiaHome;
