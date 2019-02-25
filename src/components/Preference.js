import React from 'react';
import {
    Button, Modal, Form, Input, Radio,Checkbox,
} from 'antd';

  const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
      render() {
        const {
          visible, onCancel, onCreate, form,
        } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="Create a new preference"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <Form.Item label="Position Name">
                {getFieldDecorator('area', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(
                  <Input />
                )}
              </Form.Item>
              <Form.Item label="Area">
                {getFieldDecorator('area', {
                  rules: [{ required: true, message: 'Please input the title of collection!' }],
                })(
                  <Input />
                )}
              </Form.Item>
              
              <Form.Item label="Search Range">
                {getFieldDecorator('Range', {
                  initialValue: '1000',
                })(
                  <Radio.Group>
                    <Radio value="1000">1000</Radio>
                    <Radio value="2000">2000</Radio>
                    <Radio value="5000">5000</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item >
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <Checkbox>I hope to get a similar position
                    </Checkbox>
                )}
              </Form.Item>
            </Form>
          </Modal>
        );
      }
    }
  );
  
export  class Preference extends React.Component {
    state = {
      visible: false,
    };
  
    showModal = () => {
      this.setState({ visible: true });
    }
  
    handleCancel = () => {
      this.setState({ visible: false });
    }
  
    handleCreate = () => {
      const form = this.formRef.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
  
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ visible: false });
      });
    }
  
    saveFormRef = (formRef) => {
      this.formRef = formRef;
    }
  
    render() {
      return (
        <div>
          <Button type="primary" ghost onClick={this.showModal}>Preference</Button>
          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </div>
      );
    }
  }
  