import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { BetaSchemaForm } from '@ant-design/pro-form';
import type { ProFormColumnsType } from '@ant-design/pro-form';
import { Card, message } from 'antd';
import { useIntl } from 'umi';
import styles from './Password.less';
import { changePassword } from '@/services/user/api';

type DataItem = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const columns: ProFormColumnsType<DataItem>[] = [
  {
    title: '当前密码',
    dataIndex: 'currentPassword',
    valueType: 'password',
    width: 'sm',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
        {
          min: 4,
          message: '密码必须大于4位',
        },
      ],
    },
  },
  {
    title: '新密码',
    dataIndex: 'newPassword',
    valueType: 'password',
    width: 'sm',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
        {
          min: 4,
          message: '密码必须大于4位',
        },
      ],
    },
  },
  {
    title: '确认新密码',
    dataIndex: 'confirmPassword',
    valueType: 'password',
    width: 'sm',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
        {
          min: 4,
          message: '密码必须大于4位',
        },
      ],
    },
  },
];

export default (): React.ReactNode => {
  const intl = useIntl();

  const onFinish = async (values: DataItem) => {
    const hide = message.loading('正在修改');
    try {
      await changePassword({ data: { ...values } });
      hide();
      message.success('修改成功');
    } catch (error) {
      hide();
      message.error('修改失败请重试！');
    }
  };

  return (
    <PageContainer>
      <Card className={styles.bg}>
        <BetaSchemaForm<DataItem> layoutType="Form" onFinish={onFinish} columns={columns} />
      </Card>
    </PageContainer>
  );
};
