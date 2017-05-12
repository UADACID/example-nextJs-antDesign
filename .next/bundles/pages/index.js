
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

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9lYmMyM2YzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDNEg7O0FBQzVIOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsV0FBSztBQUN0QixJQUFNLFNBQVMsYUFFZjs7a0JBQWU7eUJBQ1osc0NBQXVCO2dCQUF4QjtrQkFDRTtBQURGO0dBQUEsa0JBQ0UsdUJBQUssT0FBTyxFQUFFLFdBQVc7Z0JBQXpCO2tCQUNFO0FBREY7cUJBQ0c7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSw2Q0FDUSxLQUFJLGNBQWEsTUFBSztnQkFBNUI7a0JBRUY7QUFGRTt1QkFFRix1QkFBSyxPQUFPLEVBQUMsY0FBYTtnQkFBMUI7a0JBQ0U7QUFERjtxQkFDRywyQkFBSSxNQUFNLElBQUksUUFBUTtnQkFBdkI7a0JBQ0U7QUFERjtxQkFDRyxnQ0FBUyxVQUFWO2dCQUFBO2tCQUNFO0FBREY7cUJBQ0UsdUJBQUssT0FBTyxFQUFDLGlCQUFnQixxQkFBcUIsUUFBTztnQkFBekQ7a0JBQStEO0FBQS9EO3FCQUErRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQy9ELDhDQUFLLE9BQU8sRUFBQyxpQkFBZ0IscUJBQXFCLFFBQU87Z0JBQXpEO2tCQUErRDtBQUEvRDtxQkFBK0Q7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUMvRCw4Q0FBSyxPQUFPLEVBQUMsaUJBQWdCLHFCQUFxQixRQUFPO2dCQUF6RDtrQkFBK0Q7QUFBL0Q7cUJBQStEOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FDL0QsOENBQUssT0FBTyxFQUFDLGlCQUFnQixxQkFBcUIsUUFBTztnQkFBekQ7a0JBQStEO0FBQS9EO3FCQUErRDs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBSXJFLDBCQUFDLDRCQUFLLFlBQU47Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRyxjQUFEO1dBRUU7Y0FBVSxFQUFFLE1BQ1o7Z0JBQVksRUFBRSxNQUFNOztnQkFIdEI7a0JBS0U7QUFMRjtBQUNFLHFCQUlDLG1DQUFZLE1BQUssU0FBUSxLQUFLLEdBQUcsS0FBSyxJQUFJLE9BQU8sRUFBRSxPQUFPLE9BQU8sY0FBYyxHQUFHLE1BQUs7Z0JBQXhGO2tCQUNBO0FBREE7c0JBQ0EscUJBQUcsTUFBSztnQkFBUjtrQkFBQTtBQUFBO0tBR0YsMEJBQUMsY0FBRDtXQUVFO2NBQVUsRUFBRSxNQUNaO2dCQUFZLEVBQUUsTUFBTTs7Z0JBSHRCO2tCQUtFO0FBTEY7QUFDRSxxQkFJQyw4QkFBTyxnQkFBUixNQUF1QixNQUFLO2dCQUE1QjtrQkFHRjtBQUhFO3VCQUdELGNBQUQ7V0FFRTtjQUFVLEVBQUUsTUFDWjtnQkFBWSxFQUFFLE1BQU07O2dCQUh0QjtrQkFLRTtBQUxGO0FBQ0UscUJBSUMsOEJBQU8sY0FBYztnQkFBdEI7a0JBR0Y7QUFIRTt1QkFHRCxjQUFEO1dBRUU7Y0FBVSxFQUFFLE1BQ1o7Z0JBQVksRUFBRSxNQUFNOztnQkFIdEI7a0JBS0U7QUFMRjtBQUNFLHFCQUlDLDhCQUFPLE1BQUssU0FBUSxjQUFhLFFBQU8sT0FBTyxFQUFFLE9BQU8sT0FBTyxNQUFLO2dCQUFyRTtrQkFDRTtBQURGO3FCQUNHLGNBQUQsVUFBUSxPQUFNO2dCQUFkO2tCQUFBO0FBQUE7S0FDQSx5QkFBQyxjQUFELFVBQVEsT0FBTTtnQkFBZDtrQkFBQTtBQUFBO0tBQ0EseUJBQUMsY0FBRCxVQUFRLE9BQU0sWUFBVyxVQUF6QjtnQkFBQTtrQkFBQTtBQUFBO0tBQ0EsNkJBQUMsY0FBRCxVQUFRLE9BQU07Z0JBQWQ7a0JBQUE7QUFBQTtLQUlKLCtCQUFDLGNBQUQ7V0FFRTtjQUFVLEVBQUUsTUFDWjtnQkFBWSxFQUFFLE1BQU07O2dCQUh0QjtrQkFLRTtBQUxGO0FBQ0UscUJBSUMsa0NBQVcsTUFBSztnQkFBakI7a0JBRUY7QUFGRTt1QkFFRCxjQUFEO1dBQ1MsRUFBRSxXQUNUO2dCQUFZLEVBQUUsTUFBTSxHQUFHLFFBQVE7O2dCQUZqQztrQkFJRTtBQUpGO0FBQ0UscUJBR0MsOEJBQU8sTUFBSyxTQUFRLE1BQUssV0FBVSxVQUFTO2dCQUE3QztrQkFBQTtBQUFBO0tBR0EsdUJBQUMsOEJBQU8sTUFBSyxTQUFRLE9BQU8sRUFBRSxZQUFZO2dCQUExQztrQkFBQTtBQUFBO0tBS0o7O2dCQUFBO2tCQUNFO0FBREY7QUFBQSxxQkFDRzs7Z0JBQUQ7a0JBQ0U7QUFERjtBQUFBLHFCQUNHLDJCQUFJLE1BQU0sSUFBSSxRQUFRO2dCQUF2QjtrQkFDRTtBQURGO3FCQUNHLDZCQUFNLFlBQVksWUFBWSxTQUFTO2dCQUF4QztrQkFFRjtBQUZFO3VCQUVELDJCQUFJLE1BQU0sSUFBSSxRQUFRO2dCQUF2QjtrQkFDRTtBQURGO3FCQUNHLDRCQUFLLFdBQU4sTUFBZ0IsY0FBYztnQkFBOUI7a0JBRUY7QUFGRTt1QkFFRCwyQkFBSSxNQUFNLElBQUksUUFBUTtnQkFBdkI7a0JBQ0U7QUFERjtxQkFDRyxnQ0FBUyxNQUFLLFVBQVMsU0FBUyxJQUFJLE9BQU87Z0JBQTVDO2tCQUNBO0FBREE7c0JBQ0MsZ0NBQVMsTUFBSyxVQUFTLFNBQVMsSUFBSSxPQUFPLElBQUksUUFBTztnQkFBdkQ7a0JBQ0E7QUFEQTtzQkFDQyxnQ0FBUyxNQUFLLFVBQVMsU0FBUyxLQUFLLE9BQU87Z0JBQTdDO2tCQUFBO0FBQUE7O0FBckZaOztBQThGQSxJQUFNO09BRUo7UUFDQTtPQUNBO1dBQVM7QUFIVCxDQURpQjtPQU9qQjtRQUNBO09BQ0E7V0FBUztBQUhUOztBQU1GLElBQU07U0FFSjthQUNBO09BQUs7QUFGTCxDQURjO1NBTWQ7YUFDQTtPQUFLO0FBRkw7U0FLQTthQUNBO09BQUs7QUFGTCxHIiwiZmlsZSI6ImJ1bmRsZXMvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBGb3JtLCBTZWxlY3QsIENhcm91c2VsLCBQcm9ncmVzcywgSW5wdXROdW1iZXIsIERhdGVQaWNrZXIsIFN3aXRjaCwgU2xpZGVyLCBCdXR0b24sIExvY2FsZVByb3ZpZGVyLCBUYWJsZSwgUm93LCBDb2wsIFJhdGUsIE1vZGFsIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBlblVTIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VUydcblxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW1cbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb25cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TG9jYWxlUHJvdmlkZXIgbG9jYWxlPXtlblVTfT5cbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAwIH19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8yLjkuMy9hbnRkLm1pbi5jc3MnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjIwfX0+XG4gICAgICAgIDxDb2wgc3Bhbj17MTJ9IG9mZnNldD17Nn0+XG4gICAgICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmdiKDE2LCAxNDIsIDQzMyknLCBoZWlnaHQ6MTUwfX0+PGgzPjE8L2gzPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmdiKDE2LCAxNDIsIDMyMiknLCBoZWlnaHQ6MTUwfX0+PGgzPjI8L2gzPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmdiKDE2LCAxNDIsIDIxMSknLCBoZWlnaHQ6MTUwfX0+PGgzPjM8L2gzPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjoncmdiKDE2LCAxNDIsIDEwMCknLCBoZWlnaHQ6MTUwfX0+PGgzPjQ8L2gzPjwvZGl2PlxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9ybSBob3Jpem9udGFsPlxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nSW5wdXQgTnVtYmVyJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dE51bWJlciBzaXplPSdsYXJnZScgbWluPXsxfSBtYXg9ezEwfSBzdHlsZT17eyB3aWR0aDogMTAwIH19IGRlZmF1bHRWYWx1ZT17M30gbmFtZT0naW5wdXROdW1iZXInIC8+XG4gICAgICAgICAgPGEgaHJlZj0nIyc+TGluazwvYT5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nU3dpdGNoJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTd2l0Y2ggZGVmYXVsdENoZWNrZWQgbmFtZT0nc3dpdGNoJyAvPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGxhYmVsPSdTbGlkZXInXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNsaWRlciBkZWZhdWx0VmFsdWU9ezcwfSAvPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGxhYmVsPSdTZWxlY3QnXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNlbGVjdCBzaXplPSdsYXJnZScgZGVmYXVsdFZhbHVlPSdsdWN5JyBzdHlsZT17eyB3aWR0aDogMTkyIH19IG5hbWU9J3NlbGVjdCc+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdqYWNrJz5qYWNrPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdsdWN5Jz5sdWN5PC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdkaXNhYmxlZCcgZGlzYWJsZWQ+ZGlzYWJsZWQ8L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J3lpbWluZ2hlJz55aW1pbmdoZTwvT3B0aW9uPlxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGxhYmVsPSdEYXRlUGlja2VyJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXRlUGlja2VyIG5hbWU9J3N0YXJ0RGF0ZScgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA0OCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCwgb2Zmc2V0OiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB0eXBlPSdwcmltYXJ5JyBodG1sVHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgIE9LXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgPC9Gb3JtPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHNwYW49ezEyfSBvZmZzZXQ9ezZ9PlxuICAgICAgICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IGNvbHVtbnM9e2NvbHVtbnN9IC8+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBzcGFuPXsxMn0gb2Zmc2V0PXs2fT5cbiAgICAgICAgICAgIDxSYXRlIGFsbG93SGFsZiBkZWZhdWx0VmFsdWU9ezIuNX0gLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHNwYW49ezEyfSBvZmZzZXQ9ezZ9PlxuICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBwZXJjZW50PXszMH0gd2lkdGg9ezgwfSAvPlxuICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBwZXJjZW50PXs3MH0gd2lkdGg9ezgwfSBzdGF0dXM9XCJleGNlcHRpb25cIiAvPlxuICAgICAgICAgICAgPFByb2dyZXNzIHR5cGU9XCJjaXJjbGVcIiBwZXJjZW50PXsxMDB9IHdpZHRoPXs4MH0gLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9Mb2NhbGVQcm92aWRlcj5cbilcblxuXG5jb25zdCBkYXRhU291cmNlID0gW3tcbiAga2V5OiAnMScsXG4gIG5hbWU6ICdNaWtlJyxcbiAgYWdlOiAzMixcbiAgYWRkcmVzczogJzEwIERvd25pbmcgU3RyZWV0J1xufSwge1xuICBrZXk6ICcyJyxcbiAgbmFtZTogJ0pvaG4nLFxuICBhZ2U6IDQyLFxuICBhZGRyZXNzOiAnMTAgRG93bmluZyBTdHJlZXQnXG59XTtcblxuY29uc3QgY29sdW1ucyA9IFt7XG4gIHRpdGxlOiAnTmFtZScsXG4gIGRhdGFJbmRleDogJ25hbWUnLFxuICBrZXk6ICduYW1lJyxcbn0sIHtcbiAgdGl0bGU6ICdBZ2UnLFxuICBkYXRhSW5kZXg6ICdhZ2UnLFxuICBrZXk6ICdhZ2UnLFxufSwge1xuICB0aXRsZTogJ0FkZHJlc3MnLFxuICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcbiAga2V5OiAnYWRkcmVzcycsXG59XTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        