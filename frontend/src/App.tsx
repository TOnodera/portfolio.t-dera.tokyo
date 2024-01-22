import style from './style.module.scss';
import Header from './components/organizations/Header';
import Timeline from './components/organizations/Timeline';
import { Box, Divider, Grid } from '@mui/material';
import Introduction from './components/organizations/Intoroduction';
import Experience from './components/organizations/Experience';
import Footer from './components/organizations/Footer';

function App() {
  return (
    <Box className={style.layout}>
      <Header className={style.header} />
      <Box className={style.main}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <Introduction />
            <Divider />
            <Timeline />
            <Experience />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
