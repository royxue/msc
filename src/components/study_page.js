import React, { useLayoutEffect } from "react"
import {
    Panel,
    PanelBody,
    Button,
    ButtonArea,
    MediaBox,
    MediaBoxHeader,
    MediaBoxTitle
  } from "react-weui";
import _ from "lodash";
import classNames from "classnames";
import ButtonArticle from './button_arti';
import data from '../data/activity';
import right from '../images/right.png';
import special from '../images/special.png';


class StudyPage extends React.Component {
  state={
    need_flag: 'none',
    page: 0
  }
  goback= () =>{
    this.setState({page:0})
  }

  render() {
    return(
      <div style={{display: this.props.display}}>
        <div style={{display: this.state.page == 0 ? null : 'none'}}>
            <MediaBox type="appmsg">
              <MediaBoxHeader className={classNames({'modified-md-header': true})}>
                <img src={special} style={{height:'40px', width:'40px'}}/>
              </MediaBoxHeader>
              <MediaBoxTitle>
                <p className='small-title'>什么是特别行动？</p>
                <p className='small-subtitle'>面对大幅增加的线上，对产品供给进行充分及时的保</p><p className='small-subtitle'>障，确保基本民生诉求能够尽可能的满足。</p>
              </MediaBoxTitle>
            </MediaBox>
            <ButtonArea >
              <Button type="default" onClick={e=>this.setState({page: 1})}>
                <div className="btn-page">【报告】《企业疫情参与白皮书》
                  <img className="btn-icon" src={right}/>
                </div>
              </Button>
              <Button type="default" href="https://mp.weixin.qq.com/s/FVyL0QtZHJOtCEp-X5nn2w">
                <div className="btn-page" style={{'whiteSpace':'nowrap'}}>【调研】你会为企业的「善意」买单吗？
                  <img className="btn-icon" src={right}/>
                </div>
              </Button>
              <Button type="default" onClick={e=>this.setState({page:2})}>
                <div className="btn-page">【影像记录】2020爱的力量公益影像计划
                  <img className="btn-icon" src={right}/>
                </div>
              </Button>
              <Button type="default" href="https://mp.weixin.qq.com/s/_mITg5_itUV3yjCtCBoQTA">
                <div className="btn-page">【文字记录】抢救1000个中国村庄
                  <img className="btn-icon" src={right}/>
                </div>
              </Button>
              <Button type="default">
                <div className="btn-page">策划中...
                  <img className="btn-icon" src={right}/>
                </div>
              </Button>
      </ButtonArea>
      </div>
      <div>
      {
        (this.state.page != 0) ?<div>
          <ButtonArticle
            display={this.state.page != 0? null : 'none'}
            _page={this.state.page-1}
            title={data[this.state.page-1].title}
            content={data[this.state.page-1].content}
          />
          <Button type="default" onClick={e=>this.setState({page:0})} style={{'width':'18%'}}>
            <div className="btn-page">返回
            </div>
          </Button>
          </div>
          : null
      }
      </div>
      <div className="placeholder" />
      </div>
  )}
}

export default StudyPage;