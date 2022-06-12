import { action } from '@storybook/addon-actions';
import GridExamples from './GridExamples.svelte';

export default {
  title: 'GridExamples',
  component: GridExamples,
};

export const Examples = () => ({
  Component: GridExamples,
  props: { }
});
