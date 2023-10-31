import axios from "./axios";

const getAllItem = async() => {
    try {
        var result = await axios.get("item");
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


const getItemById = async(id) => {
    try {
        var result = await axios.get(`item/${id}`);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const filterItem = async(type,value) => {
    try {
        var result = await axios.get(`item/filter?${type}=${value}`);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const filterItemByPrice = async(min,max) => {
    try {
        var result = await axios.get(`item/filter?minPrice=${min}&&maxPrice=${max}`);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const filterItemByFloat = async(min,max) => {
    try {
        var result = await axios.get(`item/filter?minFloat=${min}&&maxFloat=${max}`);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const sortItem = async(value) => {
    try {
        var result = await axios.get(`item/filter?sortBy=${value}`);
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export {getAllItem, getItemById, filterItem, filterItemByPrice, filterItemByFloat,sortItem}