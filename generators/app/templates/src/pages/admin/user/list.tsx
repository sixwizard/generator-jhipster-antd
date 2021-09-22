import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import {Link, useIntl} from 'umi';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { listUser,deleteUser } from '@/services/user/api';
import {transferParam} from "@/utils/utils";
import {history} from "@@/core/history";
import { defaultColumns } from "@/pages/admin/user/column";

export default (): React.ReactNode => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();

  const tableColumns: ProColumns<API.User>[] = [
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      fixed: "right",
      width: 120,
      render: (_, record) => [
        <Link to={`/admin/user-management/edit/${record.login}`}>查看</Link>,
        <a
          key="config"
          onClick={() => {
            deleteUser(record.login);
            actionRef?.current?.reload();
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const columns = defaultColumns.concat(tableColumns);

  return (
    <PageContainer>
      <ProTable<API.User, API.PageParams>
        headerTitle={intl.formatMessage({
          id: 'pages.searchTable.title',
          defaultMessage: '查询表格',
        })}
        actionRef={actionRef}
        rowKey="id"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              history.push("/admin/user-management/add");
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          const res = await listUser(transferParam(params, sorter, columns));
          return Promise.resolve({
            data: res.data,
            success: true,
            // @ts-ignore
            total: parseInt(res.response.headers.get("x-total-count"), 10),
            current: params.current,
            pageSize: params.pageSize,
          });
        }}
        columns={columns}
        scroll={{ x: 1300 }}
      />
    </PageContainer>
  );
};
