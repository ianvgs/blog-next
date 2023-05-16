import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axiosNest from '@/services/axiosNest';
import { useRouter } from 'next/router';

export default function SignupCard() {
    const { push } = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        axiosNest
            .post("http://localhost:8000/api/login", {
                email: formData.email,
                password: formData.password
            }
            )
            .then((res) => {
                const { access_token } = res.data
                const setCookie = (name: any, value: any, options: any = {}) => {
                    let expires = options.expires;
                    if (typeof expires == "number" && expires) {
                        const d = new Date();
                        d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
                        expires = options.expires = d;
                    }

                    if (expires && expires.toUTCString) {
                        options.expires = expires.toUTCString();
                    }

                    value = encodeURIComponent(value);
                    let updatedCookie = name + "=" + value;

                    for (let propName in options) {
                        updatedCookie += "; " + propName;
                        let propValue = options[propName];
                        if (propValue !== true) {
                            updatedCookie += "=" + propValue;
                        }
                    }

                    document.cookie = updatedCookie;
                }
                setCookie('jwtToken', access_token, { expires: 7 });
                push('/cadastrar/cadastrar-noticia')
            })
            .catch(() => {
            });
    };


















    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Login
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="email" isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} />
                                <InputRightElement h={'full'}>
                                    <Button
                                        variant={'ghost'}
                                        onClick={() =>
                                            setShowPassword((showPassword) => !showPassword)
                                        }>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>



                        <Stack spacing={10} pt={2}>
                            <Button
                                onClick={handleSubmit}
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Login
                            </Button>
                        </Stack>

                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}