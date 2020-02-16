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
      'box-show': this.state.show,
      'box-hide': !this.state.show
    })
    return (
      <MediaBox type="text">
        <MediaBoxTitle>
          <div className='box-title'>
            {this.props.title}
          </div>
        </MediaBoxTitle>
        <MediaBoxDescription className={boxClass}>
          {this.props.content}
        </MediaBoxDescription>
        <p onClick={this.showBox} className='box-more'>
          {this.state.show? '收起' : '查看更多'}
        </p>
      </MediaBox>
    )
  }
}

export default ColBox;