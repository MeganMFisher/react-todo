import React, { Component } from 'react';

import AddToDo from "./components/AddToDo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: []
    }

    this.createTodo = this.createTodo.bind( this );
  }

  createTodo( todoText ) {
    this.setState( { todos: [ { text: todoText, complete: false }, ...this.state.todos ] })
    console.log( this.state )
    // this.setState( { todos: [ todoText ].concat( this.state.todos ) } );
  }

  markComplete( index ) {
    const newState = [ 
                ...this.state.todos.slice( 0, index )
                , Object.assign( {}, this.state.todos[ index ], { complete: true }
                , ...this.state.todos.slice( index + 1, this.state.todos.length ) )
             ]
    console.log(index, newState)
    this.setState( {
      todos: newState
    },);
  }

  render() {
    const todos = this.state.todos
        .filter( todo => todo )
        // .map( todo => <li key={ todo }>{ todo }</li> );
        .map( (todo, index) => (
          <li key={ index }>{ todo.text }
            <input
              checked={ todo.complete }
              onChange={ ( event ) => this.markComplete( index ) }
              type="checkbox"
              value={ todo.complete }
            />
          </li> 
        ) );
    return (
      <div className="app"> 
        <AddToDo createTodo={ this.createTodo }/>
        <ul>
          { todos }
        </ul>
      </div>
    );
  }
}

export default App;


/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        input: ""
    };
    this.handleInputChange = this.handleInputChange.bind( this );
  }

  handleInputChange( event ) {
    console.log( event.target.value );
    this.setState( { input: event.target.value } );
  }

  render() {
    return (
      <div className="app"> 

                <input 
                    onChange={ (this.handleInputChange )}
                    type='text'
                    value={ this.state.input }
                />
        
          { this.state.input }
      </div>
    );
  }
}

export default App;*/
