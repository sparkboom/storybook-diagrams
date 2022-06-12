import FlexExamples from './FlexExamples.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(FlexExamples)

  expect(getByText('Hello component!'));
})
