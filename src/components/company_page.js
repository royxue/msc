import React from "react"
import {
  Tab,
  NavBar,
  NavBarItem,
  TabBody,
  MediaBox,
  MediaBoxBody,
  MediaBoxHeader,
  MediaBoxDescription,
  MediaBoxTitle
} from "react-weui";

import CompanyPanel from './company_panel';
import './company_page.css'
import classNames from "classnames";
import CountUp from 'react-countup';
const appMsgIcon = 
  <img src="https://github.com/royxue/msc/blob/dev/src/images/heart.png?raw=true" style={{height:'65%', width:'65%'}}/>
class CompanyPage extends React.Component {
  state = {
    tab: 0
  }

  render() {
    return(
      <div style={{display: this.props.display}}>
      <p className='countup' style={{textAlign:'center'}}>
        已收入 <CountUp start={this.props.display ? 92: 93} end={101} duration={8} /> 个案例
      </p>
      <MediaBox type="appmsg">
          <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
            <MediaBoxTitle>
              <p className='small-title'>企业复苏新周期：战略型灾情应对10问</p>
              <p className='small-subtitle'>请在每一问开头代入“我、企业、团队”</p>
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
        ><p>科技保障</p></NavBarItem>
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
        <CompanyPanel display={this.state.tab == 0 ? null : 'none'} _class = "company1"/>
        <CompanyPanel display={this.state.tab == 1 ? null : 'none'} _class = "company2"/>
        <CompanyPanel display={this.state.tab == 2 ? null : 'none'} _class = "company3"/>
        <CompanyPanel display={this.state.tab == 3 ? null : 'none'} _class = "company4"/>
      </TabBody>
    </Tab>
    </div>
    )
  }
}

export default CompanyPage;