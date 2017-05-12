
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _antd = __webpack_require__(927);

var _en_US = __webpack_require__(935);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pratamasetyaaji/nextJs/pages/index.js?entry';


var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;

var Index = function (_Component) {
  (0, _inherits3.default)(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      ModalText: 'TOmbol Oke mbok pejet yo',
      visible: false
    }, _this.showModal = function () {
      _this.setState({
        visible: true
      });
    }, _this.handleOk = function () {
      _this.setState({
        ModalText: 'Modal tertutup setelah 2 detik',
        confirmLoading: true
      });
      setTimeout(function () {
        _this.setState({
          visible: false,
          confirmLoading: false
        });
      }, 2000);
    }, _this.handleCancel = function () {
      console.log('Clicked cancel button');
      _this.setState({
        visible: false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_antd.LocaleProvider, { locale: _en_US2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('div', { style: { marginTop: 100 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement('div', { style: { marginnBottom: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_antd.Button, { type: 'primary', onClick: this.showModal, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'buka modal'), _react2.default.createElement(_antd.Modal, { title: 'Judul',
        visible: this.state.visible,
        onOk: this.handleOk,
        confirmLoading: this.state.confirmLoading,
        onCancel: this.handleCancel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.state.ModalText))), _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_antd.Carousel, { autoplay: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 433)', height: 150 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, '1')), _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 322)', height: 150 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, '2')), _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 211)', height: 150 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, '3')), _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 100)', height: 150 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, '4'))))), _react2.default.createElement(_antd.Form, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(FormItem, {
        label: 'Input Number',
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_antd.InputNumber, { size: 'large', min: 1, max: 10, style: { width: 100 }, defaultValue: 3, name: 'inputNumber', __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, 'Link')), _react2.default.createElement(FormItem, {
        label: 'Switch',
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_antd.Switch, { defaultChecked: true, name: 'switch', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })), _react2.default.createElement(FormItem, {
        label: 'Slider',
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_antd.Slider, { defaultValue: 70, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement(FormItem, {
        label: 'Select',
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_antd.Select, { size: 'large', defaultValue: 'lucy', style: { width: 192 }, name: 'select', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement(Option, { value: 'jack', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'jack'), _react2.default.createElement(Option, { value: 'lucy', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'lucy'), _react2.default.createElement(Option, { value: 'disabled', disabled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'disabled'), _react2.default.createElement(Option, { value: 'yiminghe', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'yiminghe'))), _react2.default.createElement(FormItem, {
        label: 'DatePicker',
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_antd.DatePicker, { name: 'startDate', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), _react2.default.createElement(FormItem, {
        style: { marginTop: 48 },
        wrapperCol: { span: 8, offset: 8 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_antd.Button, { size: 'large', type: 'primary', htmlType: 'submit', __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, 'OK'), _react2.default.createElement(_antd.Button, { size: 'large', style: { marginLeft: 8 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Cancel'))), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(_antd.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement(_antd.Table, { dataSource: dataSource, columns: columns, __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_antd.Rate, { allowHalf: true, defaultValue: 2.5, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      })), _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_antd.Progress, { type: 'circle', percent: 30, width: 80, __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement(_antd.Progress, { type: 'circle', percent: 70, width: 80, status: 'exception', __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement(_antd.Progress, { type: 'circle', percent: 100, width: 80, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }))))));
    }
  }]);

  return Index;
}(_react.Component);

exports.default = Index;


var dataSource = [{
  key: '1',
  name: 'Pratama',
  age: 23,
  address: 'Jalan Raya Yogyakarta no.99'
}, {
  key: '2',
  name: 'Setya',
  age: 22,
  address: 'Jalan Kebon Raya no.1'
}];

var columns = [{
  title: 'Nama',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Usia',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Alamat',
  dataIndex: 'address',
  key: 'address'
}];

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pratamasetyaaji/nextJs/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pratamasetyaaji/nextJs/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz83MWQ2NmExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQjs7OztBQUNUOzs7O0FBQzRIOztBQUM1SDs7Ozs7Ozs7O0FBRVAsSUFBTSxXQUFXLFdBQUs7QUFDdEIsSUFBTSxTQUFTLGFBQU87O0lBRUQ7Ozs7Ozs7Ozs7Ozs7OzBNQUVuQjtpQkFFRTtlQUFTO0FBRFQsYUFHRixZQUFZLFlBQ1Y7WUFBSztpQkFHTjtBQUZHO2FBR0osV0FBVyxZQUNUO1lBQUs7bUJBRUg7d0JBRUY7QUFIRTtpQkFHUyxZQUNUO2NBQUs7bUJBRUg7MEJBRUg7QUFIRztBQUZKLFNBTUQ7YUFDRCxlQUFlLFlBQ2I7Y0FBUSxJQUNSO1lBQUs7aUJBR047QUFGRzs7Ozs7OzZCQUtGOzZCQUNHLHNDQUF1QjtvQkFBeEI7c0JBQ0U7QUFERjtPQUFBLGtCQUNFLHVCQUFLLE9BQU8sRUFBRSxXQUFXO29CQUF6QjtzQkFDRTtBQURGO3lCQUNHOztvQkFBRDtzQkFDRTtBQURGO0FBQUEsaURBQ1EsS0FBSSxjQUFhLE1BQUs7b0JBQTVCO3NCQUVGO0FBRkU7MkJBRUYsdUJBQUssT0FBTyxFQUFDLGVBQWM7b0JBQTNCO3NCQUNFO0FBREY7eUJBQ0U7O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRyw4QkFBTyxNQUFLLFdBQVUsU0FBUyxLQUFLO29CQUFyQztzQkFBQTtBQUFBO1NBQ0EsK0JBQUMsNkJBQU0sT0FDTDtpQkFBUyxLQUFLLE1BQ2Q7Y0FBTSxLQUNOO3dCQUFnQixLQUFLLE1BQ3JCO2tCQUFVLEtBQUs7O29CQUpqQjtzQkFNRTtBQU5GO3lCQU1FOztvQkFBQTtzQkFBSTtBQUFKO0FBQUEsY0FBUyxNQUdiLDhCQUFDLDJCQUFJLE1BQU0sSUFBSSxRQUFRO29CQUF2QjtzQkFDRTtBQURGO3lCQUNHLGdDQUFTLFVBQVY7b0JBQUE7c0JBQ0U7QUFERjt5QkFDRSx1QkFBSyxPQUFPLEVBQUMsaUJBQWdCLHFCQUFxQixRQUFPO29CQUF6RDtzQkFBK0Q7QUFBL0Q7eUJBQStEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDL0QsOENBQUssT0FBTyxFQUFDLGlCQUFnQixxQkFBcUIsUUFBTztvQkFBekQ7c0JBQStEO0FBQS9EO3lCQUErRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQy9ELDhDQUFLLE9BQU8sRUFBQyxpQkFBZ0IscUJBQXFCLFFBQU87b0JBQXpEO3NCQUErRDtBQUEvRDt5QkFBK0Q7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUMvRCw4Q0FBSyxPQUFPLEVBQUMsaUJBQWdCLHFCQUFxQixRQUFPO29CQUF6RDtzQkFBK0Q7QUFBL0Q7eUJBQStEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FJckUsMEJBQUMsNEJBQUssWUFBTjtvQkFBQTtzQkFDRTtBQURGO3lCQUNHLGNBQUQ7ZUFFRTtrQkFBVSxFQUFFLE1BQ1o7b0JBQVksRUFBRSxNQUFNOztvQkFIdEI7c0JBS0U7QUFMRjtBQUNFLHlCQUlDLG1DQUFZLE1BQUssU0FBUSxLQUFLLEdBQUcsS0FBSyxJQUFJLE9BQU8sRUFBRSxPQUFPLE9BQU8sY0FBYyxHQUFHLE1BQUs7b0JBQXhGO3NCQUNBO0FBREE7MEJBQ0EscUJBQUcsTUFBSztvQkFBUjtzQkFBQTtBQUFBO1NBR0YsMEJBQUMsY0FBRDtlQUVFO2tCQUFVLEVBQUUsTUFDWjtvQkFBWSxFQUFFLE1BQU07O29CQUh0QjtzQkFLRTtBQUxGO0FBQ0UseUJBSUMsOEJBQU8sZ0JBQVIsTUFBdUIsTUFBSztvQkFBNUI7c0JBR0Y7QUFIRTsyQkFHRCxjQUFEO2VBRUU7a0JBQVUsRUFBRSxNQUNaO29CQUFZLEVBQUUsTUFBTTs7b0JBSHRCO3NCQUtFO0FBTEY7QUFDRSx5QkFJQyw4QkFBTyxjQUFjO29CQUF0QjtzQkFHRjtBQUhFOzJCQUdELGNBQUQ7ZUFFRTtrQkFBVSxFQUFFLE1BQ1o7b0JBQVksRUFBRSxNQUFNOztvQkFIdEI7c0JBS0U7QUFMRjtBQUNFLHlCQUlDLDhCQUFPLE1BQUssU0FBUSxjQUFhLFFBQU8sT0FBTyxFQUFFLE9BQU8sT0FBTyxNQUFLO29CQUFyRTtzQkFDRTtBQURGO3lCQUNHLGNBQUQsVUFBUSxPQUFNO29CQUFkO3NCQUFBO0FBQUE7U0FDQSx5QkFBQyxjQUFELFVBQVEsT0FBTTtvQkFBZDtzQkFBQTtBQUFBO1NBQ0EseUJBQUMsY0FBRCxVQUFRLE9BQU0sWUFBVyxVQUF6QjtvQkFBQTtzQkFBQTtBQUFBO1NBQ0EsNkJBQUMsY0FBRCxVQUFRLE9BQU07b0JBQWQ7c0JBQUE7QUFBQTtTQUlKLCtCQUFDLGNBQUQ7ZUFFRTtrQkFBVSxFQUFFLE1BQ1o7b0JBQVksRUFBRSxNQUFNOztvQkFIdEI7c0JBS0U7QUFMRjtBQUNFLHlCQUlDLGtDQUFXLE1BQUs7b0JBQWpCO3NCQUVGO0FBRkU7MkJBRUQsY0FBRDtlQUNTLEVBQUUsV0FDVDtvQkFBWSxFQUFFLE1BQU0sR0FBRyxRQUFROztvQkFGakM7c0JBSUU7QUFKRjtBQUNFLHlCQUdDLDhCQUFPLE1BQUssU0FBUSxNQUFLLFdBQVUsVUFBUztvQkFBN0M7c0JBQUE7QUFBQTtTQUdBLHVCQUFDLDhCQUFPLE1BQUssU0FBUSxPQUFPLEVBQUUsWUFBWTtvQkFBMUM7c0JBQUE7QUFBQTtTQUtKOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUNFO0FBREY7QUFBQSx5QkFDRywyQkFBSSxNQUFNLElBQUksUUFBUTtvQkFBdkI7c0JBQ0U7QUFERjt5QkFDRyw2QkFBTSxZQUFZLFlBQVksU0FBUztvQkFBeEM7c0JBRUY7QUFGRTsyQkFFRCwyQkFBSSxNQUFNLElBQUksUUFBUTtvQkFBdkI7c0JBQ0U7QUFERjt5QkFDRyw0QkFBSyxXQUFOLE1BQWdCLGNBQWM7b0JBQTlCO3NCQUVGO0FBRkU7MkJBRUQsMkJBQUksTUFBTSxJQUFJLFFBQVE7b0JBQXZCO3NCQUNFO0FBREY7eUJBQ0csZ0NBQVMsTUFBSyxVQUFTLFNBQVMsSUFBSSxPQUFPO29CQUE1QztzQkFDQTtBQURBOzBCQUNDLGdDQUFTLE1BQUssVUFBUyxTQUFTLElBQUksT0FBTyxJQUFJLFFBQU87b0JBQXZEO3NCQUNBO0FBREE7MEJBQ0MsZ0NBQVMsTUFBSyxVQUFTLFNBQVMsS0FBSyxPQUFPO29CQUE3QztzQkFPYjtBQVBhOzs7Ozs7QUEvSG1COztrQkFBZDs7O0FBMElyQixJQUFNO09BRUo7UUFDQTtPQUNBO1dBQVM7QUFIVCxDQURpQjtPQU9qQjtRQUNBO09BQ0E7V0FBUztBQUhUOztBQU1GLElBQU07U0FFSjthQUNBO09BQUs7QUFGTCxDQURjO1NBTWQ7YUFDQTtPQUFLO0FBRkw7U0FLQTthQUNBO09BQUs7QUFGTCxHIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QsIENhcm91c2VsLCBQcm9ncmVzcywgSW5wdXROdW1iZXIsIERhdGVQaWNrZXIsIFN3aXRjaCwgU2xpZGVyLCBCdXR0b24sIExvY2FsZVByb3ZpZGVyLCBUYWJsZSwgUm93LCBDb2wsIFJhdGUsIE1vZGFsIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBlblVTIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VUydcblxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW1cbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb25cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIE1vZGFsVGV4dDogJ1RPbWJvbCBPa2UgbWJvayBwZWpldCB5bycsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gIH1cbiAgc2hvd01vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuICBoYW5kbGVPayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIE1vZGFsVGV4dDogJ01vZGFsIHRlcnR1dHVwIHNldGVsYWggMiBkZXRpaycsXG4gICAgICBjb25maXJtTG9hZGluZzogdHJ1ZSxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlybUxvYWRpbmc6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIGNhbmNlbCBidXR0b24nKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMb2NhbGVQcm92aWRlciBsb2NhbGU9e2VuVVN9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAwIH19PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbnRkLzIuOS4zL2FudGQubWluLmNzcycgLz5cbiAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbm5Cb3R0b206MjB9fT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNob3dNb2RhbH0+YnVrYSBtb2RhbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8TW9kYWwgdGl0bGU9XCJKdWR1bFwiXG4gICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfVxuICAgICAgICAgICAgICAgIG9uT2s9e3RoaXMuaGFuZGxlT2t9XG4gICAgICAgICAgICAgICAgY29uZmlybUxvYWRpbmc9e3RoaXMuc3RhdGUuY29uZmlybUxvYWRpbmd9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlQ2FuY2VsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMuc3RhdGUuTW9kYWxUZXh0fTwvcD5cbiAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cbiAgICAgICAgICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JnYigxNiwgMTQyLCA0MzMpJywgaGVpZ2h0OjE1MH19PjxoMz4xPC9oMz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidyZ2IoMTYsIDE0MiwgMzIyKScsIGhlaWdodDoxNTB9fT48aDM+MjwvaDM+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmdiKDE2LCAxNDIsIDIxMSknLCBoZWlnaHQ6MTUwfX0+PGgzPjM8L2gzPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JnYigxNiwgMTQyLCAxMDApJywgaGVpZ2h0OjE1MH19PjxoMz40PC9oMz48L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb3JtIGhvcml6b250YWw+XG4gICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgbGFiZWw9J0lucHV0IE51bWJlcidcbiAgICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElucHV0TnVtYmVyIHNpemU9J2xhcmdlJyBtaW49ezF9IG1heD17MTB9IHN0eWxlPXt7IHdpZHRoOiAxMDAgfX0gZGVmYXVsdFZhbHVlPXszfSBuYW1lPSdpbnB1dE51bWJlcicgLz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+TGluazwvYT5cbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG5cbiAgICAgICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgICAgICBsYWJlbD0nU3dpdGNoJ1xuICAgICAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3dpdGNoIGRlZmF1bHRDaGVja2VkIG5hbWU9J3N3aXRjaCcgLz5cbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG5cbiAgICAgICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgICAgICBsYWJlbD0nU2xpZGVyJ1xuICAgICAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U2xpZGVyIGRlZmF1bHRWYWx1ZT17NzB9IC8+XG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjdCdcbiAgICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNlbGVjdCBzaXplPSdsYXJnZScgZGVmYXVsdFZhbHVlPSdsdWN5JyBzdHlsZT17eyB3aWR0aDogMTkyIH19IG5hbWU9J3NlbGVjdCc+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0namFjayc+amFjazwvT3B0aW9uPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2x1Y3knPmx1Y3k8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdkaXNhYmxlZCcgZGlzYWJsZWQ+ZGlzYWJsZWQ8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSd5aW1pbmdoZSc+eWltaW5naGU8L09wdGlvbj5cbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgbGFiZWw9J0RhdGVQaWNrZXInXG4gICAgICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIG5hbWU9J3N0YXJ0RGF0ZScgLz5cbiAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA0OCB9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDgsIG9mZnNldDogOCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB0eXBlPSdwcmltYXJ5JyBodG1sVHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cbiAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cbiAgICAgICAgICAgICAgICA8VGFibGUgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gY29sdW1ucz17Y29sdW1uc30gLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XG4gICAgICAgICAgICAgICAgPFJhdGUgYWxsb3dIYWxmIGRlZmF1bHRWYWx1ZT17Mi41fSAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgdHlwZT1cImNpcmNsZVwiIHBlcmNlbnQ9ezMwfSB3aWR0aD17ODB9IC8+XG4gICAgICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBwZXJjZW50PXs3MH0gd2lkdGg9ezgwfSBzdGF0dXM9XCJleGNlcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB0eXBlPVwiY2lyY2xlXCIgcGVyY2VudD17MTAwfSB3aWR0aD17ODB9IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Mb2NhbGVQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuXG5jb25zdCBkYXRhU291cmNlID0gW3tcbiAga2V5OiAnMScsXG4gIG5hbWU6ICdQcmF0YW1hJyxcbiAgYWdlOiAyMyxcbiAgYWRkcmVzczogJ0phbGFuIFJheWEgWW9neWFrYXJ0YSBuby45OSdcbn0sIHtcbiAga2V5OiAnMicsXG4gIG5hbWU6ICdTZXR5YScsXG4gIGFnZTogMjIsXG4gIGFkZHJlc3M6ICdKYWxhbiBLZWJvbiBSYXlhIG5vLjEnXG59XTtcblxuY29uc3QgY29sdW1ucyA9IFt7XG4gIHRpdGxlOiAnTmFtYScsXG4gIGRhdGFJbmRleDogJ25hbWUnLFxuICBrZXk6ICduYW1lJyxcbn0sIHtcbiAgdGl0bGU6ICdVc2lhJyxcbiAgZGF0YUluZGV4OiAnYWdlJyxcbiAga2V5OiAnYWdlJyxcbn0sIHtcbiAgdGl0bGU6ICdBbGFtYXQnLFxuICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcbiAga2V5OiAnYWRkcmVzcycsXG59XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        