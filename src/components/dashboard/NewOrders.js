import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import {white, purple600, purple500} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {typography} from 'material-ui/styles';
import {connect} from 'react-redux';
import store from '../../Store.js';
import * as Actions from '../../Actions.js';

const electron = window.require('electron');
const ipcRenderer = electron.ipcRenderer;

ipcRenderer.on('action', (event, message) => {
  store.dispatch(Actions.refreshdata('NewOrders', parseInt(message)));
})

const NewOrders = ({value}) => {

  const styles = {
    paper: {
      backgroundColor: purple500,
      height: 150
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: purple600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>New Orders</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={value}>
            <CartesianGrid vertical={false} />
            <XAxis />
            <YAxis domain={['auto', 'auto']}/>
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

NewOrders.propTypes = {
  value: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  let newArray = state[ownProps.caption]["value"].slice();
  return {
    value: newArray
  }
}

export default connect(mapStateToProps)(NewOrders);
