import { Box } from '@mui/material';
import style from '../../style.module.scss';

export default function Footer() {
  return (
    <Box
      className={style.footer}
      bgcolor="primary.main"
      textAlign="center"
      color="text.secondary"
    >
      &copy; T.onodera 2024
    </Box>
  );
}
