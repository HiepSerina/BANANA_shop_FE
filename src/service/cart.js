import axios from './axios'

const createOrder = async(userId, itemId) =>{
    try {
        const res = await axios.post("cart/create",{
            itemId, userId
        })
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getAllOrder = async(userId) =>{
    try {
        const res = await axios.get(`cart/${userId}`);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteItem = async(itemId) => {
    try {
        const res = await axios.delete(`cart/delete?id=${itemId}`);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export {createOrder, getAllOrder, deleteItem}