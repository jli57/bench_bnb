import { connect } from 'react-redux';
// import BenchIndex from './bench_index';
import { fetchBenches } from '../../actions/bench_actions';
import Search from './search';

const mapStateToProps = ({ entities: { benches }}) => ({
  benches: Object.values(benches)
})

const mapDispatchToProps = dispatch => ({
  fetchBenches: (filters) => dispatch( fetchBenches(filters) )
})

export default connect( mapStateToProps, mapDispatchToProps )(Search);
