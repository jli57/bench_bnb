import React from 'react';

class BenchIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchBenches();
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
