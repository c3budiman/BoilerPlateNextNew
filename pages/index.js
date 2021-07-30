import Head from 'next/head';
import Overview from '../components/Overview';
import { useAppState } from "../components/shared/AppProvider";
import { useEffect } from "react";

import { Button, Row, Col, notification } from 'antd';

const OverviewPage = () => {
  const [_state, dispatch] = useAppState();

  function showError() {
    notification["error"]({
      message: "Error Title",
      description: "Deskripsi error klean",
    });
  }

  function showSukses() {
    notification["success"]({
      message: "Sukses Title",
      description: "Deskripsi sukses klean",
    });
  }

  useEffect(() => {
    dispatch({ type: 'showLoading' });
    setTimeout(() => {
      dispatch({ type: 'hideLoading' });
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/react-vis.css" />
      </Head>

      <Row className="mb-4">
        <Col xs={24} sm={24} md={12} lg={12} >
          <Button type="primary" onClick={showError} danger>
            Show Error
          </Button>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} >
          <Button type="primary" onClick={showSukses}>
            Show Sukses
          </Button>
        </Col>
      </Row>
      <Overview />
    </>
  );
}



export default OverviewPage;
