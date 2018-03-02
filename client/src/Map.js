import React, { Component } from 'react';
import { Map, TileLayer, Marker, Tooltip,Popup, Circle} from 'react-leaflet';
import axios from 'axios';

  const url = 'https://api.spacexdata.com/v2/launchpads';
  const nasaURL = 'https://data.nasa.gov/resource/gvk9-iz74.json';
  const leafURL = "https://api.mapbox.com/styles/v1/nicknyr/cje7mtk2y6gf92snsydobiahf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmlja255ciIsImEiOiJjajduNGptZWQxZml2MndvNjk4eGtwbDRkIn0.L0aWwfHlFJVGa-WOj7EHaA";

  class Mapbox extends Component {
    constructor(props){
      super(props);
      this.state = {
        latlng: {
        lat: 28.5618571,
        lng: -80.577366,
        },
        spacexData: [],
        nasaData: []
      }
    }

  componentDidMount() {
    axios.get(url)
      .then(res => {
        this.setState({spacexData: res.data})
      })
      .catch(err => {
      console.log('Error retrieving SpaceX data');
    })

    axios.get(nasaURL)
      .then(res => {
        this.setState({nasaData: res.data})
        console.log(this.state.nasaData);
      })
      .catch(err => {
        console.log('Error retrieving NASA data');
      })
  }

  render() {
    const {spacexData} = this.state;
    const {nasaData} = this.state;
    console.log(spacexData);
    console.log(nasaData);

    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={this.state.latlng}
          zoom={4}>
        <TileLayer
          url={leafURL}
          attribution="<attribution>" />

          // Renders SpaceX Facilities on map
          {spacexData.map((elem, i) => {
            return (
              <Marker
                key={i}
                position={{lat:elem.location.latitude, lng: elem.location.longitude}}>
              <Popup>
                <span>
                  <img src={require('./public/spacex-small.png')} width="150"/><br />
                  <h4>{elem.full_name}</h4>
                  <h5>Location:</h5><span>{elem.location.name}, {elem.location.region}</span>
                  <h5>Status:</h5><span>{elem.status}</span><br />
                  <h5>Details:</h5><span>{elem.details}</span><br />
                </span>
                </Popup>
                  <Circle
                    center={{lat:elem.location.latitude, lng: elem.location.longitude}}
                    fillColor="blue"
                    radius={10000}/>
                </Marker>
                )
              })}

              // Renders NASA facilities on map
              {nasaData.map((elem, i) => {
                return (
                  <Marker
                    key={i}
                    position={{lat:elem.location.latitude, lng: elem.location.longitude}}>
                  <Popup>
                    <span>
                      <img src={require('./public/NASA.png')}/><br />
                      <h4>{elem.center}</h4>
                      <h5>Location:</h5><span>{elem.city}, {elem.state}</span><br />
                      <h5>Status:</h5><span>{elem.occupied}</span><br />
                      <h5>Details:</h5><span>{elem.facility}</span>
                    </span>
                  </Popup>
                      <Circle
                        center={{lat:elem.location.latitude, lng: elem.location.longitude}}
                        fillColor="blue"
                        radius={10000}/>
                  </Marker>
                )
              })}
            </Map>
          </div>
        );
      }
    }

    export default Mapbox;