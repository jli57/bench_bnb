export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach( (bench) => {
      if ( this.markers[bench.id] === undefined ) {
        this.markers[bench.id] = new google.maps.Marker({
          position: new google.maps.LatLng(bench.lat, bench.lng),
          map: this.map,
          title: bench.description
        });
      }
    });
  }

  createMarkerFromBench(bench) {
    
  }

}
