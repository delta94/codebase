import { Box } from '@chakra-ui/react';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import {
  PeopleTable
} from '../../../components/tables/peopleTable';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import React from 'react';

const AdminPeople = () => {
  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs />

        <PeopleTable />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminPeople;
