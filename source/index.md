---
title: 《Learn VASP The Hard Way》教程全集主目錄
layout: page
---

> ### 📢 重要版權聲明與致謝 (Disclaimer & Attribution)
> 
> * **原創著作權歸屬**：本網站為 **大師兄（bigbrosci）** 所著經典 VASP 教程《Learn VASP The Hard Way》（第二版）的歷史備份存檔。**大師兄才是本教程的唯一原創作者**，本站維護者僅作學術備份與學習使用，所有文章、算例及圖片之完整著作權均歸大師兄所有。
> * **由衷致謝與期待**：由衷感謝大師兄當年如此用心編寫高質量的計算化學教學，啟蒙並幫助了無數科研領域的學子！我們滿懷期待大師兄的 **第三版教程（V3）** 能早日正式上線與大家見面！
> * **非營利與即刻下架承諾**：本站純屬個人學習與學術交流研究用途，絕無任何商業或營利用途。**若原作者或版權方對本存檔站點有任何疑慮或反映版權問題，請提出聯繫，本站承諾將第一時間立即無條件配合下架與刪除。**

> 📖 **全集導航說明**：本站完整收錄了全部 **132 篇** 教學文章與配套算例。點擊下方各模組章節標題即可直接進入對應頁面閱讀。

---

## 📌 序言篇 (Preface)
*學習 VASP 的心態、方法與計算化學基本哲學*

- {% post_link preface "Learn VASP The Hard Way (序言)" %}

## 🚀 第一模組：VASP 入門、四大輸入輸出檔與批次處理 (Ex00 ~ Ex07)
*掌握 INCAR, POSCAR, POTCAR, KPOINTS 四大輸入檔、伺服器提交任務與輸出檔分析*

- {% post_link ex00 "Ex00 为什么是The Hard Way" %}
- {% post_link ex00_v3 "Ex00 为什么是The Hard Way" %}
- {% post_link ex01 "Ex01 VASP基本输入文件的准备（壹）" %}
- {% post_link ex01_v3 "Ex01_V3 学习VASP的基本要求" %}
- {% post_link ex02 "Ex02 做计算常用的批量处理方法（一）" %}
- {% post_link ex02_v3 "Ex02_V3 服务器和程序语言" %}
- {% post_link ex03 "Ex03 做计算常用的批量处理方法（三）" %}
- {% post_link ex04 "Ex04 做计算常用的批量处理方法（五）" %}
- {% post_link ex05 "Ex05 VASP任务的提交" %}
- {% post_link ex06 "Ex06 VASP的输出文件（一）" %}
- {% post_link ex07 "Ex07 VASP的输出文件（三）" %}

## 🔬 第二模組：原子分子建模、磁性與參數收斂性測試 (Ex08 ~ Ex20)
*氧原子/氧分子計算、自旋磁矩 (MAGMOM) 設定、合理結構的重要性與計算機時管理*

- {% post_link ex08 "Ex08 氧原子能量的正确计算" %}
- {% post_link ex09 "Ex09 学会收敛点!" %}
- {% post_link ex10 "Ex10 O$_2$结构搭建以及POTCAR注意部分" %}
- {% post_link ex11 "Ex11 O$_2$单点计算和优化结果分析" %}
- {% post_link ex12 "Ex12 VASP中MAGMOM的简单设定" %}
- {% post_link ex13 "Ex13 论合理结构的重要性（一）" %}
- {% post_link ex14 "Ex14 论合理结构的重要性（二）" %}
- {% post_link ex15 "Ex15 论合理结构的重要性（三）" %}
- {% post_link ex16 "Ex16 谁偷走的我的机时？（一）" %}
- {% post_link ex17 "Ex17 谁偷走的我的机时？（二）" %}
- {% post_link ex18 "Ex18 谁偷走的我的机时？（三）" %}
- {% post_link ex19 "Ex19 谁偷走的我的机时？（四）" %}
- {% post_link ex20 "Ex20 谁偷走的我的机时？（五）" %}

## 🧪 第三模組：氣相分子結構優化與振動頻率計算 (Ex22 ~ Ex27)
*以乙醇分子為例，詳解分子幾何優化、頻率計算原理與結果分析*

- {% post_link ex22 "Ex22 乙醇气相分子的优化" %}
- {% post_link ex23 "Ex23 乙醇分子的振动频率计算(一)" %}
- {% post_link ex24 "Ex24 乙醇分子的振动频率计算(二)" %}
- {% post_link ex25 "Ex25 乙醇分子的振动频率计算(三)" %}
- {% post_link ex26 "Ex26 乙醇分子的振动频率计算(四)" %}
- {% post_link ex27 "Ex27 乙醇分子的振动频率计算(五)" %}

## 💎 第四模組：晶體塊體 (Bulk) 計算與狀態方程擬合 (Ex32 ~ Ex36)
*金屬 Fe 單胞計算、Birch-Murnaghan (BM) 狀態方程擬合與晶格常數優化*

