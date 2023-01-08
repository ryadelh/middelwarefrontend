import "./App.css";
import Map, { Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import AccindentsStatistics from "./components/AccindentsStatistics";
import { Divider, Grid, Paper } from "@mui/material";
import { useState } from "react";
import stationMarkers from "./data/markers";
import AccidentDatePicker from "./components/AccidentDatePicker";
import AddAccident from "./components/addAccident/AddAccident";
import RightSection from "./components/RightSection";
import { useDispatch, useSelector } from "react-redux";
import appActions from "./store/actions";
import StationsMaps from "./components/StationsMaps";
import AccidentVehicules from "./components/addAccident/AccidentVehicules";

const App = () => {
  return (
    <div className="App">
      <Divider sx={{ margin: 4 }} />
      <Grid container s>
        <Grid xs={7} item>
          <StationsMaps />
          {/* <TestMap/> */}
        </Grid>
        <Grid xs={5} item>
          <Paper>
            <RightSection />
          </Paper>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default App;
