# オセロ
# 参考ページ
https://zenn.dev/yossuli/articles/e61a4571fbd2a8
https://www.youtube.com/watch?v=c25Ir8-NsvY

# 今後の方針
## ログイン機能
・ログイン
    無し→プレイはできるが、データが残らない
    あり→ログが残るように
・実装方法
    NextAuth + Prismaを検討

## シングル、二人
・シングル、マルチを分ける
・ルームの作成
    ルームid（その場限り）を入れて入室
    フレンド機能を設けて、固有のルームidを作るか
・ログ
    ログイン時のみ棋譜を残す

## UI改善