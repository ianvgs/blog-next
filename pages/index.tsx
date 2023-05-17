
import React from 'react';
import { GetServerSideProps } from "next";
import axiosNest from '../services/axiosNest';
import config from '../public/siteConfig.json'
import FinancialLayout from '../components/Home/financial';
import GeneralLayout from '../components/Home/general';
import PaginaNaoEncontrada from '../components/404/404';


export default function PaginaInicial({ homeData, hasError, siteTypeLayout }: any) {
  //Caso não carregue as informações
  if (hasError) {
    return <PaginaNaoEncontrada />
  }
  //1 financial
  if (siteTypeLayout == 1) {
    return <FinancialLayout homeData={homeData} />
  }

  //2 noticias gerais
  if (siteTypeLayout == 2) {
    return <GeneralLayout homeData={homeData} />
  }
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
      siteTypeLayout: config.layout,
    },
  };
};





