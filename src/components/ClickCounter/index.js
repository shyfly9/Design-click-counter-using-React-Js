import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="head">
          The Button has been clicked <br />
          <span className="counter-value">{count}</span> times
        </h1>
        <p className="text">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
