import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class JobService {

    constructor() { }

    getJobs() {
        const url = `${API_URL}/api/jobs/`;
        return axios.get(url).then(response => response.data);
    }
    getSkills() {
        const url = `${API_URL}/api/skills/`;
        return axios.get(url).then(response => response.data);
    }
    /* getJobsByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getCustomer(pk) {
        const url = `${API_URL}/api/jobs/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteCustomer(customer){
        const url = `${API_URL}/api/jobs/${customer.pk}`;
        return axios.delete(url);
    }
    createCustomer(customer){
        const url = `${API_URL}/api/jobs/`;
        return axios.post(url,customer);
    }
    updateCustomer(customer){
        const url = `${API_URL}/api/jobs/${customer.pk}`;
        return axios.put(url,customer);
    } */
}