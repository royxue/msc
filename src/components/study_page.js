import React, { useLayoutEffect } from "react"
import {
    Panel,
    PanelBody,
    Button,
    ButtonArea
  } from "react-weui";
import _ from "lodash";
import ColBox from "../components/col_box";
import { black } from "color-name";

const RIGHT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAZElEQVRIiWNgGAVUAKsYGBj+I+FQalsgwsDA8ALJgtcMDAzi1LbEnwHVFxuobQEDw2hQkQBGWFAxkWkBOxr/J5nmYAUiDAwMLxlQg0iMmhbQNJLD0AxfSU3DR4MGJxjaQTMKGADY7US//AbyFgAAAABJRU5ErkJggg=="

const DATA= {
  info:[
    {
      title:"<p style='font-size:18px'>什么是特别行动？</p>",
      description:"<div style='font-size:14px'>面对大幅增加的线上，对产品供给进行充分及时的保障，确保基本民生诉求能够尽可能的满足。</div>"
    }
  ]
}
class StudyPage extends React.Component {
  state={
    need_flag: 'none'
  }

  render() {
    const contentboxStyle = {
      "-webkit-line-clamp": 'none'
    }

    var boxList = _.map(DATA['info'], (info) => {
      return <ColBox title={info.title} content = {info.description} need_flag = {this.state.need_flag}/>
    })

    return(
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          {boxList}
          
          <ButtonArea >
              <Button type="default" onClick={e=>this.setState({page:1})}>
                <div className="btn-page">
                  特别行动：xxxxxxxxxx
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
              <Button type="default" onClick={e=>this.setState({page:2})}>
                <div className="btn-page">
                特别行动：xxxxxxxxxx
                  <img className="btn-icon" src={RIGHT}/>
                </div>
              </Button>
      </ButtonArea>
      </PanelBody>
      </Panel>
    )
  }
}

export default StudyPage;