import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//暴露一个类给详情页展示数据用

export class Goods {
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title //标题
    this.desc = itemInfo.desc //详细信息
    this.newPrice = itemInfo.price //现价(带￥符号的)
    this.oldPrice = itemInfo.oldPrice //原价
    this.discountDesc = itemInfo.discountDesc //促销文本
    this.discountDescColor = itemInfo.discountBgColor
    this.columns = columns //销量 收藏 快递信息
    this.services= services //其他服务信息
    this.realPrice = itemInfo.lowNowPrice
  }
}
