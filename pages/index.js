import Head from 'next/head'
import { Form, Select, Carousel, Progress, InputNumber, DatePicker, Switch, Slider, Button, LocaleProvider, Table, Row, Col, Rate, Modal } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

const FormItem = Form.Item
const Option = Select.Option

export default () => (
  <LocaleProvider locale={enUS}>
    <div style={{ marginTop: 100 }}>
      <Head>
        <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/2.9.3/antd.min.css' />
      </Head>
      <div style={{marginBottom:20}}>
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


const dataSource = [{
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

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}];
