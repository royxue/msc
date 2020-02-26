import React from "react"

import classNames from "classnames";
import _ from "lodash";
class CompanyBox extends React.Component{
    render(){
        var info = (this.props.tag || "").split(' ');
        var boxList = _.map(info, (tag)=>{
            return <td>
                <p style={{'paddingLeft':'2px'}}></p>
                <div id="label-box" 
                className={
                    classNames({
                      'color-orange': tag == "互联网"|| tag == "5G"|| tag == "AI"|| tag == "保险"|| tag =="区块链"||tag == "能源"||tag =="汽车"||tag == "物联网",
                      'color-green' : tag == "技术"|| tag == "机器人"||tag == "大数据"||tag == "援助" || tag == "保障" || tag == "科研"||tag == "物流",
                      'color-red' : tag == "医疗科技"|| tag =="医疗"|| tag == "安全"||tag =="教育"||tag=="无人机"||tag=="医疗技术",
                      'color-blue' :tag == "出行"||tag == "供应链"||tag == "制造业" || tag =="办公" || tag =="资讯",
                      'color-purple':  tag == "服务" || tag =="个人服务"|| tag == "3D打印" || tag == "旅游" ||tag=="房地产",
                      'color-yellow': tag=="食品" || tag == "酒店" ||tag=="住宿" || tag =="零售" ,
                    })}>
                    <p className="label-text">{tag}</p>
                </div>
            </td>
        })
        return(
            <div>
                <table border="0">
                    <tbody>
                        <tr>
                            <td  id="space-box" 
                            style={{'paddingLeft':'10px'}}></td>
                            {boxList}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CompanyBox;