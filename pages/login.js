import { Button, Checkbox, Form, Input, Message, Row, notification, Spin, Col } from 'antd';
import { EyeTwoTone, MailTwoTone, CloudServerOutlined } from '@ant-design/icons';

import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
// import { useAppState } from './shared/AppProvider';
import { useAppState } from "../components/shared/AppProvider";
import { FetcherPost } from '../utils/fetcher';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";

const FormItem = Form.Item;

const Content = styled.div`
  max-width: 400px;
  z-index: 2;
  min-width: 300px;
`;

const Signin = ({ form }) => {
    const [state] = useAppState();
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const { code } = router.query

    useEffect(() => {
        console.log('code', code)
        if (code == "2") {
            showError("Harap Login terlebih dahulu.")
        }
        if (code == "1") {
            showSukses("Berhasil logout.")
        }
    }, [code])

    function showError(msg) {
        notification["error"]({
            message: "Error!",
            description: msg,
        });
    }
    function showSukses(msg) {
        notification["success"]({
            message: "Sukses!",
            description: msg,
        });
    }

    const handleLogin = async (values) => {
        setLoading(true)
        if (values.email == "") {
            showError("Email tidak boleh kosong!!")
        }

        if (values.password == "") {
            showError("Password tidak boleh kosong!!")
        }

        var response = await FetcherPost('/api/loginDummy', values)
        console.log('response', response)
        setLoading(false)
        if (response?.data?.code == 0) {
            Message.success(
                'Sign complete. Taking you to your dashboard!'
            ).then(() => Router.replace('/'));
        }
    }

    return (
        <>
            <Head>
                <title>Login Page</title>
                <link rel="stylesheet" href="/css/login.css" />
            </Head>

            <Spin tip="Memuat..." size="large" spinning={loading}>
                <Row
                    type="flex"
                    align="middle"
                    justify="center"
                    className={state.mobile ? "mh-page withbg-jon-mobile" : "mh-page withbg-jon"}
                    style={{ minHeight: '100vh' }}
                >
                    <Content>
                        <div className="text-center mb-5">
                            {/* <Link href="/signin">
                                <a className="brand mr-0">
                                    <CloudServerOutlined style={{ fontSize: '32px', color: "#fff" }} />
                                </a>
                            </Link>
                            <h5 className="mb-0 mt-3 colorWhite">Sign in</h5>

                            <p className="colorWhite">get started with our service</p> */}
                            <img src="/images/logo/dtn.png" height="60px" alt="Dtn Logo" />
                        </div>


                        <Form
                            layout="vertical"
                            onFinish={handleLogin}
                        >
                            <FormItem name="email" rules={[
                                {
                                    type: 'email',
                                    message: 'Format email salah!'
                                },
                                {
                                    required: true,
                                    message: 'Email tidak boleh kosong!'
                                }
                            ]}>
                                <Input
                                    prefix={
                                        <img src="/images/icon/login/mail.svg" alt="mail" />
                                    }
                                    type="email"
                                    placeholder="Email"
                                />
                            </FormItem>

                            <FormItem style={{ marginBottom: "0" }} name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                                <Input
                                    prefix={
                                        <img src="/images/icon/login/key.svg" alt="pass" />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />

                            </FormItem>
                            <FormItem>
                                <div style={{ float: "right" }}>
                                    <a onClick={() => { Router.push('/forgot') }} style={{ color: "#33539E", fontSize: "12px", marginTop: "5px", fontWeight: "bold" }}>Lupa Password ?</a>
                                </div>
                            </FormItem>


                            <FormItem name="remember" valuePropName="checked" initialValue={true}>
                                <Row gutter={[20, 20]}>
                                    <Col xs={12} sm={12} md={12} lg={12} >
                                        <Button onClick={() => { Router.push('/signup') }} type="primary" htmlType="button" block style={{ color: "#33539E", background: "transparent", border: "none", boxShadow: "none", fontSize: "12px", fontWeight: "bold" }}>
                                            Register
                                        </Button>
                                        {/* <a onClick={() => { Router.push('/signup') }} className="text-center" style={{ color: "#33539E", fontSize: "12px", marginTop: "5px", fontWeight: "bold" }}>Lupa Password ?</a> */}
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} >
                                        <Button style={{ background: "#33539E", borderColor: "#33539E", borderRadius: "20px" }} type="primary" htmlType="submit" block className="colorWhite">
                                            Log in
                                        </Button>
                                    </Col>
                                </Row>
                            </FormItem>

                            {/* <div className="text-center">
                    <small className="text-muted">
                        <span>Don't have an account yet?</span>{' '}
                        <Link href="/signup">
                            <a>&nbsp;Create one now!</a>
                        </Link>
                    </small>
                </div> */}
                        </Form>
                    </Content>
                </Row>
            </Spin>
        </>
    );
}

export default Signin;
