import {request} from "./request";

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//暴露商品信息类
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

//暴露商店信息类
export class Shop{
  constructor(shopInfo){
    this.name=shopInfo.name
    this.shopLogo=shopInfo.shopLogo
    this.shopUrl=shopInfo.shopUrl
    this.score=shopInfo.score //打分
    this.cSells =shopInfo.cSells//总销量
    this.cGoods = shopInfo.cGoods //全部宝贝数量
  }
}

//暴露商品相信信息，给组件 DetailGoodsInfo使用
export class DetailInfo{
  constructor(detailInfo){
    this.desc = detailInfo.desc;
    this.imgKey = detailInfo.detailImage[0].key;
    this.imgs = detailInfo.detailImage[0].list
  }
}
