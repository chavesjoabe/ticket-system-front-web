import { Keyboard } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export const Header = ({ name, role, email }) => {
  return (
    <Box
      backgroundColor="#2F69CC"
      width="100%"
      height="40px"
      borderColor="#fff"
      padding={1}
    >
      <Grid container>
        <Grid item xs={2} display="flex" flexDirection="row">
          <Keyboard sx={{ color: "#fff", marginLeft: "15px", marginTop: '4px' }} />
          <Typography
            sx={{ marginLeft: "10px" }}
            color="#fff"
            variant="h6"
            fontWeight={600}
          >
            Help
          </Typography>
          <Typography
            sx={{
              WebkitTextStroke: "0.7px #fff",
              color: "#2F69CC",
            }}
            variant="h6"
            fontWeight={600}
          >
            Desk
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            width="100%"
            borderRadius="15px"
            padding='1px'
            sx={{ backgroundColor: "#fff" }}
          >
            <Grid container>
              <Grid textAlign='center' xs={4} borderRight={1} borderColor="#ccc">
                <Typography fontSize="10px" fontWeight={600} >
                  NAME
                </Typography>
                <Typography fontSize="10px" color="text.secondary">
                  {name}
                </Typography>
              </Grid>
              <Grid textAlign='center' xs={4} borderRight={1} borderColor="#ccc">
                <Typography fontSize="10px" fontWeight={600} >
                 TYPE 
                </Typography>
                <Typography fontSize="10px" color="text.secondary">
                  {role}
                </Typography>
              </Grid>
              <Grid textAlign='center' xs={4} borderColor="#ccc">
                <Typography fontSize="10px" fontWeight={600} >
                 EMAIL 
                </Typography>
                <Typography fontSize="10px" color="text.secondary">
                  {email}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
