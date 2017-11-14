import React, { Component } from 'react';
import { Table, Icon,Button } from 'antd';
import Modal from './myModal';


const columns = [{
  title: 'API地址',
  dataIndex: 'api',
  key: 'api',
  render: text => text,
}, 
 {
  title: '操作',
  key: 'action',
  render: (text, record) => (
    <span>
      <Button type="primary" onClick={this.showModal}>修改</Button>&nbsp;
      <Button type="primary" onClick={this.showModal}>删除</Button>
    </span>
  )
}];

const data = [{
  key: '1',
  api: '/api/manage/listInfo'
}, {
  key: '2',
  api: '/api/manage/order/priceList'
}, {
  key: '3',
  api: '/api/manage/company/invoice/delete'
}];
class Tables extends React.Component {
  showModal=()=>{
    console.log("8888");
    this.refs.mymodal.toggleShow();
    this.setState({title:"修改"});
  }
    render(){
        return (
          <div>
             <Table columns={columns} dataSource={data} bordered={true}/> 
             <Modal ref='mymodal' title="修改" visible={false}></Modal>
          </div>
           
        )
    }
}
export default Tables;