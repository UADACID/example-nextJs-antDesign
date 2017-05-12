
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

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9hMzE5NmU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87Ozs7QUFDaUU7O0FBQ2pFOzs7Ozs7Ozs7QUFFUCxJQUFNLFdBQVcsV0FBSztBQUN0QixJQUFNLFNBQVMsYUFFZjs7a0JBQWU7eUJBQ1osc0NBQXVCO2dCQUF4QjtrQkFDRTtBQURGO0dBQUEsa0JBQ0UsdUJBQUssT0FBTyxFQUFFLFdBQVc7Z0JBQXpCO2tCQUNFO0FBREY7cUJBQ0c7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSw2Q0FDUSxLQUFJLGNBQWEsTUFBSztnQkFBNUI7a0JBRUY7QUFGRTt1QkFFRCw0QkFBSyxZQUFOO2dCQUFBO2tCQUNFO0FBREY7cUJBQ0csY0FBRDtXQUVFO2NBQVUsRUFBRSxNQUNaO2dCQUFZLEVBQUUsTUFBTTs7Z0JBSHRCO2tCQUtFO0FBTEY7QUFDRSxxQkFJQyxtQ0FBWSxNQUFLLFNBQVEsS0FBSyxHQUFHLEtBQUssSUFBSSxPQUFPLEVBQUUsT0FBTyxPQUFPLGNBQWMsR0FBRyxNQUFLO2dCQUF4RjtrQkFDQTtBQURBO3NCQUNBLHFCQUFHLE1BQUs7Z0JBQVI7a0JBQUE7QUFBQTtLQUdGLDBCQUFDLGNBQUQ7V0FFRTtjQUFVLEVBQUUsTUFDWjtnQkFBWSxFQUFFLE1BQU07O2dCQUh0QjtrQkFLRTtBQUxGO0FBQ0UscUJBSUMsOEJBQU8sZ0JBQVIsTUFBdUIsTUFBSztnQkFBNUI7a0JBR0Y7QUFIRTt1QkFHRCxjQUFEO1dBRUU7Y0FBVSxFQUFFLE1BQ1o7Z0JBQVksRUFBRSxNQUFNOztnQkFIdEI7a0JBS0U7QUFMRjtBQUNFLHFCQUlDLDhCQUFPLGNBQWM7Z0JBQXRCO2tCQUdGO0FBSEU7dUJBR0QsY0FBRDtXQUVFO2NBQVUsRUFBRSxNQUNaO2dCQUFZLEVBQUUsTUFBTTs7Z0JBSHRCO2tCQUtFO0FBTEY7QUFDRSxxQkFJQyw4QkFBTyxNQUFLLFNBQVEsY0FBYSxRQUFPLE9BQU8sRUFBRSxPQUFPLE9BQU8sTUFBSztnQkFBckU7a0JBQ0U7QUFERjtxQkFDRyxjQUFELFVBQVEsT0FBTTtnQkFBZDtrQkFBQTtBQUFBO0tBQ0EseUJBQUMsY0FBRCxVQUFRLE9BQU07Z0JBQWQ7a0JBQUE7QUFBQTtLQUNBLHlCQUFDLGNBQUQsVUFBUSxPQUFNLFlBQVcsVUFBekI7Z0JBQUE7a0JBQUE7QUFBQTtLQUNBLDZCQUFDLGNBQUQsVUFBUSxPQUFNO2dCQUFkO2tCQUFBO0FBQUE7S0FJSiwrQkFBQyxjQUFEO1dBRUU7Y0FBVSxFQUFFLE1BQ1o7Z0JBQVksRUFBRSxNQUFNOztnQkFIdEI7a0JBS0U7QUFMRjtBQUNFLHFCQUlDLGtDQUFXLE1BQUs7Z0JBQWpCO2tCQUVGO0FBRkU7dUJBRUQsY0FBRDtXQUNTLEVBQUUsV0FDVDtnQkFBWSxFQUFFLE1BQU0sR0FBRyxRQUFROztnQkFGakM7a0JBSUU7QUFKRjtBQUNFLHFCQUdDLDhCQUFPLE1BQUssU0FBUSxNQUFLLFdBQVUsVUFBUztnQkFBN0M7a0JBQUE7QUFBQTtLQUdBLHVCQUFDLDhCQUFPLE1BQUssU0FBUSxPQUFPLEVBQUUsWUFBWTtnQkFBMUM7a0JBQUE7QUFBQTtLQUFBO0FBM0RWLEUiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEZvcm0sIFNlbGVjdCwgSW5wdXROdW1iZXIsIERhdGVQaWNrZXIsIFN3aXRjaCwgU2xpZGVyLCBCdXR0b24sIExvY2FsZVByb3ZpZGVyIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBlblVTIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VUydcblxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW1cbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb25cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TG9jYWxlUHJvdmlkZXIgbG9jYWxlPXtlblVTfT5cbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAwIH19PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW50ZC8yLjkuMy9hbnRkLm1pbi5jc3MnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Rm9ybSBob3Jpem9udGFsPlxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nSW5wdXQgTnVtYmVyJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dE51bWJlciBzaXplPSdsYXJnZScgbWluPXsxfSBtYXg9ezEwfSBzdHlsZT17eyB3aWR0aDogMTAwIH19IGRlZmF1bHRWYWx1ZT17M30gbmFtZT0naW5wdXROdW1iZXInIC8+XG4gICAgICAgICAgPGEgaHJlZj0nIyc+TGluazwvYT5cbiAgICAgICAgPC9Gb3JtSXRlbT5cblxuICAgICAgICA8Rm9ybUl0ZW1cbiAgICAgICAgICBsYWJlbD0nU3dpdGNoJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTd2l0Y2ggZGVmYXVsdENoZWNrZWQgbmFtZT0nc3dpdGNoJyAvPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGxhYmVsPSdTbGlkZXInXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNsaWRlciBkZWZhdWx0VmFsdWU9ezcwfSAvPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGxhYmVsPSdTZWxlY3QnXG4gICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFNlbGVjdCBzaXplPSdsYXJnZScgZGVmYXVsdFZhbHVlPSdsdWN5JyBzdHlsZT17eyB3aWR0aDogMTkyIH19IG5hbWU9J3NlbGVjdCc+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdqYWNrJz5qYWNrPC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdsdWN5Jz5sdWN5PC9PcHRpb24+XG4gICAgICAgICAgICA8T3B0aW9uIHZhbHVlPSdkaXNhYmxlZCcgZGlzYWJsZWQ+ZGlzYWJsZWQ8L09wdGlvbj5cbiAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9J3lpbWluZ2hlJz55aW1pbmdoZTwvT3B0aW9uPlxuICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8L0Zvcm1JdGVtPlxuXG4gICAgICAgIDxGb3JtSXRlbVxuICAgICAgICAgIGxhYmVsPSdEYXRlUGlja2VyJ1xuICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgICB3cmFwcGVyQ29sPXt7IHNwYW46IDggfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxEYXRlUGlja2VyIG5hbWU9J3N0YXJ0RGF0ZScgLz5cbiAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgPEZvcm1JdGVtXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiA0OCB9fVxuICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogOCwgb2Zmc2V0OiA4IH19XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9J2xhcmdlJyB0eXBlPSdwcmltYXJ5JyBodG1sVHlwZT0nc3VibWl0Jz5cbiAgICAgICAgICAgIE9LXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPSdsYXJnZScgc3R5bGU9e3sgbWFyZ2luTGVmdDogOCB9fT5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICA8L0xvY2FsZVByb3ZpZGVyPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        