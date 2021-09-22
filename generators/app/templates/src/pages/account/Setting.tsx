import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import FormRender, { useForm } from 'form-render';
import { Button, message, Card } from 'antd';
import { useIntl } from 'umi';
import styles from './Setting.less';
import { updateAccount } from '@/services/user/api';
import { useModel } from 'umi';
import { BetaSchemaForm, ProFormColumnsType } from '@ant-design/pro-form';

const columns: ProFormColumnsType<API.User>[] = [
  {
    title: '电子邮件',
    dataIndex: 'email',
    valueType: 'text',
    width: 'm',
  },
  {
    title: '商户名称',
    dataIndex: 'balancer',
    valueType: 'text',
    width: 'm',
  },
  {
    title: '手机号',
    dataIndex: 'phoneNumber',
    valueType: 'text',
    width: 'm',
  },
  {
    title: '语言',
    dataIndex: 'langKey',
    valueType: 'select',
    width: 'm',
    valueEnum: {
      'zh-cn': {
        text: '中文（简体）',
      },
      en: {
        text: 'English',
      },
    },
  },
];

export default (): React.ReactNode => {
  const intl = useIntl();
  const { initialState, refresh } = useModel('@@initialState');
  const { currentUser } = initialState || {};

  const onFinish = async (values: API.User) => {
    const hide = message.loading('正在修改');
    try {
      await updateAccount({ data: { ...currentUser, ...values } });
      hide();
      message.success('修改成功');
      await refresh();
    } catch (error) {
      hide();
      message.error('修改失败请重试！');
    }
  };

  return (
    <PageContainer>
      <Card className={styles.bg}>
        <BetaSchemaForm<API.User>
          initialValues={currentUser}
          layoutType="Form"
          onFinish={onFinish}
          columns={columns}
        />
      </Card>
    </PageContainer>
  );
};
