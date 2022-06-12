import GridExample from './GridExample.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(GridExample)

  expect(getByText('Hello component!'));
})
