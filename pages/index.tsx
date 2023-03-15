import { Inter } from 'next/font/google'
import React from 'react';
import {
  SpaceProps,
} from '@chakra-ui/react';

import { GetServerSideProps } from "next";
import Index from '@/components/Home';
/* import axiosNest from "@services/axiosNest"; */


export default function Home() {
  return (
    <Index />
  )

}

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  const cookies = ctx.req.cookies;
  return {
    props: {

    },
  };
};





