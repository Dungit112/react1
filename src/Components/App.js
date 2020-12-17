import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import React from 'react';
import DataUser from './DaTa.json';



// function App(){
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      hienThiForm : false,
      data : [],
      searchText :'',
      editUserStatus : false,
      userEditObject : {}
    }
  }

  
  componentWillMount() {
    // kiem tra xem co localstorege hay chua
    if(localStorage.getItem('userData')===null){
      localStorage.getItem('userData',[JSON.stringify(DataUser)])
    }else{
      var temp =JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data :temp
      });
    }
  }
  

  changeEditUserStatus = () =>{
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  getTextSearch = (dl) =>{
    this.setState({
      searchText : dl
    });
  }

  editUser = (user) =>{
    this.setState({
      userEditObject : user
    });
    console.log(user);
  }

  getNewUserData = (name,tel,Permission) =>{
    var item = {};
    item.id = "";
    item.name=name;
    item.tel=tel;
    item.Permission=Permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data : items
    });
    localStorage.setItem('userData',JSON.stringify( items));
 
  }
  getUserEditInfoApp =(info) =>{
    console.log("thong tin sua la" +info);
    this.state.data.forEach((value,key)=>{
      if(value.id ===info.id){
        value.name =info.name;
        value.tel =info.tel;
        value.Permission =info.Permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify( this.state.data));
  }

  deleteUser = (idUser) =>{
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data : tempData
    });
    // day vao du lieu
    localStorage.setItem('userData',JSON.stringify( tempData));

  }
  

 trangThaiThayDoi = () => {
   this.setState({
     hienThiForm : !this.state.hienThiForm
   });
 }
  render(){

    // localStorage.setItem('userData',JSON.stringify(DataUser));

    var ketqua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !==-1){
        ketqua.push(item);
      }
    })
    console.log(ketqua);

    return( <div >
      
      <Header/>
      <div className="SearchForm">
        <div className="container">
          <div className="row">
            <SearchForm 
            getUserEditInfoApp = {(info)=>this.getUserEditInfoApp(info) }
            userEditObject = {this.state.userEditObject}
            changeEditUserStatus = {()=>this.changeEditUserStatus()}
            editUserStatus = {this.state.editUserStatus}
            CheckConnectProps = {(dl) =>this.getTextSearch(dl)}
            ketnoi= {() => this.trangThaiThayDoi()} hienThiForm = {this.state.hienThiForm} />
            <div className="col-12">
        <hr />
      </div>
            <TableData
            deleteUser = {(idUser) => this.deleteUser(idUser)}
           changeEditUserStatus = {()=>this.changeEditUserStatus()}
            editFun = {(user)=>this.editUser(user)}
            dataUserProps = {ketqua}/>
            <AddUser
            add = {(name,tel,Permission) =>this.getNewUserData(name,tel,Permission)}
            hienThiForm = {this.state.hienThiForm}/>
 
          </div>
        </div>
      </div>
     
       
      
     
    </div>)
  }
}
   
//   return (
    
//     <div >
      
//       <Header/>
//       <div className="SearchForm">
//         <div className="container">
//           <div className="row">
//             <SearchForm ketnoi= {() => this.thongbao()}/>
//             <div className="col-12">
//         <hr />
//       </div>
//             <TableData/>
 
//           </div>
//         </div>
//       </div>
     
       
      
     
//     </div>
//   );
// }

export default App;
