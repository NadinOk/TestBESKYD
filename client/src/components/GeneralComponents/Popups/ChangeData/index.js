// Core
import {useDispatch} from 'react-redux';
// Instruments
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Actions
import {settingsActions} from '../../../../actions/settingsAction';
// Styles
import Styles from './styles.module.scss';
// Images
import closeIcon from '../../../../theme/assets/icons/close_white.svg';
// Components
import {SaveButton} from '../../../GeneralComponents/Buttons/SaveButton/index';
import {TextField} from '../../Fields/TextField';
import {useState} from "react";
import CustomAutocomplete from "../../Fields/FieldSelect";
import {BorderButton} from "../../Buttons";

const schema = Yup.object().shape({
    address: Yup.string()
        .required('Please enter your address'),
    name: Yup.string()
        .required('Please enter your name'),
    amount: Yup.number()
        .required(/^\d{1,3}$/)

});


export const ChangeUserData = (props) => {
    const dispatch = useDispatch();
    const initialStatus = {
        label: props.data.status.charAt(0).toUpperCase() + props.data.status.slice(1),
        value: props.data.status
    }
    const initialRole = {
        label: props.data.role.charAt(0).toUpperCase() + props.data.role.slice(1),
        value: props.data.role
    }
    const [selectedStatusOption, setSelectedStatusOption] = useState(initialStatus);
    const [selectedRoleOption, setSelectedRoleOption] = useState(initialRole);

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
        defaultValues: {
            name: props.data.name,
            address: props.data.address,
            amount: props.data.amount,
            role: props.data ? props.data.role : selectedRoleOption.value,
            status: props.data ? props.data.status : selectedStatusOption.value
        }
    });
    const onFormSubmit = (values) => {
        const data = {
            _id: props.data._id,
            name: values.name || props.data.name,
            address: values.address || props.data.address,
            amount: values.amount || props.data.amount,
            role: selectedRoleOption ? selectedRoleOption.value : props.data.role,
            status: selectedStatusOption ? selectedStatusOption.value : props.data.status
        };
        dispatch(settingsActions.changeUserData(data));
        reset();
        props.setPopupChange(false)
    };

    const onError = (error) => {
        console.log('err')
        console.log(error)
    }

    const handleChangeStatus = (selected) => {
        setSelectedStatusOption(selected);
    };

    const handleChangeRole = (selected) => {
        setSelectedRoleOption(selected);
    };

    return (
        <section className={Styles.info_container}>
            <form onSubmit={handleSubmit(onFormSubmit, onError)}>
                <div className={Styles.popup_container}>
                    <h3 className={Styles.info_caption}>
                        <span>{' Change your data'}</span>
                        <img
                            className={Styles.close_btn} src={closeIcon}
                            onClick={props.onClose}
                            alt='close'/>
                    </h3>
                    <div className={Styles.info_content}>
                        <TextField
                            label={'Name'}
                            class={Styles.form_item}
                            placeholder={'Enter name'}
                            register={register}
                            error={errors?.name}
                        />
                        <TextField
                            label={'Address'}
                            class={Styles.form_item}
                            placeholder={'Enter address'}
                            register={register}
                            error={errors?.address}
                        />
                        <TextField
                            label={'Amount'}
                            class={Styles.form_item}
                            placeholder={'Enter amount'}
                            register={register}
                            error={errors?.amount}
                        />
                        <CustomAutocomplete
                            onChange={handleChangeStatus}
                            value={selectedStatusOption}
                            label={'Status'}
                            class={Styles.form_item}
                            option={[
                                {label: "Pending", value: "pending"},
                                {label: "Close", value: "close"},
                                {label: "Open", value: "open"},
                            ]}
                        />
                        <CustomAutocomplete
                            onChange={handleChangeRole}
                            value={selectedRoleOption}
                            label={'Role'}
                            class={Styles.form_item}
                            option={[
                                {label: "Customer", value: "Customer"},
                                {label: "Business", value: "Business"},
                                {label: "Admin", value: "Admin"},
                            ]}
                        />
                    </div>
                    <div className={Styles.btn_container}>
                        <BorderButton
                            title={'Cancel'}
                            class={Styles.btn}
                            onClick={props.onClose}/>
                        <SaveButton
                            title={'Save'}/>
                        {/*}*/}
                    </div>
                </div>
            </form>
        </section>
    );
};
