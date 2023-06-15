import {Button, Panel, DropdownButton, MenuItem, FormControl} from 'react-bootstrap';
import {useState} from "react";
export default function ManageAccount() {

  const [accountTypes, setAccountTypes] = useState(['type1', 'type2', 'type3']);
  const [accountNames, setAccountNames] = useState(['name1', 'name2', 'name3']);
  const [odinMaterialSet, setOdinMaterialSet] = useState('');
  const [posixGroups, setPosixGroups] = useState(['group1', 'group2', 'group3']);

  return (
    <div style={{marginTop: '20px'}}>
      <Panel>
        <Panel.Heading>
          <h4>
            Create a new account
          </h4>
        </Panel.Heading>
        <Panel.Body>
          <div>
            <h5 style={{fontWeight: 'bold', marginBottom: '0px'}}>
              Account Type
              <small>
                <Button href={'http://xx.com'} bsStyle={'link'}>Info</Button>
              </small>
            </h5>
            <p style={{color: 'grey', marginTop: '0px'}}>
              Account type, basic auth or IAM user (SigV4).
            </p>
            <DropdownButton
              bsSize={''}
              title={"Choose an account type"}
            >
              {accountTypes.map(type => {
                return (
                  <MenuItem eventKey={type} key={type}>
                    {type}
                  </MenuItem>
                )
              })}
            </DropdownButton>
          </div>


          <div>
            <h5 style={{fontWeight: 'bold', marginBottom: '0px'}}>
              Account name
              <small>
                <Button href={'http://xx.com'} bsStyle={'link'}>Info</Button>
              </small>
            </h5>
            <p style={{color: 'grey', marginTop: '0px'}}>
              Your account will act as a member of this POSIX group for the purposes of our authorization checks. f the Read-only flag is disabledthis account will be able to repurpose or swap hosts under hostclasses that this group is listed as an Operator of.
            </p>
            <DropdownButton
              bsSize={''}
              title={accountNames[0] || ''}
            >
              {accountNames.map(name => {
                return (
                  <MenuItem eventKey={name} key={name}>
                    {name}
                  </MenuItem>
                )
              })}
            </DropdownButton>
          </div>


          <div>
            <h5 style={{fontWeight: 'bold', marginBottom: '0px'}}>
              Odin material setinfo
              <small>
                <Button href={'http://xx.com'} bsStyle={'link'}>Info</Button>
              </small>
            </h5>
            <p style={{color: 'grey', marginTop: '0px'}}>
              We use the Odin material set to validate your account credentials at runtime..
            </p>
            <FormControl
              value={odinMaterialSet}
              onChange={e => {
                setOdinMaterialSet(e.target.value);
              }}
              type="text"/>
          </div>



          <div>
            <h5 style={{fontWeight: 'bold', marginBottom: '0px'}}>
              Posix qroup
              <small>
                <Button href={'http://xx.com'} bsStyle={'link'}>Info</Button>
              </small>
            </h5>
            <p style={{color: 'grey', marginTop: '0px'}}>
              Your account will act as a member of this PosIX group for the purposes of our authorization checks.If the Read-only flag is disabledthis account will be able to repurpose or swap hosts under hostclasses that this group is listed as an Operator of.
            </p>
            <DropdownButton
              bsSize={''}
              title={'Choose and posix group'}
            >
              {posixGroups.map(group => {
                return (
                  <MenuItem eventKey={group} key={group}>
                    {group}
                  </MenuItem>
                )
              })}
            </DropdownButton>
          </div>

        </Panel.Body>
      </Panel>
    </div>
  )
}