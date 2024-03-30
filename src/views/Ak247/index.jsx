import React, {useState} from "react";
import {Button, message} from "antd";
import {ProTable, ProFormText} from "@ant-design/pro-components";
import axios from "axios";

function Ak247() {
  return (
    <ProTable
      params={[]}
      columns={[
        {
          title: "Tên ticket",
          dataIndex: "name",
          renderFormItem: () => (
            <ProFormText placeholder="Tên ticket" name="ticket-name" />
          ),
        },
        {
          title: "Mã yêu cầu",
          dataIndex: "number",
          renderFormItem: () => (
            <ProFormText placeholder="Mã yêu cầu" name="ticket-number" />
          ),
        },
        {
          title: "Trạng thái",
          dataIndex: ["status", "name"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Channel",
          dataIndex: ["channel", "name"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Dịch vụ",
          dataIndex: ["service", "name"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Cán bộ xử lý",
          dataIndex: ["technician", "email"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Nhóm",
          dataIndex: ["group", "name"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Loại",
          dataIndex: ["type", "name"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Ngày tạo",
          dataIndex: "created_time",
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Người yêu cầu",
          dataIndex: ["requester", "email"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
        {
          title: "Người tạo",
          dataIndex: ["creator", "email"],
          hideInSearch: true,
          renderFormItem: () => (
            <ProFormText placeholder="Tuổi" name="input-password" />
          ),
        },
      ]}
      pagination={{
        defaultPageSize: 25,
        pageSizeOptions: [25, 50, 100],
        responsive: true,
        locale: {
          items_per_page: "/ Trang",
        },
        showTotal: (total, range) => {
          return `Hiển thị ${range[0]}-${range[1]} trên ${total} dòng`;
        },
        onShowSizeChange: (current, size) => {
          const offset = size * current - size;
        },
        onChange: (page, pageSize) => {
          const offset = pageSize * page - pageSize;
        },
      }}
      rowKey={"number"}
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
          <Button
            type="primary"
            key="create-report-ak247"
            onClick={async (event) => {
              event.preventDefault();
              await axios
                .post("http://localhost:3004/ak247/generate-report")
                .then((response) => {
                  message.success({
                    content: "Tạo report thành công. Kiểm tra trên power bi",
                    top: 100,
                    duration: 2,
                    prefixCls: "my-message",
                  });
                  console.log(response);
                })
                .catch((error) => {
                  message.error({
                    content: "Tạo report thất bại. Kiểm tra trên power bi",
                    top: 100,
                    duration: 2,
                    prefixCls: "my-message",
                  });
                  console.log(error.message);
                  return {};
                });
            }}
          >
            Tạo report
          </Button>,
        ],
      }}
      request={async (params, sort, filter) => {
        const response = await axios
          .get("http://localhost:3004/ak247/tickets")
          .catch(() => {});
        const data = response?.data || [];

        return {
          data,
          success: true,
          total: response?.data?.length,
        };
      }}
    />
  );
}

export default Ak247;
