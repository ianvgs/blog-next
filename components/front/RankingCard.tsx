
import {
    Avatar,
    Box,
    Divider,
    Flex,
    Heading,
    Text,
    Image,
    VStack,
    Stack
} from "@chakra-ui/react";
import ProgressBar from "./progressbar";

export default function RankingCard({ progress }: any) {


    return (<>
        <VStack h={150} /* bg={"red"} */ padding={3} justifyContent={"space-between"}>
            <Divider />
            <Box w={"100%"}>
                <Flex flex='1' justifyContent={"space-between"} alignItems='center' >
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
            </Box>
            <Box w={"100%"}>
                {<ProgressBar height={15} progress={progress} />}
            </Box>
        </VStack>

    </>
    );
}



