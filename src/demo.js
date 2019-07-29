import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({
  grid: {
    width: "60%"
  }
});

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-08-10T21:11:54")
  );
  const [selectedDateSecond, setSelectedDateSecond] = React.useState(
    new Date("2019-07-10T21:11:54")
  );

  const classes = useStyles();

  function handleDateChange(date) {
    setSelectedDate(date);
    console.log(date);
  }
  function handleDateChangeSecond(date) {
    setSelectedDateSecond(date);
    console.log(date);
  }
  let [daysdiff, setdaysdiff] =  React.useState(
    0
  );
  function diff(){
    daysdiff = ""+ Math.floor(
      Math.abs( 
      ( selectedDate.getTime()   -  selectedDateSecond.getTime() ) 
      ) / (1000 * 60 * 60 * 24)
    );
    console.log("daysgfukdiff",daysdiff);
    setdaysdiff(daysdiff);
  }

  return (
    <div>
      <br/>
      <hr></hr>
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-5 offset-1">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container className={classes.grid} justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="mui-pickers-date"
                  label="Date picker 1"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="mui-pickers-time"
                  label="Time picker 1"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                  ampm={false}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
          <div class="col-5 offset-1">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container className={classes.grid} justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="mui-pickers-date"
                  label="Date picker 2"
                  value={selectedDateSecond}
                  onChange={handleDateChangeSecond}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="mui-pickers-time"
                  label="Time picker 2"
                  value={selectedDateSecond}
                  onChange={handleDateChangeSecond}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                  ampm={false}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>
       
      </div>
      <br/>
      <div class="row justify-content-center align-items-center">
            <button type="button" class="btn btn-primary "
            onClick={x=>
              diff()
              }>
            Difference
            </button>
       </div>
       <br/>
     <div class="row justify-content-center align-items-center">
        <div class="card">
          <div class="card-body">
            <u> Result :</u>  the numbre of days <b> {daysdiff} </b>
          </div>
        </div>
    </div> 
    </div>
  );
}