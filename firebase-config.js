// 把 Firebase 專案設定貼在這裡（Firebase 主控台 → 專案設定 → 你的應用程式 → SDK 設定與配置）
// 這些值本來就會公開在網頁上，放進公開的 GitHub 也沒關係；資料安全由 Firestore 安全規則控制。
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAxZaA8PSw4QokVUj8BYJWKtXdDo4sK0ck",
  authDomain: "xmas-song-gift.firebaseapp.com",
  projectId: "xmas-song-gift",
  storageBucket: "xmas-song-gift.firebasestorage.app",
  messagingSenderId: "33348232559",
  appId: "1:33348232559:web:2da9e1fb002983831b349a",
};

// 遊戲代號：換一個代號就等於開一場全新的遊戲（舊資料不會被刪，只是不再讀取）
export const GAME_ID = "xmas2026-v2";
