import type { Meta, StoryObj } from '@storybook/react';

import Table from './data-table';
import { columns } from '../../../example/columns';
import { shipments } from '../../../example/data';

const meta: Meta<typeof Table> = {
  title: 'Gnteq/Components',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],


};

export default meta;
type Story = StoryObj<typeof Table>;

export const DataTable : Story = {
  args: {
    //@ts-ignore
    columns:columns,
    data:shipments
  },
};


