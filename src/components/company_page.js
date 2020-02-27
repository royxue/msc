import React from "react"
import {
  Tab,
  NavBar,
  NavBarItem,
  TabBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxTitle
} from "react-weui";

import CompanyPanel from './company_panel';
import './company_page.css';
import classNames from "classnames";

const com_src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEE5NjIwNjA0MjVEMTFFQTg0RDU4ODU4NTczRjRDNzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEE5NjIwNjE0MjVEMTFFQTg0RDU4ODU4NTczRjRDNzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQTk2MjA1RTQyNUQxMUVBODRENTg4NTg1NzNGNEM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQTk2MjA1RjQyNUQxMUVBODRENTg4NTg1NzNGNEM3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po0HkFUAAAMhSURBVHja7JpLaBNRFIYntSgoIlZcFJWKVfBBfUJRRPEtVhClWETaVRUVFMGFCIItCL7AhYJPUERx4Wuj1rpIpRYUFzUowVJRaRVBQfCJjwp2/C45wsmQidqQ5N6SCx93cjKZzD8z555zz52I7/tef2hFXj9p/UZIcdgXFRUVJXRLYDmMhQGQ6+cwAr+gG5ohGo/HP6bcMZWPIKKS7iAssOzC34GdiHn4VyGImEV3Ve6Cje0FVCPmcagQRAynuwFz1T5PIAZf8+BTvTAEzMWdrOwtsAYxX8J8ZGlAxAXYD538yA/xpYzOlOOm/Z7jGz+ZBLthvZgXw3xoChOyQm2bW9fAH3Xl8zmSC9iBoEb6aTBFXfSmsOF3jNqO5VtEQNAzunZlmvCvceSnhY7+Q20PSifEtzxYFoWcayFFcSdFyWVjRCqlq034dPy2k3cEESbQXYJDcJ7Py1wUMgeuwTz5PDI4rLogpAquwERluws3XRESEX8w6c8oZTdRuhYfeemCEDOn2QqnoCSQ09Uh4rULw6+JxHvgCAxWQe0wbEDEBxeG36EyUduibD3QiIADrsQRMxIdg7XK9gl2wFlXAmI5nIZFyvYGNsN1VyL7dDgDM5XtOWyEVldyrYUy79ciYvJ4tWbjD7MhZBVclMdKVz9q4JEr2W+9yZegVNlM9F4n1Q8n0vhdMjoNU7YTIu6dC2n8QNgnw2lElXH2SgWmx/r5iNTBjkru9Kd9k7tz3EuUO+2eWCFiNN1JWKnM72G7OHtO68TFfRRRRnfOS64Nm4RvE9xyaaq7OiCiU5z6vmvFh6fwVh6fNqjOp4g+C5ECQR1sk2jd4WwVBTFRumimRWzbc62CkGwIsXHd2g8UMUKF+IHUw7amz6k3nZBXemIkgc+KxrmMC8xvutMJaQ7M8Bo4QLkFIsabc4GpypyUQaRaDDUxojIwszMLfd+9/CyGmtKRGeNnKPs9qCIEfE4pRMTMprvsJS/D2dTMcmANItrTjlrs8ECmpW0WioimEpHyjqg7M8JLrJyaVzjKRHS+XuHoEv9t+a9XOAqRvSAk8/ZbgAEAZhriB6pA/0YAAAAASUVORK5CYII="
const appMsgIcon =
  <img src={com_src} style={{height:'80%', width:'80%'}}/>

class CompanyPage extends React.Component {
  state = {
    tab: 0
  }
  render() {
    return(
      <div style={{display: this.props.display}}>
      {/* <p className='countup' style={{textAlign:'center'}}>
        已收入 <CountUp start={this.props.display ? 92: 93} end={101} duration={8} /> 个案例
      </p> */}
      <MediaBox type="appmsg">
      <MediaBoxHeader
          id ='header'
          className={
          classNames({
            'modified-md-header': true
          })}
        >{appMsgIcon}</MediaBoxHeader>
            <MediaBoxTitle>
              <p className='small-title'>企业特辑:企业除了捐赠，还可以做什么？</p>
              <p className='small-subtitle'>案例持续增加中，已有300+</p>
            </MediaBoxTitle>
          </MediaBox>

      <Tab>
      <NavBar>
        <NavBarItem
        active={this.state.tab == 0}
        onClick={e=>this.setState({tab:0})}
        className={
          classNames({
            'small_navbar_active': this.state.tab == 0
          })}
        ><p>信息流通</p></NavBarItem>
        <NavBarItem
        active={this.state.tab == 1}
        onClick={e=>this.setState({tab:1})}
        className={
          classNames({
            'small_navbar_active': this.state.tab == 1
          })}
        ><p>效率提升</p></NavBarItem>
        <NavBarItem
        active={this.state.tab == 2}
        onClick={e=>this.setState({tab:2})}
        className={
          classNames({
            'small_navbar_active': this.state.tab == 2
          })}
        ><p>后勤保障</p></NavBarItem>
        <NavBarItem
        active={this.state.tab == 3}
        onClick={e=>this.setState({tab:3})}
        className={
          classNames({
            'small_navbar_active': this.state.tab == 3
          })}
        ><p>科技向善</p></NavBarItem>
        {/*
        <NavBarItem
        active={this.state.tab == 2}
        onClick={e=>this.setState({tab:2})}
        className={
          classNames({
            'small_navbar_active': this.state.tab == 2,
            'small_navbar': this.state.tab != 2
          })}
        >分类3</NavBarItem>
        <NavBarItem
        class="small_navbar"
        active={this.state.tab == 3}
        onClick={e=>this.setState({tab:3})}
        className={
          classNames({
            'small_navbar_active': this.state.tab == 3,
            'small_navbar': this.state.tab != 3
          })}>分类4</NavBarItem>
        */}
      </NavBar>
      <TabBody>
        <CompanyPanel display={this.state.tab == 0 ? null : 'none'} _class = "page1"/>
        <CompanyPanel display={this.state.tab == 1 ? null : 'none'} _class = "page2"/>
        <CompanyPanel display={this.state.tab == 2 ? null : 'none'} _class = "page3"/>
        <CompanyPanel display={this.state.tab == 3 ? null : 'none'} _class = "page4"/>
        <br/><br/>
      </TabBody>
    </Tab>
    </div>
    )
  }
}

export default CompanyPage;