webpackHotUpdate(5,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.default = function () {
  return _react2.default.createElement(_antd.LocaleProvider, { locale: _en_US2.default, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('div', { style: { marginTop: 100 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement(_antd.Form, { horizontal: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(FormItem, {
    label: 'Input Number',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_antd.InputNumber, { size: 'large', min: 1, max: 10, style: { width: 100 }, defaultValue: 3, name: 'inputNumber', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Link')), _react2.default.createElement(FormItem, {
    label: 'Switch',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_antd.Switch, { defaultChecked: true, name: 'switch', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), _react2.default.createElement(FormItem, {
    label: 'Slider',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_antd.Slider, { defaultValue: 70, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  })), _react2.default.createElement(FormItem, {
    label: 'Select',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement(_antd.Select, { size: 'large', defaultValue: 'lucy', style: { width: 192 }, name: 'select', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, _react2.default.createElement(Option, { value: 'jack', __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, 'jack'), _react2.default.createElement(Option, { value: 'lucy', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, 'lucy'), _react2.default.createElement(Option, { value: 'disabled', disabled: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, 'disabled'), _react2.default.createElement(Option, { value: 'yiminghe', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, 'yiminghe'))), _react2.default.createElement(FormItem, {
    label: 'DatePicker',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _react2.default.createElement(_antd.DatePicker, { name: 'startDate', __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  })), _react2.default.createElement(FormItem, {
    style: { marginTop: 48 },
    wrapperCol: { span: 8, offset: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, _react2.default.createElement(_antd.Button, { size: 'large', type: 'primary', htmlType: 'submit', __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, 'OK'), _react2.default.createElement(_antd.Button, { size: 'large', style: { marginLeft: 8 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'Cancel')))));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9mMjM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNpRTs7QUFDakU7Ozs7Ozs7OztBQUVQLElBQU0sV0FBVyxXQUFLO0FBQ3RCLElBQU0sU0FBUyxhQUVmOztrQkFBZTt5QkFDWixzQ0FBdUI7Z0JBQXhCO2tCQUNFO0FBREY7R0FBQSxrQkFDRSx1QkFBSyxPQUFPLEVBQUUsV0FBVztnQkFBekI7a0JBQ0U7QUFERjtxQkFDRzs7Z0JBQUQ7a0JBQ0U7QUFERjtBQUFBLDZDQUNRLEtBQUksY0FBYSxNQUFLO2dCQUE1QjtrQkFFRjtBQUZFO3VCQUVELDRCQUFLLFlBQU47Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRyxjQUFEO1dBRUU7Y0FBVSxFQUFFLE1BQ1o7Z0JBQVksRUFBRSxNQUFNOztnQkFIdEI7a0JBS0U7QUFMRjtBQUNFLHFCQUlDLG1DQUFZLE1BQUssU0FBUSxLQUFLLEdBQUcsS0FBSyxJQUFJLE9BQU8sRUFBRSxPQUFPLE9BQU8sY0FBYyxHQUFHLE1BQUs7Z0JBQXhGO2tCQUNBO0FBREE7c0JBQ0EscUJBQUcsTUFBSztnQkFBUjtrQkFBQTtBQUFBO0tBR0YsMEJBQUMsY0FBRDtXQUVFO2NBQVUsRUFBRSxNQUNaO2dCQUFZLEVBQUUsTUFBTTs7Z0JBSHRCO2tCQUtFO0FBTEY7QUFDRSxxQkFJQyw4QkFBTyxnQkFBUixNQUF1QixNQUFLO2dCQUE1QjtrQkFHRjtBQUhFO3VCQUdELGNBQUQ7V0FFRTtjQUFVLEVBQUUsTUFDWjtnQkFBWSxFQUFFLE1BQU07O2dCQUh0QjtrQkFLRTtBQUxGO0FBQ0UscUJBSUMsOEJBQU8sY0FBYztnQkFBdEI7a0JBR0Y7QUFIRTt1QkFHRCxjQUFEO1dBRUU7Y0FBVSxFQUFFLE1BQ1o7Z0JBQVksRUFBRSxNQUFNOztnQkFIdEI7a0JBS0U7QUFMRjtBQUNFLHFCQUlDLDhCQUFPLE1BQUssU0FBUSxjQUFhLFFBQU8sT0FBTyxFQUFFLE9BQU8sT0FBTyxNQUFLO2dCQUFyRTtrQkFDRTtBQURGO3FCQUNHLGNBQUQsVUFBUSxPQUFNO2dCQUFkO2tCQUFBO0FBQUE7S0FDQSx5QkFBQyxjQUFELFVBQVEsT0FBTTtnQkFBZDtrQkFBQTtBQUFBO0tBQ0EseUJBQUMsY0FBRCxVQUFRLE9BQU0sWUFBVyxVQUF6QjtnQkFBQTtrQkFBQTtBQUFBO0tBQ0EsNkJBQUMsY0FBRCxVQUFRLE9BQU07Z0JBQWQ7a0JBQUE7QUFBQTtLQUlKLCtCQUFDLGNBQUQ7V0FFRTtjQUFVLEVBQUUsTUFDWjtnQkFBWSxFQUFFLE1BQU07O2dCQUh0QjtrQkFLRTtBQUxGO0FBQ0UscUJBSUMsa0NBQVcsTUFBSztnQkFBakI7a0JBRUY7QUFGRTt1QkFFRCxjQUFEO1dBQ1MsRUFBRSxXQUNUO2dCQUFZLEVBQUUsTUFBTSxHQUFHLFFBQVE7O2dCQUZqQztrQkFJRTtBQUpGO0FBQ0UscUJBR0MsOEJBQU8sTUFBSyxTQUFRLE1BQUssV0FBVSxVQUFTO2dCQUE3QztrQkFBQTtBQUFBO0tBR0EsdUJBQUMsOEJBQU8sTUFBSyxTQUFRLE9BQU8sRUFBRSxZQUFZO2dCQUExQztrQkFBQTtBQUFBO0tBQUE7QUEzRFYsRSIsImZpbGUiOiI1LjM1YWNjYzQ3ZDdlNjBmZjYzNjVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QsIElucHV0TnVtYmVyLCBEYXRlUGlja2VyLCBTd2l0Y2gsIFNsaWRlciwgQnV0dG9uLCBMb2NhbGVQcm92aWRlciB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZW5VUyBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVMnXG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExvY2FsZVByb3ZpZGVyIGxvY2FsZT17ZW5VU30+XG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCB9fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMi45LjMvYW50ZC5taW4uY3NzJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEZvcm0gaG9yaXpvbnRhbD5cbiAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgbGFiZWw9J0lucHV0IE51bWJlcidcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXROdW1iZXIgc2l6ZT0nbGFyZ2UnIG1pbj17MX0gbWF4PXsxMH0gc3R5bGU9e3sgd2lkdGg6IDEwMCB9fSBkZWZhdWx0VmFsdWU9ezN9IG5hbWU9J2lucHV0TnVtYmVyJyAvPlxuICAgICAgICAgIDxhIGhyZWY9JyMnPkxpbms8L2E+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG5cbiAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgbGFiZWw9J1N3aXRjaCdcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3dpdGNoIGRlZmF1bHRDaGVja2VkIG5hbWU9J3N3aXRjaCcgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nU2xpZGVyJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTbGlkZXIgZGVmYXVsdFZhbHVlPXs3MH0gLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nU2VsZWN0J1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nbGFyZ2UnIGRlZmF1bHRWYWx1ZT0nbHVjeScgc3R5bGU9e3sgd2lkdGg6IDE5MiB9fSBuYW1lPSdzZWxlY3QnPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0namFjayc+amFjazwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nbHVjeSc+bHVjeTwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nZGlzYWJsZWQnIGRpc2FibGVkPmRpc2FibGVkPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSd5aW1pbmdoZSc+eWltaW5naGU8L09wdGlvbj5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nRGF0ZVBpY2tlcidcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8RGF0ZVBpY2tlciBuYW1lPSdzdGFydERhdGUnIC8+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDgsIG9mZnNldDogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgdHlwZT0ncHJpbWFyeScgaHRtbFR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICBPS1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9Mb2NhbGVQcm92aWRlcj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==