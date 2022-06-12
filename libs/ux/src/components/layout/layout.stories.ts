import { action } from '@storybook/addon-actions';
import Layout from './Layout.svelte';

export default {
  title: 'Layout',
  component: Layout,
};

export const Text = () => ({
  Component: Layout,
  props: { }
});
