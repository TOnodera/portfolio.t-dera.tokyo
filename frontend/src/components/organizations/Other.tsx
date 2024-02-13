import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import LeftlinedHeading from '../atoms/LeftlineText';
import mockUpImage from '../../assets/ittopic.png';
import ImageDialog from '../atoms/ImageDialog';
import systemDesignImage from '../../assets/crawler-sys-design.png';
import githubImage from '../../assets/icons8-github-144.png';

export default function Other() {
  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h6" sx={{ marginBottom: 1, marginTop: 1 }}>
        その他最近作ったもの
      </Typography>
      <LeftlinedHeading sx={{ marginBottom: 1 }}>
        技術キャッチアップ用サイト
      </LeftlinedHeading>
      <Box sx={{ marginBottom: 1 }}>
        <Link target="blank" href="https://topics.t-dera.tokyo/">
          https://topics.t-dera.tokyo/
        </Link>
      </Box>
      <Typography variant="body1">
        技術キャッチアップ用のサイトを作成しました。企業が公開しているテックブログをクローリングしてまとめたものです。自分が見るために作っていて、今後はこのシステムに試してみたい新技術を投入してみたいと思っています。
      </Typography>
      <Box sx={{ textAlign: 'center' }}>
        <ImageDialog image={mockUpImage}></ImageDialog>
      </Box>
      <LeftlinedHeading sx={{ marginBottom: 1 }}>システム構成</LeftlinedHeading>
      <Box sx={{ textAlign: 'center' }}>
        <ImageDialog image={systemDesignImage}></ImageDialog>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h6">利用技術</Typography>
          <List>
            <ListItemText>基盤</ListItemText>
            <ListItem>kubernetes + docker</ListItem>
          </List>
          <List>
            <ListItemText>フロント</ListItemText>
            <ListItem>typescript + vue.js + vuetify</ListItem>
            <ListItemText>API</ListItemText>
            <ListItem>
              typescript + postgres + prisma(orm) + express(サーバー)
            </ListItem>
            <ListItemText>クローラ</ListItemText>
            <ListItem>typescript + crawlee</ListItem>
          </List>
        </CardContent>
      </Card>
      <Divider />
      <LeftlinedHeading>Git Hubリポジトリ</LeftlinedHeading>
      <>
        <Grid container>
          <Grid xs={12} sm={6}>
            <div
              onClick={() => {
                window.open('https://github.com/TOnodera/ittopic-crawler');
              }}
            >
              <Card sx={{ cursor: 'pointer', margin: 1 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    TOnodera/ittopic-crawler(クローラ)
                  </Typography>
                  <Divider />
                  <>
                    <Grid container alignItems="center" justifyContent="start">
                      <Grid sx={{ paddingTop: 1 }} xs={2} sm={2} md={1}>
                        <img src={githubImage} width="50px" />
                      </Grid>
                      <Grid sx={{ marginLeft: 1 }}>GitHubでコードを見る。</Grid>
                    </Grid>
                  </>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div
              onClick={() => {
                window.open('https://github.com/TOnodera/ittopic-fontend');
              }}
            >
              <Card sx={{ cursor: 'pointer', margin: 1 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    TOnodera/ittopic-fontend(フロント)
                  </Typography>
                  <Divider />
                  <>
                    <Grid container alignItems="center" justifyContent="start">
                      <Grid sx={{ paddingTop: 1 }} xs={2} sm={2} md={1}>
                        <img src={githubImage} width="50px" />
                      </Grid>
                      <Grid sx={{ marginLeft: 1 }}>GitHubでコードを見る。</Grid>
                    </Grid>
                  </>
                </CardContent>
              </Card>
            </div>
          </Grid>
          <Grid xs={12} sm={6}>
            <div
              onClick={() => {
                window.open(
                  'https://github.com/TOnodera/it-topics-crawler-api-server'
                );
              }}
            >
              <Card sx={{ cursor: 'pointer', margin: 1 }}>
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    TOnodera/it-topics-crawler-api-server(APIサーバー)
                  </Typography>
                  <Divider />
                  <>
                    <Grid container alignItems="center" justifyContent="start">
                      <Grid sx={{ paddingTop: 1 }} xs={2} sm={2} md={1}>
                        <img src={githubImage} width="50px" />
                      </Grid>
                      <Grid sx={{ marginLeft: 1 }}>GitHubでコードを見る。</Grid>
                    </Grid>
                  </>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </>
    </Box>
  );
}
