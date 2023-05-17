
import React from 'react';
import { GetServerSideProps } from "next";
import axiosNest from '../services/axiosNest';
import config from '../public/siteConfig.json'
import PaginaInicial from '../components/Home';
import PaginaNaoEncontrada from '../components/404/404';


export default function Home({ homeData, hasError }: any) {
  if (hasError) {
    return <PaginaNaoEncontrada />
  }
  return <PaginaInicial homeData={homeData} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  let homeData: any = [];
  try {
    const response = await axiosNest.get('/news/home-news', {
      params: {
        layoutType: config.layout,
        idSite: config.idSite
      },
      headers: {
        //Authorization: Api Simple Authorization
      }
    })
    homeData = response.data

  } catch (error) {
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





