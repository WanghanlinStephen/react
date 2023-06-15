import React from 'react';
import createReactClass from 'create-react-class';
import { Table } from "react-bootstrap";
import DownIcon from '../assets/down.png';

var AccountTable = createReactClass({
  getInitialState: function() {
    return {
      accounts: [
        {
          id: 1,
          memberName: 'Jack',
          accountType: 'basic_auth_user',
          posixGroup: 'hweng',
          readOnly: true,
          requestedBy: 'xuanw',
          requestedOn: '2012-12-18',
          odinMaterialSet: 'Ok'
        },
        {
          id: 2,
          memberName: 'Bob',
          accountType: 'basic_auth_user',
          posixGroup: 'hweng',
          readOnly: false,
          requestedBy: 'xuanw',
          requestedOn: '2012-12-18',
          odinMaterialSet: 'Ok'
        }
      ]
    };
  },

  render: function() {
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>
                <input type={'checkbox'}/>
              </th>
              <th>
                Member Name
                <img src={DownIcon} width={15}
                  style={{
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                />
              </th>
              <th>
                Account Type
                <img src={DownIcon} width={15}
                  style={{
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                />
              </th>
              <th>
                POSIX Group
                <img src={DownIcon} width={15}
                  style={{
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                />
              </th>
              <th>
                Read-only
                <img src={DownIcon} width={15}
                  style={{
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                />
              </th>
              <th>
                Requested By
                <img src={DownIcon} width={15}
                  style={{
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                />
              </th>
              <th>
                Requested On
                <img src={DownIcon} width={15}
                  style={{
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                />
              </th>
              <th>
                Odin Material Set
                <img src={DownIcon} width={15}
                  style={{
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map(account => {
              return (
                <tr key={account.id}>
                  <td>
                    <input type={'checkbox'}/>
                  </td>
                  <td>
                    {account.memberName}
                  </td>
                  <td>
                    {account.accountType}
                  </td>
                  <td>
                    {account.posixGroup}
                  </td>
                  <td>
                    {account.readOnly ? 'Yes' : 'No'}
                  </td>
                  <td>
                    {account.requestedBy}
                  </td>
                  <td>
                    {account.requestedOn}
                  </td>
                  <td>
                    {account.odinMaterialSet}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
});

export default AccountTable;
