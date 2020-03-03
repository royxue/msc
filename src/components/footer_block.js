import React from "react";
import {
  Dialog
} from "react-weui";
import joinusimg from '../images/joinus.jpeg';


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
        <img className='joinus' src={joinusimg}/>
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