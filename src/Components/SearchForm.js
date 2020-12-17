import React, { Component } from 'react';
import EditUser from './EditUser';

class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state ={
      tempValue : '',
      userObj : {}
    }
  }

  getUserEditInfo = (info) =>{
    this.setState({
      userObj : info 
    });
    this.props.getUserEditInfoApp(info);
  }

  isShowEditForm = () =>{
   if( this.props.editUserStatus ===true){
      return <EditUser

      getUserEditInfo = {(info) => this.getUserEditInfo(info)}
      userEditObject = { this.props.userEditObject}
       changeEditUserStatus = {() =>this.props.changeEditUserStatus()}
        />
    }
  }
  

  isChange = (event) =>{
    console.log(event.target.value);
    this.setState({
      tempValue : event.target.value
    });
    this.props.CheckConnectProps(this.state.tempValue);
  }
  

  hienThiNut = () => {
    if(this.props.hienThiForm===true){
      return <div  className="btn btn-block btn-warning" onClick = {() =>this.props.ketnoi()} > Dong </div> ;
    }else{
      return <div  className="btn btn-block btn-info" onClick = {() =>this.props.ketnoi()}> Them </div> ;
    }
  }

    render() {
        return (
            <div className="col-12">

              {this.isShowEditForm()}

            <div className="form-group">
              <div className="btn-group">
                <input onChange ={(event) =>this.isChange(event)}  type="text" style={{width: '500px'}} className="form-control"   />
                <div onClick = {(dl) => this.props.CheckConnectProps(this.state.tempValue)} className="btn btn-info"> Tìm</div>            
              </div>
            </div>
            <div className="form-group">
                {this.hienThiNut()}
                
          </div>
          </div>
        );
    }
}

export default SearchForm;