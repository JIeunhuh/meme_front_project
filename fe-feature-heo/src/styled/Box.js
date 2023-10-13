import styled from "styled-components";

// page별 상단에 위치한 타이틀 박스
/**
 *@param height : height 
 **/
export const BoxContent = styled.div`
width: 93.75vw;
height: ${props => props.height};
border-top: 2px solid #BB99CD;
border-bottom: 2px solid #BB99CD;
background: #FAFAFA;
justify-content:center;
align-items:center;
margin-top:100px;
display: flex;
flex-direction: column;
`