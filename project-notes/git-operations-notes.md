# 使用 Cursor Chat 自動分類 Git Commit

一次請 Cursor 幫我異動了不少檔案，review 完後，commit 也有點懶了，直接請 Cursor 幫我代勞，寫了一段 prompt:
「查看檔案差異並將相同類型的差異做為同一個 commit」

Cursor Chat 便出現指令，都幫我分群、git add 以及寫好 commit message 了
只要 cmd + Enter 就可以咻咻咻完成 commit 了，不用滑鼠自己按 Generate Commit Message 按鈕，效率提升，這件事對 AI 來說不難，但比預期中好用。


## 問題背景
在進行大量程式碼異動後，需要將相關的變更歸類到同一個 commit 中，以保持版本控制的整潔性和可讀性。本文檔提供相關的 Git 操作指令和建議的 commit 分組策略。

#### 2. 查看檔案差異
**指令**：
```bash
# 與上一個 commit 比較
git diff HEAD~1

# 與特定 commit 比較
git diff <commit-hash>

# 只顯示檔案名稱（不顯示內容差異）
git diff --name-status HEAD~1

# 顯示統計資訊
git diff --stat HEAD~1

# 與工作目錄比較（包含未暫存的變更）
git diff

# 與暫存區比較
git diff --cached

# 比較特定檔案
git diff HEAD~1 -- <filename>
```

#### 3. Commit 分組策略
**建議的 Commit 分組**：

1. **專案基礎設定**
   ```bash
   git add .gitignore .env.example
   git commit -m "chore: add gitignore and environment example"
   ```

2. **專案依賴和配置**
   ```bash
   git add package.json package-lock.json
   git add next.config.js tailwind.config.js tsconfig.json next-env.d.ts
   git commit -m "feat: add Next.js project dependencies and configuration"
   ```

3. **資料庫設計和架構規劃**
   ```bash
   git add prisma/schema.prisma
   git add schema-design.md architecture-plan.md
   git commit -m "docs: add database schema and architecture planning"
   ```

4. **專案文檔**
   ```bash
   git add README.md project-notes/
   git commit -m "docs: update README and add project notes"
   ```

5. **應用程式程式碼**
   ```bash
   git add src/
   git commit -m "feat: add initial application source code"
   ```
