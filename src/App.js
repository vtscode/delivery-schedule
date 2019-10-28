import React from 'react';
// import logo from './logo.svg';
import moment from 'moment';
import './App.css';

class Main extends React.Component {
  constructor() {
    super();
    this.goats = ['Jurty', 'Bill', 'Thomas', 'Dexter', 'Eugene'];
    this.state = {
      interval: 1,
      period: 'days'
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Baby Goat Delivery Schedule</h1>
        <p className="description">{this.goats.length} baby goats delivered straight to your doorstep.</p>
        <div className="preferences">
          <span>Yes! Please deliver a new baby goat every </span>
          <input
            type="number"
            min="1"
            max="31"
            value={this.state.interval}
            onChange={e => this.setState({interval: e.target.value})}
          />
          <select onChange={e => this.setState({period: e.target.value})}>
            <option value="days">days</option>
            <option value="weeks">weeks</option>
            <option value="months">months</option>
          </select>
        </div>
        <div className="schedule">
          <ul>
          {
            this.goats.map((name, index) => {
              const offset = index + 1;
              const interval = offset * this.state.interval;
              return (
                <li>
                  <strong>{name}</strong>
                    &nbsp;will be delivered&nbsp;
                    <strong>{moment().add(interval, this.state.period).calendar()}</strong>
                </li>
              )
            })
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
