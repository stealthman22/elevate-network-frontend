import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Force return by wrapping expression in ()
//  Check if alerts array is null then check if it is greater that 0
//  if both passes then map (shortcircuit )
const Alert = ({ alerts }) => alerts !== null
 && alerts.length > 0
 && alerts.map((alert) => (
   <p
     key={alert.id}
     className={`alert alert-${alert.alertType}`}
   >
     {alert.msg}
   </p>
 ));

Alert.propTypes = {
  alert: PropTypes.shape([]),
};
// map redux state so we have access to it
const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alert);
