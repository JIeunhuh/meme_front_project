import { SearchBox, TextBox } from "../../styled"
import { useState, useRef } from "react"
export const SearchKeyword = () =>{
    const curText = useRef();
    const {text, setText} = useState('');

    console.log('입력 텍스트', curText.current);

    return(
        <SearchBox width='74.3vw' height='94px' borderradius='42px' bordercolor='#1F024C'>
            <TextBox type="text" value={curText} placeholder="search keyword or sentence!"></TextBox>
            <img src="/images/serachIcon.png" alt="검색 아이콘"></img>
        </SearchBox>
    )
}