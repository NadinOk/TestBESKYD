import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Styles from './styles.module.scss';
import userIcon from '../../../theme/assets/icons/user.svg';
import {tableActions} from "../../../actions/tableAction";
import {AddUser} from "../Popups";
import {setNewUser, setUpdatedUser} from "../../../reducers/tableSlice";
import {StatusPopup} from "../Popups/StatusPopup";
import {ChangeUserData} from "../Popups/ChangeData";

const columns = [
    {
        field: 'name',
        headerName: 'Name',
        width: 230,
        filter: 'text',
        type: 'string'
    },
    {
        field: 'address',
        headerName: 'Address',
        width: 230,
    },
    {
        field: 'amount',
        headerName: 'Amount',
        width: 200,
        type: 'number'
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 200,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200,
        filter: 'select',
        type: 'singleSelect',
        valueOptions: [
            {value: 'pending', label: 'Pending'},
            {value: 'close', label: 'Close'},
            {value: 'open', label: 'Open'}
        ],
    }
];

export const Table = () => {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.table.allData)
    const newUser = useSelector((state) => state.table.newUser)
    const updatedUser = useSelector((state) => state.table.updatedUser)
    const [isPopup, setIsPopup] = useState(false);
    const [isPopupChange, setPopupChange] = useState(false);
    const [updateData, setUpdateData] = useState({});

    useEffect(() => {
        dispatch(tableActions.getTableData())
        dispatch(setNewUser(''))
        dispatch(setUpdatedUser(''))
    }, [])

    const closePopup = () => {
        dispatch(setNewUser(''))
    }

    const closePopupUpdate = () => {
        dispatch(setUpdatedUser(''))
        dispatch(tableActions.getTableData())
    }


    function handleRowClick(params) {
        if (params.row._id) {
            setUpdateData(params.row)
            setPopupChange(true)
        }
    }

    const getRowId = (rows) => rows.id;


    return (
        <div style={{padding: '40px', margin: "auto", height: '100%', width: '70%'}}>
            <button className={Styles.nav_newUser_btn} onClick={() => setIsPopup(true)}>
                <img src={userIcon} alt='user image'/>
                <span>{'Add new user'}</span>
            </button>
            <DataGrid
                onRowClick={handleRowClick}
                getRowId={getRowId}
                rows={allData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 10},
                    },
                }}
                pageSizeOptions={[10, 20]}
            />
            {isPopupChange && updateData &&
                <ChangeUserData
                    data={updateData}
                    setPopupChange={setPopupChange}
                    onClose={() => setPopupChange(false)}
                />
            }
            {updatedUser &&
                <StatusPopup
                    title={`Update user`}
                    message={`New user successfully updated `}
                    onClose={() => closePopupUpdate()}
                />
            }
            {isPopup && <AddUser setIsPopup={setIsPopup} onClose={() => setIsPopup(false)}/>}
            {newUser &&
                <StatusPopup
                    title={`Create new user`}
                    message={`New user successfully created with status: '${newUser.status}' and  role: '${newUser.role}'`}
                    onClose={() => closePopup()}
                />
            }
        </div>
    );
}