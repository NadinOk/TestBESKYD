import Users from "./usersModel/userModel.js";


export const createUser = async (data) => {
    return Users.create({
        name: data.name,
        address: data.address,
        amount: data.amount,
        role: data.role,
        status: data.status,
    });
}

export const getAllData = async () => {
    return Users.find({})
}

export const updateData = async (data) => {
    return Users.findByIdAndUpdate(
        {_id: data._id},
        {
            name: data.name,
            address: data.address,
            amount: data.amount,
            role: data.role,
            status: data.status
        },
        {new: true}
    )
}




