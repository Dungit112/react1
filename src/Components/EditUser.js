import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id :this.props.userEditObject.id,
            name :this.props.userEditObject.name,
            tel :this.props.userEditObject.tel,
            Permission :this.props.userEditObject.Permission,
        }
    }

    saveButton = () =>{
        var info = {};
        info.id= this.state.id;
        info.name= this.state.name;
        info.tel= this.state.tel;
        info.Permission= this.state.Permission;
        // console.log("info la " +info.name);
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    

    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] :value
        });
    }

    render() {
        console.log(this.state);
        return (
            <form>
            <div className="card text-left">
            <div className="card border-primary mb-3">
              <div className="card-header"> Sua chua</div>
              <div className="card-body text-primary">
                <h5 className="card-title"> Tên user</h5>
                <div className="form-group">
                  <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name}  name = "name" type="text" className="form-control"  placeholder=" Nhập tên " />
                </div>
                <div className="form-group">
                  <input onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel}  name = "tel" type="text" className="form-control"  placeholder=" SDT " />
                </div>
                <div className="form-group">
                  <select onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission}  name = "Permission" className="custom-select" required>
                    <option value> CHọn quyền mặc định</option>
                    <option value={1}> addmin</option>
                    <option value={2}>Moderator</option>
                    <option value={3}>Normal</option>
                  </select>                                                            
                </div>
                <div className="form-group">
                  <div 
                  onClick = {() => this.saveButton()}
                   className="btn btn-block btn-primary"  value="Luu" />
                </div>
              </div>
            </div>
          </div>
          </form>
        );
    }
}

export default EditUser;