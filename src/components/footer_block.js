import React from "react";
import {
  Page, Article
} from "react-weui";
import classNames from "classnames"

class FooterBlock extends React.Component {
  constructor(props){
    super(props);
    this.state={

      }
  }
  render(){
    return (
      <div>
      <div className="footer-block">
        <div className="footer-left">
          <a href="http://www.msc-world.com/">
            <p className="footer-btn">加入共创</p>
          </a>
        </div>
        <div className="footer-right">
          <p className="footer-btn" onClick={this.props.change}>分享给需要的人</p>
        </div>
      </div>
      </div>
    )
  }
}



export default FooterBlock;