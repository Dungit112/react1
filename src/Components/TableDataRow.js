import React, { Component } from 'react';

class TableDataRow extends Component {
  


  editClick = () => {
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  }

  deleteButtonClick = (idUser) =>{
    this.props.deleteButtonClick(idUser);
  }

  permission = () =>{
    if(this.props.Permission===1){
      return "Admin"
    }else if(this.props.Permission===2){
      return "Moderator"
    }else{
      return "Normal"
    }
  }

    render() {
        return (
            <tr>
            <td>{this.props.stt + 1}</td>
            <td>{this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>{this.permission()}</td>
            <td>
              <div className="btn-group">
                <div onClick = {() => this.editClick()} className="btn btn-warning"><i className="fa fa-edit">Sửa</i></div>
                <div onClick = {(idUser) => this.deleteButtonClick(this.props.id)} className="btn btn-danger"><i className="fa fa-delete">Xóa</i></div>
              </div>
            </td>
          </tr>
        );
    }
}

export default TableDataRow;