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
            <p className="footer-btn">参与共创</p>
          </a>
        </div>
        <div className="footer-right">
          <p className="footer-btn" onClick={this.props.change}>欢迎分享</p>
        </div>
      </div>
      </div>
    )
  }
}



export default FooterBlock;