- {% post_link ex32 "Ex32 Bulk的单点计算（Fe 单胞）" %}
- {% post_link ex33 "Ex33 晶格参数的确定（Birch-Murnaghan状态方程-1）" %}
- {% post_link ex34 "Ex34 晶格参数的确定（Birch-Murnaghan状态方程-2）" %}
- {% post_link ex35 "Ex35 晶格参数的确定（Birch-Murnaghan状态方程-3）" %}
- {% post_link ex36 "Ex36 晶格参数的确定（直接优化晶格常数）" %}

## 📊 第五模組：電子結構分析與態密度 (DOS) 計算 (Ex37 ~ Ex41)
*DOS 兩步法計算、ISMEAR 與 SIGMA 設定、投影態密度 (PDOS) 與 d 帶中心分析*

- {% post_link ex37 "Ex-37 DOS 计算(一)" %}
- {% post_link ex38 "Ex-38 DOS 计算(二)" %}
- {% post_link ex39 "Ex-39 DOS 计算(三)" %}
- {% post_link ex40 "Ex-40 DOS 计算(四)" %}
- {% post_link ex41 "Ex-41 DOS 计算(五)" %}

## 🏔️ 第六模組：表面 Slab 模型、表面弛豫、表面能與功函數 (Ex42 ~ Ex52)
*Cu(111) 表面模型搭建、真空層厚度、固定原子層、表面能與功函數 (Work Function) 計算*

- {% post_link ex42 "Ex42 slab模型" %}
- {% post_link ex43 "Ex43 p(1x1) Cu(111)的单点计算" %}
- {% post_link ex44 "Ex44 p(1x1)Cu(111) 的优化计算" %}
- {% post_link ex45 "Ex45 表面弛豫" %}
- {% post_link ex46 "Ex46 表面弛豫的计算结果分析以及Direct坐标转换脚本" %}
- {% post_link ex47 "Ex47 表面能的计算（一）" %}
- {% post_link ex48 "Ex48 表面能的计算（二）" %}
- {% post_link ex49 "Ex49 功函数（work function）的计算（一）" %}
- {% post_link ex50 "Ex50 功函数（work function）的计算（二）" %}
- {% post_link ex51 "Ex51 影响功函数计算的因素（一）" %}
- {% post_link ex52 "Ex52 影响功函数计算的因素（二）" %}

## 🧲 第七模組：表面分子吸附模型與吸附能計算 (Ex53 ~ Ex67)
*表面吸附位點尋找、初態構型設計、吸附能公式推導與 H₂O 在 Cu(111) 吸附全流程*

- {% post_link ex53 "Ex53 表面吸附以及模型的搭建思想" %}
- {% post_link ex54 "Ex54 简单粗暴地获取初始构型（一）" %}
- {% post_link ex55 "Ex55 简单粗暴地获取初始构型（二）" %}
- {% post_link ex56 "Ex56 吸附能的计算（一）" %}
- {% post_link ex57 "Ex57 吸附能的计算（二）" %}
- {% post_link ex58 "Ex58 吸附能的计算（三）" %}
- {% post_link ex59 "Ex59 吸附能的计算（四）" %}
- {% post_link ex60 "Ex60 吸附能的计算（五）" %}
- {% post_link ex61 "Ex61 吸附能的计算（六）" %}
- {% post_link ex62 "Ex62 吸附能的计算（七）" %}
- {% post_link ex63 "Ex63 吸附能的计算（八）" %}
- {% post_link ex64 "Ex64 吸附能的计算（九）" %}
- {% post_link ex65 "Ex65 p4vasp 的旋转操作" %}
- {% post_link ex66 "Ex66 H$_2$O在Cu(111)表面上的吸附模型" %}
- {% post_link ex67 "Ex67 H$_2$O在Cu(111)表面上的吸附能" %}

## 🌡️ 第八模組：振動頻率、零點能 (ZPE) 與熱力學吉布斯自由能 (Ex68 ~ Ex69)
*表面物種振動頻率計算、ZPE 校正、吸附熵效應與吉布斯自由能計算*

- {% post_link ex68 "Ex68 频率，零点能，吉布斯自由能的计算" %}
- {% post_link ex69 "Ex69 表面吸附物种的熵" %}

## ⚡ 第九模組：過渡態搜尋 (CI-NEB、Dimer Method) 與反應路徑確認 (Ex70 ~ Ex82)
*過渡態演算法原理、nebmake.pl 腳本生成插點影像、VTST 模組、IMAGES 參數與頻率虛頻確認*

