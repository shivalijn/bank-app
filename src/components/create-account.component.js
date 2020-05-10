import React, {Component} from 'react';
import BankAppService from "../services/bank.service";

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.onChangeCustName = this.onChangeCustName.bind(this);
        this.onChangeAccType = this.onChangeAccType.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeCustGender = this.onChangeCustGender.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.saveAccount = this.saveAccount.bind(this);
        this.newAccount = this.newAccount.bind(this);
        
        this.state = {
            id: null,
            name: '',
            type: '',
            dob: '',
            gender: '',
            amount: 0,
            submitted: false  
        }
    }
    onChangeCustName(e) {
        this.setState({ name: e.target.value });    }
    onChangeAccType(e) {
        this.setState({ type: e.target.value });    }
    onChangeDOB(e) {
        this.setState({ dob: e.target.value });    }
    onChangeCustGender(e) {
        this.setState({ gender: e.target.value });    }
    onChangeAmount(e) {
        this.setState({amount: e.target.value });    }

    saveAccount() {
        var data = {
            name: this.state.name,
            type: this.state.type,
            dob: this.state.dob,
            gender: this.state.gender,
            amount: this.state.amount
        };
    
        BankAppService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              name: response.data.name,
              type: response.data.type,
              dob: response.data.dob,
              gender: response.data.gender,
              amount: response.data.amount,
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

      newAccount() {
        this.setState({
            id: null,
            name: '',
            type: '',
            dob: '',
            gender: '',
            amount: 0,
            submitted: false
        });
      }

    render() {
        return (
            <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newAccount}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Customer Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeCustName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="type">Account Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                value={this.state.type}
                onChange={this.onChangeAccType}
                name="type"
              />
            </div>

            <div className="form-group">
                <label>DOB: </label>
                <input type="date" className="form-control" value={this.state.dob}
                onChange={this.onChangeDOB}></input>
            </div>
                            
            <div className="form-group" onChange={this.onChangeCustGender}>                        
              <label>Gender: </label>                        
              <input type="radio" value="MALE" name="gender" defaultChecked={true}/> Male  
              <input type="radio" value="FEMALE" name="gender"/> Female                    
            </div>
            <div className="form-group">
                <label>Initial Amount: </label>
                <input type="number" className="form-control" value={this.state.amount}
                onChange={this.onChangeAmount}></input>
            </div> 

            <button onClick={this.saveAccount} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
            )
    }
}
