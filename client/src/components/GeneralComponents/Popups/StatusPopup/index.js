// Styles
import Styles from './styles.module.scss'
// Images
import closeIcon from '../../../../theme/assets/icons/close_white.svg'
import successIcon from '../../../../theme/assets/icons/success.svg'

export const StatusPopup = (props) => {
    return (
        <section className={Styles.info_container}>
            <div className={Styles.create_container}>
                <h3 className={Styles.info_caption}>
                    <span>{props.title}</span>
                    <img className={Styles.close_btn} src={closeIcon} onClick={props.onClose} alt="close"/>
                </h3>
                <div className={Styles.status_info}>
                    <div className={Styles.success_wrap}>
                        <img src={successIcon} alt="success"/>
                    </div>
                    <div className={Styles.status_message}>{props.message}</div>
                </div>
            </div>
        </section>
    )
}
