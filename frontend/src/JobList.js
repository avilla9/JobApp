import React, { Component } from 'react';
import JobService from './JobService';

const jobService = new JobService();

class JobList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            /* nextPageURL: '' */
        };
        /* this.nextPage = this.nextPage.bind(this); */
        /* this.handleDelete = this.handleDelete.bind(this); */
    }
    componentDidMount() {
        var self = this;
        jobService.getJobs().then(function (result) {
            self.setState({ jobs: result.data/* , nextPageURL: result.nextlink */ })
        });
    }
    render() {
        return (
            <div className="jobList">
                <h2>Job List</h2>
                {
                    this.state.jobs.map(
                        job => <div className="jobElement">{job.title}</div>
                    )
                }
            </div>
        );
    }
}
export default JobList;