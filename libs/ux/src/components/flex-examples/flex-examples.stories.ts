import { action } from '@storybook/addon-actions';
import FlexExamples from './FlexExamples.svelte';

export default {
  title: 'FlexExamples',
  component: FlexExamples,
};

export const Text = () => ({
  Component: FlexExamples,
  props: { }
});
