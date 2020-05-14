import React from "react";
import PropTypes from "prop-types";
import { enUS } from "date-fns/locale";
import { DateRangePicker, START_DATE, END_DATE } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import styled from "styled-components";

import Input from "./Input";
import Label from "./Label";
import InputWrapper from "./InputWrapper";

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
          <InputWrapper>
            <Label htmlFor="start-date">Check-in date</Label>
            <DateInput
              className={"input" + (focus === START_DATE ? " -focused" : "")}
              {...startDateInputProps}
              name="start-date"
              placeholder=""
            />
          </InputWrapper>
          <RangeArrow />
          <InputWrapper>
            <Label htmlFor="end-date">Check-out date</Label>
            <DateInput
              className={"input" + (focus === END_DATE ? " -focused" : "")}
              {...endDateInputProps}
              name="end-date"
              placeholder=""
            />
          </InputWrapper>
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
  }
`;

const RangeArrow = styled.span`
  display: inline-block;
  position: relative;
  width: 36px;
  top: 1rem;

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
