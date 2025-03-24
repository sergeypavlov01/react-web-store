import styles from './Header.module.css'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo>RacketShop</Logo>
      <Navbar />
    </header>
  )
}