import { Col, Grid, Row, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import NavBar from "./NavBar";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";
import ManageAccount from "./ManageAccount";
import ExistingAccounts from "./ExistingAccounts";
import {useState} from "react";

export default function Home() {
  const [tabName, setTabName] = useState('manage-account');
  return (
    <Row>
      <Col xs={1}>
        {/* <div style={{borderRight: '1px solid grey'}}>
          <NavBar />
        </div> */}
      </Col>
      <Col xs={10}>
        <div style={{marginTop: '20px'}}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item >Manage Accounts</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h2 style={{marginBottom: '40px'}}>Manage Account</h2>
        <Tabs defaultActiveKey={tabName}>
          <Tab eventKey={'manage-account'} title={'Create a new account'}>
            <ManageAccount />
          </Tab>
          <Tab eventKey={'existing-accounts'} title={'Existing accounts'}>
            <ExistingAccounts />
          </Tab>
        </Tabs>
      </Col>
      <Col xs={1}></Col>
    </Row>
  )
}