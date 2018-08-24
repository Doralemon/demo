import Axios from './axios.js';
import Domain from './domain.js';
// 卓越优选接口
// 1.获取商品分类列表
// export const queryProductCategroy = params => Axios.get(`${Domain.common}DbCenter/product/getBusByProductCategroy`,params);
export const queryProductCategroy = params => Axios.get("/DbCenter/product/getBusByProductCategroy",params);
// 2.购物车产品数量
export const queryCartNum = params=>Axios.get("/DbCenter/commodity/getShoppingCartNum",params);
// 3.商品分类列表下的商品
export const queryProductSpecList = params=>Axios.get("/DbCenter/product/getProductSpecList",params);
// 4.商品详情下的商品介绍
export const queryProductDes = params=>Axios.get("/DbCenter/product/getProductDetailById",params);
// 5.商品详情下的图文介绍
export const queryProductDesImg = params=>Axios.get("/api/Product/GetViewById",params);
// 6.添加喜欢产品
export const queryProductLike = params=>Axios.get("/DbCenter/product/addProductLike",params);
// 7.详情页将商品加入购物车 需调用查看购物车数量接口，进行购物车数量提示修改
export const queryAddCart = params=>Axios.get("/DbCenter/commodity/insertShoppingCartList2",params);
// 8.查询购买产品可抵扣积分及金额（同一公司的产品合并订单）确认订单页面
export const queryIsDiscount = params=>Axios.get("/DbCenter/commodity/interalToMoneyCompanyNew",params);
// 9.收货地址列表
export const queryAddressList = params=>Axios.get("/DbCenter/personalCenter/getUserAddressList",params);

