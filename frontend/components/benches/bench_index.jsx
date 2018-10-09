import React from 'react';

class BenchIndex extends React.Component {

  componentDidMount() {
    const filters = google.map.getBounds();
    this.props.fetchBenches(filters);
  }

  render() {
    return (
      <ul>
        { this.props.benches.map( bench => <li key={bench.id}>{bench.description}</li> ) }
      </ul>
    )
  }
}

export default BenchIndex;
