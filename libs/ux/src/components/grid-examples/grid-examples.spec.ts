import GridExamples from './GridExamples.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(GridExamples)

  expect(getByText('Hello component!'));
})
