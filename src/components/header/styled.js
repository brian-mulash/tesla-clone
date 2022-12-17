import styled from 'styled-components'
import {MdClose, MdMenu} from 'react-icons/md'

export const BurgerMenu = styled.div`
      background-color: #fff;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 300px;
      padding: 20px;
      transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
      transition: transform 0.2s;

   li {
      list-style-type: none;
      padding: 15px 0;
      border-bottom: 1px solid #000;

      a {
         text-decoration: none;
         color: #000;
         font-weight: bold;
      }
   }
`;

export const CloseWrapper = styled.div`
   display: flex;
   justify-content: flex-end;
`;

export const CustomClose = styled(MdClose)`
   font-size: 25px;
   cursor: pointer;
   color: var(--legit-black);

`;

export const CustomMenu = styled(MdMenu)`
   font-size: 25px;
   cursor: pointer;
   color: black;
   margin-top: 2px;
`;

