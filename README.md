# MiniMax AI 生成器

集图片生成、语音合成、提示词画廊于一体的 AI 创作工具。**部署后用户可直接使用，无需输入任何 Key。**

## 功能

- 🖼️ **图片生成** — 基于 MiniMax image-01 模型，支持多种尺寸
- 🔊 **语音合成** — 基于 MiniMax speech-2.8-hd 模型，3种音色可选
- 📚 **提示词画廊** — 内置 1116 个精选提示词，支持分类筛选和搜索

## 快速启动

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd minimax-ai-generator
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置 API Key（部署者需设置，用户不需要）

```bash
cp .env.example .env
```

编辑 `.env`，填入你的 MiniMax API Key：

```
MINIMAX_API_KEY=your_api_key_here
```

> API Key 获取地址：[MiniMax 控制台](https://platform.minimaxi.com/console/api-keys)

### 4. 启动服务

```bash
npm start
```

打开浏览器访问 **http://localhost:3000**

---

## 项目结构

```
├── server.js          # Express 后端服务器（持有 API Key）
├── public/
│   ├── index.html    # 前端页面
│   └── prompts.json   # 提示词数据 (1116条)
├── prompts/           # 原始提示词 markdown 文件
├── parse_prompts.js  # 提示词解析脚本
├── package.json
├── .env.example
└── .gitignore
```

## 架构说明

- **前端**：原生 HTML/CSS/JS，直接调用后端代理接口
- **后端**：Node.js + Express，持有 MiniMax API Key 代理转发请求
- **用户无需任何配置**，API Key 由部署者在服务端设置

## API 接口

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/generate` | POST | 图片生成（代理） |
| `/api/tts` | POST | 语音合成（代理） |
| `/api/key-status` | GET | API Key 状态 |
| `/api/download-image` | GET | 图片下载代理（解决跨域） |

## 技术栈

- **前端**：原生 HTML/CSS/JavaScript
- **后端**：Node.js + Express
- **API**：MiniMax Platform API

---

## 部署到 Render（免费，无需信用卡）

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/WaHaiLong/minimax-image-generator)

### 方案一：一键部署（推荐）

点击上方按钮，跳转到 Render 并自动填写配置，确认后点击 **"Create Resource"** 即可。

### 方案二：手动部署

1. 登录 [Render](https://render.com/)（可用 GitHub 账号）
2. 点击 **New +** → **Blueprint**（或 Web Service）
3. 连接你的 GitHub 仓库：`https://github.com/WaHaiLong/minimax-image-generator`
4. 确认以下配置：

   | 配置项 | 值 |
   |--------|-----|
   | Name | `minimax-image-generator` |
   | Region | Singapore（就近选择）|
   | Branch | `master` |
   | Runtime | `Node` |
   | Build Command | `npm install` |
   | Start Command | `node server.js` |
   | Plan | `Free` |

5. 点击 **"Create Blueprint"**，Render 会自动读取 `render.yaml` 并完成部署

### 部署后配置 API Key（必须）

> API Key 由服务端持有，用户打开网站直接使用，无需任何配置。

1. 部署完成后，进入该 Web Service 页面
2. 左侧菜单点击 **Environment** → **Secrets**
3. 添加以下环境变量：

   | Key | Value |
   |-----|-------|
   | `MINIMAX_API_KEY` | 你的 MiniMax API Key |

   API Key 获取地址：[MiniMax 控制台](https://platform.minimaxi.com/console/api-keys)

4. 点击 **Save Changes**，Render 会自动重新部署

### 冷启动说明

Render 免费套餐在 15 分钟无活动后会进入休眠，下次访问时会有约 30 秒的冷启动延迟，这是正常现象。
