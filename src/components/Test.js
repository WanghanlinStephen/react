import React from 'react';
import createReactClass from 'create-react-class';
import { Button, Panel, DropdownButton, MenuItem, FormControl } from 'react-bootstrap';

var ManageAccount = createReactClass({
    getInitialState: function () {
        return {
            accountTypes: ['type1', 'type2', 'type3'],
            accountNames: ['name1', 'name2', 'name3'],
            odinMaterialSet: '',
            posixGroups: ['group1', 'group2', 'group3'],
        };
    },

    handleOdinMaterialSetChange: function (e) {
        this.setState({ odinMaterialSet: e.target.value });
    },

    render: function () {
        return (
            <div style={{ marginTop: '20px' }}>
                <Panel>
                    <Panel.Heading>
                        <h4>Create a new account</h4>
                    </Panel.Heading>
                    <Panel.Body>
                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '0px' }}>
                                Account Type
                                <small>
                                    <Button href={'http://xx.com'} bsStyle={'link'}>
                                        Info
                                    </Button>
                                </small>
                            </h5>
                            <p style={{ color: 'grey', marginTop: '0px' }}>
                                Account type, basic auth or IAM user (SigV4).
                            </p>
                            <DropdownButton bsSize={''} title={'Choose an account type'}>
                                {this.state.accountTypes.map((type) => {
                                    return (
                                        <MenuItem eventKey={type} key={type}>
                                            {type}
                                        </MenuItem>
                                    );
                                })}
                            </DropdownButton>
                        </div>

                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '0px' }}>
                                Account name
                                <small>
                                    <Button href={'http://xx.com'} bsStyle={'link'}>
                                        Info
                                    </Button>
                                </small>
                            </h5>
                            <p style={{ color: 'grey', marginTop: '0px' }}>
                                Your account will act as a member of this POSIX group for the
                                purposes of our authorization checks. If the Read-only flag is
                                disabled, this account will be able to repurpose or swap hosts
                                under hostclasses that this group is listed as an Operator of.
                            </p>
                            <DropdownButton
                                bsSize={''}
                                title={this.state.accountNames[0] || ''}
                            >
                                {this.state.accountNames.map((name) => {
                                    return (
                                        <MenuItem eventKey={name} key={name}>
                                            {name}
                                        </MenuItem>
                                    );
                                })}
                            </DropdownButton>
                        </div>

                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '0px' }}>
                                Odin material set info
                                <small>
                                    <Button href={'http://xx.com'} bsStyle={'link'}>
                                        Info
                                    </Button>
                                </small>
                            </h5>
                            <p style={{ color: 'grey', marginTop: '0px' }}>
                                We use the Odin material set to validate your account
                                credentials at runtime.
                            </p>
                            <FormControl
                                value={this.state.odinMaterialSet}
                                onChange={this.handleOdinMaterialSetChange}
                                type='text'
                            />
                        </div>

                        <div>
                            <h5 style={{ fontWeight: 'bold', marginBottom: '0px' }}>
                                Posix group
                                <small>
                                    <Button href={'http.com'} bsStyle={'link'}>
                                        Info
                                    </Button>
                                </small>
                            </h5>
                            <p style={{ color: 'grey', marginTop: '0px' }}>
                                Your account will act as a member of this Posix group for the
                                purposes of our authorization checks. If the Read-only flag is
                                disabled, this account will be able to repurpose or swap hosts
                                under hostclasses that this group is listed as an Operator of.
                            </p>
                            <DropdownButton bsSize={''} title={'Choose a posix group'}>
                                {this.state.posixGroups.map((group) => {
                                    return (
                                        <MenuItem eventKey={group} key={group}>
                                            {group}
                                        </MenuItem>
                                    );
                                })}
                            </DropdownButton>
                        </div>
                    </Panel.Body>
                </Panel>
            </div>
        );
    },

});