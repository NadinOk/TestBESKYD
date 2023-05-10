// Core
import {useDispatch} from 'react-redux';
// Instruments
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Styles
import Styles from './styles.module.scss';
// Images
import closeIcon from '../../../../theme/assets/icons/close_white.svg';
// Components
import {TextField} from '../../Fields/TextField';
import {tableActions} from "../../../../actions/tableAction";
import {BorderButton, SaveButton} from "../../Buttons";
import CustomAutocomplete from "../../Fields/FieldSelect";
import {useState} from "react";

const schema = Yup.object().shape({
    role: Yup.string()
        .required('Please enter a role'),
    status: Yup.string()
        .required('Please enter a status'),
    address: Yup.string()
        .required('Please enter your address'),
    name: Yup.string()
        .required('Please enter your name'),
    amount: Yup.number()
        .required('Please enter amount')
        .max(1000, 'Amount should contain no more than 1000'),
});


export const AddUser = (props) => {
    const dispatch = useDispatch();
    const [selectedStatusOption, setSelectedStatusOption] = useState(null);
    const [selectedRoleOption, setSelectedRoleOption] = useState(null);
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
            status: 'pending',
            role: 'Admin',
        },
    });

    const onFormSubmit = (values) => {
        const data = {
            name: values.name,
            address: values.address,
            amount: values.amount,
            role: selectedRoleOption ? selectedRoleOption.value : 'Admin',
            status: selectedStatusOption ? selectedStatusOption.value : 'pending'
        };
        dispatch(tableActions.AddNewUser(data));

        reset();
        props.setIsPopup(false)
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
                <div className={Styles.add_container}>
                    <h3 className={Styles.info_caption}>
                        <span>{'Add new user'}</span>
                        <img
                            className={Styles.close_btn} src={closeIcon}
                            onClick={props.onClose}
                            alt='close'/>
                    </h3>
                    <div className={Styles.radio_wrapper}>
                        <h6 className={Styles.radio_title}>{'Add new user'}</h6>
                        <div className={Styles.fields_wrapper}>
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
                                error={errors?.status}
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
                    </div>
                    <div className={Styles.btn_container}>
                        <BorderButton
                            title={'Cancel'}
                            class={Styles.btn}
                            onClick={props.onClose}/>
                        <SaveButton
                            title={'Send invitation'}
                        />
                    </div>

                </div>
            </form>
        </section>
    );
};
