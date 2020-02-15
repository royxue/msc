import React from "react"
import {
  Page,
  Tab,
  TabBody,
  NavBar,
  NavBarItem
} from "react-weui"
import Image from '../components/image';

import 'weui';
import 'react-weui/build/packages/react-weui.css';

class IndexPage extends React.Component {
  state={
    tab:0
  };

  render() {
    return (
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
            <p style={{display: this.state.tab == 0 ? null : 'none'}}>1</p>
            <p style={{display: this.state.tab == 1 ? null : 'none'}}>2</p>
            <p style={{display: this.state.tab == 2 ? null : 'none'}}>3</p>
            <p style={{display: this.state.tab == 3 ? null : 'none'}}>4</p>
          </TabBody>
        </Tab>
      </Page>
    )
  }
};

export default IndexPage
