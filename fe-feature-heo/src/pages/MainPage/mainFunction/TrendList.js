import { Title } from "../../../styled/Title";
import { SearchBox } from "../../../styled/Box";

export const TrendList = () => {
    return (
        <main>
            <Title marginTop='70px'>
                Today's Trend
            </Title>
            <SearchBox>
                <img img src="/images/serachIcon.png" alt="테스트용 사진"></img>
            </SearchBox>
        </main>
    );
}
