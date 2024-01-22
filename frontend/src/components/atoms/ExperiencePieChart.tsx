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
          // ホバーしたときに出るエラーはmui側で対応中とのこと
          // 新しいバージョンがリリースされ次第適応すれば修正されるはず
          // https://github.com/mui/mui-x/issues/11679
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
        },
        ['.MuiChartsTooltip-labelCell.MuiChartsTooltip-cell']: {
          color: '#000',
        },
      }}
    />
  );
}
