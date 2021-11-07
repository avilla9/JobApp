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
    getJob(pk) {
        const url = `${API_URL}/api/jobs/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    deleteJob(job) {
        const url = `${API_URL}/api/jobs/${job.pk}`;
        return axios.delete(url);
    }
    createJob(job) {
        const url = `${API_URL}/api/jobs/`;
        return axios.post(url, job);
    }
}