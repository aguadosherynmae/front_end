import React from 'react';
import { Card, CardContent, Grid, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import ForumIcon from '@mui/icons-material/Forum';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import "../styles/style.css";
import "../styles/dashboard.css";

const fullYearData = [
  { month: 'Jan', passenger: 200 },
  { month: 'Feb', passenger: 300 },
  { month: 'Mar', passenger: 700 },
  { month: 'Apr', passenger: 100 },
  { month: 'May', passenger: 200 },
  { month: 'Jun', passenger: 600 },
  { month: 'Jul', passenger: 500 },
  { month: 'Aug', passenger: 900 },
  { month: 'Sep', passenger: 1000 },
  { month: 'Oct', passenger: 600 },
  { month: 'Nov', passenger: 100 },
  { month: 'Dec', passenger: 300 },
];

// Function to reorder months starting from current month
const getOrderedMonthsData = () => {
  const currentMonthIndex = 3; 
  const orderedData = [
    ...fullYearData.slice(currentMonthIndex), 
    ...fullYearData.slice(0, currentMonthIndex), 
  ];
  return orderedData;
};

const chartData = getOrderedMonthsData();

const valueFormatter = (value) => `${value}`;

const chartSetting = {
  yAxis: [{ label: 'Total Number' }],
  series: [
    { dataKey: 'passenger', label: 'Number of Passengers', valueFormatter },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};
const getTodayDate = () => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const year = today.getFullYear();
  return `Today | ${month}-${day}-${year}`;
};

function DashboardPage() {
  return (
    <>
    <p className='title_page'>Dashboard</p>
      <Grid
        container
        spacing={3}
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
          paddingBottom: 3,
          justifyContent: 'center',
        }}
      >
        <Grid size={{ lg: 4, xl: 4 }}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <p className='date'>{getTodayDate()}</p>
                  <p className='total_num'>15</p>
                  <p className='desc'>Number of Violators</p>
                </Box>
                <WarningIcon sx={{ color: 'red', fontSize: 100 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ lg: 4, xl: 4 }}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <p className='date'>{getTodayDate()}</p>
                  <p className='total_num'>35</p>
                  <p className='desc'>On Duty Driver</p>
                </Box>
                <DirectionsBusFilledIcon sx={{ color: 'blue', fontSize: 100 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ lg: 4, xl: 4 }}>
          <Card sx={{ textAlign: 'center', height: '100%' }}>
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <p className='date'>{getTodayDate()}</p>
                  <p className='total_num'>5</p>
                  <p className='desc'>Number of Reports</p>
                </Box>
                <ForumIcon sx={{ color: 'green', fontSize: 100 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <p className='header_title'>Passenger Statistics</p>
      <Box sx={{ padding: 2, paddingTop: 1 }}>
        <div style={{ width: '100%' }}>
          <BarChart
            dataset={chartData}
            xAxis={[
              {
                scaleType: 'band',
                dataKey: 'month',
                tickPlacement: 'start',
                tickLabelPlacement: 'middle',
              },
            ]}
            {...chartSetting}
          />
        </div>
      </Box>
    </>
  );
}

export default DashboardPage;