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
/**
 *@param width : width
 *@param height : height
 *@param borderradius : border-raius
 *@param bordercolor : border-color 
 **/
export const SearchBox = styled.div`
width: ${props => props.width};
height: ${props => props.height};
flex-shrink: 0;
border-radius: ${props => props.borderradius || '10px'};
border: 1.7px solid ${props => props.bordercolor};
background: #FAFAFA;
margin-top : 3%;
align-items:center;
display:flex;

img{
    margin-right: 10px;
}
`