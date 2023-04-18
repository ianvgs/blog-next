
import React from 'react';
import { GetServerSideProps } from "next";
import Index from '@/components/Home';
import axiosNest from '@/services/axiosNest';
import PaginaNaoEncontrada from './404';
import config from '../public/siteConfig.json'



export default function Home({ homeData, hasError }: any) {
  if (hasError) {
    return (
      <>
        <PaginaNaoEncontrada />
      </>
    );
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
  try {
    const response = await axiosNest.get('/news/home-news', {
      params: {
        layoutType: config.layout
      }
    })

    homeData = response.data
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


  return {
    props: {
      homeData,
    },
  };
};





