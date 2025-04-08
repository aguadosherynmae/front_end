import { Grid, TextField, InputLabel, MenuItem, Button} from '@mui/material';
import "../styles/style.css";
import "../styles/violation.css";
import HelpIcon from '@mui/icons-material/Help';

function ViolationTypePage() {

  const currencies = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
  ];

  return (
    <>
      <p className='title_page'>Violation Type</p>
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
    </>
  );
};

export default ViolationTypePage;