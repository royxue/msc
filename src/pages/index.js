import React from "react"
import {
  Page,
  Tab,
  TabBody,
  NavBar,
  NavBarItem
} from "react-weui"
import { Helmet } from "react-helmet"

import ButtonPage from '../components/button_page';
import CompanyPage from '../components/company_page';
import Image from '../components/image';
import StrategyPage from '../components/strategy_page';
import StudyPage from '../components/study_page';

import MSCFooter from '../components/footer';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

class IndexPage extends React.Component {
  state={
    tab:0
  };

  render() {

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MSC World</title>
        </Helmet>
        <Page>
          <Image />
          <Tab>
            <NavBar>
              <NavBarItem active={this.state.tab == 0} onClick={e=>this.setState({tab:0})}>行动背景</NavBarItem>
              <NavBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>战略十问</NavBarItem>
              <NavBarItem active={this.state.tab == 2} onClick={e=>this.setState({tab:2})}>企业特辑</NavBarItem>
              <NavBarItem active={this.state.tab == 3} onClick={e=>this.setState({tab:3})}>我想学习</NavBarItem>
            </NavBar>
            <TabBody>
              <ButtonPage display={this.state.tab == 0 ? null : 'none'} />
             <StrategyPage display={this.state.tab ==1 ? null: 'none'} />
              <CompanyPage display={this.state.tab == 2 ? null : 'none'} />
              <StudyPage display={this.state.tab == 3?null:'none'}/>
              </TabBody>
          </Tab>
        </Page>
      </div>
    )
  }
};

export default IndexPage
