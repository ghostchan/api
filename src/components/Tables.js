import React from "react";
import { Table, Button } from "antd";
import Modal from "./myModal";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: "1",
          api: "/api/manage/listInfo"
        },
        {
          key: "2",
          api: "/api/manage/order/priceList"
        },
        {
          key: "3",
          api: "/api/manage/company/invoice/delete"
        }
      ]
    };
    this.columns = [
      {
        title: "API地址",
        dataIndex: "api",
        key: "api"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <Button
              type="primary"
              onClick={this.showModal.bind(this, record.key)}
            >
              修改
            </Button>&nbsp;
            <Button
              type="primary"
              onClick={this.delete.bind(this, record.key)}
            >
              删除
            </Button>
          </span>
        )
      }
    ];
  }
  showModal = key => {
    console.log(key);
    this.refs.mymodal.toggleShow();
    this.setState({ title: "修改" });
  };
  delete = key => {
    console.log("删除："+key);
  }
  render() {
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          bordered={true}
        />
        <Modal ref="mymodal" title="修改" visible={false} />
      </div>
    );
  }
}
export default Tables;
