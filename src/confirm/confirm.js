import React from 'react'
import ReactDOM from "react-dom";
import './confirm.css'

class Confirm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        //...
    };
    this.handleHide = this.handleHide.bind(this);
  }
  handleHide(){
    if(node) {
      ReactDOM.unmountComponentAtNode(node);
      document.body.removeChild(node)
    }
  }
  render() {
    return (
      <div className="confirm">
        <div className="confirm_container">
          {this.props.value}
          <div className ="confirm_button">
            <button type="button" className='yes' onClick={this.handleHide}>
              <span>确定</span>
            </button>
            <button type="button" onClick={this.handleHide}>
              <span>取消</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

let node = null;
let method = {
  handleShow(value) {
    node = document.createElement("div");
    document.body.appendChild(node);
    ReactDOM.render(<Confirm value={value}/>,node)
  }
};

const confirm = (value)=>{
  method.handleShow(value);
  return new Promise((resolve) => {
    if(node) {
      resolve(true)
    } else {
      resolve(false)
    }
  })
};

export default confirm
