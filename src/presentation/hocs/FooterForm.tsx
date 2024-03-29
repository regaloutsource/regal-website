import { useState } from 'react';
import { Button, Checkbox, Col, Form, FormProps, Input, Typography } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { FooterFormData } from '../../domain/constants/FooterData';

type FieldType = {
    name?: string;
    email?: string;
    about?: string;
    skills?: string;
}

const FooterForm = () => {

    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
    const [userInfo, setUserInfo] = useState({
        name: "", email: "", idea: ""
    })
    const CheckboxGroup = Checkbox.Group;

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onCheckBoxChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
      };

      console.log("🚀 ~ FooterForm ~ userInfo:", userInfo)
    return (
        <Col>
            <Typography.Title className="footer-title-text footer-form-heading">Got ideas? We've got the skills. <br /> Let's team up.</Typography.Title>
            <Typography.Title className="footer-form-sub-text">Tell us more about yourself and what you've got in mind.</Typography.Title>

            <Form
                name="userdata"
                // wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600, marginTop: 30 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name !' }]}
                >
                    <Input placeholder="Your name" className="footer-form-input" onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} />
                </Form.Item>

                <Form.Item<FieldType>
                    name="email"
                    rules={[{ required: true, message: 'Please enter your email !' }]}
                >
                    <Input placeholder="you@company.com" className="footer-form-input" onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
                </Form.Item>

                <Form.Item<FieldType>
                    name="about"
                    rules={[{ required: true, message: 'Please enter your idea !' }]}
                >
                    <Input placeholder="Tell us a little about the project" className="footer-form-input" onChange={(e) => setUserInfo({...userInfo, idea: e.target.value})} />
                </Form.Item>

                <Form.Item<FieldType>
                    name="skills"
                    label="How can we help ?"
                >
                </Form.Item>
                    <CheckboxGroup options={FooterFormData} value={checkedList} onChange={onCheckBoxChange} />
                

                <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                    <Button type="primary" htmlType="submit" className="footer-form-btn">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    )
}

export default FooterForm