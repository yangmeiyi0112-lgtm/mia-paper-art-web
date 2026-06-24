# 米亞紙意手作網站

這是「米亞紙意手作」的靜態形象與商品展示網站，可直接使用 GitHub Pages 部署。

之後所有要上傳到 GitHub 的網站檔案都固定放在這個資料夾內：`mia-paper-art-github`。

## 檔案結構

```text
.
├── index.html
├── styles.css
├── script.js
└── assets/
    └── hero-paper-craft.png
```

## GitHub Pages 部署方式

1. 在 GitHub 建立一個新的 repository。
2. 將此資料夾內的所有檔案上傳到 repository 根目錄。
3. 到 repository 的 `Settings` → `Pages`。
4. 在 `Build and deployment` 選擇：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. 儲存後等待 GitHub Pages 產生網址。

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可預覽網站。
