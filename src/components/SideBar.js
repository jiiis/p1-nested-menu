import React from 'react'
import styled from 'styled-components'

import Menu from './Menu'

const StyledSidebar = styled.section`
  height: 100vh;
  background: #eee;
`

const menuItems = [
  {
    name: 'Level 1 - item 1',
    items: [
      {
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
      },
      {
        name: 'Level 2 - item 2'
      }
    ]
  },
  {
    name: 'Level 1 - item 2',
    items: [
      {
        name: 'Level 2 - item 3'
      }
    ]
  },
  {
    name: 'Level 1 - item 3',
    items: []
  },
  {
    name: 'Level 1 - item 4'
  }
]

const SideBar = () => {
  return (
    <StyledSidebar>
      <Menu items={menuItems} />
    </StyledSidebar>
  )
}

export default SideBar
