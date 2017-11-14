import React, { Component } from 'react';
import { Modal, Button ,Input} from 'antd';
const { TextArea } = Input;

class myModal extends React.Component{
  
    render() {
      console.log(this.props);
        return (
          <div>
            <Modal
              title={this.props.title}
              visible={this.props.visible}
              width={680}
            >
              <p>api地址：<Input placeholder="api地址" /></p>
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