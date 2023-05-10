// Styles
import Styles from './styles.module.scss';
// Images
import errorIcon from '../../../theme/assets/icons/error.svg';

export const TextField = (props) => {

    return (
        <div className={`${Styles.text_wrapper} ${props?.class}`}>
            <label>
                {props.label}
                <span>{props?.requiredIcon}</span>
            </label>
            <input
                type={props.type}
                autoFocus={props?.autoFocus}
                className={props?.inputClass}
                placeholder={props?.placeholder}
                disabled={props?.disabled}
                {...props.register(props.label.toLowerCase())}
            />
            {props?.error ? (
                <img
                    className={Styles.error_icon} src={errorIcon}
                    alt={'error'}/>
            ) : null}
            <div className={Styles.error}>
                {props?.error ? <span>{props.error?.message || 'error'}</span> : null}
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: 'text',
};
