import React from "react";
import { Button } from "antd";
import { ProTable, ProFormText } from "@ant-design/pro-components";
import axios from "axios";

function Ca() {
  return (
    <ProTable
      params={[]}
      columns={[
        {
          title: "Summary ticket",
          dataIndex: "summary",
          renderFormItem: () => (
            <ProFormText placeholder="Summary ticket" name="ticket-summary" />
          )
        },
        {
          title: "Mô tả",
          dataIndex: "description",
          renderFormItem: () => (
            <ProFormText placeholder="Mô tả" name="ticket-description" />
          )
        },
        {
          title: "Trạng thái",
          dataIndex: "status",
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          )
        },
        {
          title: "Cán bộ xử lý",
          dataIndex: "zmain_tech",
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          )
        },
        {
          title: "Nhóm",
          dataIndex: "group",
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          )
        },
        {
          title: "Ngày tạo",
          dataIndex: "open_date",
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          )
        },
        {
          title: "Người yêu cầu",
          dataIndex: "requested_by",
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          )
        }
      ]}
      pagination={{
        defaultPageSize: 25,
        pageSizeOptions: [25, 50, 100],
        responsive: true,
        locale: {
          items_per_page: "/ Trang"
        },
        showTotal: (total, range) => {
          return `Hiển thị ${range[0]}-${range[1]} trên ${total} dòng`;
        },
        onShowSizeChange: (current, size) => {
          const offset = size * current - size;
        },
        onChange: (page, pageSize) => {
          const offset = pageSize * page - pageSize;
        }
      }}
      rowKey={"id"}
      search={{
        layout: "vertical",
        searchText: "Áp dụng",
        resetText: "Tải lại",
        defaultCollapsed: false,
        collapseRender: false,
        optionRender: () => [
          <Button type="primary" key="reset" onClick={() => {}}>
            Tải lại
          </Button>,
          <Button type="primary" key="create-report" onClick={() => {}}>
            Tạo report
          </Button>
        ]
      }}
      request={async (params, sort, filter) => {
        const response = await axios
          .get("http://localhost:3004/ca/tickets")
          .catch((error) => {
            console.log(error);
          })
          .then((response) => {
            console.log(response);

            return response;
          });

        console.log("response", response);
        return {
          data: response.data,
          success: true,
          total: response.data.length
        };
      }}
    />
  );
}

export default Ca;
