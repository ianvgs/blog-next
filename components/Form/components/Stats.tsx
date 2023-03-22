import {
  Heading,
  VStack,
  Stack,
  Stat,
  StatLabel,
  Divider,
} from "@chakra-ui/react";

import React from "react";

export default function Stats(data: any) {
  const formData = data.data;
  const array: any = Object.entries(formData);

  return (
    <Stat mt={5}>
    {/*   ///PENSAR EM USAR EM MODO DEV */}
      <Stack
        p={4}
        borderWidth="3px"
        borderRadius="md"
        direction="column"
        align="center"
      >
        <Heading my={2} as="h4" fontSize="20px">
          Submitted Result
        </Heading>
        <VStack>
          {array.map((value: any) => (
            <>
              <StatLabel>Chave | InputFieldName:{value[0]}</StatLabel>
              <StatLabel>Valor | InputFieldValue:{value[1]}</StatLabel>
              <Divider />
            </>
          ))}
        </VStack>
      </Stack>
    </Stat>
  );
}
