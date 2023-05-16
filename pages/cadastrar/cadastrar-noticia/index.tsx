import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import CreateNoticiaForm from "../../../components/Form/CreateNoticiaForm";
import axiosNest from "../../../services/axiosNest";
import { Box, Flex, Heading, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, VStack } from "@chakra-ui/react";
import CreateCategoriaForm from "../../../components/Form/CreateCategoriaForm";
import CreateTagForm from "../../../components/Form/CreateTagForm";
import config from '../../../public/siteConfig.json'

const CadastrarNoticia: NextPage = (props: any) => {
  const { categorias, tags, colaboradores } = props.data;
  return (
    <Box mt={8} mx="auto" w={"90%"} height={"100%"} mb="10"
      borderWidth="3px"
      rounded="lg"
      shadow="lg"
    >      <Tabs isFitted variant='enclosed-colored'>
        <TabList mb='1em' >
          <Tab><Heading>Cadastrar Noticia</Heading></Tab>
          <Tab><Heading>Gerenciar Tags & Categorias</Heading></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CreateNoticiaForm categs={categorias} tags={tags} colabs={colaboradores} />
          </TabPanel>
          <TabPanel>
            <Flex justifyContent={"space-evenly"}>
              <CreateTagForm />
              <CreateCategoriaForm />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Box >


  )
};

export const getServerSideProps: GetServerSideProps = async (ctx: {
  req: { cookies: any };
}) => {
  /* const { jwtToken } = ctx.req.cookies;

  let user = {}
  try {
    const response = await axiosNest.get('/user/me', {
      headers: {
        'Authorization': `Bearer ${jwtToken}`
      }
    })
    if (response) {
      user = response.data;
    }
  } catch (error) {
    return {
      redirect: {
        destination:
          "http://localhost:3000/login",
        permanent: false,
      },
    };
  } */



  let data: any = [];
  try {
    const response = await axiosNest.get("/news/cad-noticia-form", {
      params: {
        idSite: config.idSite
      }
    });
    data = response.data[0];

  } catch { }
  return {
    props: {
      data

    },
  };
};

export default CadastrarNoticia;
