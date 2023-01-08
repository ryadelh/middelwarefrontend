import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
import dateFormat from "dateformat";
import { useDispatch, useSelector } from "react-redux";
import appActions from "../store/actions";

function AccidentDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch({
      type: appActions.SET_SELECTED_DATE,
      payload: {
        start: dateFormat(startDate, "yyyy-mm-dd"),
        end: dateFormat(endDate, "yyyy-mm-dd"),
      },
    });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
      <Box>
        {" "}
        from :
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        to :{" "}
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </Box>
      <Button variant="contained" onClick={onClickHandler}>
        Apply
      </Button>
    </Box>
  );
}

export default AccidentDatePicker;
