import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {
    
    deleteProject(id){
        this.props.onDelete(id);
    }

    render() {
        let projectItems;
        if (this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return(
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
                );
            });
        }
        // console.log(this.props);
        return (
            <div className="Projects">
                <h3>Project List</h3><br />
                {projectItems}
                {/* {this.props.test} */}
            </div>
        );
    }
}

export default Projects;