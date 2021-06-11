import React ,{Component} from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {v1 as uuid} from "uuid";
class App extends Component{
    state={
          items:[],
          id:uuid(),
          item:"",
          editItem:false
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        const newItem={
            id:this.state.id,
            name:this.state.item,
            check:false
        }
        const updateItems=[...this.state.items,newItem]
        this.setState({
              items:updateItems,
              item:"",
              id:uuid(),
              editItem:false,
        })
    }
    handleChange=(e)=>{
        this.setState({
              item:e.target.value
        })
    }
    clearList=()=>{
          this.setState({
                items:[]
          })
    }
    handleDelete=(id)=>{
          const filterItems=this.state.items.filter(item=>item.id !== id)
          this.setState({
              items:filterItems
          })
    }
    handleEdit=(id)=>{
        const filterItems = this.state.items.filter(item=>item.id !== id)
        const selectItem = this.state.items.find(item=>item.id===id)
        // A
        // B
        this.setState({
            items:filterItems,
            item:selectItem.name,
            id:id,
            editItem:true
        })
    }
    handleCheck=(id)=>{
      console.log("check12");
       const selectCheck = this.state.items.map(item => 
        { if(item.id === id) {item.check = !item.check;} return item 
            })

      this.setState({
         items:selectCheck
      })
  }
    render(){
      return (
        <div className="container my-4">
              <h1 align="center">Todo List</h1>
              <div className="row">
                  <TodoInput
                  item={this.state.item}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  editItem={this.state.editItem}
                  />
              </div>
              <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
              handleCheck={this.handleCheck}
              />
        </div>
      );
    }
}

export default App;
