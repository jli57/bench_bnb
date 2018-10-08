import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session';

const mapStateToProps = ({ errors: { session } }) => ({
  errors: session,
  formType: 'Log In'
});

const mapDispatchToProps = dispatch => ({
  action: (user) => dispatch( login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
