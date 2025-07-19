# 攀岩 Beta 網站開發筆記 - 後端初學者指南

## 專案目標
建立一個網站來彙集台灣攀岩館的 Instagram Beta 影片，讓攀岩者可以依照岩館、區域、難度級數來搜尋特定路線的攀爬技巧影片。

## 開發步驟記錄

### 第一階段：專案規劃與架構設計

#### 1. 資料庫設計 (schema-design.md)
- **Gyms (岩館)**：儲存岩館基本資訊
- **Sections (區域)**：A區、B區、C區等分區
- **Routes (路線)**：具體的攀岩路線，包含難度級數
- **Beta Videos (Beta影片)**：Instagram 影片連結與相關資訊

#### 2. 技術架構選擇 (architecture-plan.md)
- **前端**：Next.js 14 + TypeScript + Tailwind CSS
- **後端**：Next.js API Routes (Full-stack 架構)
- **資料庫**：SQLite (開發用) / PostgreSQL (正式環境)
- **ORM**：Prisma (資料庫操作工具)

### 第二階段：環境建置

#### 3. 建立 Next.js 專案結構
```bash
npm init -y  # 初始化 package.json
npm install next react react-dom typescript @types/react @types/node tailwindcss postcss autoprefixer @prisma/client prisma
```

#### 4. 設定專案檔案
- `package.json`：定義專案相依性與執行腳本
- `next.config.js`：Next.js 設定檔
- `tsconfig.json`：TypeScript 設定
- `tailwind.config.js`：CSS 框架設定

#### 5. 建立目錄結構
```
climbing-beta/
├── src/
│   ├── app/          # 頁面檔案
│   ├── components/   # 共用元件
│   ├── lib/          # 工具函數
│   └── types/        # TypeScript 型別定義
├── prisma/           # 資料庫設定
└── public/           # 靜態檔案
```

### 第三階段：資料庫設置

#### 6. Prisma 資料庫設定
- 建立 `prisma/schema.prisma`：定義資料表結構
- 設定 `.env`：資料庫連線字串
- 使用 SQLite 作為開發資料庫（簡單易用）

#### 7. 資料庫初始化
```bash
npx prisma db push  # 建立資料庫與資料表
```

### 第四階段：啟動專案

#### 8. 啟動開發環境
```bash
npm run dev  # 啟動網站 (http://localhost:3000)
npx prisma studio  # 啟動資料庫管理介面 (http://localhost:5555)
```

## 重要概念解釋（後端初學者）

### 什麼是 ORM？
- **ORM (Object-Relational Mapping)**：讓你用程式語言的語法來操作資料庫，而不用寫 SQL
- **Prisma** 是我們使用的 ORM 工具，可以用 JavaScript/TypeScript 來操作資料庫

### 什麼是 Full-stack？
- **傳統方式**：前端與後端分離，需要建立兩個專案
- **Full-stack (Next.js)**：前端與後端在同一個專案中，API 路由放在 `src/app/api/` 資料夾

### 資料庫關聯性
```
Gym (岩館)
├── Section (區域) - 一個岩館有多個區域
    ├── Route (路線) - 一個區域有多條路線
        ├── BetaVideo (影片) - 一條路線有多個 Beta 影片
```

## 目前專案狀態

### ✅ 已完成
- [x] 專案架構設計
- [x] Next.js 環境建置
- [x] 資料庫架構設計
- [x] Prisma ORM 設定
- [x] 基本頁面建立
- [x] 資料庫初始化

### 📋 下一步工作
1. 建立 API 路由 (新增岩館、區域、路線)
2. 建立管理介面 (新增資料的表單)
3. 建立搜尋功能
4. Instagram 影片嵌入功能
5. 資料驗證與錯誤處理

## 常用指令

```bash
# 開發環境
npm run dev              # 啟動網站
npx prisma studio       # 資料庫管理介面
npx prisma db push      # 更新資料庫結構

# 資料庫查詢
sqlite3 prisma/dev.db ".tables"                    # 查看所有資料表
sqlite3 prisma/dev.db "SELECT COUNT(*) FROM gyms;" # 查看資料筆數
```

## 學習資源
- [Next.js 官方文件](https://nextjs.org/docs)
- [Prisma 官方文件](https://www.prisma.io/docs)
- [Tailwind CSS 官方文件](https://tailwindcss.com/docs)