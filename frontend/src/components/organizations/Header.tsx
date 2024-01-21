import { Box, Grid, Typography } from '@mui/material';
import style from '../../style.module.scss';

export default function Header() {
  return (
    <>
      <Grid
        container
        xs={12}
        sx={{ justifyContent: 'center' }}
        className={style.header}
      >
        <Grid xs={12} sx={{ textAlign: 'center' }}>
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
