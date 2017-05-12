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
  })), _react2.default.createElement('div', { style: { marginBottom: 20 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_antd.Carousel, { autoplay: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 433)', height: 150 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, '1')), _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 322)', height: 150 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, '2')), _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 211)', height: 150 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, '3')), _react2.default.createElement('div', { style: { backgroundColor: 'rgb(16, 142, 100)', height: 150 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('h3', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, '4'))))), _react2.default.createElement(_antd.Form, { horizontal: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(FormItem, {
    label: 'Input Number',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement(_antd.InputNumber, { size: 'large', min: 1, max: 10, style: { width: 100 }, defaultValue: 3, name: 'inputNumber', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement('a', { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Link')), _react2.default.createElement(FormItem, {
    label: 'Switch',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_antd.Switch, { defaultChecked: true, name: 'switch', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), _react2.default.createElement(FormItem, {
    label: 'Slider',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, _react2.default.createElement(_antd.Slider, { defaultValue: 70, __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  })), _react2.default.createElement(FormItem, {
    label: 'Select',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement(_antd.Select, { size: 'large', defaultValue: 'lucy', style: { width: 192 }, name: 'select', __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement(Option, { value: 'jack', __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, 'jack'), _react2.default.createElement(Option, { value: 'lucy', __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, 'lucy'), _react2.default.createElement(Option, { value: 'disabled', disabled: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, 'disabled'), _react2.default.createElement(Option, { value: 'yiminghe', __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, 'yiminghe'))), _react2.default.createElement(FormItem, {
    label: 'DatePicker',
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(_antd.DatePicker, { name: 'startDate', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  })), _react2.default.createElement(FormItem, {
    style: { marginTop: 48 },
    wrapperCol: { span: 8, offset: 8 },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement(_antd.Button, { size: 'large', type: 'primary', htmlType: 'submit', __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, 'OK'), _react2.default.createElement(_antd.Button, { size: 'large', style: { marginLeft: 8 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, 'Cancel'))), _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement(_antd.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement(_antd.Table, { dataSource: dataSource, columns: columns, __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  })), _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, _react2.default.createElement(_antd.Rate, { allowHalf: true, defaultValue: 2.5, __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  })), _react2.default.createElement(_antd.Col, { span: 12, offset: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, _react2.default.createElement(_antd.Progress, { type: 'circle', percent: 30, width: 80, __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }), _react2.default.createElement(_antd.Progress, { type: 'circle', percent: 70, width: 80, status: 'exception', __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }), _react2.default.createElement(_antd.Progress, { type: 'circle', percent: 100, width: 80, __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    }
  }))))));
};

var dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];

var columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVEsTUFBSyxXQUFVLFVBQVM7Z0JBQTdDO2tCQUFBO0FBQUE7S0FHQSx1QkFBQyw4QkFBTyxNQUFLLFNBQVEsT0FBTyxFQUFFLFlBQVk7Z0JBQTFDO2tCQUFBO0FBQUE7S0FLSjs7Z0JBQUE7a0JBQ0U7QUFERjtBQUFBLHFCQUNHOztnQkFBRDtrQkFDRTtBQURGO0FBQUEscUJBQ0csMkJBQUksTUFBTSxJQUFJLFFBQVE7Z0JBQXZCO2tCQUNFO0FBREY7cUJBQ0csNkJBQU0sWUFBWSxZQUFZLFNBQVM7Z0JBQXhDO2tCQUVGO0FBRkU7dUJBRUQsMkJBQUksTUFBTSxJQUFJLFFBQVE7Z0JBQXZCO2tCQUNFO0FBREY7cUJBQ0csNEJBQUssV0FBTixNQUFnQixjQUFjO2dCQUE5QjtrQkFFRjtBQUZFO3VCQUVELDJCQUFJLE1BQU0sSUFBSSxRQUFRO2dCQUF2QjtrQkFDRTtBQURGO3FCQUNHLGdDQUFTLE1BQUssVUFBUyxTQUFTLElBQUksT0FBTztnQkFBNUM7a0JBQ0E7QUFEQTtzQkFDQyxnQ0FBUyxNQUFLLFVBQVMsU0FBUyxJQUFJLE9BQU8sSUFBSSxRQUFPO2dCQUF2RDtrQkFDQTtBQURBO3NCQUNDLGdDQUFTLE1BQUssVUFBUyxTQUFTLEtBQUssT0FBTztnQkFBN0M7a0JBQUE7QUFBQTs7QUFyRlo7O0FBOEZBLElBQU07T0FFSjtRQUNBO09BQ0E7V0FBUztBQUhULENBRGlCO09BT2pCO1FBQ0E7T0FDQTtXQUFTO0FBSFQ7O0FBTUYsSUFBTTtTQUVKO2FBQ0E7T0FBSztBQUZMLENBRGM7U0FNZDthQUNBO09BQUs7QUFGTDtTQUtBO2FBQ0E7T0FBSztBQUZMLEciLCJmaWxlIjoiNS5iZjk0MTBiZjRhNmY2OGViMmI4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRm9ybSwgU2VsZWN0LCBDYXJvdXNlbCwgUHJvZ3Jlc3MsIElucHV0TnVtYmVyLCBEYXRlUGlja2VyLCBTd2l0Y2gsIFNsaWRlciwgQnV0dG9uLCBMb2NhbGVQcm92aWRlciwgVGFibGUsIFJvdywgQ29sLCBSYXRlLCBNb2RhbCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgZW5VUyBmcm9tICdhbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvZW5fVVMnXG5cbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExvY2FsZVByb3ZpZGVyIGxvY2FsZT17ZW5VU30+XG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IDEwMCB9fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2FudGQvMi45LjMvYW50ZC5taW4uY3NzJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbToyMH19PlxuICAgICAgICA8Q29sIHNwYW49ezEyfSBvZmZzZXQ9ezZ9PlxuICAgICAgICAgIDxDYXJvdXNlbCBhdXRvcGxheT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JnYigxNiwgMTQyLCA0MzMpJywgaGVpZ2h0OjE1MH19PjxoMz4xPC9oMz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JnYigxNiwgMTQyLCAzMjIpJywgaGVpZ2h0OjE1MH19PjxoMz4yPC9oMz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JnYigxNiwgMTQyLCAyMTEpJywgaGVpZ2h0OjE1MH19PjxoMz4zPC9oMz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6J3JnYigxNiwgMTQyLCAxMDApJywgaGVpZ2h0OjE1MH19PjxoMz40PC9oMz48L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm0gaG9yaXpvbnRhbD5cbiAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgbGFiZWw9J0lucHV0IE51bWJlcidcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXROdW1iZXIgc2l6ZT0nbGFyZ2UnIG1pbj17MX0gbWF4PXsxMH0gc3R5bGU9e3sgd2lkdGg6IDEwMCB9fSBkZWZhdWx0VmFsdWU9ezN9IG5hbWU9J2lucHV0TnVtYmVyJyAvPlxuICAgICAgICAgIDxhIGhyZWY9JyMnPkxpbms8L2E+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG5cbiAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgbGFiZWw9J1N3aXRjaCdcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3dpdGNoIGRlZmF1bHRDaGVja2VkIG5hbWU9J3N3aXRjaCcgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nU2xpZGVyJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTbGlkZXIgZGVmYXVsdFZhbHVlPXs3MH0gLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nU2VsZWN0J1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTZWxlY3Qgc2l6ZT0nbGFyZ2UnIGRlZmF1bHRWYWx1ZT0nbHVjeScgc3R5bGU9e3sgd2lkdGg6IDE5MiB9fSBuYW1lPSdzZWxlY3QnPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0namFjayc+amFjazwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nbHVjeSc+bHVjeTwvT3B0aW9uPlxuICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nZGlzYWJsZWQnIGRpc2FibGVkPmRpc2FibGVkPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSd5aW1pbmdoZSc+eWltaW5naGU8L09wdGlvbj5cbiAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nRGF0ZVBpY2tlcidcbiAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XG4gICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8RGF0ZVBpY2tlciBuYW1lPSdzdGFydERhdGUnIC8+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogNDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDgsIG9mZnNldDogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgdHlwZT0ncHJpbWFyeScgaHRtbFR5cGU9J3N1Ym1pdCc+XG4gICAgICAgICAgICBPS1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gc2l6ZT0nbGFyZ2UnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDggfX0+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cbiAgICAgICAgICAgIDxUYWJsZSBkYXRhU291cmNlPXtkYXRhU291cmNlfSBjb2x1bW5zPXtjb2x1bW5zfSAvPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XG4gICAgICAgICAgICA8UmF0ZSBhbGxvd0hhbGYgZGVmYXVsdFZhbHVlPXsyLjV9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cbiAgICAgICAgICAgIDxQcm9ncmVzcyB0eXBlPVwiY2lyY2xlXCIgcGVyY2VudD17MzB9IHdpZHRoPXs4MH0gLz5cbiAgICAgICAgICAgIDxQcm9ncmVzcyB0eXBlPVwiY2lyY2xlXCIgcGVyY2VudD17NzB9IHdpZHRoPXs4MH0gc3RhdHVzPVwiZXhjZXB0aW9uXCIgLz5cbiAgICAgICAgICAgIDxQcm9ncmVzcyB0eXBlPVwiY2lyY2xlXCIgcGVyY2VudD17MTAwfSB3aWR0aD17ODB9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvTG9jYWxlUHJvdmlkZXI+XG4pXG5cblxuY29uc3QgZGF0YVNvdXJjZSA9IFt7XG4gIGtleTogJzEnLFxuICBuYW1lOiAnTWlrZScsXG4gIGFnZTogMzIsXG4gIGFkZHJlc3M6ICcxMCBEb3duaW5nIFN0cmVldCdcbn0sIHtcbiAga2V5OiAnMicsXG4gIG5hbWU6ICdKb2huJyxcbiAgYWdlOiA0MixcbiAgYWRkcmVzczogJzEwIERvd25pbmcgU3RyZWV0J1xufV07XG5cbmNvbnN0IGNvbHVtbnMgPSBbe1xuICB0aXRsZTogJ05hbWUnLFxuICBkYXRhSW5kZXg6ICduYW1lJyxcbiAga2V5OiAnbmFtZScsXG59LCB7XG4gIHRpdGxlOiAnQWdlJyxcbiAgZGF0YUluZGV4OiAnYWdlJyxcbiAga2V5OiAnYWdlJyxcbn0sIHtcbiAgdGl0bGU6ICdBZGRyZXNzJyxcbiAgZGF0YUluZGV4OiAnYWRkcmVzcycsXG4gIGtleTogJ2FkZHJlc3MnLFxufV07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJzb3VyY2VSb290IjoiIn0=