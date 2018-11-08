import React from 'react'

class TodoList extends React.Component {
    state = {
        todos: [
            {
                taskName: 'Finish Internship',
                responsible: 'areej',
                priority: 'medium'
            },
            {
                taskName: 'Finish University',
                responsible: 'areej',
                priority: 'high'
            },
            {
                taskName: 'Play Football',
                responsible: 'areej',
                priority: 'low'
            }
        ],
        taskName: '',
        responsible: '',
        priority:'low'
    }

    taskNameChange = (e) => {
        this.setState({taskName: e.target.value})
    }
    responsibleChange = (e) => {
        this.setState({responsible: e.target.value})
    }

    handleSelect = (e) => {
        this.setState({priority: e.target.value})
    }

    onFormSubmit = (e) =>{
        e.preventDefault()
        let newTask = {
            taskName: this.state.taskName,
            responsible: this.state.responsible,
            priority: this.state.priority
        }

        let todos = this.state.todos.slice()
        todos.push(newTask)
        this.setState({todos})
    }

    deleteTask = (todo) => {
        let index = this.state.todos.indexOf(todo)
        let todos = this.state.todos.slice()
        todos.splice(index, 1)
        this.setState({todos})
    }

    render(){
        return(

            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="d-flex justify-content-center">
                <input style={{width:"50%"}} className="form-control" type="text" value={this.state.taskName} placeholder="TaskName" onChange={this.taskNameChange} /> <br/>
                <input style={{width:"50%"}} className="form-control" type="text" value={this.state.responsible} placeholder="Responsibility" onChange={this.responsibleChange} />
                <select style={{width:"20%"}} className="form-control" value={this.state.priority} onChange={this.handleSelect}>
                    <option value="low"> Low</option>
                    <option value="medium"> Medium</option>
                    <option value="high"> High</option>
                </select>
            </div>
            <br/>
                <button className="btn btn-primary" style={{width:"30%"}}>Add Task</button>
            </form>

            <br/>
            <br/>
            <br/>

            <table className="table table-inverse">
                <thead>
                    <tr>
                    <th> Task Name </th>
                    <th> Responsibility </th>
                    <th> Priority </th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.todos.map( (todo,index) => 
                        <tr key={index}>
                            <td> { todo.taskName } </td>
                            <td> { todo.responsible } </td>
                            <td> { todo.priority} </td>
                            <td> <button onClick={() => this.deleteTask(todo)} className="btn btn-primary"> Delete </button> </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        )
    }
}

export default TodoList