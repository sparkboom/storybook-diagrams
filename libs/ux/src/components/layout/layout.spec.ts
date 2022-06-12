import Layout from './Layout.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(Layout)

  expect(getByText('Hello component!'));
})
