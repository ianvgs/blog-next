import axiosNest from "@services/axiosNest";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import IdeiasList from "@components/IdeiasList";
import PaginaNaoEncontrada from "@pages/404";

const EventoHome: NextPage = (props: any) => {
  if (props.hasError) {
    return (
      <>
        <PaginaNaoEncontrada />
      </>
    );
  }

  return (
    <>
      <IdeiasList eventAndIdeias={props.evento} />;
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
    const response = await axiosNest.get(
      `http://localhost:3335/api/banco-ideias/evento/${ctx.params.eventoId}`
    );

    data = response.data;
  } catch (error) {
    console.log(error);
  }

  if (!data) {
    return {
      props: { hasError: true },
    };
  }

  return {
    props: {
      evento: data,
    },
    revalidate: 10,
  };
};

export default EventoHome;
