import {
  ChakraProvider,
  Code,
  Grid,
  Link,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid textAlign="center" fontSize="xl" minH="100vh" p="3">
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack as="main" spacing="8">
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            href="https://chakra-ui.com"
            isExternal
            color="teal.500"
            fontSize="2xl"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </ChakraProvider>
  );
}
