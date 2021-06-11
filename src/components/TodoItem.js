//การจัดเก็บรายการที่จะทำ 1 item ปุ่มแก้ไข ลบ เช็ค
import React ,{Component} from "react";

export default class TodoItem extends Component{
  render(){
    const {name,handleDelete,handleEdit,handleCheck,check}=this.props
    return(
          <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{name}</h6>
            <div>
                  <spa onClick={handleCheck} className={check ? 'text-success' : 'text-secondary'} ><i className={check? 'far fa-check-square' : 'far fa-square'}></i></spa>
                  <span onClick={handleEdit} className="mx-3 text-primary"><i className="fas fa-edit"></i></span>
                  <span onClick={handleDelete} className="text-danger"><i className="fas fa-trash-alt"></i></span>
            </div>
          </li>
    )
  }
}


