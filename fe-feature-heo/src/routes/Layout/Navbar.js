import { NavBox, HeaderText, HeaderButton, BtnBox } from "../../styled"
import { Link } from 'react-router-dom'
/** Navbar 컴포넌트 */
export const Navbar = () => {

  return (
    <NavBox justify='space-between'>
      <HeaderText font='RedRose'>
        <Link to={'/'}>Homepage</Link>
        <Link to={'/search'}>Meme Search</Link>
        <Link to={'/community'}>Coummunity</Link>
        <Link to={'/subscribe'}>Subscribe</Link>
      </HeaderText>
      <BtnBox marginright='45px'>
        <HeaderButton font='RedRose' >
          Log in
        </HeaderButton>
        <HeaderButton font="RedRose" background="#3D1860" color="#3D1860" fontcolor="#FFF">
          Sign Up
        </HeaderButton>
      </BtnBox>
    </NavBox>
  )
}
