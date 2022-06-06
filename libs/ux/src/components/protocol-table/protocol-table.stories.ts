import { action } from '@storybook/addon-actions';
import ProtocolTable from './ProtocolTable.svelte';

export default {
  title: 'ProtocolTable',
  component: ProtocolTable,
};

export const Text = () => ({
  Component: ProtocolTable,
  props: {
    title: 'This is the title'
  }
});
