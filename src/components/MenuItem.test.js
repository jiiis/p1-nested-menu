import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'

import MenuItem from './MenuItem'

const menuItem = {
  name: 'Level 2 - item 1',
  items: [
    {
      name: 'Level 3 - item 1',
      items: [
        {
          name: 'Level 4 - item 1'
        }
      ]
    }
  ]
}

let menuItemComponent

beforeEach(() => {
  menuItemComponent = <MenuItem item={menuItem} />
})

afterEach(cleanup)

test('renders in the DOM', () => {
  const div = document.createElement('div')

  ReactDOM.render(menuItemComponent, div)

  expect(div.querySelector('li')).toBeTruthy()
})

test('renders', () => {
  const { getByTestId } = render(menuItemComponent)

  expect(getByTestId('menu-item')).toHaveTextContent('Level 2 - item 1')
})

test('matches snapshot', () => {
  const tree = renderer.create(menuItemComponent).toJSON()

  expect(tree).toMatchSnapshot()
})

test('toggles sub-menus', async () => {
  const { getByTestId } = render(menuItemComponent)

  fireEvent.click(getByTestId('menu-item-name'))

  await waitFor(() => expect(getByTestId('sub-menu')).toBeInTheDocument())
})
