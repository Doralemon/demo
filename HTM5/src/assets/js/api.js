import Axios from './axios.js';
import Domain from './domain.js';
// 卓越优选接口
// 1.获取分类列表
// export const queryProductCategroy = params => Axios.get(`${Domain.common}DbCenter/product/getBusByProductCategroy`,params);
export const queryProductCategroy = params => Axios.get("/product/getBusByProductCategroy",params);
// 2.分类详情