import express from "express";
import * as service from "./userService.js";

const router = express.Router();

export const user = router.post('/users', createUser)
export const getAll = router.get('/table_data/all/', getAllData)
export const updateData = router.patch('/update_user_data', updateDataUser)

async function createUser(req, res, next) {
    await service.createUser(req.body)
        .then((response) => {
                res.send(response)
            }
        )
        .catch(next);
}

async function getAllData(req, res, next) {
    await service.getAllData()
        .then((response) => {
                res.send(response)
            }
        )
        .catch(next);
}

async function updateDataUser(req, res, next) {
    await service.updateData(req.body)
        .then((response) => {
                res.send(response)
            }
        )
        .catch(next);
}



