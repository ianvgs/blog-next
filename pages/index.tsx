
import React from 'react';
import { GetServerSideProps } from "next";
import Index from '@/components/Home';
import axiosNest from '@/services/axiosNest';

export default function Home({ homeData }: any) {

  //if errors
  // returns (não foi possivel carregar a pagina)


  return (
    <Index homeData={homeData} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  const cookies = ctx.req.cookies;

  const response = await axiosNest.get('/news/home-news')
  let errors = {}

  if (!response.data.ultimasNoticias || !response.data.noticiasMaisLidas) {
    //send email: HOME PAGE FORA, SEM CONEXÂO COM BACKEND
  }
  const homeData = response.data

  return {
    props: {
      homeData
    },
  };
};





