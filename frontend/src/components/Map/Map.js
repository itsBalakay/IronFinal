import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = (props: any) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const [center, setCenter] = useState({ lat: 40.68932, lng: -73.98636 });
  const [zoom, setZoom] = useState(11);
  return (
    <>
      <div className="map-contact">
        <h3>Contact Us</h3>
        <h6>
          We look forward to working with you, let us know if you have any
          questions by clicking the <b>Feedback</b> button below the page 🙂
        </h6>
      </div>
      <h3>Our Store Location</h3>
      <h6>
        <a
          href="https://www.google.com/maps/place/Upper+90+Soccer+Brooklyn/@40.7005508,-73.9923454,13z/data=!3m1!5s0x89c25a4da1a25281:0x19f8c9d43aeb9bd8!4m9!1m2!2m1!1ssoccer+jersey!3m5!1s0x0:0xfc1e41ef21aab136!8m2!3d40.6876597!4d-73.9862707!15sCg1zb2NjZXIgamVyc2V5Wg8iDXNvY2NlciBqZXJzZXmSAQxzb2NjZXJfc3RvcmWaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTkpkWFZFTVZWM0VBRQ?hl=en&authuser=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          359 Atlantic Ave, Brooklyn, NY 11217
        </a>{" "}
      </h6>
      <h4>Store Hours</h4>
      <ul style={{ color: `blue`, listStyle: `none` }}>
        <li>Mon - Fri : 9am-10pm</li>
        <li>Sat-Sun : 10am-8pm</li>
      </ul>
      <h4>
        For return and exchange please email us using the following email
        address with your order ID{" "}
      </h4>
      <h6>
        <b>Email:</b> retro@sales.com or blake@retro.com
      </h6>
      <h6>
        <b>Phone:</b> (215)567-7107
      </h6>

      <div
        style={{
          height: "60vh",
          width: "100%",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCmsABNLR7EPYBXTCTOJ3BN7S_unFMwoR4" }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker lat={40.68932} lng={-73.98636} name="My Marker" color="red" />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
