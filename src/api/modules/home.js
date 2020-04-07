import {get, post} from "@/util/request";

/**
 * 首页类型列表
 * @param data
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getDictSimpleList = data => post('v1/dict/getDictSimpleList',data);
/**
 * 调试接口
 * @param data
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getIndexList = data => get('v1/index/getInfoList',data);
