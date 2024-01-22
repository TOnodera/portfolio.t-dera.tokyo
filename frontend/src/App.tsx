import style from './style.module.scss';
import Header from './components/organizations/Header';
import Timeline from './components/organizations/Timeline';
import { Box, Divider, Grid } from '@mui/material';
import Introduction from './components/organizations/Intoroduction';
import Experience from './components/organizations/Experience';
import Footer from './components/organizations/Footer';
import AboutSite from './components/organizations/AboutSite';

function App() {
  return (
    <Box className={style.layout}>
      <Header className={style.header} />
      <Box className={style.main} sx={{ marginLeft: 2 }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <Introduction />
            <Divider />
            <Timeline />
            <Experience />
            <AboutSite />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
