import React, {Component} from 'react';
import BankAppService from "../services/bank.service";
import { Link } from "react-router-dom";

export default class AccountAction extends Component {
    constructor(props) {
    super(props);
    this.retrieveAccounts = this.retrieveAccounts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAccount = this.setActiveAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
        this.state = {
            accounts: [],
            currentAccount: null,
            currentIndex: -1,
        }    }

// Get the details of Accounts.
componentDidMount() {
    this.retrieveAccounts();
  }
retrieveAccounts() {
    BankAppService.getAll()
      .then(response => {
        this.setState({
          accounts: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
}   

refreshList() {
    this.retrieveAccounts();
    this.setState({
      currentAccount: null,
      currentIndex: -1
    });
  }

  setActiveAccount(account, index) {
    this.setState({
      currentAccount: account,
      currentIndex: index
    });
  }

  deleteAccount() {    
    BankAppService.delete(this.state.currentAccount.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/accounts')
      })
      .catch(e => {
        console.log(e);
      });
  }
   
//Renders the list of Accounts.
   render() {
    const { accounts, currentAccount, currentIndex } = this.state;
    return (
        <div className="list row">
          
          <div className="col-md-6">
            <h4>Accounts List</h4>
  
            <ul className="list-group">
              {accounts &&
                accounts.map((account, index) => (
                  <li
                    className={
                      "list-group-item " +
                      (index === currentIndex ? "active" : "")
                    }
                    onClick={() => this.setActiveAccount(account, index)}
                    key={index}
                  >
                    {account.name}
                  </li>
                ))}
            </ul>
  
          </div>
          <div className="col-md-6">
            {currentAccount ? (
              <div>
                <h4>Account</h4>
                <div>
                  <label>
                    <strong>Name:</strong>
                  </label>{" "}
                  {currentAccount.name}
                </div>
                <div>
                  <label>
                    <strong>Account Type:</strong>
                  </label>{" "}
                  {currentAccount.type}
                </div>
                <div>
                  <label>
                    <strong>Gender:</strong>
                  </label>{" "}
                  {currentAccount.gender}
                </div>
                <div>
                  <label>
                    <strong>Amount:</strong>
                  </label>{" "}
                  {currentAccount.amount}
                </div>
  
                <button
              className="badge badge-danger mr-2"
              onClick={this.deleteAccount}
            >
              Delete
            </button>
                
            <Link className= "badge badge-warning"
                to={{
                pathname: "/accounts/" + currentAccount.id,
                state: {
                    fromDeposit: true
                }
                }}>
                  Deposit
                </Link>
                <Link
                  to={"/accounts/" + currentAccount.id}
                  className="badge badge-warning"
                >
                  Withdraw
                </Link>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Account...</p>
              </div>
            )}
          </div>
        </div>
      );
    }}
