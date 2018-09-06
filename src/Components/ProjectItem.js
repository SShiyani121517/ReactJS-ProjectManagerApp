import React, { Component } from 'react';

class ProjectItem extends Component {
    // super();

    deleteProject(id){
        this.props.onDelete(id);
        // console.log("test");
    }

    render() {
        // console.log(this.props);
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong>, {this.props.project.category}
                <a href="#Delete" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}

export default ProjectItem;