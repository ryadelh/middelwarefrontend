import {
  Box,
  Button,
  Container,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import appActions from "../../store/actions";
import AccidentSeverity from "./AccidentSeverity";
import AccidentVehicules from "./AccidentVehicules";
import AccidentCasualities from "./AccidentCasualities";

const AddAccident = () => {
  const accidentDetails = useSelector(
    (state) => state.AppState.accidentDetails
  );
  const { id, severity, victims, injured, dead, casualities, vehicules } =
    accidentDetails;

  const selectedAccident = useSelector(
    (state) => state.AppState.accidentDetails
  );

  const dispatch = useDispatch();
  const URL = `${process.env.REACT_APP_SERVER}/accident`;
  const handleSubmitAccidentDetails = () => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accidentDetails),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch({
          type: appActions.SET_ACCIDENT_DETAILS,
          payload: resData,
        });
      });
  };
  return (
    <Box sx={{ m: 5 }}>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 3,
          textAlign: "left",
          fontWeight: "bold",
        }}
      >
        Accident Identifiant: {selectedAccident.id}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
        <Box>
          <AccidentSeverity
            value={accidentDetails.severity}
            onChange={(e) => {
              dispatch({
                type: appActions.SET_ACCIDENT_DETAILS,
                payload: { ...accidentDetails, severity: e.target.value },
              });
            }}
            variant="outlined"
          />
        </Box>
        <Box sx={{}}>
          <TextField
            value={injured}
            label="Injured"
            onChange={(e) => {
              dispatch({
                type: appActions.SET_ACCIDENT_DETAILS,
                payload: { ...accidentDetails, injured: e.target.value },
              });
            }}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box>
          <TextField
            label="Dead"
            value={dead}
            onChange={(e) => {
              dispatch({
                type: appActions.SET_ACCIDENT_DETAILS,
                payload: { ...accidentDetails, dead: e.target.value },
              });
            }}
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box>
          <AccidentCasualities />
        </Box>

        <Box>
          <AccidentVehicules />
        </Box>
      </Box>
      <Button
        sx={{ mt: 5 }}
        size="large"
        variant="contained"
        onClick={handleSubmitAccidentDetails}
        fullWidth
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddAccident;
