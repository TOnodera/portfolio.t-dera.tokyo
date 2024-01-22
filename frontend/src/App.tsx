import style from './style.module.scss';
import Header from './components/organizations/Header';
import Timeline from './components/organizations/Timeline';
import { Box, Divider, Typography } from '@mui/material';
import LeftlinedHeading from './components/atoms/LeftlineText';

function App() {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.main}>
        <Box sx={{ margin: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            自己紹介
          </Typography>
          <Typography variant="body1">
            初めましてT.onoderaと申します。今回転職するにあたって簡単な自己紹介用のポートフォリオサイトを作成しました。
            web系の開発者になってからの経歴を簡単にまとめています。
          </Typography>
        </Box>
        <Divider />
        <Timeline />
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            業務の中で経験してきた技術について
          </Typography>
          <LeftlinedHeading variant="subtitle1">
            フロントエンド
          </LeftlinedHeading>
          <Typography variant="body1">
            フロントエンドについてはデザインとしてはすでに組まれているものに、JSで動きをつけたりバックエンドとの疎通を行ってデータの取得を行う部分の実装を行うことが多かったです。
            一からデザインを組むということはあまりありませんでしたが、簡単な管理画面程度であれば作れると思います。このポートフォリオサイトのデザインもReactのMUIを使用しつつ細かい部分は自分でカスタムしています。
          </Typography>
          <LeftlinedHeading variant="subtitle1">バックエンド</LeftlinedHeading>
          <Typography variant="body1">
            バックエンドについては一番使用頻度が多かったのがPHPです。素のPHPでの実装やLaravelを利用したものなどを経験しましたが、フレームワークを利用したある程度実装の秩序が保たれた現場のほうが働きやすいなと感じました。
            別の言語でいうと、pythonでaws/lambdaのAPI開発を行ったりしました。
          </Typography>
          <LeftlinedHeading variant="subtitle1">インフラ</LeftlinedHeading>
          <Typography variant="body1">
            インフラについては殆ど実務経験はありませんが、個人的にVPSサーバーを借りてサイトをたてたり、Udemyのaws講座を受講して見識を深めています。
            webアプリケーションの実行基盤を一から構築したことはありませんが、検証用のデプロイパイプラインをAWSで構築した経験などはあります。
            まだまだ勉強が必要だと思っています。
          </Typography>
        </Box>
      </main>
      <footer className={style.footer}>
        <Box bgcolor="primary.main" textAlign="center" color="text.secondary">
          &copy; T.onodera 2024
        </Box>
      </footer>
    </div>
  );
}

export default App;
