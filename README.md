# Learn VASP The Hard Way (LVTHW) - 歷史備份存檔 (Backup Archive)

> [!IMPORTANT]
> ### ⚠️ 鄭重聲明 (Important Disclaimer & Copyright Notice)
> 
> 1. **非原作者聲明**：本倉庫維護者**並非**本教程的原創作者。本倉庫所收錄之全部文章內容、講義、結構圖片、計算腳本與相關資料，其著作權與智慧財產權**完全歸原作者「大師兄」（BigBro / bigbrosci）所有**。
> 2. **建立目的**：由於大師兄先前的教學網站已無法存取，為避免這份極具價值、造福無數計算材料/凝聚態物理初學者的經典 VASP 教學資源佚失，特此保留此歷史備份存檔（Archive / Backup），**僅供學術交流、科研研究與個人學習參考之用，嚴禁任何商業營利用途**。
> 3. **侵權下架**：若原作者或相關權利人認為本存檔有任何不妥之處，敬請提出 Issue 或聯繫本倉庫擁有者，將立即配合刪除或下架。

---

## 📖 教程內容目錄總覽

本備份收錄了《Learn VASP The Hard Way (第二版)》共計 **132 篇** 完整圖文教學與配套檔案：

- **序言 (Preface)**：學習 VASP 的心態、方法與計算化學基本哲學
- **基礎練習篇 (ex00 ~ ex85)**：
  - VASP 四大基本輸入檔（INCAR, POSCAR, POTCAR, KPOINTS）詳解
  - 晶體結構搭建與可視化（VESTA、p4vasp、ASE）
  - 收斂性測試（ENCUT、K 點、真空層厚度）
  - 結構優化與能量計算（ISMEAR、SIGMA、EDIFF、EDIFFG）
  - 電子結構分析：態密度（DOS）、能帶結構（Band Structure）、功函數（Work Function）
  - 磁性計算、DFT+U、自旋極化
  - 表面模型切面、表面能、分子吸附能計算
  - 振動頻率與零點能（ZPE）、熱力學性質校正
  - 過渡態搜尋（CI-NEB、Dimer Method）
- **實用附錄篇 (A01 ~ A34)**：
  - Linux/Ubuntu 常用操作、伺服器與超算連線（SSH/Slurm/PBS）
  - 批量計算腳本、自動化 Bash/Python 工具
  - p4vasp、pymatgen、Open Babel、VTST 工具安裝與編譯指南
  - 結構轉換、常見報錯（VASP Error）排查技巧
- **專題擴展 (M01~M03, S01~S07, j01~j02 等)**

---

## 🚀 部署至 GitHub Pages 教學

本倉庫已預先配置好 **GitHub Actions** 自動編譯工作流程，推送到 GitHub 即可自動上線！

### 步驟 1：建立 GitHub 倉庫
1. 登入 GitHub，點擊右上角 **New repository**。
2. 倉庫名稱輸入：**`LVTHW-bak`**（若使用其他名稱，請參考下方注意事項修改 `_config.yml`）。
3. 建議設為 **Public**，不要勾選 "Initialize this repository with a README"（因為本機已準備好了）。
4. 點擊 **Create repository**。

### 步驟 2：推送到 GitHub
在本地的 `LVTHW-bak_aiagent` 資料夾中開啟終端機（PowerShell 或 Git Bash），執行以下指令：

```bash
git remote add origin https://github.com/H6rst0n/LVTHW-bak_aiagent.git
git branch -M main
git push -u origin main
```

### 步驟 3：開啟 GitHub Pages
1. 在您的 GitHub 倉庫頁面，進入 **Settings** -> 側邊欄點選 **Pages**。
2. 在 **Build and deployment** 下方的 **Source**，下拉選單切換為：
   👉 **GitHub Actions**
3. 稍候 1~2 分鐘，GitHub Actions 將會自動編譯 Hexo 並完成部署！
4. 部署成功後，即可透過以下網址瀏覽：
   `https://H6rst0n.github.io/LVTHW-bak_aiagent/`

---

## 💻 本地端預覽與啟動

若您想在自己的電腦上離線瀏覽本教程：

1. 確保已安裝 [Node.js](https://nodejs.org/) (建議 v18 或以上)。
2. 在本資料夾目錄下執行：
   ```bash
   npm install
   npx hexo server
   ```
3. 打開瀏覽器，訪問：`http://localhost:4000/LVTHW-bak/` 即可進行本地閱讀。

---

## 感謝與致敬
再次向「大師兄」在計算化學領域的無私奉獻與精彩教學致敬！
