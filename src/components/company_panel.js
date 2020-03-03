import React from "react"
import {
  Panel,
  PanelBody,
  MediaBox,
  MediaBoxHeader,
  MediaBoxBody,
  MediaBoxTitle,
  MediaBoxDescription,
} from 'react-weui';

import _ from "lodash";
import data from '../data/company_info';
import CompanyBox from './company_box';
import classNames from "classnames";

class CompanyPanel extends React.Component {
  render () {
    var mediaboxList = _.map(data[this.props._class], (company) =>
      {
        return <div>
          <table border="0" className="company_box"><tbody>
    <tr>
        <td><table border="0"><tbody>
        <tr><td>
        <MediaBox
        type="appmsg" href={company.link}
        >
          <MediaBoxHeader className={
          classNames({'nodisplay': company.img_src == ""})
        }><img src={company.img_src} className={classNames({
            'small-logo': false
        })}/>
            </MediaBoxHeader>
          <MediaBoxBody>
            <MediaBoxTitle style={{'fontSize':'14px'}}>
              {company.title}
            </MediaBoxTitle>
            <MediaBoxDescription style={{'fontSize':'10px'}}>
              {company.content}
            </MediaBoxDescription>
          </MediaBoxBody>
          </MediaBox>
          </td></tr>
          <tr>
            <CompanyBox tag={company.tag}/>
          </tr></tbody></table>
          </td>
          <td style={{'borderLeftStyle':'solid', 'borderWidth': '0.5px','borderColor':'#E5E5E5'}}><div style={{'padding':'10px', 'backgroundImage':'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAmCAYAAADEO7urAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REJERDA2ODk0MjVDMTFFQUFFRDRGRjYxMzNDM0JBRUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REJERDA2OEE0MjVDMTFFQUFFRDRGRjYxMzNDM0JBRUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQkREMDY4NzQyNUMxMUVBQUVENEZGNjEzM0MzQkFFRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQkREMDY4ODQyNUMxMUVBQUVENEZGNjEzM0MzQkFFRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjhOt4kAAAE6SURBVHjarNbNSgJhHIXxgVm4MTIlhcgPJKSiIrqPrqSWIoFudCERQSC1aKEURAVBV9KmVTUWaF9EiGFF0cbpDMziMNv/GXhgVj8GnDmvruM4E2gTjdGLI7gOkI/+0KoC3AjBoB+0rEC3CP1Giwq0RugXmlegdUI/UUmBNgkdojkFukPoABUU6F4EzSvQFqHvKKt88f3wS5pRoIeEPqGMAm1H0LQCPSK0j6YV6AmhDyipQM8J7aJJBXpBqKdCLwm9RQkFuk/otSsAZ9F6eG/+gSr0dL9oTbnyKxasGhniJQvWIGyEFizYNmEf1iNiNzK4RdV6v1mPBF7tV5RTrrXpCOCVfrZOf4ewnnXyjwm7RynVGnvWj/2MsDs0pVrfG+v6nvJAorh10x5D7ArFFBMe/AUuK54suP4FGAD+a37Q7G8Z3wAAAABJRU5ErkJggg==)','backgroundRepeat':'no-repeat',
          'backgroundPosition':'center',
          'marginLeft':'5px',
          'marginRight':'10px'}}></div>
          </td>
    </tr><tr><td style={{'padding':'2px'}}></td></tr>
    </tbody></table>
    </div>
      }
    )
    return (
      <Panel style={{display: this.props.display}}>
        <PanelBody>
          {mediaboxList}
        </PanelBody>
      </Panel>
    )
  }
}

export default CompanyPanel;