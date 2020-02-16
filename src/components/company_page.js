import React from "react"
import {
  Tab,
  NavBar,
  NavBarItem,
  TabBody
} from "react-weui";

import CompanyPanel from './company_panel';

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
        <CompanyPanel display={this.state.tab == 0 ? null : 'none'} _class = "company1"/>
        <CompanyPanel display={this.state.tab == 1 ? null : 'none'} _class = "company2"/>
        <CompanyPanel display={this.state.tab == 2 ? null : 'none'} _class = "company3"/>
        <CompanyPanel display={this.state.tab == 3 ? null : 'none'} _class = "company4"/>
      </TabBody>
    </Tab>
    )
  }
}

export default CompanyPage;