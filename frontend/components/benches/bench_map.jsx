import React from 'react';
import MarkerManager from '../../util/mark_manager';

class BenchMap extends React.Component {

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    if ( this.props.benches ) {
      this.MarkerManager.updateMarkers(this.props.benches);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.benches ) {
      this.MarkerManager.updateMarkers(nextProps.benches);
    }
  }

  render() {
    return (
      <div id="map-container" ref={ map => this.mapNode = map }>

      </div>
    )
  }
}

export default BenchMap;
