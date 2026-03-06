import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./TiltedCard.css";

const TiltedCard = ({
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "100%",
  imageWidth = "100%",
  rotateAmplitude = 15,
  scaleOnHover = 1.1,
  showTooltip = false,
  showMobileWarning = false,
  overlayContent = null,
  displayOverlayContent = true,
  altText = "",
  imageSrc = "",
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = (y / rect.height) * rotateAmplitude;
    const rotateY = (x / rect.width) * -rotateAmplitude;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <div
      className="tilted-card-container"
      style={{ height: containerHeight, width: containerWidth }}
    >
      <div
        ref={cardRef}
        className="tilted-card-inner"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ height: imageHeight, width: imageWidth }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={altText}
            className="tilted-card-img"
            style={{ height: imageHeight, width: imageWidth }}
          />
        )}
        {displayOverlayContent && (
          <div className="tilted-card-overlay">{overlayContent}</div>
        )}
      </div>
      {showTooltip && <div className="tilted-card-tooltip">{altText}</div>}
      {showMobileWarning && (
        <div className="tilted-card-warning">Tilt effect works best on desktop</div>
      )}
    </div>
  );
};

TiltedCard.propTypes = {
  containerHeight: PropTypes.string,
  containerWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  rotateAmplitude: PropTypes.number,
  scaleOnHover: PropTypes.number,
  showTooltip: PropTypes.bool,
  showMobileWarning: PropTypes.bool,
  overlayContent: PropTypes.node,
  displayOverlayContent: PropTypes.bool,
  altText: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default TiltedCard;
