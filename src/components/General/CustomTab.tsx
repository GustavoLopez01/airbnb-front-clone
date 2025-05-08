import { Tab } from '@headlessui/react'
import styled from 'styled-components'

type CustomTabProps = {
  isSelected: boolean
}

const CustomTab = styled(Tab) <CustomTabProps>`
  ${({ isSelected }) => isSelected && `
    &:after {
      background-color: black;
      position: absolute;
      bottom: -8px;
      left: 0;
      content: '';
      height: 2px;
      width: 100%;
      box-sizing: border-box;
    }
  `}
`;

export default CustomTab