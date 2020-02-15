import React from "react"
import {
  Tab,
  NavBar,
  NavBarItem,
  TabBody
} from "react-weui";

import CompanyPanel_1 from './company_panel_1';
import CompanyPanel_2 from './company_panel_2';
import CompanyPanel_3 from './company_panel_3';
import CompanyPanel_4 from './company_panel_4';

class CompanyPage extends React.Component {
  state = {
    tab: 0
  }

  render() {
    return(
      <Tab style={{display: this.props.display}}>
      <NavBar>
        <NavBarItem active={this.state.tab == 0} onClick={e=>this.setState({tab:0})}>分类1</NavBarItem>
        <NavBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>分类2</NavBarItem>
        <NavBarItem active={this.state.tab == 2} onClick={e=>this.setState({tab:2})}>分类3</NavBarItem>
        <NavBarItem active={this.state.tab == 3} onClick={e=>this.setState({tab:3})}>分类4</NavBarItem>
      </NavBar>
      <TabBody>
        <CompanyPanel_1 display={this.state.tab == 0 ? null : 'none'}/>
        <CompanyPanel_2 display={this.state.tab == 1 ? null : 'none'}/>
        <CompanyPanel_3 display={this.state.tab == 2 ? null : 'none'}/>
        <CompanyPanel_4 display={this.state.tab == 3 ? null : 'none'}/>
      </TabBody>
    </Tab>
    )
  }
}

export default CompanyPage;