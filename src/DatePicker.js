import React from "react";
import PropTypes from "prop-types";
import { enUS } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import styled from "styled-components";

import Input from "./Input";

const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      format="MMM d"
      locale={enUS}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className="date-range">
          <DateInput
            className={"input" + (focus === START_DATE ? " -focused" : "")}
            {...startDateInputProps}
            placeholder="Start date"
          />
          <RangeArrow />
          <DateInput
            className={"input" + (focus === END_DATE ? " -focused" : "")}
            {...endDateInputProps}
            placeholder="End date"
          />
        </div>
      )}
    </DateRangePicker>
  );
};

DatePicker.propTypes = {
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired
};

export default DatePicker;

const DateInput = styled(Input)`
  width: 10rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const RangeArrow = styled.span`
  display: inline-block;
  position: relative;
  width: 36px;

  &:before {
    border-right: 2px solid #d3dde6;
    border-top: 2px solid #d3dde6;
    box-sizing: border-box;
    content: "";
    display: block;
    height: 18px;
    left: 50%;
    margin-left: -14px;
    margin-top: -1rem;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 18px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
