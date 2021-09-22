import React from "react";
import { ProColumns } from "@ant-design/pro-table";

export const defaultColumns: ProColumns<API.User>[] = [
  {
    title: '用户ID',
    dataIndex: 'id',
    tip: '规则名称是唯一的 key',
  },
  {
    title: '用户名',
    dataIndex: 'login',
    valueType: 'radio'
  },
  {
    title: '状态',
    dataIndex: 'activated',
    valueType: 'radio',
    valueEnum: new Map([[true,{text:'已激活'}],[false,{text:'关闭'}]])
  },
  {
    title: '权限',
    sorter: true,
    dataIndex: 'authorities',
    render: (_, record) => {
      const { authorities = [] } = record;

      return authorities && authorities.length > 0 ? authorities.join('、') : '无';
    },
  }
];
