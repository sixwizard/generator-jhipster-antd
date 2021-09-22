// @ts-ignore
/* eslint-disable */
import { request } from "umi";

export async function viewedRecord(name: string, key: string) {
  const param = {
    page: 0,
    size: 200,
  };
  param[key + ".contains"] = name;
  return listViewedRecord(param).then(({ data }) => {
    const returnArray = [];
    data.forEach((item) => {
      returnArray.push({ label: item[key], value: item.id, key: item.id });
    });
    return returnArray;
  });
}

/** 获取列表 GET /api/users */
export async function listViewedRecord(
  params: {
    // query
    /** 当前的页码 */
    page?: number;
    /** 页面的容量 */
    size?: number;
  },
  options?: { [key: string]: any }
) {
  return request<API.ViewedRecordList>("/api/viewed-records", {
    method: "GET",
    getResponse: true,
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取GET  */
export async function getViewedRecord(
  id: number,
  options?: { [key: string]: any }
) {
  return request<API.ViewedRecord>(`/api/viewed-records/${id}`, {
    method: "GET",
    getResponse: true,
    ...(options || {}),
  });
}

/** 修改PUT */
export async function updateViewedRecord(options?: { [key: string]: any }) {
  return request("/api/viewed-records", {
    method: "PUT",
    ...(options || {}),
  });
}

/** 新建POST */
export async function addViewedRecord(options?: { [key: string]: any }) {
  return request("/api/viewed-records", {
    method: "POST",
    ...(options || {}),
  });
}

/** 删除DELETE  */
export async function deleteViewedRecord(
  id: number,
  options?: { [key: string]: any }
) {
  return request<API.ViewedRecord>(`/api/viewed-records/${id}`, {
    method: "DELETE",
    getResponse: true,
    ...(options || {}),
  });
}
