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

import company from '../images/company.png'


class CompanyPage extends React.Component {
  state = {
    tab: 0
  }
  render() {
    return(
      <div style={{display: this.props.display}}>
      <MediaBox type="appmsg">
      <MediaBoxHeader
          id ='header'
          className={
          classNames({
            'modified-md-header': true
          })}
        ><img src={company} style={{height:'80%', width:'80%'}}/></MediaBoxHeader>
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