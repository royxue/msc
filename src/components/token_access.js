import React from "react"

const token_config={
    "token":"",
    "appid":"wx0a85b83326fb21bf",
    "appsecret": "a1d2d4fb2f4dbb6f2fe4f33e16e02b35",
    "getJsapiTicket":"https://api.weixin.qq.com/cgi-bin/ticket/getticket",
    "getAccessToken":"https://api.weixin.qq.com/cgi-bin/token"
  };

const fetchUrl = token_config.getAccessToken+'?grant_type=client_credential&appid='+token_config.appid+'&secret='+token_config.appsecret;

class TokenAccess extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        errorcode: null,
        errormsg: null,
        isLoaded: false,
        ticket: [],
        expires: []
      };
    }
  
    componentDidMount() {
      fetch(fetchUrl)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              errorcode:[],
              errormsg:[]
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
      }
    }
  }

  export default TokenAccess