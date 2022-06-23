import React from "react";
import PropTypes from "prop-types";
import dateFormat from "dateformat";
import styled from "styled-components";

const baseURL = "https://lineleader.io/stay";
const urlDateFormat = "UTC:yyyy-mm-dd";

class AvailabilityLink extends React.Component {
  constructor() {
    super();
    this.goatTrack = this.goatTrack.bind(this);
  }

  goatTrack() {
    if (typeof window.goatcounter === "undefined") {
      return;
    }

    const { endDate, startDate, resort, roomType } = this.props;
    window.goatcounter.count({
      path: "more-details-clicked",
      referrer: `${resort} - ${roomType}: ${startDate} - ${endDate}`,
      event: true,
    });
  }

  render() {
    return (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={availabilityURL(this.props)}
        onClick={this.goatTrack}
        style={{ fontSize: "0.9rem" }}
      >
        {this.props.children}
      </Link>
    );
  }
}

AvailabilityLink.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  resort: PropTypes.string,
  roomType: PropTypes.string,
  viewType: PropTypes.string,
  children: PropTypes.any,
};

export default AvailabilityLink;

const availabilityURL = p => {
  const params = [
    `startDate=${formatURLDate(p.startDate)}`,
    `endDate=${formatURLDate(p.endDate)}`,
    `resort=${ourAbbrev[p.resort]}`,
    `roomType=${p.roomType}`,
    `viewType=${p.viewType}`,
  ].join("&");
  return `${baseURL}?${params}`;
};

const formatURLDate = date =>
  encodeURIComponent(dateFormat(date, urlDateFormat));

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 10rem;

  margin-top: 0.5rem;
  padding: 0.35rem 0.25rem 0.25rem;
  border-radius: 0.5rem;
  border: none;

  font-size: 1rem;
  text-decoration: none;

  background: darkslateblue;
  color: floralwhite;
  box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.25s ease-in-out;

  @media (max-width: 768px) {
    height: 3rem;
    width: 100%;
  }

  &:hover {
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.5);
    color: khaki;
  }
`;

const ourAbbrev = {
  "Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii": "AUL",
  "Bay Lake Tower at Disney's Contemporary Resort": "BLT",
  "Boulder Ridge Villas at Disney's Wilderness Lodge": "VBR",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge": "CCR",
  "Disney's Animal Kingdom Villas - Jambo House": "AKV",
  "Disney's Animal Kingdom Villas - Kidani Village": "AKV2",
  "Disney's Beach Club Villas": "BCV",
  "Disney's BoardWalk Villas": "BWV",
  "Disney's Hilton Head Island Resort": "HHI",
  "Disney's Old Key West Resort": "OKW",
  "Disney's Polynesian Villas & Bungalows": "POLY",
  "Disney's Riviera Resort": "RIV",
  "Disney's Saratoga Springs Resort & Spa": "SSR",
  "Disney's Vero Beach Resort": "VBR",
  "The Villas at Disney's Grand Californian Hotel & Spa": "VGC",
  "The Villas at Disney's Grand Floridian Resort & Spa": "VGF",
};
