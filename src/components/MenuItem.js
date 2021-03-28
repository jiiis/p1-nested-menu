import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { isArray } from 'lodash'

import Menu from './Menu'

const StyledMenuItem = styled.li`
  & > p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 48px;
    line-height: 48px;
    cursor: pointer;
  }
`

const MenuItem = ({ item = {} }) => {
  const hasSubMenu = isArray(item.items) && item.items.length > 0

  // States
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  // Renderers
  const renderStatusIcon = () => {
    if (!hasSubMenu) {
      return null
    }

    return isSubMenuOpen ? <AiOutlineUp style={{ marginLeft: '9px' }} /> :
      <AiOutlineDown style={{ marginLeft: '9px' }} />
  }

  // Event handlers
  const handleNameClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  return (
    <StyledMenuItem data-testid="menu-item">
      <p
        // aria-controls=""
        // aria-expanded=""
        onClick={handleNameClick}
        data-testid="menu-item-name"
      >{item.name}{renderStatusIcon()}</p>
      {hasSubMenu && isSubMenuOpen && (
        <div data-testid="sub-menu">
          <Menu
            items={item.items}
          />
        </div>
      )}

    </StyledMenuItem>
  )
}

export default MenuItem
