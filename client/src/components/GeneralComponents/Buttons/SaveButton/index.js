// Styles
import Styles from './styles.module.scss'

export const SaveButton = (props) => {
    return (
        <button className={Styles.submit_btn} type="submit">
            {props.title}
        </button>
    )
}
