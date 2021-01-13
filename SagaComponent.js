import React from "react";
import { connect } from "react-redux";
import {
  requestUsers,
  usersPostRequest,
  deleteUserRequest,
} from "../Redux/saga/sagaActions";

class SagaComponent extends React.Component {
  constructor(props) {
    super(props);
    const assignedData = this.props.fetchUserData;
    console.log('asigned data',assignedData)
    this.state = {
      getbyId: '',
      name: "",
      age: '',
      statename: "",
      pincode: '',
    };
  }
  // componentDidMount(){
  //   setTimeout (() => {
  //     this.props.fetchUsersDispatch();
  // });
  // }

  onChangeField = (e) => {
    this.setState({
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      address: {
        statename: this.state.statename,
        pincode: this.state.pincode,
      },
    };
    this.props.postUserDispatch(newData, alert("Added !!!"));
  };

  handleDelete = (id) => {
    const allusersDATA = this.props.fetchUserData;
    console.log("id from component", id, allusersDATA);
    this.props.deleteuserdispatch(id, allusersDATA);
  };

  handleEdit =(id)=>{
console.log('id',id,this.props.fetchUserData,this.props.fetchUserData.id, id)
let index= this.props.fetchUserData.findIndex(x=>x.id === id)
if(index !==-1){
  this.setState = {
   
    name: this.props.fetchUserData ? this.props.fetchUserData[index].name : this.state.name,
    age:  this.state.age,
    statename:  this.state.statename,
    pincode:  this.state.pincode,
  };
  console.log('staet',this.setState,this.state)
}

}

  render() {
    return (
      <div>
        <div>
          <button
            onClick={this.props.fetchUsersDispatch}
            className="btn btn-primary"
          >
            Show user list
          </button>
          {/*    {console.log("fetch users data", this.props.fetchUserData)} */}
          {this.props.fetchUserData &&
            this.props.fetchUserData.map((userDATA) => (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">StateName</th>
                    <th scope="col">Pincode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={userDATA.id}>
                    <td>{userDATA.id}</td>

                    <td>{userDATA.name}</td>
                    <td>{userDATA.age}</td>
                    <td>{userDATA.address.statename}</td>
                    <td>{userDATA.address.pincode}</td>
                    <td>
                      {
                        <button
                          onClick={() => this.handleDelete(userDATA.id)}
                          className="btn btn-secondary"
                        >
                          Delete
                        </button>
                      }
                    </td>
                    <td>
                      {
                        <button
                          className="btn btn-secondary"
                          onClick={() => this.handleEdit(userDATA.id)}
                        >
                          Edit
                        </button>
                      }
                    </td>
                  </tr>
                </tbody>
              </table>

              // <p key={userDATA.id}>{userDATA.name}
              //     <button onClick={()=>this.handleDelete(userDATA.id)} className='btn btn-secondary'>Delete</button>
              // <button className='btn btn-secondary' onClick={()=>this.handleEdit(userDATA.id)}>Edit</button>
              // </p>
            ))}
          <br /> <br />
        </div>

        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={this.onChangeField}
          />
          <br /> <br />
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={this.onChangeField}
          />
          <br /> <br />
          <input
            type="text"
            name="statename"
            placeholder="statename"
            onChange={this.onChangeField}
          />
          <br /> <br />
          <input
            type="text"
            name="pincode"
            placeholder="pincode"
            onChange={this.onChangeField}
          />
          <br /> <br />
          <button className="btn btn-primary" onClick={this.onSubmit}>
            Add New
          </button>
          <br /> <br />
          <br /> <br />
        </div>

        <div>
          <input
            type="text"
            name="getbyId"
            placeholder="enter user id"
            onChange={this.onChangeField}
          />
          <button
            onClick={this.props.getuserbyIdDispatch}
            className="btn btn-primary"
          >
            {" "}
            Get user by ID{" "}
          </button>

          <ul>{this.props.getuserbyIdData}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log("state", state, state.sagaReducer.usersdata);
  // console.log("post--state", state, state.sagaReducer.postdata);

  return {
    fetchUserData: state.sagaReducer.usersdata,
    //  postUserData: state.sagaReducer.postdata,
    deleteData: state.sagaReducer.newstate,
    // getuserbyIdData: state.sagaReducer.dataByID
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersDispatch: () => dispatch(requestUsers()),
    postUserDispatch: (data) => dispatch(usersPostRequest(data)),
    deleteuserdispatch: (userId, allusersDATA) =>
      dispatch(deleteUserRequest(userId, allusersDATA)),

    // getuserbyIdDispatch: (id)=>dispatch(requestUserbyId(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SagaComponent);
