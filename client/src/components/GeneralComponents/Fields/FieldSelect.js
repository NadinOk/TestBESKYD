import React from "react";
import Select from "react-select";
import Styles from './styles.module.scss';

const CustomAutocomplete = (props) => {
    return (
        <div className={`${Styles.text_wrapper} ${props?.class}`}>
            <label>
                {props.label}
                <span>{props?.requiredIcon}</span>
            </label>
            <Select
                defaultValue={props.defaultValue}
                value={props.value}
                onChange={props.onChange}
                options={props.option}

            />
        </div>
    );
};

export default CustomAutocomplete;

