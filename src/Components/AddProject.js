import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject:{}
        }
    }
    
    static defaultProps = {
        categories: ["Web Design", "Mobile Design", "Web Application"]
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert("Enter a Value");
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                // console.log(this.state);
               this.props.addProject(this.state.newProject);
            });
        }
        // console.log(this.refs.title.value);
        // console.log("Submitted");
        // e.preventDefault();
    }

    render(){
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (
            <div>
                <h3>Add Project</h3>
                {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
                <form>
                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                </form>
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        );
    }
}

export default AddProject;