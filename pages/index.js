import React, { Component } from 'react'
import Head from 'next/head'
import { Form, Select, Carousel, Progress, InputNumber, DatePicker, Switch, Slider, Button, LocaleProvider, Table, Row, Col, Rate, Modal } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

const FormItem = Form.Item
const Option = Select.Option

export default class Index extends Component {

  state = {
    ModalText: 'TOmbol Oke mbok pejet yo',
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'Modal tertutup setelah 2 detik',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render(){
    return (
      <LocaleProvider locale={enUS}>
        <div style={{ marginTop: 100 }}>
          <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
          </Head>
          <div style={{marginnBottom:20}}>
            <div>
              <Button type="primary" onClick={this.showModal}>buka modal</Button>
              <Modal title="Judul"
                visible={this.state.visible}
                onOk={this.handleOk}
                confirmLoading={this.state.confirmLoading}
                onCancel={this.handleCancel}
              >
                <p>{this.state.ModalText}</p>
              </Modal>
            </div>
            <Col span={12} offset={6}>
              <Carousel autoplay>
                <div style={{backgroundColor:'rgb(16, 142, 433)', height:150}}><h3>1</h3></div>
                <div style={{backgroundColor:'rgb(16, 142, 322)', height:150}}><h3>2</h3></div>
                <div style={{backgroundColor:'rgb(16, 142, 211)', height:150}}><h3>3</h3></div>
                <div style={{backgroundColor:'rgb(16, 142, 100)', height:150}}><h3>4</h3></div>
              </Carousel>
            </Col>
          </div>
          <Form horizontal>
            <FormItem
              label='Input Number'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <InputNumber size='large' min={1} max={10} style={{ width: 100 }} defaultValue={3} name='inputNumber' />
              <a href='#'>Link</a>
            </FormItem>

            <FormItem
              label='Switch'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Switch defaultChecked name='switch' />
            </FormItem>

            <FormItem
              label='Slider'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Slider defaultValue={70} />
            </FormItem>

            <FormItem
              label='Select'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <Select size='large' defaultValue='lucy' style={{ width: 192 }} name='select'>
                <Option value='jack'>jack</Option>
                <Option value='lucy'>lucy</Option>
                <Option value='disabled' disabled>disabled</Option>
                <Option value='yiminghe'>yiminghe</Option>
              </Select>
            </FormItem>

            <FormItem
              label='DatePicker'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <DatePicker name='startDate' />
            </FormItem>
            <FormItem
              style={{ marginTop: 48 }}
              wrapperCol={{ span: 8, offset: 8 }}
            >
              <Button size='large' type='primary' htmlType='submit'>
                OK
              </Button>
              <Button size='large' style={{ marginLeft: 8 }}>
                Cancel
              </Button>
            </FormItem>
          </Form>
          <div>
            <Row>
              <Col span={12} offset={6}>
                <Table dataSource={dataSource} columns={columns} />
              </Col>
              <Col span={12} offset={6}>
                <Rate allowHalf defaultValue={2.5} />
              </Col>
              <Col span={12} offset={6}>
                <Progress type="circle" percent={30} width={80} />
                <Progress type="circle" percent={70} width={80} status="exception" />
                <Progress type="circle" percent={100} width={80} />
              </Col>
            </Row>
          </div>
        </div>
      </LocaleProvider>
    )
  }
}


const dataSource = [{
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

const columns = [{
  title: 'Nama',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Usia',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Alamat',
  dataIndex: 'address',
  key: 'address',
}];
