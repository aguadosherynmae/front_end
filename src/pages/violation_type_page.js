import { Grid, TextField, InputLabel, MenuItem, Button, Typography, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import HelpIcon from '@mui/icons-material/Help';
import EditIcon from '@mui/icons-material/Edit';
import "../styles/style.css";
import "../styles/violation.css";

function ViolationTypePage() {
  const currencies = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#6ed2b8',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(action, violation, severity) {
    return { action, violation, severity };
  }

  const rows = [
    createData(<EditIcon sx={{fontSize:15}}/>, 'Overlimit', 2),
  ];

  const riskLevels = [
      { level: 'LOW RISK', points: '10 points of violation' },
      { level: 'MEDIUM RISK', points: '30 points of violation' },
      { level: 'HIGH RISK', points: '50 points of violation' },
  ];

  return (
    <>
      <p className="title_page">Violation Type</p>
      <Grid
      container
      marginLeft={3}
      marginRight={3}
      marginTop={0}
      borderRadius={2}
      sx={{
        border: '1px solid #6ed2b8',
        padding: 2,
      }}
      size={{ lg: 12, xl: 12 }}
    >
      {/* Header */}
      <p className='column_header'>Add a Violation <HelpIcon sx={{ fontSize: 20 }}/></p>
      {/* Form Row */}
      <Grid container item size={{ lg: 12, xl: 12 }} spacing={3} alignItems="center" marginLeft={1.5} marginRight={1.5}>
        {/* Violation Text Field */}
        <Grid item size={{ lg: 5, xl: 5 }}>
          <InputLabel htmlFor="my-input">Violation :</InputLabel>
          <TextField
            id="my-input"
            variant="outlined"
            fullWidth
            size="small" // Makes the field smaller to match the image
          />
        </Grid>

        {/* Severity Select Field */}
        <Grid item size={{ lg: 5, xl: 5 }} marginTop={3}>
          <InputLabel htmlFor="my-input">Severity :</InputLabel>
          <TextField
            id="my-input"
            select
            helperText="3 is the highest violation and 1 is the lowest"
            fullWidth
            size="small" 
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Save Button */}
        <Grid item size={{ lg: 2, xl: 2 }} marginTop={2.1}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#6ed2b8',
              '&:hover': { backgroundColor: '#5abca0' },
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Grid>

      {/* Table */}
      <Grid container margin={3}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> </StyledTableCell>
                <StyledTableCell align='center'>Violations</StyledTableCell>
                <StyledTableCell align='center'>Violation Severity</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.action}>
                  <StyledTableCell>
                    {row.action}
                  </StyledTableCell>
                  <StyledTableCell align='center'>{row.violation}</StyledTableCell>
                  <StyledTableCell align='center'>{row.severity}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
      container
      marginLeft={3}
      marginRight={3}
      marginTop={0}
      borderRadius={2}
      sx={{
        border: '1px solid #6ed2b8',
        padding: 2,
      }}
      size={{ lg: 12, xl: 12 }}
      >
      </Grid>
    </>
  );
}

export default ViolationTypePage;