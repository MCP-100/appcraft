# AppCraft - AI-Powered App Builder

AppCraft 是一个革命性的应用构建平台，让您能够通过自然语言描述快速创建全栈应用程序。无需编写代码，只需描述您的想法，AppCraft 就能将其转化为功能完整的应用。

-- 使用 Firecrawl MCP 生成

prompt：我想构建一个应用程序生成器，并希望从bolt.new和lovable.dew中获得一些灵感。请访问他们的网站，寻找灵感并在这里克隆它。

## 🚀 快速开始

1. **安装依赖**

```bash
pnpm install
```

2. **启动开发服务器**

```bash
pnpm dev
```

3. **访问应用**

打开 [http://localhost:3000](http://localhost:3000) 查看您的应用。

## 🛠️ 技术栈

- [Next.js 15](https://nextjs.org/) - React 框架
- [React 19](https://reactjs.org/) - UI 库
- [TailwindCSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Geist Font](https://vercel.com/font) - 字体

## 📁 项目结构

```
src/
├── app/                # Next.js 应用目录
│   ├── layout.tsx     # 全局布局
│   └── page.tsx       # 主页
├── components/        # React 组件
│   ├── Hero.tsx      # 英雄区组件
│   ├── Navbar.tsx    # 导航栏组件
│   ├── PromptInput.tsx # AI 提示输入组件
│   ├── TemplateCard.tsx # 模板卡片组件
│   └── TemplateGrid.tsx # 模板网格组件
└── styles/           # 样式文件
    └── globals.css   # 全局样式
```

## 🔧 配置

项目使用了以下配置文件：

- `next.config.ts` - Next.js 配置
- `tailwind.config.ts` - TailwindCSS 配置
- `tsconfig.json` - TypeScript 配置
- `postcss.config.mjs` - PostCSS 配置

## 📦 构建部署

构建生产版本：

```bash
pnpm build
```

启动生产服务器：

```bash
pnpm start
```

## ⭐ 致谢

感谢所有为本项目做出贡献的开发者！
