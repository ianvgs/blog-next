
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NoticiaDetails from "../../../components/NoticiaDetails";
import PaginaNaoEncontrada from "../../../pages/404";
import axiosNest from "../../../services/axiosNest";
import config from '../../../public/siteConfig.json'

const IdeiaHome: NextPage = ({ hasError, noticia }: any) => {
  if (hasError === true) {
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
      `/news/noticia/${ctx.params.noticiaId}`,
      {
        params: {
          idSite: config.idSite
        }
      }
    );
    data = response.data;
  } catch (error) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      noticia: data,
      hasError: false
    },
    revalidate: 10,
  };
};

export default IdeiaHome;
