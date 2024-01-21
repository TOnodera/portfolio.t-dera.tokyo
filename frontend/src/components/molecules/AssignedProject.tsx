import { Box, Typography } from '@mui/material';
import LeftlinedHeading from '../atoms/LeftlineText';

export default function AssignedProject({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <Box sx={{ padding: 1 }}>
      <LeftlinedHeading variant="subtitle1" sx={{ marginBottom: 1 }}>
        {title}
      </LeftlinedHeading>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}
