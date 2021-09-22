// @ts-ignore
/* eslint-disable */
import { request } from 'umi';


export async function user(name: string, key: string) {
  const param = {
    page: 0,
    size: 200,
  };
  param[key + ".contains"] = name;
  return listUser(param).then(({ data }) => {
    const returnArray = [];
    data.forEach((item) => {
      returnArray.push({ label: item[key], value: item.id, key: item.id });
    });
    return returnArray;
  });
}

export async function updateAccount(options?: { [key: string]: any }) {
  return request('/api/account', {
    method: 'POST',
    ...(options || {}),
  });
}

export async function changePassword(options?: { [key: string]: any }) {
  return request('/api/account/change-password', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 获取用户列表 GET /api/users */
export async function listUser(
  params: {
    // query
    /** 当前的页码 */
    page?: number;
    /** 页面的容量 */
    size?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserList>('/api/admin/users', {
    method: 'GET',
    getResponse: true,
    params: {
      ...params,
    },
    ...(options || {}),
  });
}


/** 获取GET  */
export async function getUser(id: number, options?: { [key: string]: any }) {
  return request<API.User>(`/api/admin/users/${id}`, {
    method: "GET",
    getResponse: true,
    ...(options || {}),
  });
}

/** 修改PUT */
export async function updateUser(id: number, options?: { [key: string]: any }) {
  return request(`/api/admin/users`, {
    method: "PUT",
    ...(options || {}),
  });
}

/** 新建POST */
export async function addUser(options?: { [key: string]: any }) {
  return request("/api/admin/users", {
    method: "POST",
    ...(options || {}),
  });
}

/** 删除DELETE  */
export async function deleteUser(id: number, options?: { [key: string]: any }) {
  return request<API.User>(`/api/admin/users/${id}`, {
    method: "DELETE",
    getResponse: true,
    ...(options || {}),
  });
}
