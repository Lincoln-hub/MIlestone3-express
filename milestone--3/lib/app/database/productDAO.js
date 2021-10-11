"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productDAO = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var mysql = _interopRequireWildcard(require("mysql"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var productDAO = /*#__PURE__*/function () {
  function productDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, productDAO);
    (0, _defineProperty2.default)(this, "host", "localhost");
    (0, _defineProperty2.default)(this, "port", 3306);
    (0, _defineProperty2.default)(this, "username", "root");
    (0, _defineProperty2.default)(this, "password", "root");
    (0, _defineProperty2.default)(this, "pool", void 0);
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
  }
  /**
   * Getter $host
   * @return {string}
   */


  (0, _createClass2.default)(productDAO, [{
    key: "$host",
    get: function get() {
      return this.host;
    }
    /**
     * Getter $port
     * @return {number}
     */
    ,
    set:
    /**
     * Setter $host
     * @param {string} value
     */
    function set(value) {
      this.host = value;
    }
    /**
     * Setter $port
     * @param {number} value
     */

  }, {
    key: "$port",
    get: function get() {
      return this.port;
    }
    /**
     * Getter $username
     * @return {string}
     */
    ,
    set: function set(value) {
      this.port = value;
    }
    /**
     * Setter $username
     * @param {string} value
     */

  }, {
    key: "$username",
    get: function get() {
      return this.username;
    }
    /**
     * Getter $password
     * @return {string}
     */
    ,
    set: function set(value) {
      this.username = value;
    }
    /**
     * Setter $password
     * @param {string} value
     */

  }, {
    key: "$password",
    get: function get() {
      return this.password;
    },
    set: function set(value) {
      this.password = value;
    }
  }, {
    key: "findAll",
    value: function findAll(callback) {
      this.pool = mysql.createPool({
        connectionLimit: 10,
        host: this.host,
        user: this.username,
        password: this.password,
        database: 'artstoredb',
        port: this.port
      });
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM PRODUCT', function (err, rows, fields) {
          connection.release();
          if (err) throw err;
          callback(rows);
        });
      });
    }
  }, {
    key: "findById",
    value: function findById(id, callback) {
      this.pool = mysql.createPool({
        connectionLimit: 10,
        host: this.host,
        user: this.username,
        password: this.password,
        database: 'artstoredb',
        port: this.port
      });
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM PRODUCT WHERE id =' + id, function (err, rows, fields) {
          connection.release();
          if (err) throw err;
          callback(rows);
        });
      });
    }
  }, {
    key: "deleteById",
    value: function deleteById(id, callback) {
      this.pool = mysql.createPool({
        connectionLimit: 10,
        host: this.host,
        user: this.username,
        password: this.password,
        database: 'artstoredb',
        port: this.port
      });
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('DELETE FROM PRODUCT WHERE id =' + id, function (err, rows, fields) {
          connection.release();
          if (err) throw err;
          callback("Successfully deteleted product with id of" + id);
        });
      });
    }
  }, {
    key: "addProduct",
    value: function addProduct(product, callback) {
      this.pool = mysql.createPool({
        connectionLimit: 10,
        host: this.host,
        user: this.username,
        password: this.password,
        database: 'artstoredb',
        port: this.port
      });
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        var prod = [product.$productName, product.$productDescription, product.$productPrice];
        connection.query('INSERT INTO PRODUCT (`PRODUCT_NAME`, `PRODUCT_DESCRIPTION`, `PRODUCT_PRICE`) VALUES (?)', [prod], function (err, rows, fields) {
          connection.release();
          if (err) throw err;
          callback("Successfully added the product to PRODUCT");
        });
      });
    }
  }, {
    key: "updateProduct",
    value: function updateProduct(product, callback) {
      this.pool = mysql.createPool({
        connectionLimit: 10,
        host: this.host,
        user: this.username,
        password: this.password,
        database: 'artstoredb',
        port: this.port
      });
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        var data = [product.$productPrice, product.$id];
        connection.query('UPDATE PRODUCT SET `PRODUCT_PRICE` = ? WHERE ID = ?', data, function (err, rows, fields) {
          connection.release();
          if (err) throw err;
          callback("Successfully updated product with id of " + product.$id);
        });
      });
    }
  }]);
  return productDAO;
}();

