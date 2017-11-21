import React from 'react';
import { Modal, Input,message} from 'antd';
import $ from 'jquery';
const { TextArea } = Input;

class myModal extends React.Component{
  constructor(props){
    super(props);
    debugger;
    console.info(this.props.getList);
    this.state={
      visible:this.props.visible,
      title: this.props.title,
      apiUrl:'',
      reqParam:'',
      resParam:'',
      getList:this.props.getList
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
    debugger;
    this.setState({
        resParam: event.target.value
    });
  }
  save(){
    debugger;
    console.info(this.props.getList);
    var _this=this;
    console.log(_this.props.getList);
    _this.toggleShow();
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

  handleTestClick(){
    if(this.props.getList){
      this.props.getList();
      alert('this.props.getList.run');
    }
  }
    render() {
      console.log(this.state.getList);
        return (
          <div>
            <a onClick={this.handleTestClick.bind(this)}>test</a>
            <Modal ref='mymodel'
              title={this.state.title}
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