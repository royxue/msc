import React from "react"
import {
  Tab,
  TabBody,
  NavBar,
  NavBarItem
} from "react-weui"
import { Helmet } from "react-helmet"
import classNames from "classnames";

import ButtonPage from '../components/button_page';
import CompanyPage from '../components/company_page';
import StrategyPage from '../components/strategy_page';
import StudyPage from '../components/study_page';
import FooterBlock from '../components/footer_block';

import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.css'

import banner from '../images/banner.png';
import share from '../images/share.png';
import axios from 'axios';

const token_config={
  "token":"",
  "appid":"wx0a85b83326fb21bf",
  "appsecret": "a1d2d4fb2f4dbb6f2fe4f33e16e02b35",
  "getJsapiTicket":"https://api.weixin.qq.com/cgi-bin/ticket/getticket",
  "getAccessToken":"https://api.weixin.qq.com/cgi-bin/token"
};
const fetchUrl = token_config.getAccessToken+'?grant_type=client_credential&appid='+token_config.appid+'&secret='+token_config.appsecret;

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tab:0,
      mask: false,
      isFixed: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount(){
    axios.get(fetchUrl)
      .then(res => {
        console.log(res)
      })  
  }
  componentDidMount() {
    const fixedTop = document.getElementById('banner').height;
    window.onscroll = () => {
      let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop)
      if (scrollTop >= fixedTop) {
        this.setState({ isFixed: true })
      } else if (scrollTop < fixedTop) {
        this.setState({ isFixed: false })
      }
    }
  }

  handleClick(){
    this.setState({
      mask: !this.state.mask
    })
  }

  back2top(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>可持续商业指南</title>
          <description>疫情共创指南</description>
        </Helmet>
          <div>
          <div onClick={this.handleClick}
      className={
        classNames({
          'mask':this.state.mask,
          '_mask':!this.state.mask
        })}>
        <div onClick={this.handleClick}
        className={classNames({
            'mask_image_hidden':!this.state.mask,
            'mask_image_visible':this.state.mask
          })}>
          <img
              src={share} style={{height:'75%', width:'100%'}}
          /></div></div>
          <img id='banner' src={banner}
            style={{position: 'flex', width:'100%', margin: '0 0 -0.5rem 0'}}
          />
          <Tab style={{position:'flex'}}>
            <NavBar id='navinone' className={classNames({
              'fixed-nav': this.state.isFixed
            })}>
              <NavBarItem
                active={this.state.tab == 0}
                onClick={e=>this.setState({tab:0})}
                className={
                  classNames({
                    'tab-slected': this.state.tab == 0
                  })}
              ><p>行动背景</p></NavBarItem>
              <NavBarItem
                active={this.state.tab == 1}
                onClick={e=>this.setState({tab:1})}
                className={
                  classNames({
                    'tab-slected': this.state.tab == 1
                  })}
              ><p>战略十问</p></NavBarItem>
              <NavBarItem
                active={this.state.tab == 2}
                onClick={e=>this.setState({tab:2})}
                className={
                  classNames({
                    'tab-slected': this.state.tab == 2
                  })}
              ><p>企业特辑</p></NavBarItem>
              <NavBarItem
                active={this.state.tab == 3}
                onClick={e=>this.setState({tab:3})}
                className={
                  classNames({
                    'tab-slected': this.state.tab == 3
                  })}
              ><p>特别行动</p></NavBarItem>
            </NavBar>
            <TabBody>
              <ButtonPage display={this.state.tab == 0 ? null : 'none'}/>
              <StrategyPage display={this.state.tab ==1 ? null: 'none'} />
              <CompanyPage display={this.state.tab == 2 ? null : 'none'} />
              <StudyPage display={this.state.tab == 3?null:'none'}/>
              <div className="box-back-top" onClick={this.back2top}>
              <div className="box-back-top-in"></div>
              </div>
              </TabBody>
          </Tab>
          </div>
        <div className="footer">
          <FooterBlock change={this.handleClick} popup={this.state.mask} mode={0}/>
        </div>
      </div>
    )
  }
};

export default IndexPage
