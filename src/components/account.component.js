import React, {Component} from 'react';
import BankAppService from "../services/bank.service";

export default class Account extends Component {
    constructor(props) {
    super(props);
    this.onChangeBal = this.onChangeBal.bind(this);
    this.getAccount = this.getAccount.bind(this);
    this.updateAccount = this.updateAccount.bind(this);
    
        this.state = {
            currentAccount: {
              id: null,
              name: "",
              type: "",
              dob: "",
              gender: "",
              amount:0
            },
            message: "",
            amttobeupdated:0,
            fromDeposit: false
          };
    }

    onChangeBal(e) {
      this.setState({amttobeupdated: e.target.value });    }

    componentDidMount() {
        this.getAccount(this.props.match.params.id);
        this.setState({
            fromDeposit: this.props.location.state
        });
      }

    getAccount(id) {
    BankAppService.get(id)
        .then(response => {
        this.setState({
            currentAccount: response.data
        });
        console.log(response.data);
        })
        .catch(e => {
        console.log(e);
        });
    }

    updateAccount() {
      const amt = Number(this.state.amttobeupdated);
        let bal = 0;
        this.state.fromDeposit ? bal = (this.state.currentAccount.amount + amt) : bal = (this.state.currentAccount.amount - amt)
        this.setState(function(prevState) {
            return {
            currentAccount: {
                ...prevState.currentAccount,
                amount: bal
            }
            };
        });
        
      BankAppService.update(
          this.state.currentAccount
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The Account has been updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
      }

    render() {
    const { currentAccount } = this.state;

    return (
      <div>
        {currentAccount ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  required
                  onChange={this.onChangeBal}
                />
              </div>
            </form>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateAccount}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Account...</p>
          </div>
        )}
      </div>
    );
    }
}
