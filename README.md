# climbing-beta-search
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