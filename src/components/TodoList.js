//รวม itemต่างๆ มารวมเป็นกลุ่มก้อนเดียวกัน แล้วแสดงเป็นรายการๆ
import React ,{Component} from "react";
import TodoItem from './TodoItem';
export default class TodoList extends Component{
  render(){
    const {clearList,items,handleEdit,handleDelete,handleCheck}= this.props
    return(
        <ul className="list-group my-4">
            <h3>My list</h3>
            {items.map(item=>{
                  return(
                      <TodoItem key={item.id}
                      name={item.name}
                      check={item.check}
                      handleCheck={()=>handleCheck(item.id)}
                      handleDelete={()=>handleDelete(item.id)}
                      handleEdit={()=>handleEdit(item.id)}
                      />
                  )
            })}
            <button className="btn btn-danger font-weight-bold" onClick={clearList}>Clear Items</button>
        </ul>
    )
  }

}