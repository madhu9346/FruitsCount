import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMango = () => {
    this.setState(previous => ({mango: previous.mango + 1}))
  }

  onBanana = () => {
    this.setState(previous => ({banana: previous.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="subCon">
          <h1 className="head">
            Bob ate <span className="span">{mango}</span> Mangoes{' '}
            <span className="span">{banana}</span> Bananas
          </h1>
          <div className="subCon1">
            <div className="subCon2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button className="btn" onClick={this.onMango}>
                Eat Mango
              </button>
            </div>
            <div className="subCon2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button className="btn" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
