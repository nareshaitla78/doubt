import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }
  getReview = reviewsList => {
    const {index} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }
  onleft = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prev => ({index: prev.index - 1}))
    }
  }
  onright = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prev => ({index: prev.index + 1}))
    }
  }
  render() {
    const {reviewsList} = this.props
    return (
      <div className="bg">
        <div>
          <button className="img1" onClick={this.onleft} data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              alt="left arrow"
            />
          </button>
        </div>

        <div>
          <h1>Reviews</h1>
          {this.getReview(reviewsList)}
        </div>
        <div>
          <button className="img1" onClick={this.onright} data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
