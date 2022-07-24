import { Apps } from '@/constants'
import { act, fireEvent, render, screen } from '@/utils/test-utils'

import EditProjectDialog from './EditProjectDialog'

describe('EditProjectDialog component', () => {
  test('the button should not be disabled at the beginning', async () => {
    render(
      <EditProjectDialog
        appAbbreviation={Apps.moneyTracker}
        handleClose={jest.fn()}
        id=""
        title=""
        description=""
      />
    )

    await act(async () => {
      const createButton = await screen.findByRole('button', {
        name: 'BUTTON_CONFIRM'
      })!
      expect(createButton).toHaveClass('Mui-disabled')
    })
  })

  test('should enable the button when the user types something on the title', async () => {
    render(
      <EditProjectDialog
        appAbbreviation={Apps.moneyTracker}
        handleClose={jest.fn()}
        id=""
        title=""
        description=""
      />
    )

    const titleInput = screen.getByRole('textbox', {
      name: 'PROJECT_TITLE'
    })
    expect(titleInput).toBeInTheDocument()
    fireEvent.change(titleInput, { target: { value: 'TEXT' } })
    await act(async () => {
      const createButton = await screen.findByRole('button', {
        name: 'BUTTON_CONFIRM'
      })!
      expect(createButton).not.toHaveClass('Mui-disabled')
    })
  })
})
