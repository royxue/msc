import React from "react"
import {
  MediaBox,
  MediaBoxTitle,
  MediaBoxDescription,
} from "react-weui";

import classNames from "classnames"
const load_Img=
  <img src="https://github.com/royxue/msc/blob/dev/src/images/load_arrow.png?raw=true" style={{transform:'rotate(90deg)', height:'2%', width:'2%', 'marginRight':'4px'}}/>
const load_Img_up=
  <img src="https://github.com/royxue/msc/blob/dev/src/images/load_arrow.png?raw=true" style={{transform:'rotate(270deg)', height:'2%', width:'2%', 'marginRight':'4px'}}/>

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
  parseToDOM(str){
    var div = document.createElement("div")
    if(typeof str ==="string")
      div.innerHTML = str;
    return div.innerHTML;
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
          <div dangerouslySetInnerHTML={{__html:this.props.title}}></div>
          </div>
        </MediaBoxTitle>
        <MediaBoxDescription className={boxClass}>
          <p dangerouslySetInnerHTML={{__html:this.props.content}}></p>
        </MediaBoxDescription>
        <div onClick={this.showBox} className='box-more' style={{display: this.props.need_flag}}>
          <div>{this.state.show? null:load_Img}
          {this.state.show? load_Img_up:null}
          {/* {this.state.show? '收起' : '查看更多'} */}
          </div>
        </div>
      </MediaBox>
    )
  }
}

export default ColBox;