import axiosNest from "@/services/axiosNest";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import PaginaNaoEncontrada from "@/pages/404";
import CategoriesList from "@/components/CategoriesList";

const EventoHome: NextPage = (props: any) => {
  /* if (props.hasError) {
    return (
      <>
        <PaginaNaoEncontrada />
      </>
    );
  } */

  return (
    <>
      <CategoriesList /* eventAndIdeias={props.evento} */ />;
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
  /*  let data: any = [];
   try {
     const response = await axiosNest.get(
       `http://localhost:3335/api/banco-ideias/evento/${ctx.params.categName}`
     );
 
     data = response.data;
   } catch (error) {
 
   }
 
   if (!data) {
     return {
       props: { hasError: true },
     };
   }
  */
  return {
    props: {
      /* evento: data, */
    },
    revalidate: 10,
  };
};

export default EventoHome;
