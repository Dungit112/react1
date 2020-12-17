import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id :"",
      name :"",
      tel : "",
      Permission :""
    }
  }
  

  isChange = (event) =>{

    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] :value
    });
  
  }

    hienThiTrangThai = () => {
      if(this.props.hienThiForm===true){
        return(
          <div className="col">
            <form>
          <div className="card text-left">
          <div className="card border-primary mb-3">
            <div className="card-header"> Thêm mới</div>
            <div className="card-body text-primary">
              <h5 className="card-title"> Tên user</h5>
              <div className="form-group">
                <input onChange = {(event) =>this.isChange(event)} name = "name" type="text" className="form-control"  placeholder=" Nhập tên " />
              </div>
              <div className="form-group">
                <input onChange = {(event) =>this.isChange(event)} name = "tel" type="text" className="form-control"  placeholder=" SDT " />
              </div>
              <div className="form-group">
                <select onChange = {(event) =>this.isChange(event)} name = "Permission" className="custom-select" required>
                  <option value> CHọn quyền mặc định</option>
                  <option value={1}> addmin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Normal</option>
                </select>                                                            
              </div>
              <div className="form-group">
                <input type="reset" onClick = {(name,tel,Permission) => this.props.add(this.state.name, this.state.tel, this.state.Permission)}
                 className="btn btn-block btn-primary" value="Thêm mới" />
              </div>
            </div>
          </div>
        </div>
        </form>
        </div>
        )
      }
    }
  

    render() {
      console.log(this.state)
        return (
            <div className="col-3">
             {this.hienThiTrangThai()} 
           
           
          </div>
        );
    }
}

export default AddUser;