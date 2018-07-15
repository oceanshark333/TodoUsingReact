
import React from 'react'
import {findDOMNode} from 'react-dom'
import Todo from './Todo'
import '../../stylesheets/Todo.css'

 export default class  Todos extends React.Component{


    constructor(props){
        super(props)
        this.state ={
            todos:props.data,
            todo:''
        }
        this.addTodo = this.addTodo.bind(this)
        this.onChange = this.onChange.bind(this)
     
    }

    addTodo(event){
        let todo = this.state.todo
        let nItem
        let dn = findDOMNode(this.refs['_add'])
        if(dn){
            dn.value =''
        } 
        if(todo){
            nItem= {id:this.state.todos.length+ 1, name:todo}
            let items = this.state.todos
          if(nItem && nItem.name && (nItem.name.length >1)){
            items.push(nItem)
            this.setState({todos:items, todo:''}) 
          }        
        }
    }
    onChange(event){
        this.setState({
            todo:event.target.value
        })
    }
    removeTodo(refName,event){
       let items = this.state.todos
       let desired = items.filter((view)=>{
            return (view.id != refName)
        })
        this.setState({
            todos:desired
        })
    }
    render(){   
           const {todos, todo} = this.state
           console.log('sv render')
return(

    <article>
        <header>
            <h1>Todo App</h1>
        </header>
        <div className="todoApp">
            <div>
                <input type="text" ref="_add" onChange={this.onChange} value={todo} placeholder="Add your task todo"  ></input>
                <button onClick={this.addTodo}  className="btn-md btn-save todo-svadd" > Add </button> 
                <ul className="list-unstyled">   
                   {


                            todos.map((item, idx)=>{
                                console.log(item)
                                if(item && (item.name.length >0) ){
                                    return (<Todo id={item.id} name={item.name}  > <button className="todo-remove" onClick={this.removeTodo.bind(this, item.id)}  className="btn-md btn-save" > Remove </button> </Todo>)
                                
                                }
                            
                                

                            })
                     } 
            
                </ul>
            </div>
            </div>
    </article>
            )
    }
 }

 