import styled from 'styled-components'
/**
* @param font : font 이름 
**/
export const HeaderText = styled.nav`
color: rgba(102, 102, 102, 0.80);
font-family: ${props => props.font};
font-size: 28px;
font-style: bold;
font-weight: 700;
justify-content: center;
algin-items:center;
margin-left : 185px;

a {
    margin-right:53px;
    }
`
// icon 설정
// export const HeaderIcon = styled.image

export const HeaderButton = styled.button`
justify-content: center;
align-items: center;
border-radius: 8px;
background-color:${props => props.background || '#FAFAFA'};
border: 1px solid  ${props => props.color || '#3D1860'};
color:${props => props.fontcolor || '#3D1860'};
font-family: ${props => props.font};
width:6em;
height:2.5em;
margin-left:42px;
`
/**
 * @param flexdirection : flex-direction
 */
export const BtnBox = styled.div`
  display : flex;
  flex-direction:${props=>props.flexdirection || 'raw'};
  margin-right:${props => props.marginright || 'auto'};
  align-items:${props=>props.align};
  justify-content:${props=>props.justify};
  text-align:center;
`