
import React from 'react';
import { GetServerSideProps } from "next";
import Index from '@/components/Home';
import axiosNest from '@/services/axiosNest';
import PaginaNaoEncontrada from './404';
import { useLinkStore } from '@/contexts/linksNavBarStore';

export default function Home({ homeData, navLinks, hasError }: any) {
  if (hasError) {
    return (
      <>
        <PaginaNaoEncontrada />
      </>
    );
  }
  if (navLinks) {
    console.log(navLinks)
    const addLinks = useLinkStore((state) => state.addLinks)
    addLinks(navLinks)
  }

  return (

    <Index homeData={homeData} />

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  const cookies = ctx.req.cookies;
  let homeData: any = [];
  let navLinks: any = [];

  try {
    const response = await axiosNest.get('/news/home-news')
    homeData = response.data

    const categs = await axiosNest.get('/news/categoria')
    navLinks = categs?.data?.map(({ id, nome, sufixurl }) => ({
      nome: nome,
      endereco: `/categoria/${sufixurl}`,
      id: id
    }));
  } catch (error) {
    return {
      props: { hasError: true },
    };
  }


  if (!homeData) {
    return {
      props: { hasError: true },
    };
  }
  /*  console.log(navLinks) */

  return {
    props: {
      homeData,
      navLinks
    },
  };
};





