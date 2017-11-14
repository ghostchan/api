import React, { Component } from 'react';
import { Modal, Button ,Input} from 'antd';
const { TextArea } = Input;

class myModal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visible:this.props.visible
    }
  }
  
  toggleShow(){
    this.setState({visible:!this.state.visible});
  }
    render() {
        return (
          <div>
            <Modal
              title={this.props.title}
              visible={this.state.visible}
              width={680}
              onOk={this.toggleShow.bind(this)}
              onCancel={this.toggleShow.bind(this)}
            >
              <p>api地址：<Input placeholder="api地址" defaultValue={this.props.title}/></p>
              <br/>
              <p>接收参数：<Input placeholder="接收参数" /></p>
              <br/>
              <p>响应参数：<TextArea rows={5} placeholder="响应参数"/></p>
            </Modal>
          </div>
        );
      }
}
export default myModal;