# Learn VASP The Hard Way (LVTHW) - 歷史備份存檔 (Backup Archive)

[![Deploy Hexo to GitHub Pages](https://github.com/H6rst0n/LVTHW-bak_aiagent/actions/workflows/deploy.yml/badge.svg)](https://github.com/H6rst0n/LVTHW-bak_aiagent/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Site-blue?logo=github)](https://H6rst0n.github.io/LVTHW-bak_aiagent/)

> 🌐 **線上完整閱讀站點**：[https://H6rst0n.github.io/LVTHW-bak_aiagent/](https://H6rst0n.github.io/LVTHW-bak_aiagent/)
> 
> 提供完整的公式排版、結構圖片瀏覽與站內全文搜尋功能。

---

## ⚠️ 鄭重聲明 (Disclaimer & Copyright Notice)

1. **非原作者聲明**：**本倉庫維護者並非本教程的原創作者**。本倉庫所收錄之全部文章內容、講義、結構圖片、計算腳本與相關檔案，其著作權與智慧財產權**完全歸原作者「大師兄」（BigBro / bigbrosci）所有**。
2. **存檔目的**：由於大師兄先前的教學網站已無法存取，為避免這份極具價值、造福無數計算材料、凝聚態物理與計算化學初學者的經典 VASP 教學資源佚失，特此在 GitHub 進行非營利之歷史備份存檔（Archive / Backup）。**僅供個人學習、學術交流與科研參考之用，嚴禁任何商業營利用途**。
3. **侵權下架**：若原作者或相關權利人認為本備份有任何不妥之處，敬請提出 Issue 或聯繫本倉庫維護者，將立即配合刪除或下架。

---

## 📖 教程內容目錄導覽

本倉庫完整收錄了《Learn VASP The Hard Way (第二版)》共計 **132 篇** 教學與配套算例：

### 📌 序言 (Preface)
- 學習 VASP 的心態、方法與計算化學基本原則

### 🔹 基礎練習篇 (ex00 ~ ex85)
- **輸入檔詳解**：VASP 四大輸入檔案（INCAR、POSCAR、POTCAR、KPOINTS）的參數與物理意義
- **模型與可視化**：晶體結構搭建、VESTA、p4vasp、ASE 操作技巧
- **參數收斂性測試**：ENCUT 平面波截斷能、K 點密度、真空層厚度測試
- **結構優化與能量計算**：ISMEAR、SIGMA 選取原則，EDIFF 與 EDIFFG 收斂標準
- **電子結構計算**：態密度（DOS）、投影態密度（PDOS）、能帶結構（Band Structure）、功函數（Work Function）
- **磁性與強關聯**：自旋極化計算、磁矩設置（MAGMOM）、DFT+U 方法
- **表面與吸附**：Slab 表面模型切面、表面弛豫、表面能、小分子吸附位點與吸附能計算
- **振動與熱力學**：分子/表面振動頻率計算、零點能（ZPE）校正、吉布斯自由能計算
- **過渡態搜尋**：微彈性帶方法（CI-NEB）、Dimer Method 與反應路徑優化

### 🔸 實用附錄篇 (A01 ~ A34)
- **Linux 與超算日常**：Ubuntu 常用環境配置、超算中心連線與作業管理（Slurm/PBS）
- **自動化實用工具**：批量計算腳本、自動化 Bash/Python 工具、格式轉換技巧
- **周邊工具安裝指南**：p4vasp、pymatgen、Open Babel、VTST 工具編譯指南
- **排錯精粹**：常見 VASP 報錯資訊（Error）分析與解決策略

### 💡 專題與經驗分享
- 收錄 M01~M03、S01~S07、j01~j02 等專題技巧與研究經驗心得

---

## 💻 專案架構與 GitHub 託管說明

本專案專為 **GitHub Pages** 設計：
- **託管方式**：原始 Markdown 與靜態圖檔託管於 `main` 分支。
- **自動建置**：透過 [GitHub Actions](.github/workflows/deploy.yml) 於每次推送時自動執行靜態編譯並即時發布至 GitHub Pages。
- **原始文章**：所有教學原始 Markdown 文件均存放於 [`source/_posts/`](source/_posts/) 目錄，亦可直接在 GitHub 上瀏覽閱讀。

---

## 💐 致敬
再次向「大師兄」在計算化學領域的無私分享與精彩教學致上最高敬意！
