// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  renderFirstReview = Review => {
    const {imgUrl, username, companyName, description} = Review
    return (
      <div className="ReviewContainer">
        <img src={imgUrl} className="image-styles2" alt={username} />
        <p className="username">{username}</p>
        <p className="CompanyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex - 1}))
    }
  }

  onClickRightArrow = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({activeIndex: prevState.activeIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeIndex} = this.state
    console.log(activeIndex)
    const firstReview = reviewsList[activeIndex]

    return (
      <div className="background-image">
        <h1 className="heading">Reviews</h1>
        <div className="Container2">
          <button
            className="button1"
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="leftArrowstyle"
            />
          </button>
          {this.renderFirstReview(firstReview)}
          <button
            className="button2"
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="RightArrowstyle"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
