import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';

class Search extends React.Component {

  render() {
    const benches = this.props.benches;
    const fetchBenches = this.props.fetchBenches;
    return (
      <div>
        <BenchMap />
        <BenchIndex benches={benches} fetchBenches={fetchBenches} />
      </div>
    )
  }
}

export default Search;
