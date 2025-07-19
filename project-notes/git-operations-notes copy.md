## 開發到一半才發現還沒切分支啊～～

有幾次開發新功能時，忘記先切換到 feature branch 就開始動手做並 commit，發現時有幾個方法可以解決：
1. 創建新分支並把先前的 commit cherry pick 過去
2. 創建新分支，然後把原分支 reset 回乾淨狀態

以上兩種都是很基礎的 git 操作，我比較喜歡第二種方法，記錄如下，也順便條列一下 git 常用的操作

### 問題背景
在 develop branch 中不小心提交了所有變更，但希望先在 `feat/structure` branch 中完成所有 commits。

### 解決方案：使用 git reset 和 branch 操作

#### 步驟 1：創建 feat/structure branch 並包含所有變更
```bash
git checkout -b feat/structure
```
**說明：** 這個指令會基於當前分支（包含所有 commits）創建新分支

#### 步驟 2：回到 develop branch 並重置到遠端狀態
```bash
git checkout develop
git reset --hard origin/develop
```
**說明：** 這個操作會完全重置 develop 分支到遠端狀態，丟失所有未推送的 commits

#### 步驟 3：切換到 feat/structure branch 繼續開發
```bash
git checkout feat/structure
```
**說明：** 現在可以在這個分支上繼續開發，所有之前的 commits 都在這裡

#### 最終結果
- **develop branch**：重置到 `origin/develop`，只有原始的 "first commit"
- **feat/structure branch**：包含所有開發 commits：
  - `feat: add Next.js project configuration and dependencies`
  - `feat: add initial application source code`
  - `docs: update README and add project notes`
  - `docs: add database schema and architecture planning`
  - `chore: add gitignore and environment example`

**結果：** develop 分支變乾淨了，所有開發內容都在 feat/structure 分支中


## 感想
一開始就切好 branch 其實也不用有上面這些事發生啦 😅，讓我想到這也對應到程式設計、開發流程，一開始想得更清楚、規劃好就少走一些冤枉路，持續加油吧。

### 常用 Git 指令備忘

#### 檢查狀態
```bash
git status                    # 查看工作目錄和暫存區狀態
git status --porcelain        # 簡潔格式，適合腳本使用
git log --oneline -5          # 最近 5 個 commits（簡潔格式）
git log --oneline origin/develop..HEAD  # 本地超前遠端的 commits
```

#### 分支操作
```bash
git checkout -b <branch-name>  # 創建並切換到新分支
git checkout <branch-name>     # 切換到現有分支
git branch -d <branch-name>    # 刪除已合併的分支
git branch -D <branch-name>    # 強制刪除分支
```

#### 重置操作
```bash
git reset --hard <commit>      # 硬重置：丟棄所有變更
git reset --soft <commit>      # 軟重置：保留變更在暫存區
git reset --mixed <commit>     # 混合重置：保留變更在工作目錄（預設）
```

#### 推送操作
```bash
git push -u origin <branch-name>  # 推送並設定上游分支
git push origin <branch-name>     # 推送到遠端分支
```

### 注意事項
1. 使用 `git reset --hard` 前要確認沒有重要變更
2. 在 feature branch 中開發，完成後再合併回 develop
3. 使用有意義的 commit message，遵循 conventional commits 規範 


