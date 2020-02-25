import React from "react";
import {
  Dialog
} from "react-weui";

class FooterBlock extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showQR: false
    }
  }
  handleQRshow = () => {
    this.setState({
      showQR: true
    })
  }
  handleQRhide = () => {
    this.setState({
      showQR: false
    })
  }
  render(){
    return (
      <div>
      <Dialog id='qrshare' type="ios" title="加入共创" show={this.state.showQR}>
        长按扫码参加
        <p onClick={this.handleQRhide} className="dialog-close">x</p>
        <img src="data:image/png;base64,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"/>
      </Dialog>
      {this.props.mode == 0 ?
        <div className="footer-block" id='index-footer'>
          <div className="footer-left">
            <p onClick={this.handleQRshow} className="footer-btn">加入共创</p>
          </div>
          <div className="footer-right">
            <p className="footer-btn" onClick={this.props.change}>分享给需要的人</p>
          </div>
        </div>
      :
        <div className="footer-block btn-footer" style={{display: this.props.show ? null : 'none'}}>
          <div className="footer-left">
            <p onClick={this.props.goback} className="footer-btn">返回首页</p>
          </div>
          <div className="footer-right">
            <p onClick={this.handleQRshow} className="footer-btn">加入共创</p>
          </div>
        </div>
      }
      </div>
    )
  }
}



export default FooterBlock;