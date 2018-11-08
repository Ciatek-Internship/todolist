import React from 'react'


class Increment extends React.Component {


    state = {
         number: 0
    }
    increment = () => {
        let addedNumber = this.state.number
        addedNumber++
        this.setState({number: addedNumber})
    }
    decrement = () => {
        let minusNumber = this.state.number
        minusNumber--
        this.setState({number: minusNumber})
    }

    render(){
        return(
            <div>
                <h1> {this.state.number} </h1>
                <button onClick={this.increment} className="btn-primary"> + </button>
                <button onClick={this.decrement} className="btn-danger"> - </button>
            </div>
        )
    }
}

export default Increment;