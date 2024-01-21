import { Card, CardProps } from '@mui/material';

export default function CustomCard(props: CardProps) {
  return (
    <Card sx={{ ...props.sx, boxShadow: '-2px 2px 5px 1px #ccc' }}>
      {Array.isArray(props.children)
        ? props.children.map((element) => element)
        : props.children}
    </Card>
  );
}
