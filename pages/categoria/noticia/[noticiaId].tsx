
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NoticiaDetails from "../../../components/NoticiaDetails";
import PaginaNaoEncontrada from "../../../components/404/404";
import axiosNest from "../../../services/axiosNest";
import config from '../../../public/siteConfig.json'

const IdeiaHome: NextPage = ({ hasError, noticia }: any) => {
  if (hasError === true) {
    return <PaginaNaoEncontrada />;
  }
  return <NoticiaDetails {...noticia} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = [{ params: { noticiaId: '1' } }]
  /*   try {
      const response = await axiosNest.get(
        `/news/noticia/get-to-build/${config.idSite}`
      );
      if (response.data) {
        paths = await response?.data.map((noticia: any) => {
          return {
            params: {
              noticiaId: noticia.id.toString()
            }
          }
        })
      } else {
        paths = [{ params: { noticiaId: '1' } }]
      }
    } catch (error) {
      paths = [{ params: { noticiaId: '1' } }]
    } */


  return {
    //revalidate: 60//,(1minuto)
    paths,
    fallback: "blocking",//espera a pagina ficar pronta(nao pisca)
    //Nao encontrei o caminho, o que faço?
    //fallback: false, => sinto muito
    //fallback: true, => renderizo a pagina sem json (pisca0 necessario usar elvis?)
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

    console.log(response.data)

  } catch (error) {
    return {
      props: { hasError: true },
      /* revalidate: 3600, */
    };
  }

  return {
    props: {
      noticia: data,
      revalidate: 30,
      hasError: false
    },

  };
};

export default IdeiaHome;
