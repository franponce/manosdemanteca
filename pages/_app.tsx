import * as React from "react";
import Head from "next/head";
import {
  ChakraProvider,
  Heading,
  Text,
  Image,
  Container,
  Stack,
  Divider,
  Link,
  Box,
  Flex,
} from "@chakra-ui/react";
import {AppProps} from "next/app";
import {Global, css} from "@emotion/react";

import theme from "../theme";
import {INFORMATION} from "../app/constants";

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Global
        styles={css`
          * {
            font-family: "Jost" !important;
          }
        `}
      />
      <Head>
        <title>Manos de manteca - Catálogo online</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Inicio de meta tags de licencia - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
        <meta content="goncy" name="author" />
        <meta content="Gonzalo Pozzo" name="copyright" />
        {/* Fin de meta tags de licencia */}
        <link href="https://fonts.googleapis.com/css2?family=Jost&display=swap" rel="stylesheet" />
      </Head>
      <ChakraProvider theme={theme}>
        <Container backgroundColor="white" borderRadius="sm" maxWidth="container.xl" padding={4}>
          <Stack spacing={8}>
            <Stack marginBottom={4} spacing={4}>
              <Image borderRadius="lg" height="100%" maxHeight={64} objectFit="cover" />
              <Stack
                alignItems="center"
                direction={{base: "column", sm: "row"}}
                spacing={{base: 3, sm: 6}}
              >
                <Box
                  backgroundColor="white"
                  borderRadius={9999}
                  marginTop={{base: -12, sm: -16}}
                  minWidth={{base: 24, sm: 32}}
                  padding={1}
                >
                  <Image
                    borderRadius={9999}
                    height={{base: 24, sm: 32}}
                    src={INFORMATION.avatar}
                    width={{base: 24, sm: 32}}
                  />
                </Box>
                <Stack
                  alignItems={{base: "center", sm: "flex-start"}}
                  spacing={3}
                  textAlign={{base: "center", sm: "left"}}
                >
                  <Stack spacing={0}>
                    <Heading>{INFORMATION.title}</Heading>
                    <Text color="gray.500" fontWeight="500">
                      {INFORMATION.description}
                    </Text>
                    <Text color="gray.500" fontWeight="500">
                      {INFORMATION.description2}
                    </Text>
                  </Stack>
                  <Stack direction="row">
                    {INFORMATION.social.map((social) => (
                      <Link key={social.name} isExternal href={social.url}>
                        <Flex
                          alignItems="center"
                          backgroundColor="#df7777"
                          borderRadius={9999}
                          color="white"
                          height={10}
                          justifyContent="center"
                          width={10}
                        >
                          <Image
                            src={`https://icongr.am/fontawesome/${social.name}.svg?size=24&color=ffffff`}
                          />
                        </Flex>
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Component {...pageProps} />
          </Stack>
          <Divider marginY={4} />
          {/* Inicio de copyright - Cambiar el contenido de los mismos viola el contenido de los terminos de licencia */}
          <Text textAlign="center">© Copyright {new Date().getFullYear()}. Hecho con ♥</Text>
          {/* Fin de copyright */}
        </Container>
      </ChakraProvider>
    </>
  );
};

export default App;
