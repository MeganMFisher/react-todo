import React, { Component } from "react";

export default class AddToDo extends Component {
    constructor() {
        super();

        this.state = { input: "" }
        this.handleClick = this.handleClick.bind(this)
    }

    handleInputChange( event ) {
        this.setState( { input: event.target.value });
    }

    handleClick() {
        
        this.props.createTodo( this.state.input )
        this.setState({
            input: ''
        })
    }

    render() {
        console.log( this.props );
        return (
            <div className="add-to-do">
              
                <input 
                    onChange={ ( event ) => this.handleInputChange( event )}
                    type='text'
                    value={ this.state.input }
                    
                />
                <button onClick={ () => this.handleClick() }>Add To Do</button>
            
            </div>
        );
    }
}

// export default AddToDo;