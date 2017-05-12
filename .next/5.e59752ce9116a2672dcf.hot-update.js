webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdCOzs7O0FBQ1Q7Ozs7QUFDNEg7O0FBQzVIOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsV0FBSztBQUN0QixJQUFNLFNBQVMsYUFBTzs7SUFFRDs7Ozs7Ozs7Ozs7Ozs7ME1BRW5CO2lCQUVFO2VBQVM7QUFEVCxhQUdGLFlBQVksWUFDVjtZQUFLO2lCQUdOO0FBRkc7YUFHSixXQUFXLFlBQ1Q7WUFBSzttQkFFSDt3QkFFRjtBQUhFO2lCQUdTLFlBQ1Q7Y0FBSzttQkFFSDswQkFFSDtBQUhHO0FBRkosU0FNRDthQUNELGVBQWUsWUFDYjtjQUFRLElBQ1I7WUFBSztpQkFHTjtBQUZHOzs7Ozs7NkJBS0Y7NkJBQ0csc0NBQXVCO29CQUF4QjtzQkFDRTtBQURGO09BQUEsa0JBQ0UsdUJBQUssT0FBTyxFQUFFLFdBQVc7b0JBQXpCO3NCQUNFO0FBREY7eUJBQ0c7O29CQUFEO3NCQUNFO0FBREY7QUFBQSxpREFDUSxLQUFJLGNBQWEsTUFBSztvQkFBNUI7c0JBRUY7QUFGRTsyQkFFRix1QkFBSyxPQUFPLEVBQUMsZUFBYztvQkFBM0I7c0JBQ0U7QUFERjt5QkFDRTs7b0JBQUE7c0JBQ0U7QUFERjtBQUFBLHlCQUNHLDhCQUFPLE1BQUssV0FBVSxTQUFTLEtBQUs7b0JBQXJDO3NCQUFBO0FBQUE7U0FDQSwrQkFBQyw2QkFBTSxPQUNMO2lCQUFTLEtBQUssTUFDZDtjQUFNLEtBQ047d0JBQWdCLEtBQUssTUFDckI7a0JBQVUsS0FBSzs7b0JBSmpCO3NCQU1FO0FBTkY7eUJBTUU7O29CQUFBO3NCQUFJO0FBQUo7QUFBQSxjQUFTLE1BR2IsOEJBQUMsMkJBQUksTUFBTSxJQUFJLFFBQVE7b0JBQXZCO3NCQUNFO0FBREY7eUJBQ0csZ0NBQVMsVUFBVjtvQkFBQTtzQkFDRTtBQURGO3lCQUNFLHVCQUFLLE9BQU8sRUFBQyxp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LFNBQVMsSUFBSSxPQUFPLElBQUksUUFBTztvQkFBdkQ7c0JBQ0E7QUFEQTswQkFDQyxnQ0FBUyxNQUFLLFVBQVMsU0FBUyxLQUFLLE9BQU87b0JBQTdDO3NCQU9iO0FBUGE7Ozs7OztBQS9IbUI7O2tCQUFkOzs7QUEwSXJCLElBQU07T0FFSjtRQUNBO09BQ0E7V0FBUztBQUhULENBRGlCO09BT2pCO1FBQ0E7T0FDQTtXQUFTO0FBSFQ7O0FBTUYsSUFBTTtTQUVKO2FBQ0E7T0FBSztBQUZMLENBRGM7U0FNZDthQUNBO09BQUs7QUFGTDtTQUtBO2FBQ0E7T0FBSztBQUZMLEciLCJmaWxlIjoiNS5lNTk3NTJjZTkxMTZhMjY3MmRjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRm9ybSwgU2VsZWN0LCBDYXJvdXNlbCwgUHJvZ3Jlc3MsIElucHV0TnVtYmVyLCBEYXRlUGlja2VyLCBTd2l0Y2gsIFNsaWRlciwgQnV0dG9uLCBMb2NhbGVQcm92aWRlciwgVGFibGUsIFJvdywgQ29sLCBSYXRlLCBNb2RhbCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZW5VUyBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVMnXG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0ZSA9IHtcbiAgICBNb2RhbFRleHQ6ICdUT21ib2wgT2tlIG1ib2sgcGVqZXQgeW8nLFxuICAgIHZpc2libGU6IGZhbHNlLFxuICB9XG4gIHNob3dNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpc2libGU6IHRydWUsXG4gICAgfSk7XG4gIH1cbiAgaGFuZGxlT2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBNb2RhbFRleHQ6ICdNb2RhbCB0ZXJ0dXR1cCBzZXRlbGFoIDIgZGV0aWsnLFxuICAgICAgY29uZmlybUxvYWRpbmc6IHRydWUsXG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpcm1Mb2FkaW5nOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnQ2xpY2tlZCBjYW5jZWwgYnV0dG9uJyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybiAoXG4gICAgICA8TG9jYWxlUHJvdmlkZXIgbG9jYWxlPXtlblVTfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCB9fT5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8yLjkuMy9hbnRkLm1pbi5jc3MnIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5uQm90dG9tOjIwfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5zaG93TW9kYWx9PmJ1a2EgbW9kYWw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPE1vZGFsIHRpdGxlPVwiSnVkdWxcIlxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cbiAgICAgICAgICAgICAgICBvbk9rPXt0aGlzLmhhbmRsZU9rfVxuICAgICAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nPXt0aGlzLnN0YXRlLmNvbmZpcm1Mb2FkaW5nfVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLk1vZGFsVGV4dH08L3A+XG4gICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XG4gICAgICAgICAgICAgIDxDYXJvdXNlbCBhdXRvcGxheT5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidyZ2IoMTYsIDE0MiwgNDMzKScsIGhlaWdodDoxNTB9fT48aDM+MTwvaDM+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmdiKDE2LCAxNDIsIDMyMiknLCBoZWlnaHQ6MTUwfX0+PGgzPjI8L2gzPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JnYigxNiwgMTQyLCAyMTEpJywgaGVpZ2h0OjE1MH19PjxoMz4zPC9oMz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOidyZ2IoMTYsIDE0MiwgMTAwKScsIGhlaWdodDoxNTB9fT48aDM+NDwvaDM+PC9kaXY+XG4gICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9ybSBob3Jpem9udGFsPlxuICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgIGxhYmVsPSdJbnB1dCBOdW1iZXInXG4gICAgICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJbnB1dE51bWJlciBzaXplPSdsYXJnZScgbWluPXsxfSBtYXg9ezEwfSBzdHlsZT17eyB3aWR0aDogMTAwIH19IGRlZmF1bHRWYWx1ZT17M30gbmFtZT0naW5wdXROdW1iZXInIC8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9JyMnPkxpbms8L2E+XG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgbGFiZWw9J1N3aXRjaCdcbiAgICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN3aXRjaCBkZWZhdWx0Q2hlY2tlZCBuYW1lPSdzd2l0Y2gnIC8+XG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICAgICAgbGFiZWw9J1NsaWRlcidcbiAgICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNsaWRlciBkZWZhdWx0VmFsdWU9ezcwfSAvPlxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgIGxhYmVsPSdTZWxlY3QnXG4gICAgICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nbGFyZ2UnIGRlZmF1bHRWYWx1ZT0nbHVjeScgc3R5bGU9e3sgd2lkdGg6IDE5MiB9fSBuYW1lPSdzZWxlY3QnPlxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J2phY2snPmphY2s8L09wdGlvbj5cbiAgICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdsdWN5Jz5sdWN5PC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nZGlzYWJsZWQnIGRpc2FibGVkPmRpc2FibGVkPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0neWltaW5naGUnPnlpbWluZ2hlPC9PcHRpb24+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgIGxhYmVsPSdEYXRlUGlja2VyJ1xuICAgICAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBuYW1lPSdzdGFydERhdGUnIC8+XG4gICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNDggfX1cbiAgICAgICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4LCBvZmZzZXQ6IDggfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgdHlwZT0ncHJpbWFyeScgaHRtbFR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICAgICAgT0tcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XG4gICAgICAgICAgICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IGNvbHVtbnM9e2NvbHVtbnN9IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIHNwYW49ezEyfSBvZmZzZXQ9ezZ9PlxuICAgICAgICAgICAgICAgIDxSYXRlIGFsbG93SGFsZiBkZWZhdWx0VmFsdWU9ezIuNX0gLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XG4gICAgICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBwZXJjZW50PXszMH0gd2lkdGg9ezgwfSAvPlxuICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB0eXBlPVwiY2lyY2xlXCIgcGVyY2VudD17NzB9IHdpZHRoPXs4MH0gc3RhdHVzPVwiZXhjZXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgdHlwZT1cImNpcmNsZVwiIHBlcmNlbnQ9ezEwMH0gd2lkdGg9ezgwfSAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTG9jYWxlUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cblxuY29uc3QgZGF0YVNvdXJjZSA9IFt7XG4gIGtleTogJzEnLFxuICBuYW1lOiAnUHJhdGFtYScsXG4gIGFnZTogMjMsXG4gIGFkZHJlc3M6ICdKYWxhbiBSYXlhIFlvZ3lha2FydGEgbm8uOTknXG59LCB7XG4gIGtleTogJzInLFxuICBuYW1lOiAnU2V0eWEnLFxuICBhZ2U6IDIyLFxuICBhZGRyZXNzOiAnSmFsYW4gS2Vib24gUmF5YSBuby4xJ1xufV07XG5cbmNvbnN0IGNvbHVtbnMgPSBbe1xuICB0aXRsZTogJ05hbWEnLFxuICBkYXRhSW5kZXg6ICduYW1lJyxcbiAga2V5OiAnbmFtZScsXG59LCB7XG4gIHRpdGxlOiAnVXNpYScsXG4gIGRhdGFJbmRleDogJ2FnZScsXG4gIGtleTogJ2FnZScsXG59LCB7XG4gIHRpdGxlOiAnQWxhbWF0JyxcbiAgZGF0YUluZGV4OiAnYWRkcmVzcycsXG4gIGtleTogJ2FkZHJlc3MnLFxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=