//รับข้อมูลจากผู้ใช้
import React ,{Component} from "react";

export default class TodoInput extends Component{
  render(){
    const {handleSubmit,item,handleChange,editItem} = this.props;
    return(
        <div className="card card-body my-3">
              <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Enter new todo</label>
                    <input type="text" className="form-control" value={item} onChange={handleChange} placeholder="What to do..." autoFocus/>
                  </div>
                  <input type="submit" disabled={item?false:true}
                  className={editItem?"btn btn-primary":"btn btn-success"}
                   value={editItem?"Update":"Add Item"}/>
              </form>
        </div>
    )
  }
}