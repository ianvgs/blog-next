
import {
    Avatar,
    Box,
    Divider,
    Flex,
    Heading,
    Text,
    Image

} from "@chakra-ui/react";
import ProgressBar from "./progressbar";

export default function RankingCard(index: any) {
    console.log(index)
    return (<>
        <Box h={120} padding={5} >
            <Flex flex='1' justifyContent={"space-between"} gap='4' alignItems='center' mb={1}>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Box>
                    <Heading size='sm'>Segun Adebayo</Heading>
                    <Text>Creator, Chakra UI</Text>
                </Box>
                <Image
                    w={"10%"}
                    h={"10%"}
                    src="coin.png"
                    alt="coins"
                />
            </Flex>
            <ProgressBar height={20} bgcolor={"#90ee90"} progress={(index.index * 25)} />
        </Box>
        <Divider />
    </>
    );
}



