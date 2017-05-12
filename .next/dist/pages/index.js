'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _antd = require('antd');

var _en_US = require('antd/lib/locale-provider/en_US');

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