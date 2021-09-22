import React, { useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
import { useIntl } from 'umi';
import styles from './Welcome.less';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { PlusOutlined } from '@ant-design/icons';
import { listImportedRecord } from '@/services/imported-record/api';
import { transferParam } from '@/utils/utils';

export default (): React.ReactNode => {
  const intl = useIntl();
  const actionRef = useRef<ActionType>();

  const columns: ProColumns<API.ImportedRecord>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      valueType: 'digit',
      tip: '规则名称是唯一的 key',
    },
    {
      title: '导入编号',
      dataIndex: 'batchName',
    },
    {
      title: '案件数量',
      dataIndex: 'totalRecords',
    },
    {
      title: '状态',
      dataIndex: 'activated',
      valueEnum: {
        0: {
          text: '关闭',
          status: false,
        },
        1: {
          text: '已激活',
          status: true,
        },
      },
    },
    {
      title: '上次修改时间',
      sorter: true,
      dataIndex: 'lastModifiedDate',
      valueType: 'dateTime',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="config"
          onClick={() => {
            // handleUpdateModalVisible(true);
            // setCurrentRow(record);
          }}
        >
          查看
        </a>,
        <a
          key="config"
          onClick={() => {
            // handleUpdateModalVisible(true);
            // setCurrentRow(record);
          }}
        >
          编辑
        </a>,
        <a
          key="config"
          onClick={() => {
            // handleUpdateModalVisible(true);
            // setCurrentRow(record);
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <PageContainer>
      <ProTable<API.ImportedRecord, API.PageParams>
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
              // handleModalVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        request={async (params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          const res = await listImportedRecord(transferParam(params, columns));
          return Promise.resolve({
            data: res.data,
            success: true,
            // @ts-ignore
            total: parseInt(res.response.headers.get('x-total-count'), 10),
            current: params.current,
            pageSize: params.pageSize,
          });
        }}
        columns={columns}
      />
    </PageContainer>
  );
};
