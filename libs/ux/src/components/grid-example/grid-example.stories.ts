import { action } from '@storybook/addon-actions';
import GridExample from './GridExample.svelte';

export default {
  title: 'GridExample',
  component: GridExample,
};

export const NoStyles = () => ({
  Component: GridExample,
  props: {
    title: 'No styles',
    style: null,
    children: 4,
    animate: false,
  }
});

export const FixedWitdthColumns = () => ({
  Component: GridExample,
  props: {
    title: '4 Fixed Widg Columns',
    style: 'grid-template-columns: 2rem 2rem 2rem 2rem;',
    children: 8,
    animate: false,
  }
});

export const RepeatFixedColumns = () => ({
  Component: GridExample,
  props: {
    title: '4 Fixed Width Columns Using Repeat',
    style: 'grid-template-columns: repeat(4, 2rem)',
    children: 8,
    animate: false,
  }
});

export const AutoFit = () => ({
  Component: GridExample,
  props: {
    title: 'Auto-Fit Columns',
    style: 'grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr));',
    children: 8,
    animate: false,
  }
});

export const AutoFill = () => ({
  Component: GridExample,
  props: {
    title: 'Auto-Fill Columns',
    style: 'grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));',
    children: 8,
    animate: false,
  }
});

