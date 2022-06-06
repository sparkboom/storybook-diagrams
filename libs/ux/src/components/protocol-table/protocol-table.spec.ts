import ProtocolTable from './ProtocolTable.svelte'
import { render } from '@testing-library/svelte'

it('it works', async () => {
  const { getByText } = render(ProtocolTable)

  expect(getByText('Hello component!'));
})
