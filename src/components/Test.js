import React from 'react';
import createReactClass from 'create-react-class';
import {Panel, Button, InputGroup, FormControl, DropdownButton, MenuItem, Pagination} from "react-bootstrap";
import SearchIcon from '../assets/search.png';
import AccountTable from "./AccountTable";

var ExistingAccounts = createReactClass({
  getInitialState: function() {
    return {
      query: ''
    };
  },

  handleSearch: function() {
    console.log(this.state.query);
  },

  handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  },

  handleQueryChange: function(e) {
    this.setState({query: e.target.value});
  },

  render: function() {
    return (
      <div style={{marginTop: '20px'}}>
        <Panel>
          <Panel.Heading>
            <div style={{display: 'flex'}}>
              <h4 style={{marginRight: 'auto'}}>
                Existing Accounts (1/150)
                <small>
                  <Button bsStyle={'link'}>Info</Button>
                </small>
              </h4>
              <div style={{marginRight: '15px'}}>
                <Button>View Details</Button>
              </div>
              <div>
                <Button>Delete</Button>
              </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <InputGroup>
                <InputGroup.Addon>
                  <img src={SearchIcon} width={20}/>
                </InputGroup.Addon>
                <FormControl
                  value={this.state.query}
                  onKeyPress={this.handleKeyPress}
                  onChange={this.handleQueryChange}
                  placeholder={'Find resources'}
                  type="text"
                />
              </InputGroup>

              <div style={{marginLeft: '30px', marginRight: 'auto'}}>
                <DropdownButton title={'Any filter'}>
                  <MenuItem eventKey="Any filter">Any filter</MenuItem>
                  <MenuItem eventKey="Any filter">Any filter</MenuItem>
                </DropdownButton>
                <Button>Property: Item</Button>
              </div>
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Panel.Heading>
          <Panel.Body>
            <AccountTable />
          </Panel.Body>
        </Panel>
      </div>
    );
  }
});

export default ExistingAccounts;
