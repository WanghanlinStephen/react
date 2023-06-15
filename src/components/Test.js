import React from 'react';
import createReactClass from 'create-react-class';
import { Col, Row, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import ManageAccount from './ManageAccount';
import ExistingAccounts from './ExistingAccounts';

var Home = createReactClass({
  getInitialState: function() {
    return {
      tabName: 'manage-account'
    };
  },

  render: function() {
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
              <Breadcrumb.Item>Manage Accounts</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h2 style={{marginBottom: '40px'}}>Manage Account</h2>
          <Tabs defaultActiveKey={this.state.tabName}>
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
    );
  }
});

export default Home;
