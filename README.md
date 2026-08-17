# 星落小镇玩家百科

这是一个可以直接部署到 GitHub Pages 的纯静态站点。

## 直接上传 GitHub 的方法

1. 打开你的仓库，例如 `https://github.com/lanyingawa/starfall`。
2. 点仓库首页的 `uploading an existing file`，或点 `Add file` → `Upload files`。
3. 解压本压缩包。
4. 把解压后的所有内容拖进去：`index.html`、`pages`、`assets`、`.nojekyll` 等。
5. 点最下面绿色按钮 `Commit changes`。
6. 进入 `Settings` → `Pages`。
7. `Build and deployment` 选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/ root`
8. 保存后等待 1-3 分钟。
9. 打开：`https://你的用户名.github.io/仓库名/`

如果你的仓库名是 `starfall`，用户名是 `lanyingawa`，地址一般是：

`https://lanyingawa.github.io/starfall/`

## 注意

- 不要只上传最外层文件夹本身，要上传文件夹里面的内容。
- `index.html` 必须在仓库根目录，否则 GitHub Pages 找不到首页。
- `.nojekyll` 不要删，它可以避免 GitHub Pages 对静态资源做额外处理。
- 修改页面后重新上传覆盖即可。
