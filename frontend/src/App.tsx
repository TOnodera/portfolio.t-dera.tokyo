import style from './style.module.scss';
import Header from './components/organizations/Header';
import Timeline from './components/organizations/Timeline';
import { Box, Divider, Typography } from '@mui/material';

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
