import React from 'react';
import { Modal, Input,message} from 'antd';
import $ from 'jquery';
const { TextArea } = Input;

class myModal extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visible:this.props.visible,
      apiUrl:'',
      reqParam:'',
      resParam:''
    }
  }
  handleApiUrl(event){
    this.setState({
        apiUrl: event.target.value
    });
  }
  handleReqParam(event){
    this.setState({
        reqParam: event.target.value
    });
  }
  handleResParam(event){
    this.setState({
        resParam: event.target.value
    });
  }
  save(){
    var _this=this;
    _this.toggleShow();
    // console.log(this.state.apiUrl.trim(),this.state.reqParam,this.state.resParam);
    $.ajax({
      url:'/api/add',
      type:"POST",
      data:{
        apiUrl:this.state.apiUrl.trim(),
        reqParam:this.state.reqParam.trim(),
        resParam:this.state.resParam.trim()
      },
      success:function(data){
        _this.props.getList();
        message.success('增加成功！');
      }
    });
  }
  toggleShow(){
    this.setState({visible:!this.state.visible});
  }
    render() {
      console.log(this.props.getList);
        return (
          <div>
            <Modal
              title={this.props.title}
              visible={this.state.visible}
              width={680}
              onOk={this.save.bind(this)}
              onCancel={this.toggleShow.bind(this)}
            >
              <p>api地址：<Input placeholder="api地址" value={this.state.apiUrl} onChange={this.handleApiUrl.bind(this)}/></p>
              <br/>
              <p>接收参数：<Input placeholder="接收参数" value={this.state.reqParam} onChange={this.handleReqParam.bind(this)}/></p>
              <br/>
              <p>响应参数：<TextArea rows={5} placeholder="响应参数" value={this.state.resParam} onChange={this.handleResParam.bind(this)}/></p>
            </Modal>
          </div>
        );
      }
}
export default myModal;