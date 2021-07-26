import React, { useState, useEffect, useRef } from "react";

export default function Map({ options, onMount, className, onMountProps }) {
  const ref = useRef();
  const [map, setMap] = useState();
  useEffect(() => {
    const onLoad = () =>
      setMap(new window.google.maps.Map(ref.current, options));
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=` +
        process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options]);
  if (map && typeof onMount === `function`) onMount(map, onMountProps);
  return (
    <>
      <h3>Contact Us</h3>
      <p>
        We look forward to working with you, let us know if you have any
        questions by clicking the <b>Feedback</b> button below the page 🙂
      </p>
      <h3>Our Store Location</h3>
      <p>
        1516 N. 5th St., Billy Penn Studios Suite 302, Philadelphia PA 19122{" "}
      </p>
      <h4>Store Hours</h4>
      <ul style={{ color: `blue`, listStyle: `none` }}>
        <li>Mon - Fri : 9am-10pm</li>
        <li>Sat-Sun : 10am-8pm</li>
      </ul>
      <h4>
        For return and exchange please email us using the following email
        address with your order ID{" "}
      </h4>
      <p>
        <b>Email:</b> Ty@replicacreative.com or Alanna@replicacreative.com
      </p>
      <p>
        <b>Phone:</b> (215)567 7107
      </p>

      <div
        style={{ height: `60vh`, margin: `1em 0`, borderRadius: `0.5em` }}
        {...{ ref, className }}
      />
    </>
  );
}
Map.defaultProps = {
  options: {
    center: { lat: 40.712776, lng: -74.005974 },
    zoom: 11,
  },
};
