import React from "react";

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={items:[],text:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
            <h3>Tareas pendientes</h3>
            <TodoList items={this.state.items}/>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="newTodo">Que pendientes hay?</label>
            <input id="newTodo" onChange={this.handleChange}
            value={this.state.text} />
            <button>Agregar#{this.state.items.length + 1}</button>

    
            </form>
        </div>
        );
    }
    handleChange(e){
        this.setState({text:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.text.length===0){
            return;
        }
        const newItem={
            text:this.state.text,
            id:Date.now()
        };
        this.setState(state=>({
            items:state.items.concat(newItem),
            text:''
        }));
    }
}
class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.items.map(item=>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}



export default TodoApp;



