import React, { useState } from "react";
import { PageContainer } from "@ant-design/pro-layout";
import { message, Card } from "antd";
import { history } from "umi";
import { BetaSchemaForm, ProFormColumnsType } from "@ant-design/pro-form";
import { defaultColumns } from "@/pages/admin/user/column";

import { getUser, updateUser, addUser } from "@/services/user/api";

export default (props): React.ReactNode => {
  const isEdit = Boolean(props.match?.params?.id);
  const columns: ProFormColumnsType<API.User>[] = defaultColumns;
  const [user, setUser] = useState<API.User>({} as API.User);

  const onFinish = async (values: API.User) => {
    const hide = message.loading("正在提交");
    const params = { ...values };

    try {
      if (isEdit) {
        await updateUser(values.id, { data: { ...user, ...params } });
      } else {
        await addUser({ data: { ...values } });
      }
      hide();
      message.success("提交成功");
      history.push("/admin/user-management/");
    } catch (error) {
      hide();
      message.error("提交失败请重试！");
    }
  };

  return (
    <PageContainer>
      <Card>
        <BetaSchemaForm<API.User>
          request={async () => {
            if (props.match?.params?.id) {
              const res = await getUser(props.match?.params?.id);
              setUser(res.data);
              return res.data;
            }
            return {} as API.User;
          }}
          layoutType="Form"
          onFinish={onFinish}
          columns={columns}
        />
      </Card>
    </PageContainer>
  );
};
