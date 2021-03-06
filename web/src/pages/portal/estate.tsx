import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';

import { PortalLayout } from '../../components/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'react-intl';

const EstatePage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.estate.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.estate.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default EstatePage;
