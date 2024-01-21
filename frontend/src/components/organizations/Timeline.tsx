import {
  Timeline as MuiTimeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Typography } from '@mui/material';
import AssignedProjects from '../molecules/AssignedProjects';
import AssignedProject from '../molecules/AssignedProject';
import LeftlinedHeading from '../atoms/LeftlineText';

export default function Timeline() {
  return (
    <>
      <MuiTimeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0,
          },
          padding: 0,
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>2017</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">都内のWeb製作会社に入社</Typography>
            <LeftlinedHeading variant="subtitle1">概要</LeftlinedHeading>
            <Typography variant="body1">
              人数10名ほどの小規模の会社だったので要件定義から開発まで様々な仕事に携わらせていただきました。
            </Typography>
            <Typography variant="body1">
              インフラエンジニアの方がいらっしゃったのでサーバーの準備などはその方にしていただいて、それ以降のテーブル設計、プログラム設計と開発を主に担当しました。
            </Typography>
            <LeftlinedHeading
              variant="subtitle1"
              sx={{ marginTop: 1, marginBottom: 1 }}
            >
              主に利用した技術
            </LeftlinedHeading>
            <Typography variant="body1">
              PHP/MySql/Apache/JQuery/VanillaJs
            </Typography>
            <AssignedProjects>
              <AssignedProject title="ボランティア人材管理システム">
                行政関連の案件で観光ボランティアとして働いてくれる方の情報を管理するシステムを構築しました。
                テーブル設計・サーバーサイドプログラム・管理画面開発を担当しました。
              </AssignedProject>
              <AssignedProject title="ブログシステム開発">
                行政関連案件で観光ボランティアの方が地域の観光スポットや歴史を紹介するブログサイトの構築を行いました。
                観光ボランティアの方がブログを執筆、観光協会の方が内容をチェックして問題なければ投稿する。
                修正したほうが良い内容が含まれる場合はコメントをつけて差し戻しするようなシステムです。時間予約での投稿なども実装しました。
                テーブル設計・サーバーサイドプログラム・管理画面開発を担当しました。
              </AssignedProject>
              <AssignedProject title="フォトライブラリ・写真貸出システム">
                観光協会が保有している画像をサムネイルサイズで公開しているサイトで、申請を行い承認されるとフルサイズの画像がダウンロードできるシステムの構築を行いました。
                テーブル設計・サーバーサイドプログラム・管理画面開発を担当しました。
              </AssignedProject>
            </AssignedProjects>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent>2021</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">SES企業に転職</Typography>
            <LeftlinedHeading variant="subtitle1" sx={{ marginBottom: 1 }}>
              概要
            </LeftlinedHeading>
            <Typography variant="body1">
              SES企業に転職して主に詳細設計以降の開発を行いました。機能追加や保守・不具合対応等を行いました。
              現場により開発の仕方も考え方も違い勉強になることも多かったです。
            </Typography>
            <LeftlinedHeading
              variant="subtitle1"
              sx={{ marginTop: 1, marginBottom: 1 }}
            >
              主に利用した技術
            </LeftlinedHeading>
            <Typography variant="body1">
              PHP/Laravel/Python/Typescript/React/AWS/Git/MySql/PostgreSql
            </Typography>

            <AssignedProjects>
              <AssignedProject title="教育関連システムのID統合に伴うシステム改修業務">
                教育関連の企業の運用している複数のシステムで、同じユーザーでも別のＩＤを利用していたのでそれを統合してユーザーエクスペリエンスを向上していこうという趣旨で始まったプロジェクトに参画しました。
                システム構成として大まかにフロントエンド・サーバーサイド・APIサーバーと分かれていて、その中でAWS
                Lamda(sam)を利用したAPIサーバーの開発を主に担当しました。
                開発言語はpythonで、定義された要件に基づいてAPIを開発しました。ORMとしてはSQLArchemyを利用しました。
                初めて担当した部分としては課金処理バッチの開発を行い、オンライン処理とは違う難しさやログの出し方など難しさを感じながらも完成させることができました。
                また管理画面はReact(Typescript)で実装されていてそちらの改修作業も担当しました。
              </AssignedProject>
              <AssignedProject title="証券関連システムの保守・新規機能追加">
                こちらのシステムは10年以上前から運用されていてテーブルもかなり沢山あり、毎日多くのバッチ処理が走る複雑なものでありながら機能追加も頻繁に行われているものでした。
                機能追加の際は影響範囲の調査や実装について知っている人がいればお時間をいただいてお話を聞きながら設計を行い実装作業を行っていきました。実際にはすでにプログラムの仕様を知っている方が退職していたりして、
                今までとは違う難しさがありました。SQLのチューニングなどは知識としてはありましたが今までやったことがなかったので、そういった面でも勉強になりました。
                こちらでは試験的にAWSコードパイプラインを利用した自動デプロイ環境の構築やテスト環境の整備なども行いました。いろいろな条件から実際に利用することにはなりませんでしたが、新しいことに触れさせていただき感謝しています。
              </AssignedProject>
            </AssignedProjects>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>2024</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">現在転職活動中</Typography>
          </TimelineContent>
        </TimelineItem>
      </MuiTimeline>
    </>
  );
}
