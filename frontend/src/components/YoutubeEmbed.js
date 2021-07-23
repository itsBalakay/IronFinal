import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/KlbRiCYE-OQ`} //'?autoplay=1' use to autoplay
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

    {/* <div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/tJfKi4NBArk`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div> */}
  </div>
);

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };

export default YoutubeEmbed;
