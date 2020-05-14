/**
 * Created by ZZQ on 2019/4/8 17:08
 * Develop by ZZQ on 2019/4/8 17:08
 */
class ScrollUtil {
  /**
   * 获取滚动条位置
   * @returns {{x: number, y: number}}
   */
  static getScrollOffsets() {
    // 除了IE 8以及更早的版本以外，其他浏览器都支持
    if (window.pageXOffset != null) return { x: window.pageXOffset, y: window.pageYOffset };
    // 对标准模式下的IE
    const d = window.document;
    if (document.compatMode === 'CSS1Compat') {
      return {
        x: d.documentElement.scrollLeft,
        y: d.documentElement.scrollTop,
      };
    }
    // 对怪异模式下的浏览器
    return { x: d.body.scrollLeft, y: d.body.scrollTop };
  }
}

export default ScrollUtil;
