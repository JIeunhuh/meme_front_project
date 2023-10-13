import { Title, SubTitle, BoxContent, BtnBox } from '../../styled'
import { SearchKeyword } from './SearchKeyword';

const TitleContent = () => {

    return (
        <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <BoxContent height='300px'>
                    <Title font="RedRose" textsize='60px' bold="400">
                        Elevate Your Sense of Humor
                    </Title>
                    <SubTitle font="Orbit" textsize='25px' bold='400' color='#676767'>
                        검색 창에 키워드를 입력하세요! 상황에 맞는 밈을 추천합니다
                    </SubTitle>
                <SearchKeyword />
            </BoxContent>
        </main >
    )
}
export default TitleContent;