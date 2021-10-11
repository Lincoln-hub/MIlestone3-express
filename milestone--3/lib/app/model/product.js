"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.product = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var product = /*#__PURE__*/function () {
  function product(id, prooductName, productDescription, productPrice) {
    (0, _classCallCheck2.default)(this, product);
    (0, _defineProperty2.default)(this, "id", void 0);
    (0, _defineProperty2.default)(this, "productName", void 0);
    (0, _defineProperty2.default)(this, "productDescription", void 0);
    (0, _defineProperty2.default)(this, "productPrice", void 0);
    this.id = id;
    this.productName = prooductName;
    this.productDescription = productDescription;
    this.productPrice = productPrice;
  }
  /**
   * Getter $id
   * @return {string}
   */


  (0, _createClass2.default)(product, [{
    key: "$id",
    get: function get() {
      return this.id;
    }
    /**
     * Getter $productName
     * @return {string}
     */
    ,
    set:
    /**
     * Setter $id
     * @param {string} value
     */
    function set(value) {
      this.id = value;
    }
    /**
     * Setter $productName
     * @param {string} value
     */

  }, {
    key: "$productName",
    get: function get() {
      return this.productName;
    }
    /**
     * Getter $productDescription
     * @return {string}
     */
    ,
    set: function set(value) {
      this.productName = value;
    }
    /**
     * Setter $productDescription
     * @param {string} value
     */

  }, {
    key: "$productDescription",
    get: function get() {
      return this.productDescription;
    }
    /**
     * Getter $productPrice
     * @return {string}
     */
    ,
    set: function set(value) {
      this.productDescription = value;
    }
    /**
     * Setter $productPrice
     * @param {string} value
     */

  }, {
    key: "$productPrice",
    get: function get() {
      return this.productPrice;
    },
    set: function set(value) {
      this.productPrice = value;
    }
  }]);
  return product;
}();

exports.product = product;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9tb2RlbC9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbInByb2R1Y3QiLCJpZCIsInByb29kdWN0TmFtZSIsInByb2R1Y3REZXNjcmlwdGlvbiIsInByb2R1Y3RQcmljZSIsInByb2R1Y3ROYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxPO0FBU1QsbUJBQVlDLEVBQVosRUFBd0JDLFlBQXhCLEVBQTZDQyxrQkFBN0MsRUFBeUVDLFlBQXpFLEVBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksU0FBS0gsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsU0FBS0ksV0FBTCxHQUFtQkgsWUFBbkI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7QUFDTjtBQUVFO0FBQ0o7QUFDQTtBQUNBOzs7OztTQUNDLGVBQXlCO0FBQ3hCLGFBQU8sS0FBS0gsRUFBWjtBQUNBO0FBRUU7QUFDSjtBQUNBO0FBQ0E7OztBQXFCSTtBQUNKO0FBQ0E7QUFDQTtBQUNDLGlCQUFlSyxLQUFmLEVBQThCO0FBQzdCLFdBQUtMLEVBQUwsR0FBVUssS0FBVjtBQUNBO0FBRUU7QUFDSjtBQUNBO0FBQ0E7Ozs7U0EvQkMsZUFBa0M7QUFDakMsYUFBTyxLQUFLRCxXQUFaO0FBQ0E7QUFFRTtBQUNKO0FBQ0E7QUFDQTs7U0F5QkMsYUFBd0JDLEtBQXhCLEVBQXVDO0FBQ3RDLFdBQUtELFdBQUwsR0FBbUJDLEtBQW5CO0FBQ0E7QUFFRTtBQUNKO0FBQ0E7QUFDQTs7OztTQS9CQyxlQUF5QztBQUN4QyxhQUFPLEtBQUtILGtCQUFaO0FBQ0E7QUFFRTtBQUNKO0FBQ0E7QUFDQTs7U0F5QkMsYUFBK0JHLEtBQS9CLEVBQThDO0FBQzdDLFdBQUtILGtCQUFMLEdBQTBCRyxLQUExQjtBQUNBO0FBRUU7QUFDSjtBQUNBO0FBQ0E7Ozs7U0EvQkMsZUFBbUM7QUFDbEMsYUFBTyxLQUFLRixZQUFaO0FBQ0EsSztTQThCRCxhQUF5QkUsS0FBekIsRUFBd0M7QUFDdkMsV0FBS0YsWUFBTCxHQUFvQkUsS0FBcEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBwcm9kdWN0XHJcbntcclxuXHJcblx0XHJcbiAgICBwcml2YXRlIGlkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2R1Y3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2R1Y3REZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwcm9kdWN0UHJpY2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBwcm9vZHVjdE5hbWU6IHN0cmluZyxwcm9kdWN0RGVzY3JpcHRpb246IHN0cmluZywgcHJvZHVjdFByaWNlOiBzdHJpbmcgKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0TmFtZSA9IHByb29kdWN0TmFtZTtcclxuICAgICAgICB0aGlzLnByb2R1Y3REZXNjcmlwdGlvbiA9IHByb2R1Y3REZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByb2R1Y3RQcmljZSA9IHByb2R1Y3RQcmljZTtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgJGlkXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuXHRwdWJsaWMgZ2V0ICRpZCgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMuaWQ7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyICRwcm9kdWN0TmFtZVxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICovXHJcblx0cHVibGljIGdldCAkcHJvZHVjdE5hbWUoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnByb2R1Y3ROYW1lO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciAkcHJvZHVjdERlc2NyaXB0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuXHRwdWJsaWMgZ2V0ICRwcm9kdWN0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnByb2R1Y3REZXNjcmlwdGlvbjtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgJHByb2R1Y3RQcmljZVxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICovXHJcblx0cHVibGljIGdldCAkcHJvZHVjdFByaWNlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5wcm9kdWN0UHJpY2U7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyICRpZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgc2V0ICRpZCh2YWx1ZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmlkID0gdmFsdWU7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyICRwcm9kdWN0TmFtZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgc2V0ICRwcm9kdWN0TmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnByb2R1Y3ROYW1lID0gdmFsdWU7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyICRwcm9kdWN0RGVzY3JpcHRpb25cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICovXHJcblx0cHVibGljIHNldCAkcHJvZHVjdERlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMucHJvZHVjdERlc2NyaXB0aW9uID0gdmFsdWU7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0dGVyICRwcm9kdWN0UHJpY2VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICovXHJcblx0cHVibGljIHNldCAkcHJvZHVjdFByaWNlKHZhbHVlOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMucHJvZHVjdFByaWNlID0gdmFsdWU7XHJcblx0fVxyXG4gICAgXHJcblxyXG59Il19