exports.productDAO = productDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9wcm9kdWN0REFPLnRzIl0sIm5hbWVzIjpbInByb2R1Y3REQU8iLCJob3N0IiwicG9ydCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ2YWx1ZSIsImNhbGxiYWNrIiwicG9vbCIsIm15c3FsIiwiY3JlYXRlUG9vbCIsImNvbm5lY3Rpb25MaW1pdCIsInVzZXIiLCJkYXRhYmFzZSIsImdldENvbm5lY3Rpb24iLCJlcnIiLCJjb25uZWN0aW9uIiwicXVlcnkiLCJyb3dzIiwiZmllbGRzIiwicmVsZWFzZSIsImlkIiwicHJvZHVjdCIsInByb2QiLCIkcHJvZHVjdE5hbWUiLCIkcHJvZHVjdERlc2NyaXB0aW9uIiwiJHByb2R1Y3RQcmljZSIsImRhdGEiLCIkaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUlhQSxVO0FBV1Qsc0JBQVlDLElBQVosRUFBMEJDLElBQTFCLEVBQXdDQyxRQUF4QyxFQUEwREMsUUFBMUQsRUFDQTtBQUFBO0FBQUEsZ0RBUmMsV0FRZDtBQUFBLGdEQVBjLElBT2Q7QUFBQSxvREFOa0IsTUFNbEI7QUFBQSxvREFMa0IsTUFLbEI7QUFBQTtBQUNJLFNBQUtILElBQUwsR0FBVUEsSUFBVjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7OztTQUNDLGVBQTJCO0FBQzFCLGFBQU8sS0FBS0gsSUFBWjtBQUNBO0FBRUU7QUFDSjtBQUNBO0FBQ0E7OztBQXFCSTtBQUNKO0FBQ0E7QUFDQTtBQUNDLGlCQUFpQkksS0FBakIsRUFBZ0M7QUFDL0IsV0FBS0osSUFBTCxHQUFZSSxLQUFaO0FBQ0E7QUFFRTtBQUNKO0FBQ0E7QUFDQTs7OztTQS9CQyxlQUEyQjtBQUMxQixhQUFPLEtBQUtILElBQVo7QUFDQTtBQUVFO0FBQ0o7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QixFQUF1QztBQUV0SkgsVUFBQUEsVUFBVSxDQUFDSSxPQUFYO0FBRUEsY0FBR0wsR0FBSCxFQUFRLE1BQU1BLEdBQU47QUFFUlIsVUFBQUEsUUFBUSxDQUFDLDJDQUFELENBQVI7QUFDSCxTQVBEO0FBUUgsT0FaRDtBQWFIOzs7V0FFRCx1QkFBcUJlLE9BQXJCLEVBQXVDZixRQUF2QyxFQUNBO0FBQ0ksV0FBS0MsSUFBTCxHQUFZQyxLQUFLLENBQUNDLFVBQU4sQ0FBaUI7QUFDekJDLFFBQUFBLGVBQWUsRUFBRSxFQURRO0FBRXpCVCxRQUFBQSxJQUFJLEVBQUUsS0FBS0EsSUFGYztBQUd6QlUsUUFBQUEsSUFBSSxFQUFFLEtBQUtSLFFBSGM7QUFJekJDLFFBQUFBLFFBQVEsRUFBRSxLQUFLQSxRQUpVO0FBS3pCUSxRQUFBQSxRQUFRLEVBQUUsWUFMZTtBQU16QlYsUUFBQUEsSUFBSSxFQUFFLEtBQUtBO0FBTmMsT0FBakIsQ0FBWjtBQVFBLFdBQUtLLElBQUwsQ0FBVU0sYUFBVixDQUF3QixVQUFTQyxHQUFULEVBQWtCQyxVQUFsQixFQUFpQztBQUVyRCxZQUFHRCxHQUFILEVBQVEsTUFBTUEsR0FBTjtBQUNSLFlBQUlZLElBQUksR0FBRyxDQUFDTCxPQUFPLENBQUNJLGFBQVQsRUFBdUJKLE9BQU8sQ0FBQ00sR0FBL0IsQ0FBWDtBQUNBWixRQUFBQSxVQUFVLENBQUNDLEtBQVgsQ0FBaUIscURBQWpCLEVBQXVFVSxJQUF2RSxFQUE2RSxVQUFTWixHQUFULEVBQWtCRyxJQUFsQixFQUE0QkMsTUFBNUIsRUFBdUM7QUFFaEhILFVBQUFBLFVBQVUsQ0FBQ0ksT0FBWDtBQUVBLGNBQUdMLEdBQUgsRUFBUSxNQUFNQSxHQUFOO0FBRVJSLFVBQUFBLFFBQVEsQ0FBQyw2Q0FBNENlLE9BQU8sQ0FBQ00sR0FBckQsQ0FBUjtBQUNILFNBUEQ7QUFRSCxPQVpEO0FBYUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcclxuaW1wb3J0IHtwcm9kdWN0fSBmcm9tIFwiLi4vbW9kZWwvcHJvZHVjdFwiXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBwcm9kdWN0REFPXHJcbntcclxuXHJcbiAgICBcclxuICAgIHByaXZhdGUgaG9zdCA9XCJsb2NhbGhvc3RcIjtcclxuICAgIHByaXZhdGUgcG9ydD0gMzMwNjtcclxuICAgIHByaXZhdGUgdXNlcm5hbWU9IFwicm9vdFwiO1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZD0gXCJyb290XCI7XHJcblxyXG4gICAgcG9vbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaG9zdD1ob3N0O1xyXG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyICRob3N0XHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuXHRwdWJsaWMgZ2V0ICRob3N0KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdGhpcy5ob3N0O1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHRlciAkcG9ydFxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcblx0cHVibGljIGdldCAkcG9ydCgpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMucG9ydDtcclxuXHR9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXR0ZXIgJHVzZXJuYW1lXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuXHRwdWJsaWMgZ2V0ICR1c2VybmFtZSgpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMudXNlcm5hbWU7XHJcblx0fVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0dGVyICRwYXNzd29yZFxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICovXHJcblx0cHVibGljIGdldCAkcGFzc3dvcmQoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLnBhc3N3b3JkO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciAkaG9zdFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgc2V0ICRob3N0KHZhbHVlOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuaG9zdCA9IHZhbHVlO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciAkcG9ydFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgc2V0ICRwb3J0KHZhbHVlOiBudW1iZXIpIHtcclxuXHRcdHRoaXMucG9ydCA9IHZhbHVlO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciAkdXNlcm5hbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICovXHJcblx0cHVibGljIHNldCAkdXNlcm5hbWUodmFsdWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy51c2VybmFtZSA9IHZhbHVlO1xyXG5cdH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHRlciAkcGFzc3dvcmRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gICAgICovXHJcblx0cHVibGljIHNldCAkcGFzc3dvcmQodmFsdWU6IHN0cmluZykge1xyXG5cdFx0dGhpcy5wYXNzd29yZCA9IHZhbHVlO1xyXG5cdH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEFsbChjYWxsYmFjazogYW55KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uTGltaXQ6IDEwLFxyXG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBkYXRhYmFzZTogJ2FydHN0b3JlZGInLFxyXG4gICAgICAgICAgICBwb3J0OiB0aGlzLnBvcnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjphbnkpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnJcclxuXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gUFJPRFVDVCcsIGZ1bmN0aW9uKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KXtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJvd3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluZEJ5SWQoaWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAxMCxcclxuICAgICAgICAgICAgaG9zdDogdGhpcy5ob3N0LFxyXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICdhcnRzdG9yZWRiJyxcclxuICAgICAgICAgICAgcG9ydDogdGhpcy5wb3J0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFBST0RVQ1QgV0hFUkUgaWQgPScrIGlkLCBmdW5jdGlvbihlcnI6YW55LCByb3dzOmFueSwgZmllbGRzOmFueSl7XHJcblxyXG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnJcclxuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyb3dzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZUJ5SWQoaWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAxMCxcclxuICAgICAgICAgICAgaG9zdDogdGhpcy5ob3N0LFxyXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICdhcnRzdG9yZWRiJyxcclxuICAgICAgICAgICAgcG9ydDogdGhpcy5wb3J0LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246YW55KXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXHJcblxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KCdERUxFVEUgRlJPTSBQUk9EVUNUIFdIRVJFIGlkID0nKyBpZCwgZnVuY3Rpb24oZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpe1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXCJTdWNjZXNzZnVsbHkgZGV0ZWxldGVkIHByb2R1Y3Qgd2l0aCBpZCBvZlwiKyBpZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQcm9kdWN0KHByb2R1Y3Q6IHByb2R1Y3QsIGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXHJcbiAgICAgICAgICAgIGhvc3Q6IHRoaXMuaG9zdCxcclxuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiAnYXJ0c3RvcmVkYicsXHJcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxyXG4gICAgICAgICAgICB2YXIgcHJvZCA9IFtwcm9kdWN0LiRwcm9kdWN0TmFtZSxwcm9kdWN0LiRwcm9kdWN0RGVzY3JpcHRpb24scHJvZHVjdC4kcHJvZHVjdFByaWNlXTtcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSgnSU5TRVJUIElOVE8gUFJPRFVDVCAoYFBST0RVQ1RfTkFNRWAsIGBQUk9EVUNUX0RFU0NSSVBUSU9OYCwgYFBST0RVQ1RfUFJJQ0VgKSBWQUxVRVMgKD8pJyxbcHJvZF0sIGZ1bmN0aW9uKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KXtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwiU3VjY2Vzc2Z1bGx5IGFkZGVkIHRoZSBwcm9kdWN0IHRvIFBST0RVQ1RcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQcm9kdWN0KHByb2R1Y3Q6IHByb2R1Y3QsIGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXHJcbiAgICAgICAgICAgIGhvc3Q6IHRoaXMuaG9zdCxcclxuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiAnYXJ0c3RvcmVkYicsXHJcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihmdW5jdGlvbihlcnI6YW55LCBjb25uZWN0aW9uOmFueSl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtwcm9kdWN0LiRwcm9kdWN0UHJpY2UscHJvZHVjdC4kaWRdO1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgUFJPRFVDVCBTRVQgYFBST0RVQ1RfUFJJQ0VgID0gPyBXSEVSRSBJRCA9ID8nLGRhdGEsIGZ1bmN0aW9uKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KXtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxyXG5cclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKFwiU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgcHJvZHVjdCB3aXRoIGlkIG9mIFwiKyBwcm9kdWN0LiRpZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19