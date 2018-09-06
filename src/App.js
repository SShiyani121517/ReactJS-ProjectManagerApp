import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
  
  componentWillMount(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: "Business Website",
        category: "Web design"
      },
      {
        id: uuid.v4(),
        title: "Social Website",
        category: "mobile design"
      },
      {
        id: uuid.v4(),
        title: "Ecommerce Website",
        category: "Web application"
      }
    ]});
  }

  handleAddProject(project){
    // console.log("this is from AddProject Component to App Component:", project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects; // set state to variable
    let index = projects.findIndex(x => x.id === id) // find id from the list and compare with clicked id
    projects.splice(index, 1); // remove clicked item
    this.setState({ projects: projects }); // Reset/update the state
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        {/* <Projects test="Hello World"></Projects> */}
      </div>
    );
  }
}

export default App;
