'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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