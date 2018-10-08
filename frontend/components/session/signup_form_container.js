import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session';

const mapStateToProps = ({ errors: { session }}) => ({
  errors: session,
  formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
