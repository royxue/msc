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
import CountUp from 'react-countup';
import FooterBlock from './footer_block';
import data from '../data/activity';
const RIGHT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZElEQVRIiWNgGAVUAKsYGBj+I+FQalsgwsDA8ALJgtcMDAzi1LbEnwHVFxuobQEDw2hQkQBGWFAxkWkBOxr/J5nmYAUiDAwMLxlQg0iMmhbQNJLD0AxfSU3DR4MGJxjaQTMKGADY7US//AbyFgAAAABJRU5ErkJggg=="
const appMsgIcon_url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDY3RTg5MTU0MjVEMTFFQThGMzREQUI2QjFEQUVEMzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDY3RTg5MTY0MjVEMTFFQThGMzREQUI2QjFEQUVEMzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNjdFODkxMzQyNUQxMUVBOEYzNERBQjZCMURBRUQzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNjdFODkxNDQyNUQxMUVBOEYzNERBQjZCMURBRUQzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkw6knsAAAROSURBVHja7Jp7aM1hGMd/YzY2Y6RMyCWzhsnEppB/3Bupzf1e/lCiaSYsESO05K6kuY4sKddilltC7rYJWyhlLoVtGHY5vo/zPXn6Oc45ODv7nTlvffq953feve/7fW/P8z5nQTabzWgIqZHRQFKws5dxcXGReCwAQ0BTUN/TFgQqwVmwvaCg4PMvBcxLCyKi8DgD4i06+FfAWIj54G5GFikRX0G5RQS0BCFgMJgL1rkTMoDPj2AYKLGIEBnc06AJGOjJHgnhswzcxxRWuqodS/Gfeof6PSqHdm7j8YVCmnlyatnUBgu10N4IddLHhnf8BoT8j0KaEr8WkiwHEygEE3zuongpdQH7QDg/7wE3wTN/m5F0JUJSGN/51dLqAKYqD6GC+RmcKb8RshC0YD4LrGU+nL6cJfeIjH4sRzoGdAPDlZuzg5Z4CR2/OaAjKBY/Dq7HUzwfwlV5UW9C0IkMjnDkb4rsBm9VPo2+3BhTuXLUJTOXCUE2ny4tNCwjn+lERA14Ba6Dzer9RnAVlLKMTrIMV3FGfT4jNaQxP18GK9nRN+CdqfxLMAi0Am1BFJfbCOUI1vh8s2MJiD1Yb7ovyH555ESETu9Zpj1IUO+zUGdxvZxaaDhDLZ8IsJ+3N3dJyhzk7EjajLoW1/fxmwo2qc873YiZxjKGEpFqFTsidmOL+uxq0/ZW+WxviPC2QdQ+1E0X5W6p/CMrWvZ+6vQpYr4T2EYcrol4wrXM97WaELnfd2f+tWEPpq3g6M8jt2grvtHO/FiCsEde6YO33PjWHH2HP3URtHNSZjldlDA1Y21odywhJIIddeQjmJeZ2UVDN5cCtEA5fpt7Q4i3llapaYNXgQOgP4/nNOb3cmnpQ+GllZaWhFYngvncL4fBHVOZh2A2DegUvtuG4/eL1a664oZ7Yp3vkUA4KCAkIMSHKbiO65cL1Hjak2O8i/iVkASGfpJ5EzToshyhfXlg5aUl9+7pIB9co38Vpb7vyECFGEH55SlFuSqWmJGeFDBJ+VuGCgedMOxB7CTD/kuTRFFGk2I4jTl45sAwlvhcCBqXDo0Es/gMMd+CpXMgV91TYmjRJ4NovotmwCIddcosSXw4H6Kq6lQIGuvKjkg4NNb0tfz2fYb+1Hm6LTo95j7ZAEZxECSQ14Qe8wRyD+3IfT73T4J2roTIBakMlYrvNJQNJxk/Q6GO9ISjL/6VJ1GQT+Ao6cVBkWXZmd/3IcvQ9nEZGAiSUFP5n272ICVSfKcb4ByXRQvlJJ7iqRTPC9PfhHIK0cmlvMdLUCIPVKv7iziZlyDoCh1Scx9dzkitsgHrTN8958jL5izicvvn0wJ1VXBWc1BfXx4eKYyTSRpEHKnaEyFyu0s0/dEFrv2TbLTOEuoX9/8OBK3GcxyYadj/20HPQp4nQtYY9jCojMxdcIiV+zShTYlWZgsQlcil18Owh2a3/rIfAv+vZbH0XYABAKMAJzeDNEqtAAAAAElFTkSuQmCC"
const appMsgIcon =
  <img src={appMsgIcon_url} style={{height:'40px', width:'40px'}}/>


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
                {appMsgIcon}
              </MediaBoxHeader>
              <MediaBoxTitle>
                <p className='small-title'>什么是特别行动？</p>
                <p className='small-subtitle'>面对大幅增加的线上，对产品供给进行充分及时的保</p><p className='small-subtitle'>障，确保基本民生诉求能够尽可能的满足。</p>
              </MediaBoxTitle>
            </MediaBox>
            <ButtonArea >
              <Button type="default" onClick={e=>this.setState({page: 1})}>
                <div className="btn-page">【报告】《企业疫情参与白皮书》
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
              <Button type="default" href="https://mp.weixin.qq.com/s/FVyL0QtZHJOtCEp-X5nn2w">
                <div className="btn-page" style={{'whiteSpace':'nowrap'}}>【调研】你会为企业的「善意」买单吗？
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
              <Button type="default" onClick={e=>this.setState({page:2})}>
                <div className="btn-page">【影像记录】2020爱的力量公益影像计划
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
              <Button type="default" href="https://mp.weixin.qq.com/s/_mITg5_itUV3yjCtCBoQTA">
                <div className="btn-page">【文字记录】抢救1000个中国村庄
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
              <Button type="default" onClick={e=>this.setState({page:3})}>
                <div className="btn-page">策划中...
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
      </ButtonArea>
      </div>
      <div>
      {
            (this.state.page != 0) ?
              <ButtonArticle
              display={this.state.page != 0? null : 'none'}
              _page={this.state.page-1}
              title={data[this.state.page-1].title}
              content={data[this.state.page-1].content}
              /> : null
      }
      </div>
      <div className="placeholder" />
      </div>
  )}
}

export default StudyPage;