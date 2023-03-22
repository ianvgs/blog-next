
import React from 'react';
import { GetServerSideProps } from "next";
import Index from '@/components/Home';
import axiosNest from '@/services/axiosNest';

export default function Home({ homeData }) {
  return (
    <Index homeData={homeData} />
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  const cookies = ctx.req.cookies;

  const data = await axiosNest.get('/news/home-news')
  const homeData = data.data

  return {
    props: {
      homeData
    },
  };
};





