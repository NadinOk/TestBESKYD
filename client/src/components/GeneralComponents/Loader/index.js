// Styles
import Styles from './styles.module.scss';

export const Loader = (props) => {
    return <span className={`${Styles.loader} ${props.class}`}/>;
};
