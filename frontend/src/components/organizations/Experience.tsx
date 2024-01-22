import { Box, Grid, Typography } from '@mui/material';
import LeftlinedHeading from '../atoms/LeftlineText';
import ExperiencePieChart from '../atoms/ExperiencePieChart';

export default function Experience() {
  return (
    <Box sx={{ marginTop: -2, marginBottom: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        業務の中で経験してきた技術について
      </Typography>
      <LeftlinedHeading variant="subtitle1">フロントエンド</LeftlinedHeading>
      <Typography variant="body1">
        フロントエンドについてはデザインとしてはすでに組まれているものにJSで動きをつけたり、バックエンドとの疎通を行ってデータの取得を行う部分の実装を行うことが多かったです。
        一からデザインを組むということはあまりありませんでしたが、簡単な画面程度であれば作れると思います。このポートフォリオサイトのデザインもReactのMUIを使用しつつ細かい部分は自分でカスタムしています。
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: 3 }}
      >
        <Grid xs={12} md={4} item>
          <Typography
            maxWidth={1}
            sx={{ margin: '0 auto', textAlign: 'center' }}
            variant="subtitle2"
          >
            利用割合
          </Typography>

          <Box style={{ margin: '0.5rem auto', maxWidth: 300 }}>
            <ExperiencePieChart
              colors={['#f3d024', '#0965b1', '#66d7f3', '#4ab989']}
              data={[
                { id: 1, value: 35, label: 'javascript' },
                { id: 2, value: 35, label: 'JQuery' },
                { id: 3, value: 25, label: 'react.js' },
                { id: 4, value: 5, label: 'vue.js' },
              ]}
            />
          </Box>
        </Grid>
      </Grid>
      <LeftlinedHeading variant="subtitle1">バックエンド</LeftlinedHeading>
      <Typography variant="body1">
        バックエンドについては一番使用頻度が多かったのがPHPです。素のPHPでの実装やLaravelを利用したものなどを経験しましたが、フレームワークを利用したある程度実装の秩序が保たれた現場のほうが働きやすいなと感じました。
        別の言語でいうと、pythonでaws/lambdaのAPI開発を行ったりしました。DBについてはPostgreSQL,MySQLの経験があります。ORMを利用する場合や、SQLをそのまま記述する実装パターンなど現場によって違いましたが、基本的な文法について(SELECT,
        UPDATE, JOINなど）は問題ないと思います。
        業務のなかでわからないところがあれば都度調べながら実装してました。
      </Typography>
      <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: 3 }}
        >
          <Grid xs={12} md={4} item>
            <Typography
              maxWidth={1}
              sx={{ margin: '0 auto', textAlign: 'center' }}
              variant="subtitle2"
            >
              利用割合
            </Typography>
            <Box style={{ margin: '0.5rem auto', maxWidth: 300 }}>
              <ExperiencePieChart
                colors={['#7377ad', '#f72c1f', '#009485', '#3da6b7']}
                data={[
                  { id: 1, value: 50, label: 'PHP' },
                  { id: 2, value: 25, label: 'Laravel' },
                  { id: 3, value: 15, label: 'fastapi' },
                  { id: 4, value: 10, label: 'Flask' },
                ]}
              />
            </Box>
          </Grid>
        </Grid>
      </>
      <LeftlinedHeading variant="subtitle1">インフラ</LeftlinedHeading>
      <Typography variant="body1">
        インフラについては殆ど実務経験はありませんが個人的にVPSサーバーを借りてサイトをたてたりしていて、このポートフォリオサイトはVPS上の複数ノード上に構築されたkubernetes上で実行されています。
        また、Udemyのaws講座などを受講して見識を深めています。
        webアプリケーションの実行基盤を一から構築したことはありませんが、検証用のデプロイパイプラインをAWSで構築した経験などはあります。
        まだまだ勉強が必要だと思っています。
      </Typography>
    </Box>
  );
}
