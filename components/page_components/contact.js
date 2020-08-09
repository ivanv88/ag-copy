import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';


class Map extends Component {
    static defaultProps = {
      center: {
        lat: 44.816824,
        lng: 20.475423
      },
      zoom: 16
    };
    renderMarker = (map, maps) => {
        new maps.Marker({
          map: map,
          position: new maps.LatLng(44.816824, 20.475423),
          label: 'AG Copy'
        });
      };
   
    render() {
      return (
        
        // Important! Always set the container height explicitly
        <div style={{ height: '60vh', width: '100%' }} className="mapWrapper" >
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDV53BcNkANMsot0TovKu9xTzEbdqu5ULk" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.renderMarker(map, maps)}
          >
          </GoogleMapReact>
      <style jsx>{`
        .mapWrapper {
            grid-column: span 2;
        }
      `}</style>
        </div>
      );
    }
  }
   
  export default Map;
