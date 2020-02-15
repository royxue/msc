import React from "react"
import {
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription,
} from "react-weui";
import classNames from "classnames"


class ColBox extends React.Component {
  state = {
    show: false
  }

  showBox = () => {
    if (this.state.show) {
      this.setState({ show: false })
    } else {
      this.setState({ show: true })
    }
  }

  render() {
    var boxClass = classNames({
      'box-show': this.state.show
    })
    return (
      <MediaBox type="text">
        <MediaBoxTitle>
          <div style={{width: "100%", textAlign: "center"}}>
            第一问
          </div>
        </MediaBoxTitle>
        <MediaBoxDescription className={boxClass}>
          这是一段非常长的文章这是一段非常长的文章这是一段非常长的文章这是一段非常长的文章这是一段非常长的文章这是一段非常长的文章这是一段非常长的文章
        </MediaBoxDescription>
        <p onClick={this.showBox} style={{width: "100", textAlign: "center"}}>more</p>
      </MediaBox>
    )
  }
}

export default ColBox;