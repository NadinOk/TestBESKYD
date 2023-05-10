// Styles
import Styles from './styles.module.scss'

export const BackgroundButton = (props) => {
    return (
        <button type={props.type || 'button'} className={`${Styles.submit_btn} ${props.class}`} onClick={props.onClick}>
            {props?.iconBtn}
            {props.title}
        </button>
    )
}
