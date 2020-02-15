import React from "react"
import {
    Tab,
    NavBar,
    NavBarItem,
    TabBody,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    Cell, 
    Cells,
    CellHeader,
    CellBody,
    CellFooter
  } from "react-weui";

  const CellMore = () => (
    <Cell access link>
        <CellBody>More</CellBody>
        <CellFooter />
    </Cell>
  )

class StudyPage extends React.Component {
  state = {

  }

  render() {
    return(
      <Tab style={{display: this.props.display}}>
      <Panel>
                <PanelHeader></PanelHeader>
                <PanelBody>
                    <MediaBox type="text">
                        <MediaBoxTitle>战略一</MediaBoxTitle>
                        <MediaBoxDescription>
                          第一问
                        </MediaBoxDescription>
                    </MediaBox>
                    <MediaBox type="text">
                        <MediaBoxTitle>战略二</MediaBoxTitle>
                        <MediaBoxDescription>
                          <div style={{"-webkit-line-clamp": this.state.show_text == true ? 1 :'none'}} onClick={this.handleClick.bind(this)}>
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                           </div>
                        </MediaBoxDescription>
                    </MediaBox>
                    <MediaBox type="text">
                        <MediaBoxTitle>战略三</MediaBoxTitle>
                        <MediaBoxDescription>
                          第三问
                        </MediaBoxDescription>
                    </MediaBox>
                    <MediaBox type="text">
                        <MediaBoxTitle>战略四</MediaBoxTitle>
                        <MediaBoxDescription>
                          第四问
                        </MediaBoxDescription>
                    </MediaBox>
                </PanelBody>
                <PanelFooter href="javascript:void(0);">
                        <CellMore />
                </PanelFooter>
              </Panel>
    </Tab>
    )
  }
}

export default StudyPage;