import request from "~/plugins/axios";

export function roleList() {
  return request({
    url: "/admin/role/roleList",
    method: "get",
  });
}