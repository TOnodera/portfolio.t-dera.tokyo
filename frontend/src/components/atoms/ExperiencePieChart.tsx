import { PieChart, PieValueType, pieArcLabelClasses } from '@mui/x-charts';

interface Props {
  data: PieValueType[];
  colors: string[];
}

export default function ExperiencePieChart({ data, colors }: Props) {
  return (
    <PieChart
      colors={colors}
      series={[
        {
          data,
          arcLabel: (params) => `${params.value}%` ?? '',
          innerRadius: 20,
          cornerRadius: 5,
          paddingAngle: 2,
        },
      ]}
      skipAnimation={true}
      height={150}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: '#fff',
          fontSize: 14,
        },
      }}
    />
  );
}
