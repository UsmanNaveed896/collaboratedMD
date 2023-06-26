import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moment from 'moment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../App.css'
const localizer = momentLocalizer(moment);
const MyCalendar = () => {
  const [date, setDate] = useState(moment().startOf('week'));
  const handlePrevWeek = () => {
    setDate(prevDate => prevDate.clone().subtract(7, 'days'));
  };
  const handleNextWeek = () => {
    setDate(prevDate => prevDate.clone().add(7, 'days'));
  };
  const handleToday = () => {
    setDate(moment().startOf('week'));
  };
  const CustomToolbar = toolbarProps => {
    const { label,date } = toolbarProps;
   const Year=moment(date).format('YYYY')
    const formattedDate = moment(label).format('MMMM D, YYYY');
    console.log(formattedDate, "dateformatted")
    return (
      <div className="custom-toolbar">
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px' }}>
          <Box>
          <Button onClick={handleToday} variant="contained"
            sx={{
              backgroundColor: '#636363',
              marginLeft: '14px',
            padding:'7px 3px',
            fontSize:'12px',
            textTransform:'none'
            }}>
            Week
          </Button>
          </Box>
          <div style={{ display: 'flex', gap: '16px' }}>
            <KeyboardBackspaceIcon onClick={handlePrevWeek} sx={{
              backgroundColor: '#0976be',
              padding: '5px',
              paddingLeft: '8px',
              color: 'white',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
              cursor: 'pointer',
              boxSizing: 'content-box'

            }} />
            <Typography marginTop={'7px'} color="white" sx={{
               fontSize: {
                md: '16px', 
                sm: '12px',  
                xs: '12px'  
              }
            
            }}>Week of {label}, {Year}</Typography>
            <ArrowForwardIcon onClick={handleNextWeek} sx={{
                backgroundColor: '#0976be',
                padding: '5px',
                color: 'white',
                paddingRight: '8px',
                borderTopRightRadius: '5px',
                borderBottomRightRadius: '5px',
                cursor: 'pointer',
                boxSizing: 'content-box',
                padding:{
                  md:'5px',
                  sm:'3px',
                  xs:'3px'
                }      
            }} />
          </div>
          <div>
            <Box>
            <Button onClick={handleToday} variant="contained"
              sx={{
                backgroundColor: '#636363',
                marginLeft: '14px',
                textTransform:'none',
             
              }}>
              Day
            </Button>
            
          
            <Button onClick={() => console.log('Week')} variant="contained"
              sx={{
                backgroundColor: '#636363',
                marginLeft: '14px',
                textTransform:'none',
                padding:'7px 3px',
                fontSize:'12px',
              }}>
              Week
            </Button>
            </Box>
         </div>
           

        </div>
      </div>
    );
  };
  const timeSlot = 15; // Time slot interval in minutes
  const minTime = moment().startOf('day').toDate();
  const maxTime = moment().endOf('day').toDate();
  const timeSlotOptions = [];
  let currentTime = moment(minTime);
  while (currentTime <= moment(maxTime)) {
    timeSlotOptions.push(currentTime.toDate());
    currentTime.add(timeSlot, 'minutes');
  }
  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultView="week"
        date={date.toDate()}
        style={{ height:'700px',backgroundColor: '#222222', color: 'white', }}
        components={{
          toolbar: CustomToolbar,
        }}
        min={minTime}
        max={maxTime}
        timeslots={1}
        step={timeSlot}
        timeslot={timeSlotOptions.length > 0 ? timeSlotOptions : 1}
      />
    </div>
  );
};

export default MyCalendar;