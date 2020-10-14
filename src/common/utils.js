/**
 * 防抖
 */
export function debounce(func, delay = 500) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), delay)
  }
}

/**
 * 判断str是否为非空字符串
 * @param str
 * @return {boolean|string} true表示字符串非空可用
 */
export function notEmptyString(str) {
  return typeof str === 'string' && str && str.trim().length > 0
}
