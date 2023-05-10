// Styles
import Styles from './styles.module.scss'

export const BorderButton = (props) => {
    const borderBtn = `${props?.disabled ? Styles.border_btn_notActive : Styles.border_btn} ${props?.class}`

    return (
        <button disabled={props?.disabled} onClick={props.onClick} className={borderBtn} type="button">
            {props.icon && props.icon}
            {props.title}
        </button>
    )
}
