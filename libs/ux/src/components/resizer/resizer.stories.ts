import { action } from '@storybook/addon-actions';
import Resizer from './Resizer.svelte';

export default {
  title: 'Resizer',
  component: Resizer,
};

export const Text = () => ({
  Component: Resizer,
  props: { }
});
