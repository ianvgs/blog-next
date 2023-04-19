import { Link } from "@chakra-ui/react";

export const NavLink = ({ linkData, lightText }) => (
    <Link
        color={lightText ? 'white' : 'blackAlpha.800'}
        fontWeight={600}
        fontSize={13}
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: 'gray.200'
        }}
        href={linkData.endereco}>
        {linkData.nome}
    </Link >
);