import React, { Component } from 'react';
import JobService from './JobService';

const jobService = new JobService();

class CreateJob extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* componentDidMount() {
        let par = this.props.match.params;
        console.log(par);
        if (par && par.pk) {
            jobService.getJob(par.pk).then((job) => {
                this.refs.title.value = job.title;
                this.refs.description.value = job.description;
            });
        }
    } */

    handleCreate() {
        jobService.createJob({
            "title": this.refs.title.value,
            "description": this.refs.description.value,
            /* "skills": this.refs.skills.value, */
        }).then((result) => {
            alert("Job created!");
        }).catch(() => {
            alert('There was an error! Please re-check your form.');
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleCreate();
    }

    handleInputChanged(event) {
        this.setState({
            title: event.target.value
        });
    }

    render() {
        return (
            <form className="jobContainer" onSubmit={this.handleSubmit}>
                <h2>Harness Job Manager</h2>
                <input className="jobForm form-control" type="text" ref="title" placeholder="Title" />
                <textarea className="jobForm descriptionArea" ref="description" placeholder="Description"></textarea>
                <input className="jobForm form-control skillInput" type="text" ref="skills" placeholder="Skill" />
                <input className="jobForm form-control skillInput" type="text" ref="skills" placeholder="Skill" />
                <button className="addSkill">+</button>
                <button className="submitForm">
                    Save
                </button>
            </form>
        );
    }
}
export default CreateJob;