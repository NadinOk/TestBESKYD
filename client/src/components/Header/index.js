import Styles from './styles.module.scss'
import logo from '../../theme/assets/images/cardiogram.svg'

export const Header = () => {
    return (
        <header className={Styles.header}>
            <div className={Styles.container}>
                <img className={Styles.logo} src={logo} alt="logo"/>
                BESKYD.COM
            </div>
        </header>
    )
}