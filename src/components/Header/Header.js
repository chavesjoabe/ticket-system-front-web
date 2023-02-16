import { Keyboard } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export const Header = ({ name, role }) => {
  return (
    <Box
      elevation={3}
      backgroundColor="#2F69CC"
      width="100%"
      height="40px"
      borderBottom={3}
      borderColor="#fff"
    >
      <Grid container>
        <Grid item xs={3} display="flex" flexDirection="row">
          <Keyboard
            sx={{ marginTop: "6px", color: "#fff", marginLeft: "15px" }}
          />
          <Typography
            sx={{ marginTop: "3px", marginLeft: "10px" }}
            color="#fff"
            variant='h6'
            fontWeight={600}
          >
            Help
          </Typography>
          <Typography
            sx={{
              WebkitTextStroke: "0.7px #fff",
              marginTop: "3px",
              color: "#2F69CC",
            }}
            variant='h6'
            fontWeight={600}
          >
            Desk
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" color="#fff">
            {name} - {role}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
