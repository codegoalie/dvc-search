import React from "react";
import PropTypes from "prop-types";
import dateFormat from "dateformat";

const baseURL = "https://disneyvacationclub.disney.go.com/booking/search/";
// const signInBaseURL = "https://disneyvacationclub.disney.go.com/sign-in/?appRedirect=/booking/search/";
const urlDateFormat = "UTC:mm/dd/yyyy";

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
      path: "checked-availability",
      referrer: `${resort} - ${roomType}: ${startDate} - ${endDate}`,
      event: true,
    });
  }

  render() {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={availabilityURL(this.props)}
        onClick={this.goatTrack}
        style={{ fontSize: "0.9rem" }}
      >
        {this.props.children}
      </a>
    );
  }
}

AvailabilityLink.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  resort: PropTypes.string,
  roomType: PropTypes.string,
  children: PropTypes.any,
};

export default AvailabilityLink;

const availabilityURL = p => {
  const params = [
    "pagePath=",
    `checkInDate=${formatURLDate(p.startDate)}`,
    `checkOutDate=${formatURLDate(p.endDate)}`,
    `resorts=${dvcAbbrev[p.resort]}`,
    `roomType=${dvcRoomType[p.roomType]}`,
    "accessible=off",
  ].join("&");
  return `${baseURL}?${params}`;
};

const formatURLDate = date =>
  encodeURIComponent(dateFormat(date, urlDateFormat));

const dvcAbbrev = {
  "Aulani, Disney Vacation Club Villas, Ko Olina, Hawaii": "AULV",
  "Bay Lake Tower at Disney's Contemporary Resort": "BLT",
  "Boulder Ridge Villas at Disney's Wilderness Lodge": "VWL",
  "Copper Creek Villas & Cabins at Disney's Wilderness Lodge": "WCC",
  "Disney's Animal Kingdom Villas": "AKV,AKV2",
  "Disney's Beach Club Villas": "BCV",
  "Disney's BoardWalk Villas": "BWALK",
  "Disney's Hilton Head Island Resort": "HILTN",
  "Disney's Old Key West Resort": "CLUB",
  "Disney's Polynesian Villas & Bungalows": "POLYV",
  "Disney's Riviera Resort": "RVA",
  "Disney's Saratoga Springs Resort & Spa": "SSR",
  "Disney's Vero Beach Resort": "VERO",
  "The Villas at Disney's Grand Californian Hotel & Spa": "GCAL",
  "The Villas at Disney's Grand Floridian Resort & Spa": "VGF",
};

const dvcRoomType = {
  "Deluxe Inn Room Ocean View": "deluxe-studio",
  "Deluxe Inn Room Standard View": "deluxe-studio",
  "Deluxe Studio": "deluxe-studio",
  "Hotel Room": "deluxe-studio",
  "One-Bedroom Villa": "one-bedroom",
  "Three-Bedroom Beach Cottage": "three-bedroom",
  "Three-Bedroom Grand Villa": "three-bedroom",
  "Three-Bedroom Treehouse Villa": "three-bedroom",
  "Tower Studio": "deluxe-studio",
  "Two-Bedroom Bungalow": "two-bedroom",
  "Two-Bedroom Cabin": "two-bedroom",
  "Two-Bedroom Villa": "two-bedroom",
};
