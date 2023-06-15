import React from 'react';
import createReactClass from 'create-react-class';
import DownIcon from '../assets/down.png';

var Collapse = createReactClass({
  getInitialState: function() {
    return {
      expand: true
    };
  },

  toggleExpand: function() {
    this.setState({expand: !this.state.expand});
  },

  render: function() {
    return (
      <div>
        <h4 onClick={this.toggleExpand} style={{cursor: 'pointer'}}>
          <img
            style={{
              transition: '0.2s',
              transform: `rotate(${ !this.state.expand ? '180deg' : '0deg' })`
            }}
            src={DownIcon} width={15}
          /> {this.props.title}
        </h4>
        <div
          style={{
            overflow: 'hidden',
            transition: '0.2s',
            height: this.state.expand ? 'auto' : '0px'
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Collapse;
