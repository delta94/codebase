import { Box, Kbd, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Button } from '../../../components/button';
import {
  CreateMatterDocumentTemplateModal
} from '../../../components/modals/createMatterDocumentTemplateModal';
import {
  MatterDocumentTemplateTable
} from '../../../components/tables/matterDocumentTemplateTable';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import {
  UpdateMatterDocumentTemplateModal
} from '../../../components/modals/updateMatterDocumentTemplateModal';
import { gutters } from '../../../styles/neonLaw';

const AdminMatterDocumentTemplates = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateModal, changeShowCreateModal ] = useState(true);
  const [currentRow, setCurrentRow] = useState(undefined);

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs />

        <Button
          flash={true}
          buttonScheme="teal"
          marginBottom={gutters.xSmall}
          onClick={onOpen}
        >
          Create Document Template&nbsp;
          <Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </Button>

        <CreateMatterDocumentTemplateModal
          isOpen={isOpen && showCreateModal}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <UpdateMatterDocumentTemplateModal
          isOpen={isOpen && !showCreateModal}
          currentValues={(currentRow as any)?.values}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <MatterDocumentTemplateTable
          onRowClick={(row) => {
            changeShowCreateModal(false);
            setCurrentRow(row);
            onOpen();
          }}
        />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMatterDocumentTemplates;
