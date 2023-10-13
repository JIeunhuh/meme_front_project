/** 메인 페이지 */
import { Modal } from '../../components'
import { useState } from 'react'
import TitleContent from './TitleContent'
import { Title } from '../../styled'


export const MainPage = () => {
  const [open, setOpen] = useState(true)

  return (
    <TitleContent/>
  )
}
