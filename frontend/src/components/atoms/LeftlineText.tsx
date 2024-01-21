import { Typography, TypographyProps } from '@mui/material';

export default function LeftlinedHeading(props: TypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        ...props?.sx,
        borderLeft: 6,
        borderLeftColor: 'secondary.light',
        paddingLeft: 1,
        marginTop: 1,
        marginBottom: 1,
        borderBottom: 2,
        borderBottomStyle: 'dotted',
        borderBottomColor: 'secondary.light',
      }}
    >
      {props.children}
    </Typography>
  );
}
