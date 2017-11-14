import React, { Component } from 'react';
import { Table, Icon } from 'antd';
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
      <a href="#">修改</a>
      <span className="ant-divider" />
      <a href="#">删除{record.api}</a>
      
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
    render(){
        return (
          <div>
             <Table columns={columns} dataSource={data} bordered={true}/> 
             <Modal title="修改" visible={false}></Modal>
          </div>
           
        )
    }
}
export default Tables;