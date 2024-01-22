import { Box, Grid, Typography } from '@mui/material';

export default function Header() {
  return (
    <>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid xs={12} sx={{ textAlign: 'center' }} item>
          <Box bgcolor="primary.main">
            <Typography
              variant="h4"
              sx={{
                color: 'text.secondary',
                paddingTop: 1,
              }}
            >
              ポートフォリオサイト
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              このページはT.onoderaのポートフォリオサイトです。
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
