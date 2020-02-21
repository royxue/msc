import React from "react"
import {
  Page,
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
import imgurl from '../images/banner';

import 'weui';
import 'react-weui/build/packages/react-weui.css';
import './index.css'


class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tab:0,
      mask: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      mask: !this.state.mask
    })
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MSC World</title>
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
              src='https://teleworking.nplusdigital.cn/h5/static/img/share-tips.d30bd0a.png' style={{height:'75%', width:'75%'}}
          /></div></div>
          <img src={imgurl}
            style={{position: 'flex', width:'100%', margin: '0 0 -0.5rem 0'}}
          />
          <Tab style={{position:'flex'}}>
            <NavBar id='navinone'>
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
              ><p>我想共创</p></NavBarItem>
            </NavBar>
            <TabBody>
              <ButtonPage display={this.state.tab == 0 ? null : 'none'} />
              <StrategyPage display={this.state.tab ==1 ? null: 'none'} />
              <CompanyPage display={this.state.tab == 2 ? null : 'none'} />
              <StudyPage display={this.state.tab == 3?null:'none'}/>
              </TabBody>
          </Tab>
          </div>
        <div className="placeholder" />
        <div className="footer">
          <FooterBlock change={this.handleClick} popup={this.state.mask}/>
        </div>
      </div>
    )
  }
};

export default IndexPage
