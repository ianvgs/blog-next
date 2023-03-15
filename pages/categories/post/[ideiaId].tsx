import axiosNest from "@services/axiosNest";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import IdeiaDetails from "@components/IdeiaDetails";
import PaginaNaoEncontrada from "@pages/404";

const IdeiaHome: NextPage = (props: any) => {
  if (props.hasError) {
    return <PaginaNaoEncontrada />;
  }
  return <IdeiaDetails props={props} />;
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
      `http://localhost:3335/api/banco-ideias/ideia/${ctx.params.ideiaId}`
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
      ideia: data,
    },
    revalidate: 10,
  };
};

export default IdeiaHome;
