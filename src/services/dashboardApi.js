import axios from "axios";

const BASE_URL = 'http://34.93.245.38';

const fetchSales = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/sale`);
        return response.data;
    } catch(err) {
        console.log("Error: ", err);
    }
}

const fetchRevenue = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/revenue`);
        return response.data;
    } catch(err) {
        console.log("Error: ", err);
    }
}

const fetchOrderValue = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/order-value`);
        return response.data;
    } catch(err) {
        console.log("Error: ", err);
    }
}

export {
    fetchSales,
    fetchRevenue,
    fetchOrderValue
};