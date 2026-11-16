# 🎆 跨年猜歌交換樂

網頁放在 GitHub Pages，資料存在 Firebase Firestore（免費方案就夠用）。玩家不需要登入，打開網址、填名字就能玩。

## 一、建立 Firebase 資料庫（約 5 分鐘）

1. 用 Google 帳號登入 https://console.firebase.google.com ，按「建立專案」。名稱隨意（例如 `newyear-song-gift`），Google Analytics 可以關掉。
2. 左側選單「建構 → Firestore Database」→「建立資料庫」。
   - 位置選 `asia-east1`（台灣）。
   - 模式選「以正式版模式啟動」。
3. 建好後切到「規則」分頁，整段換成下面這段，按「發布」：

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /games/{gameId}/{document=**} {
         allow read, write: if request.time < timestamp.date(2027, 1, 31);
       }
     }
   }
   ```

   這段規則只開放遊戲資料，而且 2027/1/31 之後自動關閉。

4. 回到「專案總覽」，按網頁圖示 `</>` 新增網頁應用程式（暱稱隨意，不用勾 Hosting）。
5. 畫面會出現一段 `firebaseConfig = { ... }`，把裡面的值貼進 `firebase-config.js`。

## 二、放上 GitHub Pages

1. 把 `index.html`、`firebase-config.js` 上傳到一個**公開**的 repo。
2. repo 的「Settings → Pages」，Source 選 `Deploy from a branch`，分支選 `main`、資料夾選 `/ (root)`，按 Save。
3. 約 1 分鐘後，網址會是 `https://fishon100.github.io/xmas-song-gift/`。

## 三、自己先測試一輪

- 用主持人身分開啟網址，勾「我是主持人」加入。
- 主持人控制台的「進階設定 → 🧪 測試工具」有兩種方式：
  - **玩家 2～6 的連結：** 每個連結是一位不同的玩家，可以同時開好幾個分頁，切換分頁就能扮演不同的人。
  - **🤖 用測試玩家補滿人數：** 一鍵補滿人數並自動出歌。投票時可以按「讓測試玩家隨機投票」。
- 測完到「進階設定」按「全部清空」，或把 `firebase-config.js` 的 `GAME_ID` 換成新的代號，就是全新的一場。

## 注意

- 身分記在各自的瀏覽器裡。玩家換手機或清除瀏覽資料，會被當成新玩家，請大家固定用同一個瀏覽器。
- 匿名只做在畫面上，懂技術的人用開發者工具還是查得到資料，朋友間玩沒問題。
