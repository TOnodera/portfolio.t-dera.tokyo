import { Box, Typography } from '@mui/material';

export default function Introduction() {
  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        自己紹介
      </Typography>
      <Typography variant="body1">
        初めましてT.onoderaと申します。今回転職するにあたって簡単な自己紹介用のポートフォリオサイトを作成しました。
        web系の開発者になってからの経歴を簡単にまとめています。
      </Typography>
    </Box>
  );
}
