/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Heading, Text } from '@chakra-ui/react';
import { colors, gutters, sizes } from '../../styles/neonLaw';

import { Container } from '../container';
import React from 'react';
import { theme } from '@chakra-ui/react';

interface HeroProps {
  title: string;
  text: string;
  buttonText: string;
}

export const Hero = ({ title, text }: HeroProps) => (
  <Box
    as="section"
    display="flex"
    alignItems="center"
    maxHeight="1200px"
    minHeight="600px"
    height="100vh"
    color={colors.text.dark}
    background={`linear-gradient(
      to right, rgba(0,0,0, .6), rgba(0,0,0, .9)),
      url('/images/banner.jpg')`}
    backgroundSize="cover"
    backgroundPosition="left"
    backgroundAttachment="fixed"
  >
    <Container>
      <Box maxWidth={['400px', '500px', sizes.textContainerSmall]}>
        <Heading
          as="h1"
          fontSize={[
            theme.fontSizes['xl1'],
            theme.fontSizes['xl0'],
            theme.fontSizes.xl,
          ]}
          fontWeight="400"
        >
          {title}
        </Heading>
        <Text
          margin={`${gutters.xSmall} 0 ${gutters.small}`}
          color={colors.text.darkLight}
        >
          {text}
        </Text>
        {/* <Button
          flash={true}
          as={Link}
          href="/contact"
          bg={colors.primaryColor900}
          _hover={{ bg: colors.primaryColor800 }}
        >
          {buttonText}
        </Button> */}
      </Box>
    </Container>
  </Box>
);
