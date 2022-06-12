import Resizer from './Resizer.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(Resizer)

  expect(getByText('Hello component!'));
})