- {% post_link ex70 "Ex70 过渡态的计算（一）" %}
- {% post_link ex71 "Ex71 过渡态的计算（二）" %}
- {% post_link ex72 "Ex72 过渡态的计算（三）" %}
- {% post_link ex73 "Ex73 过渡态的计算（四）" %}
- {% post_link ex74 "Ex74 过渡态的计算（五）" %}
- {% post_link ex75 "Ex75 过渡态的计算（六）" %}
- {% post_link ex76 "Ex76 过渡态任务的检查（一）" %}
- {% post_link ex77 "Ex77 过渡态任务的提交与查看（一）" %}
- {% post_link ex78 "Ex78 过渡态任务的提交与查看（二）" %}
- {% post_link ex79 "Ex 79 过渡态结构的确认" %}
- {% post_link ex80 "Ex80 nebmake.pl 的坑（一）" %}
- {% post_link ex81 "Ex81 使用ASE批量切金属稳定的表面" %}
- {% post_link ex82 "Ex82 nebmake.pl 的坑（二）" %}

## 🧱 第十模組：計算模型構型經驗與中間體優化 (Ex83 ~ Ex85)
*科研實戰心態、模型設計避坑指引與反應中間體優化技巧*

- {% post_link ex83 "Ex83 搬砖" %}
- {% post_link ex84 "Ex84 计算模型的注意事项" %}
- {% post_link ex85 "ex85 中间体的优化" %}

## 🛠️ 實用附錄篇：Linux / 超算運維、實用工具與軟體安裝指南 (A01 ~ A34)
*涵蓋遠端連線、自動化腳本、p4vasp、ASE、Pymatgen、Matminer、VTST 編譯與報錯排查*

- {% post_link A01 "通过Ubuntu连接服务器的方法" %}
- {% post_link A01_not_used "通过Ubuntu连接国科智算的方法" %}
- {% post_link A02 "Ubuntu下p4vasp的安装" %}
- {% post_link A03 "Linux命令之cd使用心得" %}
- {% post_link A04 "自动生成KPOINTS的脚本" %}
- {% post_link A05 "自动生成POTCAR的脚本" %}
- {% post_link A06 "VASP计算遇到错误怎么办？" %}
- {% post_link A07 "A07 Bader电荷计算" %}
- {% post_link A08 "A08 Bader电荷计算(二)" %}
- {% post_link a09 "A09 超算中心使用前的准备工作（一）" %}
- {% post_link a10 "A10 超算中心使用前的准备工作（二）" %}
- {% post_link A11 "国科智算提交VASP任务" %}
- {% post_link A12 "A12 通过job-ID快速进入计算目录" %}
- {% post_link A13 "ASE的安装" %}
- {% post_link A14 "ASE转换文件到POSCAR格式" %}
- {% post_link A15 "ExA15 Ubuntu下p4vasp与Python3不兼容的解决办法" %}
- {% post_link A16 "ExA16 通过ASE简单扩胞的小脚本" %}
- {% post_link A17 "ASE的骚操作系列" %}
- {% post_link A18 "Pymatgen的骚操作系列（计算离子电导率）" %}
- {% post_link A19 "ASE的骚操作系列（扩胞）" %}
- {% post_link A20 "ASE的骚操作系列（SMILES-To-XYZ）" %}
- {% post_link A21 "Ubuntu20中P4VASP的安装" %}
- {% post_link A22 "Ubuntu虚拟机的安装" %}
- {% post_link A23 "Ubuntu常用软件的安装" %}
- {% post_link A24 "离子迁移概率密度可视化" %}
- {% post_link A25 "超好用的材料类机器学习开源软件-Matminer" %}
- {% post_link A26 "利用matminer从数据库获取数据" %}
- {% post_link A27 "从Citrine Informatics数据库获取数据" %}
- {% post_link A28 "通过ASE获取原子之间的距离" %}
- {% post_link A29 "ASE消虚频的小脚本" %}
- {% post_link A30 "VASP官方视频" %}
- {% post_link A31 "VTST的编译" %}
- {% post_link A32 "Improved Dimer Method计算过渡态的脚本" %}
- {% post_link A33 "A33 利用matminer和pymatgen获取material project结构" %}
- {% post_link A34 "A34 利用ASE的热力学模块计算气体的熵" %}

## 💡 專題拓展與科研心得 (M01~M03, S01~S07, j01~j02)
*VESTA / Jmol 視覺化技巧、催化與材料文獻深度導讀、招聘與經驗雜談*

- {% post_link M_01 "Ubuntu18.使用VESTA报错的解决办法" %}
- {% post_link M_02 "通过关键词判断优化任务收敛" %}
- {% post_link M_03 "常用的数据库总结" %}
- {% post_link S01 "z01 分享一本葵花宝典" %}
- {% post_link S02 "理论模拟导向的催化剂理性高效设计策略用于醇的选择性胺化" %}
- {% post_link S03 "基于DFT+U研究应力调控CeO2(111)催化分解水制氢的活性" %}
- {% post_link S04 "浅谈Hall Petch关系(一)" %}
- {% post_link S05 "浅谈Hall Petch关系(二)" %}
- {% post_link S06 "高阶弹性常数计算的一点建议" %}
- {% post_link S07 "Ipad 连接服务器APP" %}
- {% post_link j01 "硕博（后）招聘（车芳琳课题组-美国马萨诸塞大学洛厄尔分校）" %}
- {% post_link j02 "博后招聘（朱虹课题组-上海交大）" %}
