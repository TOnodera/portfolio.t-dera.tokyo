import { Box, Typography } from '@mui/material';
import LeftlinedHeading from '../atoms/LeftlineText';
import design from '../../assets/design.png';

export default function AboutSite() {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        このサイトについて
      </Typography>
      <Typography variant="body1">
        このサイトは今までの職務経歴を簡単に紹介したものですが、折角作るのであれば興味を持っていた技術を使ってみたいと思いkubernetesを利用してCI/CD環境を構築しました。
        開発環境はvscodeのリモートコンテナを利用してDocker環境で開発できます。Dockerfileのほかvscodeの設定ファイルもコードで共有できるのでgit管理すれば例えばチーム開発で全員で簡単に設定を共有できます。
        また、githubactionsのwebhookを利用してmainブランチにpushするとDockerのビルドが開始されます。
        この段階でDockerイメージのビルド、脆弱性検査が行われます。そしてkubernetesのマニフェストを管理するプライベートリポジトリにプルリクエストを作成してCIが完了します。
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        kubernetesのマニフェストを管理するリポジトリをArgoCDというCDツールで監視していてプルリクエストをマージすることにより変更を検知して、自動的にサイトが更新されます。
        文章で書くとややこしいですが、一度構築してしまえばかなり快適に開発できるなと今回の経験を通して感じました。監視にはprometheusを利用してメトリクスの収集を行い、grafanaでデータの可視化を行っています。
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 1 }}>
        今回のkubernetes環境構築では今まで利用経験のなかったansibleを利用して環境構築をできるだけ自動化しています。kubernetesの環境構築は初めてで試行錯誤しながらの挑戦だったので自動化によりやり直しがしやすくなり作業効率が上がりました。
      </Typography>

      <LeftlinedHeading sx={{ marginBottom: 1 }}>構成図</LeftlinedHeading>
      <Typography variant="body1">
        システムの構成図は以下のようになっていてます。ちゃんと書けてるか怪しいですが大枠はあっているはずです。
      </Typography>
      <Box>
        <img src={design} style={{ maxWidth: '100%', padding: '2rem' }} />
      </Box>
    </Box>
  );
}
