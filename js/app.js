// app.js - 主应用逻辑
// 内嵌学习内容数据（避免 file:// 协议下的 fetch 限制）
// 重构版本：场景驱动 + 精简聚焦
const contentData = {
  "title": "AI PM Journey",
  "description": "新时代懂技术的 PM · 技术力 + 产品力 = 竞争力",
  "paths": [
    { "id": "tech", "name": "技术路径", "icon": "🛠️", "desc": "Claude Code + AI 工具" },
    { "id": "pm", "name": "PM 路径", "icon": "💼", "desc": "AI PM 核心能力" }
  ],
  "categories": [
    // 技术路径分类
    { "id": "quick-start", "name": "快速开始", "icon": "⚡", "path": "tech" },
    { "id": "scenarios", "name": "场景导航", "icon": "🎯", "path": "tech" },
    { "id": "tools", "name": "核心工具", "icon": "🛠️", "path": "tech" },
    { "id": "deep-dive", "name": "深度学习", "icon": "📖", "path": "tech" },
    { "id": "ecosystem", "name": "生态系统", "icon": "🌐", "path": "tech" },
    { "id": "practice", "name": "实战案例", "icon": "⚔️", "path": "tech" },
    // PM 路径分类
    { "id": "pm-basics", "name": "PM 基础", "icon": "📖", "path": "pm" },
    { "id": "pm-skills", "name": "PM 技能", "icon": "🎯", "path": "pm" },
    { "id": "pm-practice", "name": "PM 实战", "icon": "⚔️", "path": "pm" }
  ],
  "modules": [
    // ============ 快速开始 ============
    {
      "id": "5min-start",
      "title": "5分钟快速入门",
      "description": "Claude Code 是什么、怎么装、怎么用",
      "category": "quick-start",
      "level": 1,
      "content": [
        {
          "title": "什么是 Claude Code",
          "description": "Claude Code 是 Anthropic 官方的命令行 AI 编程助手。用自然语言描述任务，它帮你写代码、调试、重构。",
          "tips": [
            "命令行工具，不是 IDE 插件",
            "支持所有编程语言",
            "能理解整个项目上下文",
            "可以执行命令、读写文件"
          ]
        },
        {
          "title": "基本用法",
          "description": "安装后在终端运行 claude 即可启动：",
          "code": "# 启动 Claude Code\nclaude\n\n# 直接执行任务\nclaude \"帮我创建一个登录组件\"\n\n# 在项目目录中启动\ncd my-project && claude",
          "tips": [
            "用自然语言描述需求即可",
            "可以上传文件让它理解上下文",
            "支持多轮对话"
          ]
        },
        {
          "title": "五大核心概念",
          "description": "理解这五个概念是掌握 Claude Code 的关键：",
          "tips": [
            "Rules - 始终遵循的行为规范（安全检查、代码风格）",
            "Commands - 斜杠命令快速执行任务（/plan /tdd）",
            "Skills - 按需加载的领域知识（前端模式、TDD流程）",
            "Agents - 独立的专业子代理（代码审查、安全检查）",
            "Hooks - 事件触发的自动化脚本（拦截危险命令）"
          ]
        },
        {
          "title": "安装必装插件",
          "description": "推荐安装 everything-claude-code 获取 50+ 技能：",
          "code": "# 添加插件市场\n/plugin marketplace add affaan-m/everything-claude-code\n\n# 安装插件\n/plugin install everything-claude-code"
        }
      ],
      "quiz": [
        {
          "text": "Claude Code 是什么类型的工具？",
          "options": ["图形界面设计工具", "命令行编程助手", "数据库管理工具", "版本控制系统"],
          "correct": 1,
          "explanation": "Claude Code 是命令行工具，通过自然语言完成软件工程任务。"
        },
        {
          "text": "如何启动 Claude Code？",
          "options": ["在浏览器打开 claude.com", "运行 claude 命令", "双击桌面图标", "在 IDE 中安装插件"],
          "correct": 1,
          "explanation": "在终端运行 claude 命令即可启动。"
        },
        {
          "text": "以下哪个是 Claude Code 的核心概念？",
          "options": ["Containers（容器）", "Rules（规则）", "Pods（Pod）", "Clusters（集群）"],
          "correct": 1,
          "explanation": "Rules 是 Claude Code 的五大核心概念之一。"
        }
      ]
    },
    // ============ 场景导航 ============
    {
      "id": "scenario-new-feature",
      "title": "💡 我要写新功能",
      "description": "从需求到代码完成的完整流程",
      "category": "scenarios",
      "level": 2,
      "content": [
        {
          "title": "场景描述",
          "description": "当你需要开发一个新功能时，比如「添加用户登录」「实现购物车」等。",
          "tips": [
            "不要直接让 Claude 写代码",
            "先用 /plan 做计划",
            "再用 /tdd 测试驱动开发",
            "最后用 /code-review 审查"
          ]
        },
        {
          "title": "第一步：做计划 /plan",
          "description": "先让 Claude 分析需求、评估风险、制定实施步骤：",
          "code": "/plan 我要添加用户登录功能\n\n# Claude 会：\n# 1. 重述需求\n# 2. 识别依赖和风险\n# 3. 分解为具体步骤\n# 4. 等待你确认后才执行"
        },
        {
          "title": "第二步：测试驱动 /tdd",
          "description": "确认计划后，用 TDD 方式实现：",
          "code": "/tdd 按计划实现用户登录\n\n# Claude 会：\n# 1. 先定义接口\n# 2. 编写失败的测试\n# 3. 实现代码\n# 4. 验证覆盖率 ≥80%"
        },
        {
          "title": "第三步：代码审查 /code-review",
          "description": "实现完成后自动审查代码质量：",
          "code": "/code-review\n\n# 检查项：\n# - Bug 和潜在问题\n# - 安全漏洞\n# - 性能问题\n# - 代码可维护性"
        },
        {
          "title": "完整工作流",
          "description": "新功能开发的标准流程：",
          "code": "你: /plan 添加用户登录功能\nClaude: [输出计划，等待确认]\n你: 确认，开始实施\nClaude: [执行计划]\n你: /code-review\nClaude: [审查结果]\n你: /build-fix（如有错误）\n你: 提交代码"
        }
      ],
      "quiz": [
        {
          "text": "写新功能时，第一步应该做什么？",
          "options": ["直接写代码", "用 /plan 做计划", "写测试", "查文档"],
          "correct": 1,
          "explanation": "先用 /plan 分析需求和风险，制定实施步骤。"
        },
        {
          "text": "/tdd 的作用是什么？",
          "options": ["直接生成代码", "测试驱动开发", "代码审查", "部署应用"],
          "correct": 1,
          "explanation": "/tdd 强制先写测试再写代码，确保覆盖率 ≥80%。"
        }
      ]
    },
    {
      "id": "scenario-fix-bug",
      "title": "🐛 我要修 Bug",
      "description": "定位问题、修复、验证的完整流程",
      "category": "scenarios",
      "level": 2,
      "content": [
        {
          "title": "场景描述",
          "description": "当遇到报错、测试失败或功能异常时。",
          "tips": [
            "把错误信息贴给 Claude",
            "用 /build-fix 修复构建错误",
            "用 /verify 验证修复"
          ]
        },
        {
          "title": "构建错误：/build-fix",
          "description": "TypeScript 报错、编译失败时使用：",
          "code": "/build-fix\n\n# Claude 会：\n# 1. 分析错误信息\n# 2. 逐个修复问题\n# 3. 最小化改动\n# 4. 验证构建通过"
        },
        {
          "title": "运行时错误",
          "description": "直接把错误堆栈贴给 Claude：",
          "code": "你: 我遇到了这个错误：\n    TypeError: Cannot read property 'x' of undefined\n    at UserComponent.render (UserComponent.tsx:15)\n\nClaude: [分析原因，给出修复方案]"
        },
        {
          "title": "验证修复：/verify",
          "description": "修复后验证功能正常：",
          "code": "/verify\n\n# 验证项：\n# - 构建通过\n# - 测试通过\n# - 功能正常"
        }
      ],
      "quiz": [
        {
          "text": "构建失败时应该用什么命令？",
          "options": ["/plan", "/build-fix", "/code-review", "/deploy"],
          "correct": 1,
          "explanation": "/build-fix 专门修复构建错误和类型错误。"
        },
        {
          "text": "遇到运行时错误应该怎么做？",
          "options": ["重启电脑", "把错误信息贴给 Claude", "删除代码", "忽略错误"],
          "correct": 1,
          "explanation": "直接把错误堆栈贴给 Claude，它会分析原因并给出修复方案。"
        }
      ]
    },
    {
      "id": "scenario-refactor",
      "title": "🔧 我要重构代码",
      "description": "清理代码、优化结构、提升质量",
      "category": "scenarios",
      "level": 2,
      "content": [
        {
          "title": "场景描述",
          "description": "当代码变得臃肿、难以维护时，需要重构。",
          "tips": [
            "用 /refactor-clean 清理死代码",
            "用 /security-review 检查安全",
            "重构后运行测试确保不破坏功能"
          ]
        },
        {
          "title": "清理死代码：/refactor-clean",
          "description": "找出并删除未使用的代码：",
          "code": "/refactor-clean\n\n# Claude 会：\n# 1. 扫描未使用的导入\n# 2. 找出未调用的函数\n# 3. 识别重复代码\n# 4. 安全地清理"
        },
        {
          "title": "安全审查：/security-review",
          "description": "检查重构后的代码是否有安全问题：",
          "code": "/security-review\n\n# 检查项：\n# - 硬编码密钥\n# - SQL 注入\n# - XSS 漏洞\n# - CSRF 保护"
        },
        {
          "title": "重构后验证",
          "description": "重构完成后务必验证：",
          "code": "# 运行测试\nnpm test\n\n# 或使用 /verify\n/verify\n\n# 确保功能未破坏"
        }
      ],
      "quiz": [
        {
          "text": "/refactor-clean 的作用是什么？",
          "options": ["添加新功能", "清理死代码和重复代码", "运行测试", "部署应用"],
          "correct": 1,
          "explanation": "/refactor-clean 扫描并清理未使用的代码。"
        },
        {
          "text": "重构后应该做什么？",
          "options": ["直接提交", "运行测试验证功能", "删除所有测试", "忽略结果"],
          "correct": 1,
          "explanation": "重构后必须运行测试确保功能未被破坏。"
        }
      ]
    },
    {
      "id": "scenario-learn",
      "title": "📚 我要学新技能",
      "description": "从会话中提取模式，让 Claude 越用越聪明",
      "category": "scenarios",
      "level": 2,
      "content": [
        {
          "title": "场景描述",
          "description": "当 Claude 帮你解决了一个问题，你可以让它记住这个模式。",
          "tips": [
            "用 /learn 提取可复用模式",
            "用 /learn-eval 评估质量",
            "用 /instinct-status 查看已学习的直觉"
          ]
        },
        {
          "title": "提取模式：/learn",
          "description": "从当前会话中提取可复用的模式：",
          "code": "/learn\n\n# Claude 会：\n# 1. 分析会话中的模式\n# 2. 提取可复用的部分\n# 3. 保存为直觉（instinct）"
        },
        {
          "title": "评估并保存：/learn-eval",
          "description": "提取模式并评估质量：",
          "code": "/learn-eval\n\n# Claude 会：\n# 1. 提取模式\n# 2. 自我评估质量\n# 3. 决定保存位置（全局/项目）"
        },
        {
          "title": "查看学习状态",
          "description": "查看已学习的直觉和技能：",
          "code": "/instinct-status\n\n# 输出示例：\n# PROJECT-SCOPED (my-app)\n#   70%  grep-before-edit\n# GLOBAL\n#   85%  validate-user-input"
        }
      ],
      "quiz": [
        {
          "text": "/learn 的作用是什么？",
          "options": ["在线学习课程", "从会话中提取可复用模式", "下载插件", "更新系统"],
          "correct": 1,
          "explanation": "/learn 从当前会话中提取可复用的模式并保存。"
        },
        {
          "text": "如何查看已学习的直觉？",
          "options": ["/skills", "/instinct-status", "/config", "/list"],
          "correct": 1,
          "explanation": "使用 /instinct-status 查看已学习的直觉及其置信度。"
        }
      ]
    },
    {
      "id": "scenario-automate",
      "title": "🔄 我要自动化任务",
      "description": "定时执行、循环任务、工作流编排",
      "category": "scenarios",
      "level": 3,
      "content": [
        {
          "title": "场景描述",
          "description": "当有重复性任务需要定时执行时。",
          "tips": [
            "用 /loop 设置循环任务",
            "用 /orchestrate 编排多 Agent",
            "用 /multi-workflow 多模型协作"
          ]
        },
        {
          "title": "循环任务：/loop",
          "description": "设置定时执行的任务：",
          "code": "# 每5分钟检查部署状态\n/loop 5m 检查部署状态\n\n# 每小时运行测试\n/loop 1h npm test\n\n# 查看循环状态\n/loop-status"
        },
        {
          "title": "多模型协作：/multi-workflow",
          "description": "让多个模型协作完成复杂任务：",
          "code": "/multi-workflow\n\n# Claude 会：\n# 1. 分析任务\n# 2. 分配给不同模型\n# 3. 并行执行\n# 4. 整合结果"
        }
      ],
      "quiz": [
        {
          "text": "/loop 的作用是什么？",
          "options": ["循环代码", "设置定时执行的任务", "循环播放音乐", "创建循环"],
          "correct": 1,
          "explanation": "/loop 设置定时或循环执行的任务。"
        }
      ]
    },
    // ============ 核心工具 ============
    {
      "id": "tool-plan",
      "title": "/plan - 计划命令",
      "description": "写代码前先做计划，等确认再动手",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "复杂任务先做计划，分解步骤，等用户确认后再执行。"
        },
        {
          "title": "什么时候用",
          "description": "以下场景推荐使用 /plan：",
          "tips": [
            "开始新功能前",
            "不确定怎么做时",
            "改动涉及多个文件时",
            "需要评估风险时"
          ]
        },
        {
          "title": "怎么用",
          "description": "用法示例：",
          "code": "/plan 添加用户登录功能\n/plan 重构数据库层\n/plan 升级到 React 18"
        },
        {
          "title": "输出内容",
          "description": "/plan 会输出：",
          "tips": [
            "需求重述 - 确认理解正确",
            "风险识别 - 可能的问题",
            "分步计划 - 具体实施步骤",
            "等待确认 - 不会自动执行"
          ]
        },
        {
          "title": "实际效果",
          "description": "真实对话示例：",
          "code": "你: /plan 添加用户登录功能\n\nClaude:\n# 实施计划：用户登录功能\n\n## 需求重述\n- 用户可以通过邮箱/密码登录\n- 支持记住我功能\n- 登录失败有错误提示\n\n## 风险识别\n- MEDIUM: 密码存储安全\n- LOW: 并发登录处理\n\n## 实施步骤\n1. 创建登录表单组件\n2. 实现 API 端点\n3. 添加 token 管理\n4. 处理错误情况\n\n**等待确认**: 是否开始实施？"
        },
        {
          "title": "常见问题",
          "description": "Q&A：",
          "tips": [
            "Q: 计划太长怎么办？",
            "A: 可以说\"简化计划，只保留核心步骤\"",
            "Q: 计划不对怎么办？",
            "A: 可以说\"修改计划：xxx\""
          ]
        }
      ],
      "quiz": [
        {
          "text": "/plan 命令会自动执行吗？",
          "options": ["会自动执行", "不会，等待用户确认", "有时会有时不会", "取决于设置"],
          "correct": 1,
          "explanation": "/plan 只输出计划，等待用户确认后才会执行。"
        },
        {
          "text": "什么时候应该用 /plan？",
          "options": ["写一行代码时", "改动涉及多个文件时", "只改一个变量时", "任何时候"],
          "correct": 1,
          "explanation": "/plan 适合复杂任务、多文件改动、不确定怎么做时使用。"
        }
      ]
    },
    {
      "id": "tool-tdd",
      "title": "/tdd - 测试驱动开发",
      "description": "强制先写测试再写代码",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "先写失败的测试，再实现代码，最后重构。"
        },
        {
          "title": "什么时候用",
          "description": "以下场景推荐使用 /tdd：",
          "tips": [
            "开发新功能时",
            "修复 Bug 时",
            "重构代码时",
            "追求高质量代码时"
          ]
        },
        {
          "title": "怎么用",
          "description": "用法示例：",
          "code": "/tdd 实现用户注册功能\n/tdd 修复登录验证的 Bug\n/tdd 重构支付模块"
        },
        {
          "title": "TDD 流程",
          "description": "RED-GREEN-REFACTOR 循环：",
          "tips": [
            "RED - 先写失败的测试",
            "GREEN - 写最少的代码使测试通过",
            "REFACTOR - 重构代码，保持测试通过",
            "覆盖率要求 ≥80%"
          ]
        },
        {
          "title": "实际效果",
          "description": "真实对话示例：",
          "code": "你: /tdd 实现用户注册功能\n\nClaude:\n# TDD: 用户注册功能\n\n## Step 1: 定义接口\ninterface User {\n  email: string\n  password: string\n}\n\n## Step 2: 编写失败的测试 (RED)\ntest('注册成功返回用户', () => {\n  const result = register({email: 'a@b.com', password: '123'})\n  expect(result.success).toBe(true)\n})\n// 测试失败 ✓\n\n## Step 3: 实现代码 (GREEN)\nfunction register(user) {\n  return { success: true, user }\n}\n// 测试通过 ✓\n\n## Step 4: 重构 (REFACTOR)\n// 添加验证逻辑..."
        }
      ],
      "quiz": [
        {
          "text": "TDD 的正确顺序是什么？",
          "options": ["实现→测试→重构", "测试→实现→重构", "重构→测试→实现", "设计→实现→测试"],
          "correct": 1,
          "explanation": "TDD 正确顺序：先写测试（RED），再实现（GREEN），最后重构（REFACTOR）。"
        },
        {
          "text": "/tdd 要求最低多少覆盖率？",
          "options": ["50%", "60%", "80%", "100%"],
          "correct": 2,
          "explanation": "/tdd 要求最低 80% 测试覆盖率。"
        }
      ]
    },
    {
      "id": "tool-code-review",
      "title": "/code-review - 代码审查",
      "description": "自动审查代码质量、安全性和最佳实践",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "审查代码的 Bug、安全漏洞、性能问题和可维护性。"
        },
        {
          "title": "什么时候用",
          "description": "以下场景推荐使用：",
          "tips": [
            "写完代码后",
            "提交 PR 前",
            "重构后",
            "接手别人代码时"
          ]
        },
        {
          "title": "怎么用",
          "description": "直接运行：",
          "code": "/code-review\n\n# 或指定文件\n/code-review src/auth.ts"
        },
        {
          "title": "检查项",
          "description": "代码审查会检查：",
          "tips": [
            "Bug 和潜在问题",
            "安全漏洞（OWASP Top 10）",
            "性能问题",
            "代码可维护性",
            "最佳实践"
          ]
        },
        {
          "title": "输出格式",
          "description": "审查结果示例：",
          "code": "# 代码审查报告\n\n## 🔴 CRITICAL\n- auth.ts:15 - SQL 注入风险\n  建议：使用参数化查询\n\n## 🟡 HIGH\n- user.ts:42 - 未处理的 Promise\n  建议：添加 try-catch\n\n## 🟢 MEDIUM\n- utils.ts:10 - 重复代码\n  建议：提取为公共函数"
        }
      ],
      "quiz": [
        {
          "text": "/code-review 会检查什么？",
          "options": ["只检查格式", "Bug、安全、性能、可维护性", "只检查安全", "只检查性能"],
          "correct": 1,
          "explanation": "/code-review 全面检查代码质量，包括 Bug、安全、性能和可维护性。"
        }
      ]
    },
    {
      "id": "tool-build-fix",
      "title": "/build-fix - 构建修复",
      "description": "修复构建错误、TypeScript 错误、linter 警告",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "自动分析并修复构建失败和类型错误。"
        },
        {
          "title": "什么时候用",
          "description": "以下场景使用：",
          "tips": [
            "npm run build 失败时",
            "TypeScript 报错时",
            "ESLint 警告时",
            "CI 构建失败时"
          ]
        },
        {
          "title": "怎么用",
          "description": "直接运行：",
          "code": "/build-fix\n\n# Claude 会：\n# 1. 分析错误信息\n# 2. 逐个修复问题\n# 3. 最小化改动\n# 4. 验证构建通过"
        },
        {
          "title": "修复策略",
          "description": "/build-fix 的修复原则：",
          "tips": [
            "最小修改 - 只改必要的",
            "不改架构 - 只修错误",
            "逐个修复 - 一次解决一个问题",
            "验证通过 - 修复后确认构建成功"
          ]
        }
      ],
      "quiz": [
        {
          "text": "/build-fix 的修复原则是什么？",
          "options": ["大范围重构", "最小修改，只改必要的", "删除所有报错文件", "忽略错误"],
          "correct": 1,
          "explanation": "/build-fix 采用最小修改策略，只修复错误不改变架构。"
        }
      ]
    },
    {
      "id": "tool-verify",
      "title": "/verify - 验证命令",
      "description": "运行验证循环，确保代码质量",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "验证代码是否通过构建、测试和功能检查。"
        },
        {
          "title": "什么时候用",
          "description": "以下场景使用：",
          "tips": [
            "修复 Bug 后",
            "重构后",
            "提交代码前",
            "部署前"
          ]
        },
        {
          "title": "怎么用",
          "description": "直接运行：",
          "code": "/verify\n\n# 验证项：\n# - 构建通过\n# - 测试通过\n# - 代码检查通过\n# - 功能正常"
        }
      ],
      "quiz": [
        {
          "text": "/verify 会验证什么？",
          "options": ["只验证构建", "构建、测试、功能检查", "只验证测试", "只验证格式"],
          "correct": 1,
          "explanation": "/verify 验证构建、测试和功能是否都通过。"
        }
      ]
    },
    {
      "id": "tool-learn",
      "title": "/learn - 学习命令",
      "description": "从会话中提取可复用模式",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "从当前会话中提取可复用的模式并保存。"
        },
        {
          "title": "什么时候用",
          "description": "以下场景使用：",
          "tips": [
            "Claude 帮你解决了问题后",
            "发现有用的模式时",
            "想记住某个方法时"
          ]
        },
        {
          "title": "怎么用",
          "description": "直接运行：",
          "code": "/learn\n\n# Claude 会：\n# 1. 分析会话内容\n# 2. 提取可复用模式\n# 3. 保存为直觉"
        },
        {
          "title": "相关命令",
          "description": "学习相关命令：",
          "code": "/learn          # 提取模式\n/learn-eval     # 提取并评估质量\n/instinct-status # 查看已学习的直觉\n/evolve         # 将直觉进化为技能"
        }
      ],
      "quiz": [
        {
          "text": "/learn 会保存什么？",
          "options": ["整个会话", "可复用的模式", "所有代码", "错误信息"],
          "correct": 1,
          "explanation": "/learn 从会话中提取可复用的模式并保存为直觉。"
        }
      ]
    },
    {
      "id": "tool-security-review",
      "title": "/security-review - 安全审查",
      "description": "检查代码中的安全漏洞",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "专门检查代码中的安全漏洞和风险。"
        },
        {
          "title": "检查项",
          "description": "安全审查会检查：",
          "tips": [
            "硬编码密钥（API keys, passwords）",
            "SQL 注入",
            "XSS 漏洞",
            "CSRF 保护",
            "输入验证",
            "OWASP Top 10"
          ]
        },
        {
          "title": "怎么用",
          "description": "直接运行：",
          "code": "/security-review\n\n# 或指定文件\n/security-review src/auth/"
        },
        {
          "title": "什么时候用",
          "description": "以下场景必须使用：",
          "tips": [
            "处理用户输入时",
            "添加认证功能时",
            "处理敏感数据时",
            "提交代码前"
          ]
        }
      ],
      "quiz": [
        {
          "text": "/security-review 参考什么标准？",
          "options": ["ISO 9001", "OWASP Top 10", "GDPR", "PCI DSS"],
          "correct": 1,
          "explanation": "/security-review 主要参考 OWASP Top 10 安全风险进行检查。"
        }
      ]
    },
    {
      "id": "tool-refactor-clean",
      "title": "/refactor-clean - 重构清理",
      "description": "清理死代码和重复代码",
      "category": "tools",
      "level": 2,
      "content": [
        {
          "title": "一句话说明",
          "description": "扫描并清理未使用的代码、重复代码。"
        },
        {
          "title": "清理内容",
          "description": "会清理：",
          "tips": [
            "未使用的导入",
            "未调用的函数",
            "未使用的变量",
            "重复的代码"
          ]
        },
        {
          "title": "怎么用",
          "description": "直接运行：",
          "code": "/refactor-clean\n\n# Claude 会：\n# 1. 扫描项目\n# 2. 找出死代码\n# 3. 安全地删除"
        }
      ],
      "quiz": [
        {
          "text": "/refactor-clean 会清理什么？",
          "options": ["所有代码", "未使用的代码和重复代码", "只清理注释", "只清理空行"],
          "correct": 1,
          "explanation": "/refactor-clean 清理未使用的导入、函数、变量和重复代码。"
        }
      ]
    },
    {
      "id": "tool-loop",
      "title": "/loop - 循环任务",
      "description": "设置定时执行的任务",
      "category": "tools",
      "level": 3,
      "content": [
        {
          "title": "一句话说明",
          "description": "设置定时或循环执行的任务。"
        },
        {
          "title": "怎么用",
          "description": "用法示例：",
          "code": "# 每5分钟检查部署\n/loop 5m 检查部署状态\n\n# 每小时运行测试\n/loop 1h npm test\n\n# 每天9点提醒\n/loop 9am 提醒我开会"
        },
        {
          "title": "相关命令",
          "description": "循环任务相关：",
          "code": "/loop 5m <任务>   # 设置循环\n/loop-status       # 查看状态"
        }
      ],
      "quiz": [
        {
          "text": "/loop 5m 表示什么？",
          "options": ["循环5次", "每5分钟执行一次", "5分钟后执行", "执行5分钟"],
          "correct": 1,
          "explanation": "/loop 5m 表示每5分钟执行一次任务。"
        }
      ]
    },
    // ============ 实战案例 ============
    {
      "id": "case-full-project",
      "title": "案例：从零搭建项目",
      "description": "完整演示如何用 Claude Code 创建一个新项目",
      "category": "practice",
      "level": 4,
      "content": [
        {
          "title": "场景",
          "description": "假设你要创建一个用户管理系统，包含登录、注册、权限管理功能。"
        },
        {
          "title": "Step 1: 做计划",
          "description": "先用 /plan 分析需求：",
          "code": "你: /plan 创建一个用户管理系统\n    - 用户登录/注册\n    - 角色权限管理\n    - 用户列表CRUD\n\nClaude: [输出详细计划，等待确认]"
        },
        {
          "title": "Step 2: 初始化项目",
          "description": "确认计划后开始：",
          "code": "你: 确认，开始实施\n\nClaude: [创建项目结构]\n├── src/\n│   ├── auth/     # 认证模块\n│   ├── users/    # 用户模块\n│   └── roles/    # 角色模块\n├── tests/\n└── package.json"
        },
        {
          "title": "Step 3: TDD 开发",
          "description": "用 /tdd 逐个实现功能：",
          "code": "你: /tdd 实现用户注册功能\n\nClaude: [先写测试，再实现代码]\n\n你: /tdd 实现用户登录功能\n\nClaude: [先写测试，再实现代码]"
        },
        {
          "title": "Step 4: 代码审查",
          "description": "开发完成后审查：",
          "code": "你: /code-review\n\nClaude: [输出审查报告]\n\n你: /security-review\n\nClaude: [输出安全审查报告]"
        },
        {
          "title": "Step 5: 验证和提交",
          "description": "最后验证并提交：",
          "code": "你: /verify\n\nClaude: [验证构建和测试通过]\n\n你: 提交代码\n\nClaude: [生成 commit message 并提交]"
        }
      ],
      "quiz": [
        {
          "text": "从零搭建项目的正确顺序是什么？",
          "options": [
            "直接写代码→测试→提交",
            "/plan→/tdd→/code-review→/verify→提交",
            "测试→写代码→审查",
            "复制代码→修改→提交"
          ],
          "correct": 1,
          "explanation": "推荐流程：/plan 做计划 → /tdd 测试驱动开发 → /code-review 审查 → /verify 验证 → 提交。"
        }
      ]
    },
    {
      "id": "case-legacy-refactor",
      "title": "案例：重构遗留代码",
      "description": "演示如何安全地重构老旧代码",
      "category": "practice",
      "level": 4,
      "content": [
        {
          "title": "场景",
          "description": "你接手了一个老旧项目，代码臃肿、没有测试，需要重构。"
        },
        {
          "title": "Step 1: 理解代码",
          "description": "先让 Claude 分析代码结构：",
          "code": "你: 分析这个项目的代码结构\n\nClaude: [输出项目结构分析]\n- 主要模块：xxx\n- 依赖关系：xxx\n- 问题点：xxx"
        },
        {
          "title": "Step 2: 添加测试",
          "description": "重构前先添加测试保护：",
          "code": "你: /tdd 为核心功能添加测试\n\nClaude: [为核心功能编写测试]\n\n你: 运行测试\n\nClaude: [测试通过，可以安全重构]"
        },
        {
          "title": "Step 3: 清理死代码",
          "description": "清理未使用的代码：",
          "code": "你: /refactor-clean\n\nClaude: [找出并删除死代码]\n- 删除未使用导入：15处\n- 删除未调用函数：3个\n- 合并重复代码：5处"
        },
        {
          "title": "Step 4: 验证重构",
          "description": "重构后验证功能未破坏：",
          "code": "你: /verify\n\nClaude: [验证通过]\n✓ 构建成功\n✓ 测试通过\n✓ 功能正常"
        }
      ],
      "quiz": [
        {
          "text": "重构遗留代码前应该先做什么？",
          "options": ["直接删除代码", "添加测试保护", "忽略测试", "重写整个项目"],
          "correct": 1,
          "explanation": "重构前必须先添加测试，确保重构不会破坏现有功能。"
        }
      ]
    },
    // ============ 5个顶级工程技巧 ============
    {
      "id": "top5-engineering-tips",
      "title": "🏆 5个顶级工程技巧",
      "description": "从 PRD 到系统进化，10倍提升 AI 编程效率",
      "category": "practice",
      "level": 3,
      "content": [
        {
          "title": "技巧概览",
          "description": "这5个技巧的核心是流程优化而非工具选择，通过系统化方法将 AI 编程助手的潜力提升10倍：",
          "tips": [
            "1. PRD优先开发 - 项目的北极星",
            "2. 模块化规则架构 - 精简上下文窗口",
            "3. 命令化一切 - 复用工作流程",
            "4. 上下文重置 - 规划与执行分离",
            "5. 系统进化 - 将Bug转化为改进机会"
          ]
        },
        {
          "title": "技巧1：PRD优先开发",
          "description": "PRD（产品需求文档）是项目的「北极星」，避免 AI 助手因任务过载而崩溃。",
          "tips": [
            "用 /plan 或 create-prd 命令生成 PRD",
            "PRD 需包含「包含的内容」和「不包含的内容」，明确边界",
            "每次开发新功能前，加载 PRD 上下文",
            "目标用户、核心功能、架构布局都要写清楚"
          ],
          "code": "# PRD 结构示例\n## 项目概述\n- 目标用户：xxx\n- 核心价值：xxx\n\n## 功能范围\n### 包含\n- 用户登录/注册\n- 数据看板\n\n### 不包含\n- 支付功能（v2）\n- 多语言支持（v3）"
        },
        {
          "title": "技巧2：模块化规则架构",
          "description": "全局规则过长会导致 LLM 性能下降，需要模块化拆分。",
          "tips": [
            "全局规则：保持简短（<200行），仅包含通用规则",
            "任务特定规则：将前端、API、部署等详细规则拆分为独立文档",
            "通过全局规则的「参考部分」动态加载",
            "API 开发时只加载 API 专用规则"
          ],
          "code": "# 全局规则结构（精简版）\n\n## 技术栈\n- 前端：React + TypeScript\n- 后端：Node.js + Express\n- 测试：Jest + 80%覆盖率\n\n## 任务特定规则（按需加载）\n- 参见：rules/frontend.md\n- 参见：rules/api.md\n- 参见：rules/deploy.md"
        },
        {
          "title": "技巧3：命令化一切",
          "description": "将重复使用的提示转化为可复用的命令，节省时间并提高一致性。",
          "tips": [
            "开发流程命令：create-prd、prime、execute",
            "日常操作命令：commit、code-review",
            "一个命令 = 一个 Markdown 文件",
            "放在 .claude/commands/ 目录"
          ],
          "code": "# 自定义命令示例：prime.md\n---\ndescription: 加载项目上下文\n---\n\n请阅读以下文件并理解项目上下文：\n1. PRD.md - 产品需求\n2. ARCHITECTURE.md - 架构设计\n3. docs/api.md - API 文档\n\n确认你已理解项目背景后回复「已就绪」。"
        },
        {
          "title": "技巧4：上下文重置",
          "description": "规划阶段的上下文会干扰执行阶段的代码生成，需要分离。",
          "tips": [
            "规划阶段：加载项目上下文，与 AI 讨论，生成结构化计划",
            "执行阶段：清空上下文，只加载计划文档",
            "减少上下文干扰，提升代码质量",
            "用 /compact 或新会话来重置"
          ],
          "code": "# 规划与执行分离流程\n\n## 规划阶段\n1. /plan 添加购物车功能\n2. Claude 输出详细计划\n3. 保存计划到 plans/cart.md\n\n## 执行阶段（新会话）\n1. 清空上下文（新开窗口）\n2. 让 Claude 读取 plans/cart.md\n3. 按计划执行，专注代码生成"
        },
        {
          "title": "技巧5：系统进化",
          "description": "每个 Bug 都是优化 AI 助手系统的机会，而非简单修复。",
          "tips": [
            "分析原因：规则缺失？验证漏洞？命令缺陷？",
            "规则缺失 → 在全局/任务规则中添加约束",
            "验证漏洞 → 更新计划模板，加入测试环节",
            "命令缺陷 → 修改或创建新命令"
          ],
          "code": "# Bug 转化为系统改进示例\n\n## 问题\nAI 多次使用错误的导入风格（CommonJS vs ES6）\n\n## 分析\n规则缺失：全局规则没有明确导入规范\n\n## 改进\n在全局规则添加：\n\"\"\"\n## 导入规范\n- 统一使用 ES6 模块语法\n- 使用 import/export，不用 require\n- 示例：import { foo } from './bar'\n\"\"\""
        },
        {
          "title": "完整工作流",
          "description": "5个技巧的协同使用流程：",
          "code": "# 顶级工程工作流\n\n1. 【PRD优先】先写 PRD，明确范围\n   ↓\n2. 【模块化规则】配置简洁的全局规则 + 任务特定规则\n   ↓\n3. 【命令化】创建 prime、execute 等命令\n   ↓\n4. 【上下文分离】规划在新会话，执行在干净上下文\n   ↓\n5. 【系统进化】遇到 Bug 时改进规则/命令\n   ↓\n   效率提升 10 倍！"
        }
      ],
      "quiz": [
        {
          "text": "PRD 应该包含什么？",
          "options": ["只有功能列表", "包含的内容 + 不包含的内容 + 目标用户", "只有技术架构", "只有代码示例"],
          "correct": 1,
          "explanation": "PRD 需要明确边界，包含「包含的内容」和「不包含的内容」，以及目标用户和核心功能。"
        },
        {
          "text": "全局规则应该多长？",
          "options": ["越长越好", "小于 200 行", "至少 500 行", "不需要全局规则"],
          "correct": 1,
          "explanation": "全局规则过长会导致 LLM 性能下降，应保持在 200 行以内，详细规则拆分为任务特定文档。"
        },
        {
          "text": "为什么要分离规划和执行阶段？",
          "options": ["减少上下文干扰，提升代码质量", "节省 token", "让 AI 更累", "没有原因"],
          "correct": 0,
          "explanation": "规划阶段的上下文会干扰执行阶段的代码生成，分离后 AI 能更专注于代码生成。"
        },
        {
          "text": "遇到 Bug 时应该怎么做？",
          "options": ["只修复 Bug", "分析原因并改进规则/命令", "忽略 Bug", "重写整个系统"],
          "correct": 1,
          "explanation": "每个 Bug 都是优化系统的机会，应该分析是规则缺失、验证漏洞还是命令缺陷，然后针对性改进。"
        },
        {
          "text": "命令化的核心思想是什么？",
          "options": ["写更长的提示", "将重复提示转化为可复用的命令", "不使用命令", "只用内置命令"],
          "correct": 1,
          "explanation": "命令化是将重复使用的提示转化为可复用的 Markdown 文档，节省时间并提高一致性。"
        }
      ]
    },
    // ============ 深度学习 ============
    {
      "id": "rules-guide",
      "title": "📖 Rules 完全指南",
      "description": "始终生效的行为规范",
      "category": "deep-dive",
      "level": 2,
      "content": [
        {
          "title": "核心概念",
          "description": "Rules = 注入系统提示词 + 始终生效 + 定义行为规范",
          "memoryCard": {
            "title": "Rules 速记卡",
            "rows": [
              ["位置", "~/.claude/rules/ 或 .claude/rules/"],
              ["格式", "Markdown (.md)"],
              ["加载", "启动时自动，始终生效"],
              ["优先级", "项目级 > 用户级"],
              ["作用", "定义 Claude 的行为规范"]
            ]
          },
          "practice": {
            "title": "查看你的 Rules",
            "code": "# 查看用户级 rules\nls ~/.claude/rules/\n\n# 查看项目级 rules\nls .claude/rules/"
          }
        },
        {
          "title": "底层原理",
          "description": "Rules 被注入到每次对话的系统提示词中，Claude 每次都会参考这些规范",
          "diagram": {
            "title": "Prompt 注入流程",
            "ascii": "用户输入 → [系统提示词] → Claude\n              ↑\n         Rules 内容被注入到这里"
          }
        },
        {
          "title": "实际例子",
          "description": "安全规则会在每次写代码时提醒 Claude 检查安全问题",
          "memoryCard": {
            "title": "安全检查清单",
            "rows": [
              ["❌ 硬编码密钥", "API keys, passwords, tokens"],
              ["✅ 输入验证", "所有用户输入已验证"],
              ["✅ SQL 防护", "使用参数化查询"],
              ["✅ XSS 防护", "HTML 转义"],
              ["✅ 环境变量", "敏感信息存环境变量"]
            ]
          },
          "practice": {
            "title": "创建你的第一个 Rule",
            "code": "# 创建规则文件\necho \"# My Rule\\nAlways add comments to functions.\" > ~/.claude/rules/my-rule.md"
          }
        }
      ],
      "quiz": [
        {
          "text": "Rules 什么时候被加载？",
          "options": ["手动调用", "启动时自动", "需要时", "从不"],
          "correct": 1,
          "explanation": "Rules 在启动时自动加载，始终生效。"
        },
        {
          "text": "项目级和用户级 Rules 谁优先？",
          "options": ["用户级", "项目级", "相同优先级", "互相覆盖"],
          "correct": 1,
          "explanation": "项目级规则会覆盖用户级规则。"
        },
        {
          "text": "Rules 用什么格式？",
          "options": ["JSON", "YAML", "Markdown", "XML"],
          "correct": 2,
          "explanation": "Rules 使用 Markdown 格式 (.md)"
        },
        {
          "text": "Rules 和 Skills 的主要区别？",
          "options": ["没有区别", "Rules 始终生效，Skills 按需加载", "Skills 始终生效", "只是文件名不同"],
          "correct": 1,
          "explanation": "Rules 始终生效，Skills 按需加载。"
        },
        {
          "text": "以下哪个是安全违规？",
          "options": ["使用环境变量", "硬编码 API 密钥", "参数化查询", "输入验证"],
          "correct": 1,
          "explanation": "硬编码密钥是严重的安全违规。"
        }
      ]
    },
    {
      "id": "commands-guide",
      "title": "📖 Commands 完全指南",
      "description": "斜杠命令快速执行任务",
      "category": "deep-dive",
      "level": 2,
      "content": [
        {
          "title": "核心概念",
          "description": "Commands = 预定义 prompt 模板 + / 开头 + 快速执行常用任务",
          "memoryCard": {
            "title": "Commands 速记卡",
            "rows": [
              ["触发", "输入 /命令名"],
              ["本质", "预定义的 prompt 模板"],
              ["位置", ".claude/commands/*.md"],
              ["配置", "frontmatter 定义 allowed-tools"]
            ]
          },
          "practice": {
            "title": "试试内置命令",
            "code": "/help      # 查看帮助\n/clear     # 清空对话\n/compact   # 压缩上下文\n/cost      # 查看成本"
          }
        },
        {
          "title": "执行流程",
          "description": "输入命令 → 查找文件 → 解析配置 → 读取内容 → 执行任务",
          "diagram": {
            "title": "命令执行流程",
            "ascii": "/my-cmd\n   ↓\n查找 commands/my-cmd.md\n   ↓\n解析 frontmatter\n   ↓\n读取 prompt 内容\n   ↓\n执行任务"
          }
        },
        {
          "title": "创建自定义命令",
          "description": "在 .claude/commands/ 创建 .md 文件即可",
          "practice": {
            "title": "创建 hello 命令",
            "code": "# 创建命令目录\nmkdir -p .claude/commands\n\n# 创建命令文件\ncat > .claude/commands/hello.md << 'EOF'\n---\ndescription: 打招呼\n---\n\n请友好地向用户打招呼，介绍你自己。\nEOF"
          }
        }
      ],
      "quiz": [
        {
          "text": "Commands 以什么开头？",
          "options": ["@", "/", "#", "$"],
          "correct": 1,
          "explanation": "Commands 以斜杠 / 开头"
        },
        {
          "text": "Commands 本质是什么？",
          "options": ["可执行脚本", "预定义 prompt 模板", "数据库", "配置文件"],
          "correct": 1,
          "explanation": "Commands 是预定义的 prompt 模板。"
        },
        {
          "text": "自定义 Commands 放哪里？",
          "options": ["~/.claude/rules/", ".claude/commands/", "~/.claude/agents/", ".claude/skills/"],
          "correct": 1,
          "explanation": "自定义 Commands 放在 .claude/commands/"
        },
        {
          "text": "frontmatter 可以配置什么？",
          "options": ["文件大小", "allowed-tools", "网络超时", "内存"],
          "correct": 1,
          "explanation": "frontmatter 可配置 allowed-tools 限制可用工具。"
        },
        {
          "text": "/help 命令的作用？",
          "options": ["写代码", "查看帮助", "执行测试", "部署应用"],
          "correct": 1,
          "explanation": "/help 查看帮助信息。"
        }
      ]
    },
    {
      "id": "agents-guide",
      "title": "📖 Agents 完全指南",
      "description": "独立的专业子代理",
      "category": "deep-dive",
      "level": 2,
      "content": [
        {
          "title": "核心概念",
          "description": "Agents = 独立 Claude 实例 + 专属工具集 + 隔离上下文 + 可并行",
          "memoryCard": {
            "title": "Agents 速记卡",
            "rows": [
              ["上下文", "完全隔离，看不到主对话历史"],
              ["工具", "只能用 tools 配置的工具"],
              ["模型", "可通过 model 配置"],
              ["执行", "可并行执行多个 Agent"],
              ["文件", ".claude/agents/*.md"]
            ]
          }
        },
        {
          "title": "工具限制机制",
          "description": "tools 配置是安全机制，限制 Agent 只能做特定操作",
          "memoryCard": {
            "title": "常见工具组合",
            "rows": [
              ["只读审查", "Glob, Grep, Read"],
              ["可以执行", "+ Bash"],
              ["可以修改", "+ Write, Edit"],
              ["完全控制", "+ 所有工具"]
            ]
          },
          "practice": {
            "title": "思考题",
            "steps": [
              "Q: 为什么 code-reviewer 没有 Write 工具？",
              "A: 如果审查 Agent 能写文件可能意外修改代码",
              "结论: 不给 Write 是安全设计"
            ]
          }
        },
        {
          "title": "并行执行优势",
          "description": "多个 Agent 同时工作，最后整合结果",
          "diagram": {
            "title": "并行审查示例",
            "ascii": "     ┌─ Agent1: CLAUDE.md 合规检查\n主 Claude ─┼─ Agent2: Bug 扫描\n     ├─ Agent3: Git 历史分析\n     └─ Agent4: PR 评论检查\n           ↓\n      整合结果 → 最终报告"
          }
        }
      ],
      "quiz": [
        {
          "text": "Agent 的上下文和主对话是？",
          "options": ["完全共享", "完全隔离", "部分共享", "可配置"],
          "correct": 1,
          "explanation": "Agent 有独立上下文，看不到主对话历史。"
        },
        {
          "text": "tools 配置的作用？",
          "options": ["定义格式", "限制可用工具", "设置超时", "配置网络"],
          "correct": 1,
          "explanation": "tools 限制 Agent 只能使用指定工具。"
        },
        {
          "text": "多个 Agent 可以？",
          "options": ["只能顺序", "可以并行", "不能同时", "需要权限"],
          "correct": 1,
          "explanation": "多个 Agent 可以并行执行。"
        },
        {
          "text": "为什么审查 Agent 不给 Write 工具？",
          "options": ["忘记配置", "安全设计", "不存在", "节省资源"],
          "correct": 1,
          "explanation": "不给 Write 确保只审查不修改。"
        },
        {
          "text": "Agent 可以用不同模型吗？",
          "options": ["不行", "可以，通过 model 配置", "只能 Haiku", "只能 Opus"],
          "correct": 1,
          "explanation": "Agent 可通过 model 配置使用不同模型。"
        }
      ]
    },
    {
      "id": "skills-guide",
      "title": "📖 Skills 完全指南",
      "description": "按需加载的领域知识",
      "category": "deep-dive",
      "level": 2,
      "content": [
        {
          "title": "什么是 Skills？",
          "description": "Skills（技能）是 Claude Code 的能力扩展包。把 Claude Code 想象成一个全能但泛的通才工程师，Skills 就是给他额外报的「专业培训课」。",
          "memoryCard": {
            "title": "Skills 能做什么",
            "rows": [
              ["代码审查", "自动检查代码质量、安全漏洞"],
              ["项目记忆", "跨会话保持项目上下文"],
              ["最佳实践", "Spring Boot、Django、Go、Swift 等"],
              ["工程化", "部署、数据库迁移、安全扫描"],
              ["通用能力", "文档处理、内容创作、市场研究"]
            ]
          },
          "practice": {
            "title": "安装第一个 Skill",
            "code": "# 添加 everything-claude-code 市场\n/plugin marketplace add affaan-m/everything-claude-code\n\n# 安装插件（获得 50+ Skills）\n/plugin install everything-claude-code"
          }
        },
        {
          "title": "Skills vs 传统提示词",
          "description": "为什么不直接写 Prompt？用类比来理解：传统提示词像便利贴，Skills 像工作手册。",
          "memoryCard": {
            "title": "对比表格",
            "rows": [
              ["复用性", "每次复制粘贴", "安装一次永久可用"],
              ["跨会话", "新会话需重新提供", "自动加载始终一致"],
              ["触发方式", "手动输入完整提示", "自动感知智能触发"],
              ["团队协作", "难以分享", "可打包成插件共享"],
              ["版本管理", "无法追踪", "支持 Git 版本控制"]
            ]
          }
        },
        {
          "title": "三个核心概念",
          "description": "必须分清 Skill、Plugin、Marketplace 三个概念，否则会装错、找不到、卸载不掉。",
          "memoryCard": {
            "title": "概念速记",
            "rows": [
              ["Skill（技能）", "最小能力单元", "必须包含 SKILL.md"],
              ["Plugin（插件）", "安装的最小单位", "包含 plugin.json"],
              ["Marketplace（市场）", "插件的集合仓库", "像应用商店"]
            ]
          },
          "diagram": {
            "title": "三者关系",
            "ascii": "Marketplace（市场）\n└── Plugin（插件）← 安装的最小单位\n    ├── plugin.json（必需）\n    ├── Skill A（技能）\n    │   └── SKILL.md（必需）\n    ├── Skill B（技能）\n    ├── Command（命令）\n    └── Hook（钩子）"
          }
        },
        {
          "title": "文件结构",
          "description": "最简单的 Skill，只需要一个文件夹和一个 SKILL.md 文件。",
          "memoryCard": {
            "title": "核心规则",
            "rows": [
              ["文件夹名", "Skill 的唯一标识"],
              ["SKILL.md", "必须全大写 + .md 小写"],
              ["description", "灵魂：决定何时激活"],
              ["name", "显示名称"],
              ["内容", "领域知识 prompt"]
            ]
          },
          "practice": {
            "title": "SKILL.md 示例",
            "code": "---\nname: explain-code\ndescription: Explains code with visual diagrams\n---\n\nWhen explaining code, always include:\n1. **Start with an analogy**\n2. **Draw a diagram** using ASCII art\n3. **Walk through the code** step-by-step\n4. **Highlight a gotcha** or common mistake"
          }
        },
        {
          "title": "触发机制",
          "description": "大部分 Skills 安装后会自动激活，不需要手动输入命令。Claude Code 会实时分析对话内容、打开的文件类型、项目结构，智能判断该调用哪个 Skill。",
          "memoryCard": {
            "title": "自动激活场景",
            "rows": [
              ["打开 Go 项目", "go-review 自动提供最佳实践"],
              ["粘贴报错堆栈", "调试 Skills 自动分析"],
              ["说 \"帮我提交\"", "Git Skills 生成 commit"],
              ["Spring Boot 加功能", "springboot-patterns 指导"],
              ["上传 PDF 提问", "文档 Skills 自动解析"]
            ]
          }
        },
        {
          "title": "热门 Skills 推荐",
          "description": "精选必装插件，按优先级排序。",
          "memoryCard": {
            "title": "必装插件 Top 3",
            "rows": [
              ["🥇 everything-claude-code", "50+ Skills 全覆盖", "41k+ ⭐"],
              ["🥈 claude-mem", "跨会话记忆", "16k+ ⭐"],
              ["🥉 superpowers", "TDD + 代码审查", "22k+ ⭐"]
            ]
          },
          "practice": {
            "title": "安装必装插件",
            "code": "# 第一优先：everything-claude-code\n/plugin marketplace add affaan-m/everything-claude-code\n/plugin install everything-claude-code\n\n# 第二优先：claude-mem（跨会话记忆）\n/plugin marketplace add thedotmack/claude-mem\n/plugin install claude-mem"
          }
        }
      ],
      "quiz": [
        {
          "text": "Skills 是什么？",
          "options": ["系统命令", "Claude Code 能力扩展包", "数据库插件", "浏览器扩展"],
          "correct": 1,
          "explanation": "Skills 是 Claude Code 的能力扩展包，给 Claude 添加专业领域知识。"
        },
        {
          "text": "传统提示词和 Skills 的主要区别？",
          "options": ["没区别", "Skills 可复用、跨会话、支持版本管理", "提示词更强大", "只是名字不同"],
          "correct": 1,
          "explanation": "Skills 安装一次永久可用，跨会话自动加载，支持 Git 版本控制。"
        },
        {
          "text": "Skill、Plugin、Marketplace 的关系？",
          "options": ["三者相同", "Marketplace > Plugin > Skill", "Skill > Plugin > Marketplace", "没有关系"],
          "correct": 1,
          "explanation": "Marketplace 包含 Plugin，Plugin 包含 Skill，Plugin 是安装的最小单位。"
        },
        {
          "text": "Skill 文件必须命名为什么？",
          "options": ["skill.md", "SKILL.md", "index.md", "main.md"],
          "correct": 1,
          "explanation": "Skill 文件必须命名为 SKILL.md（SKILL 全大写，.md 小写）。"
        },
        {
          "text": "Skills 大部分时候如何触发？",
          "options": ["手动输入命令", "自动感知上下文智能触发", "定时触发", "网络请求触发"],
          "correct": 1,
          "explanation": "Claude Code 会分析对话内容、文件类型，智能判断该调用哪个 Skill。"
        }
      ]
    },
    {
      "id": "skills-advanced",
      "title": "🚀 Skills 进阶实战",
      "description": "精选插件与造工具方法论",
      "category": "deep-dive",
      "level": 2,
      "content": [
        {
          "title": "从用工具到造工具",
          "description": "SkillsMP 平台拥有六万个 Claude 插件，精选 9 个高频实用工具，覆盖三大核心生产场景。",
          "memoryCard": {
            "title": "三大场景速记",
            "rows": [
              ["知识库联动", "外脑整合", "Task planner / NotebookLM / MarkItDown"],
              ["自动化开发", "效率翻倍", "Superpowers / Loop fixer / Frontend UI"],
              ["容灾备份", "数据安全", "Git backup 自动备份"],
              ["工具生成", "造工具", "Skill factory / Dialog solidification"]
            ]
          }
        },
        {
          "title": "知识库联动工具",
          "description": "让 Claude 接入外部知识源，扩展上下文能力。",
          "memoryCard": {
            "title": "三剑客对比",
            "rows": [
              ["Task planner", "生成 taskplan.md", "固化思考过程，解决上下文流失"],
              ["NotebookLM", "Google 知识库", "上传文档后 AI 问答"],
              ["MarkItDown", "格式转换", "PDF/DOCX → Markdown"]
            ]
          },
          "practice": {
            "title": "安装知识库工具",
            "code": "# Task planner - 任务规划师\n/plugin install task-planner\n\n# NotebookLM 集成\n/plugin install notebooklm-integration\n\n# MarkItDown 文档转换\n/plugin install markitdown"
          }
        },
        {
          "title": "自动化开发工具",
          "description": "苏格拉底式追问、死循环修复、UI 生成，让开发效率翻倍。",
          "memoryCard": {
            "title": "自动化三剑客",
            "rows": [
              ["Superpowers", "苏格拉底式追问", "多轮追问梳理需求，生成TDD方案后再编码"],
              ["Loop fixer", "死循环修复器", "自动执行 编辑-运行-报错-修正 直到跑通"],
              ["Design", "现代UI生成", "生成符合现代审美的代码，避免AI塑料感"]
            ]
          },
          "practice": {
            "title": "安装自动化工具",
            "code": "# Superpowers - 苏格拉底式追问\n# 开发者: Jesse Vincent\n# 接收指令后多轮追问，梳理需求边界、异常处理、测试用例\n/plugin install superpowers\n\n# Loop fixer（拉尔夫威格姆）- 死循环代码修复器\n# 自动执行 编辑-运行-报错-修正 循环，直到代码跑通\n# 建议: 设置循环次数限制(5-10次)，避免Token耗尽\n/plugin install loop-fixer\n\n# Design - 现代UI生成\n# 生成符合现代审美的UI代码，避免AI塑料感\n/plugin install design"
          }
        },
        {
          "title": "容灾备份工具",
          "description": "Git backup 自动备份项目状态，防止数据丢失。",
          "memoryCard": {
            "title": "Git backup 要点",
            "rows": [
              ["触发时机", "每次会话结束", "自动执行"],
              ["备份内容", "项目文件 + 对话记录", "完整状态"],
              ["存储位置", "Git 仓库", "可追溯"],
              ["恢复方式", "git checkout", "随时回滚"]
            ]
          },
          "practice": {
            "title": "安装 Git backup",
            "code": "# Git 自动备份\n/plugin install git-backup\n\n# 配置备份间隔（可选）\n/git-backup config --interval 30m"
          }
        },
        {
          "title": "工具生成工具",
          "description": "从对话中提取 Skill，把一次性指令变成可复用工具。",
          "memoryCard": {
            "title": "造工具方法论",
            "rows": [
              ["Skill factory", "对话 → Skill", "从历史对话提取可复用模式"],
              ["Dialog solidification", "固化对话", "把成功的对话流程固化成模板"],
              ["核心价值", "知识沉淀", "一次创造，永久复用"]
            ]
          },
          "practice": {
            "title": "安装工具生成器",
            "code": "# Skill factory - Skill 工厂\n/plugin install skill-factory\n\n# Dialog solidification - 对话固化\n/plugin install dialog-solidification\n\n# 使用示例：从对话创建 Skill\n/create-skill from-last-conversation"
          }
        }
      ],
      "quiz": [
        {
          "text": "SkillsMP 平台有多少 Claude 插件？",
          "options": ["几千个", "约六万个", "几百个", "一百万个"],
          "correct": 1,
          "explanation": "SkillsMP 平台拥有约六万个 Claude 插件。"
        },
        {
          "text": "Task planner 的核心功能是？",
          "options": ["生成代码", "生成 taskplan.md 固化思考过程", "自动测试", "格式转换"],
          "correct": 1,
          "explanation": "Task planner 强制生成项目根目录的 taskplan.md，固化思考过程。"
        },
        {
          "text": "哪个插件可以把 PDF 转成 Markdown？",
          "options": ["Superpowers", "Loop fixer", "MarkItDown", "Git backup"],
          "correct": 2,
          "explanation": "MarkItDown 可以把 PDF/DOCX 等格式转换成 Markdown。"
        },
        {
          "text": "「从用工具到造工具」的关键是什么？",
          "options": ["安装更多插件", "从对话提取可复用 Skill", "学习编程", "购买付费插件"],
          "correct": 1,
          "explanation": "核心是用 Skill factory 等工具从对话中提取可复用模式，创造自己的 Skill。"
        }
      ]
    },
    {
      "id": "hooks-guide",
      "title": "📖 Hooks 完全指南",
      "description": "事件触发的自动化脚本",
      "category": "deep-dive",
      "level": 3,
      "content": [
        {
          "title": "核心概念",
          "description": "Hooks = 事件触发 + 可拦截 + 可阻止 + 可修改",
          "memoryCard": {
            "title": "触发时机速记",
            "rows": [
              ["PreToolUse", "工具执行前", "可阻止操作"],
              ["PostToolUse", "工具执行后", "可处理结果"],
              ["Stop", "会话结束时", "可保存状态"],
              ["UserPromptSubmit", "发送消息时", "可预处理"]
            ]
          }
        },
        {
          "title": "拦截原理",
          "description": "Hook 像中间件，可以在操作前后插入逻辑",
          "diagram": {
            "title": "安全拦截示例",
            "ascii": "Claude 准备执行: rm -rf node_modules\n         ↓\n   PreToolUse Hook 触发\n         ↓\n   检测到危险命令！\n         ↓\n   返回: BLOCK\n         ↓\n   ❌ 操作被阻止"
          }
        },
        {
          "title": "实际应用",
          "memoryCard": {
            "title": "典型 Hook 应用",
            "rows": [
              ["安全检查", "阻止 rm -rf 等危险命令"],
              ["自动格式化", "Edit 后运行 prettier"],
              ["代码检查", "写入前检查 console.log"],
              ["审计日志", "记录所有操作"],
              ["状态保存", "会话结束自动保存"]
            ]
          },
          "practice": {
            "title": "Hook 配置示例",
            "code": "{\n  \"hooks\": {\n    \"PreToolUse\": [{\n      \"matcher\": \"tool == \\\"Bash\\\"\",\n      \"hooks\": [{\n        \"type\": \"command\",\n        \"command\": \"python3 check.py\"\n      }]\n    }]\n  }\n}"
          }
        }
      ],
      "quiz": [
        {
          "text": "Hook 配置文件是？",
          "options": ["hooks.yml", "hooks.json", "hooks.xml", "hooks.ini"],
          "correct": 1,
          "explanation": "Hook 配置文件是 hooks.json"
        },
        {
          "text": "PreToolUse 何时触发？",
          "options": ["执行后", "执行前", "结束时", "开始时"],
          "correct": 1,
          "explanation": "PreToolUse 在工具执行前触发。"
        },
        {
          "text": "返回 BLOCK 会怎样？",
          "options": ["继续执行", "操作被阻止", "延迟执行", "记录日志"],
          "correct": 1,
          "explanation": "返回 BLOCK 会阻止操作。"
        },
        {
          "text": "matcher 的作用？",
          "options": ["定义超时", "决定触发条件", "设置日志", "配置网络"],
          "correct": 1,
          "explanation": "matcher 决定何时触发钩子。"
        },
        {
          "text": "哪个是 Hook 典型应用？",
          "options": ["定义风格", "阻止危险命令", "创建文件", "发请求"],
          "correct": 1,
          "explanation": "Hook 常用于安全检查，阻止危险命令。"
        }
      ]
    },
    {
      "id": "continuous-learning",
      "title": "📖 持续学习系统",
      "description": "从会话中自动提取模式",
      "category": "deep-dive",
      "level": 3,
      "content": [
        {
          "title": "核心概念",
          "description": "持续学习 = 自动观察 + 提取模式 + 保存为直觉 + 进化为技能",
          "memoryCard": {
            "title": "学习相关命令",
            "rows": [
              ["/learn", "从会话提取模式"],
              ["/instinct-status", "查看学习的直觉"],
              ["/instinct-export", "导出直觉"],
              ["/evolve", "直觉聚类为技能"],
              ["/promote", "项目级提升为全局"]
            ]
          }
        },
        {
          "title": "学习流程",
          "diagram": {
            "title": "持续学习流程",
            "ascii": "正常使用 Claude Code\n       ↓\n系统自动观察记录\n       ↓\n提取为直觉（带置信度）\n       ↓\n高置信度直觉 → 进化为技能\n       ↓\n技能可在所有项目使用"
          }
        }
      ],
      "quiz": [
        {
          "text": "持续学习的作用？",
          "options": ["在线课程", "自动提取模式", "翻译", "分析"],
          "correct": 1,
          "explanation": "持续学习自动从会话中提取模式。"
        },
        {
          "text": "/evolve 命令的作用？",
          "options": ["更新系统", "直觉聚类为技能", "删除文件", "升级插件"],
          "correct": 1,
          "explanation": "/evolve 将直觉聚类为技能。"
        },
        {
          "text": "直觉有评分吗？",
          "options": ["没有", "有置信度评分", "只有通过/失败", "星级评价"],
          "correct": 1,
          "explanation": "直觉有置信度评分。"
        }
      ]
    },
    {
      "id": "tdd-practice",
      "title": "📖 验证与 TDD 实践",
      "description": "测试驱动开发工作流",
      "category": "deep-dive",
      "level": 3,
      "content": [
        {
          "title": "TDD 核心循环",
          "description": "RED → GREEN → REFACTOR，周而复始",
          "memoryCard": {
            "title": "TDD 三步法",
            "rows": [
              ["RED", "先写失败的测试"],
              ["GREEN", "写最少代码通过测试"],
              ["REFACTOR", "重构代码，保持测试通过"]
            ]
          },
          "practice": {
            "title": "使用 /tdd 命令",
            "code": "/tdd \"实现用户登录功能\"\n\n# Claude 会：\n# 1. 先定义接口\n# 2. 编写失败的测试\n# 3. 实现代码\n# 4. 重构优化\n# 5. 验证覆盖率 ≥80%"
          }
        },
        {
          "title": "覆盖率要求",
          "memoryCard": {
            "title": "测试类型",
            "rows": [
              ["单元测试", "测试单个函数/组件"],
              ["集成测试", "测试模块间交互"],
              ["E2E 测试", "测试完整用户流程"],
              ["覆盖率", "最低 80%"]
            ]
          }
        }
      ],
      "quiz": [
        {
          "text": "TDD 的正确顺序？",
          "options": ["实现→测试→重构", "测试→实现→重构", "重构→测试→实现", "设计→实现→测试"],
          "correct": 1,
          "explanation": "TDD 顺序：测试→实现→重构"
        },
        {
          "text": "TDD 最低覆盖率？",
          "options": ["50%", "60%", "80%", "100%"],
          "correct": 2,
          "explanation": "TDD 要求最低 80% 覆盖率。"
        },
        {
          "text": "测试失败时应？",
          "options": ["修改测试", "删除测试", "修复代码", "跳过测试"],
          "correct": 2,
          "explanation": "测试失败时应修复代码。"
        }
      ]
    },
    {
      "id": "security-best-practices",
      "title": "📖 安全与最佳实践",
      "description": "安全检查 + 五大概念总结",
      "category": "deep-dive",
      "level": 4,
      "content": [
        {
          "title": "安全检查清单",
          "memoryCard": {
            "title": "每次提交前必查",
            "rows": [
              ["❌", "无硬编码密钥"],
              ["✅", "所有用户输入已验证"],
              ["✅", "SQL 注入防护"],
              ["✅", "XSS 防护"],
              ["✅", "敏感信息存环境变量"]
            ]
          }
        },
        {
          "title": "五大概念总结",
          "memoryCard": {
            "title": "核心对比表",
            "rows": [
              ["Rules", "始终加载", "行为规范"],
              ["Commands", "手动触发", "预定义任务"],
              ["Skills", "按需加载", "领域知识"],
              ["Agents", "按需启动", "专业子任务"],
              ["Hooks", "事件触发", "自动化拦截"]
            ]
          }
        },
        {
          "title": "选择指南",
          "memoryCard": {
            "title": "什么时候用哪个？",
            "rows": [
              ["始终遵守的规范", "→ Rules"],
              ["快速执行预定义任务", "→ Commands"],
              ["专业处理子任务", "→ Agents"],
              ["注入领域专业知识", "→ Skills"],
              ["自动拦截或处理事件", "→ Hooks"]
            ]
          }
        },
        {
          "title": "协同工作流程",
          "diagram": {
            "title": "五大概念协同",
            "ascii": "用户输入 → [Hooks 拦截]\n              ↓\n       [Rules 始终生效]\n              ↓\n    [Skills 按需加载]\n              ↓\n   [Commands 执行任务]\n              ↓\n    [Agents 专业处理]\n              ↓\n         返回结果"
          }
        }
      ],
      "quiz": [
        {
          "text": "哪个概念始终加载？",
          "options": ["Commands", "Agents", "Rules", "Skills"],
          "correct": 2,
          "explanation": "Rules 始终加载。"
        },
        {
          "text": "哪个可以并行执行？",
          "options": ["Rules", "Commands", "Agents", "Hooks"],
          "correct": 2,
          "explanation": "Agents 可以并行执行。"
        },
        {
          "text": "哪个可以阻止操作？",
          "options": ["Rules", "Commands", "Skills", "Hooks"],
          "correct": 3,
          "explanation": "Hooks 可以阻止操作。"
        },
        {
          "text": "注入领域知识用哪个？",
          "options": ["Rules", "Commands", "Skills", "Agents"],
          "correct": 2,
          "explanation": "Skills 用于注入领域知识。"
        },
        {
          "text": "哪个是安全违规？",
          "options": ["环境变量", "硬编码密钥", "参数化查询", "输入验证"],
          "correct": 1,
          "explanation": "硬编码密钥是安全违规。"
        }
      ]
    },
    // ============ 生态系统 ============
    {
      "id": "openclaw-ecosystem",
      "title": "🌐 OpenClaw 创新生态",
      "description": "AI 智能体培养（养虾）与生态建设",
      "category": "ecosystem",
      "level": 3,
      "content": [
        {
          "title": "什么是「养虾」？",
          "description": "养虾 = 培养 AI 智能体。核心在于养虾人的探索欲和引导能力，需像教育孩子一样，通过鼓励与鞭策帮助智能体「开窍」。",
          "tips": [
            "养虾人的好奇心是关键 - 能否激发智能体主动性",
            "有的智能体一周就能主动解决问题，有的需要更长时间",
            "通过「做对鼓励、做错鞭策」的反馈机制引导",
            "智能体主动性表现：尝试多种解决方案，主动反馈困难"
          ]
        },
        {
          "title": "用户体验的革命",
          "description": "从代码到自然语言的范式转变，大幅降低使用门槛。",
          "memoryCard": {
            "title": "两类用户差异",
            "rows": [
              ["技术出身", "可能低估其价值", "习惯写代码控制"],
              ["无编程背景", "更易发现潜力", "用自然语言指导完成任务"],
              ["群众智慧", "类似抖音生态", "用户贡献创意推动迭代"]
            ]
          }
        },
        {
          "title": "OpenClaw 生态优势",
          "description": "目前最大的 AI 智能体生态，拥有大量用户贡献的 skill（功能模块）。",
          "memoryCard": {
            "title": "生态覆盖领域",
            "rows": [
              ["智能家居", "控制小米等智能设备"],
              ["数据分析", "股票信息、数据可视化"],
              ["生活服务", "日程管理、信息查询"],
              ["工作辅助", "文档处理、自动化流程"]
            ]
          },
          "practice": {
            "title": "Skill 商店",
            "code": "# 通过 skill 商店快速集成功能\n# 例如：控制小米智能家居、获取股票信息\n# 用户可直接调用他人开发的 skill\n# 或根据需求修改后分享"
          }
        },
        {
          "title": "创新设计：人性化智能体",
          "description": "三大机制让智能体更懂你：",
          "memoryCard": {
            "title": "人性化设计三要素",
            "rows": [
              ["Soul（灵魂）", "定义性格", "活泼/严谨/调皮等"],
              ["User（画像）", "收集信息", "职业/性格/历史数据"],
              ["Memory（记忆）", "沉淀历史", "记住偏好和常用功能"]
            ]
          },
          "tips": [
            "Soul 机制：用户可定义智能体性格，符合个人偏好",
            "User 画像：通过对话构建个性化模型",
            "Memory 沉淀：越用越「懂你」"
          ]
        },
        {
          "title": "用户参与感与 Skill 生态",
          "description": "用户既是使用者也是贡献者，开放架构允许自定义智能体行为。",
          "diagram": {
            "title": "Skill 生态循环",
            "ascii": "用户 A 创建 skill → 分享到平台\n              ↓\n用户 B 调用/修改 skill\n              ↓\n用户 B 反馈/优化\n              ↓\n社区审核筛选\n              ↓\n优质 skill 进入推荐\n              ↓\n更多用户使用"
          },
          "practice": {
            "title": "类比黑客帝国",
            "steps": [
              "智能体可通过加载特定 skill 获取新能力",
              "如：加载「驾驶直升机」skill",
              "无需从头开发，即插即用",
              "这就是 skill 生态的威力"
            ]
          }
        },
        {
          "title": "安全问题与解决方案",
          "description": "开放生态面临的风险和应对措施：",
          "memoryCard": {
            "title": "安全机制",
            "rows": [
              ["风险", "恶意 skill 植入", "隐私泄露/系统故障"],
              ["社区审核", "用户举报", "平台筛选"],
              ["安全模块", "内置检测", "防恶意代码"],
              ["用户鉴别", "评估来源", "像筛选网络信息"]
            ]
          }
        },
        {
          "title": "OpenClaw 的未来",
          "description": "三大核心驱动：开放生态、个性化设计、用户参与。",
          "tips": [
            "有望成为 AI 时代的「iPhone」——集大成者",
            "推动 AI 从工具向智能助手的质变",
            "持续吸引开发者和用户参与是关键",
            "安全机制的完善和 skill 的丰富将加速普及"
          ],
          "code": "# 未来展望\n1. 生态持续丰富 → 更多优质 skill\n2. 安全机制完善 → 用户信任提升\n3. 个性化深入 → 越用越懂你\n4. 群众智慧 → 功能迭代加速\n5. AI 质变 → 从工具到助手"
        }
      ],
      "quiz": [
        {
          "text": "「养虾」指的是什么？",
          "options": ["养殖虾类", "培养 AI 智能体", "编写代码", "测试软件"],
          "correct": 1,
          "explanation": "「养虾」是培养 AI 智能体的比喻，核心在于养虾人的引导能力和智能体的主动性。"
        },
        {
          "text": "哪类用户更容易发现 OpenClaw 的潜力？",
          "options": ["程序员", "无编程背景的用户", "数据科学家", "产品经理"],
          "correct": 1,
          "explanation": "无编程背景的用户没有思维定势，更愿意用自然语言探索，反而更容易发现潜力。"
        },
        {
          "text": "OpenClaw 的三大核心是什么？",
          "options": ["代码、算法、硬件", "开放生态、个性化设计、用户参与", "速度、安全、稳定", "免费、开源、社区"],
          "correct": 1,
          "explanation": "开放生态吸引贡献，个性化设计提升体验，用户参与推动迭代。"
        },
        {
          "text": "Soul 机制的作用是什么？",
          "options": ["提升速度", "定义智能体性格", "增加存储", "优化算法"],
          "correct": 1,
          "explanation": "Soul 机制让用户可定义智能体的性格（活泼、严谨、调皮等），使其更符合个人偏好。"
        },
        {
          "text": "如何应对恶意 skill 的风险？",
          "options": ["禁止所有 skill", "社区审核 + 安全模块 + 用户鉴别", "只允许官方 skill", "不使用 skill"],
          "correct": 1,
          "explanation": "三层防护：社区审核机制、内置安全检测模块、用户对 skill 来源的鉴别能力。"
        }
      ]
    },
    // ============ PM 路径 ============
    // ============ PM 基础 ============
    {
      "id": "pm-role",
      "title": "PM 角色认知",
      "description": "新时代 PM 的核心定位与能力模型",
      "category": "pm-basics",
      "level": 1,
      "content": [
        {
          "title": "什么是 PM",
          "description": "PM 是产品的「CEO」，负责产品从 0 到 1 的全过程。不是「画原型的」，不是「写文档的」，而是对产品结果负责的人。",
          "memoryCard": {
            "title": "PM 核心职责",
            "rows": [
              ["需求洞察", "发现用户痛点，定义问题"],
              ["方案设计", "提出解决方案，规划功能"],
              ["项目管理", "协调资源，推动落地"],
              ["数据驱动", "用数据验证效果，迭代优化"],
              ["沟通协调", "跨部门协作，对齐目标"]
            ]
          }
        },
        {
          "title": "PM vs 传统角色",
          "description": "新时代 PM 和传统项目经理、产品经理的区别：",
          "memoryCard": {
            "title": "角色对比",
            "rows": [
              ["项目经理", "管进度、管资源", "交付导向"],
              ["传统产品经理", "画原型、写 PRD", "功能导向"],
              ["新时代 PM", "懂技术、懂数据、懂用户", "价值导向"],
              ["AI PM", "还要懂 AI 能力边界", "智能化导向"]
            ]
          }
        },
        {
          "title": "新时代 PM 的技术力",
          "description": "AI 时代，PM 需要懂技术但不一定要会写代码。关键是要能用技术语言和研发沟通。",
          "memoryCard": {
            "title": "技术力清单",
            "rows": [
              ["AI 工具", "会用 Claude Code、Cursor、ChatGPT"],
              ["API 理解", "知道 API 是什么、怎么对接"],
              ["数据查询", "会写基础 SQL 查数据"],
              ["原型工具", "会用 Figma、墨刀、即时设计"],
              ["文档能力", "能写清晰的需求文档和技术方案"]
            ]
          }
        },
        {
          "title": "PM 能力模型",
          "description": "一个完整的 PM 需要具备的能力框架：",
          "tips": [
            "产品能力：需求分析、用户研究、产品规划",
            "技术能力：理解技术原理、评估可行性",
            "数据能力：指标定义、数据分析、A/B 测试",
            "沟通能力：跨部门协作、向上汇报、向下管理",
            "学习能力：快速学习新领域、持续迭代"
          ]
        }
      ],
      "quiz": [
        {
          "text": "PM 的核心职责是什么？",
          "options": ["画原型图", "写代码", "对产品结果负责", "做测试"],
          "correct": 2,
          "explanation": "PM 是产品的「CEO」，对产品结果负责，不只是画原型或写文档。"
        },
        {
          "text": "新时代 PM 和传统产品经理的主要区别？",
          "options": ["工资更高", "懂技术、懂数据、懂用户", "职位名称不同", "工作内容一样"],
          "correct": 1,
          "explanation": "新时代 PM 需要懂技术、懂数据、懂用户，是价值导向而非功能导向。"
        },
        {
          "text": "PM 需要会写代码吗？",
          "options": ["必须会", "完全不需要", "不需要，但要懂技术原理", "看公司要求"],
          "correct": 2,
          "explanation": "PM 不需要会写代码，但需要懂技术原理，能用技术语言和研发沟通。"
        },
        {
          "text": "以下哪个不是 PM 的核心能力？",
          "options": ["需求分析", "代码开发", "数据驱动", "跨部门协作"],
          "correct": 1,
          "explanation": "代码开发是研发的工作，PM 需要懂技术但不需要亲自开发。"
        },
        {
          "text": "AI PM 相比普通 PM 还需要什么能力？",
          "options": ["财务知识", "法律知识", "懂 AI 能力边界", "设计能力"],
          "correct": 2,
          "explanation": "AI PM 需要特别理解 AI 的能力边界，知道什么能做、什么不能做。"
        }
      ]
    },
    {
      "id": "ai-basics",
      "title": "AI 基础概念",
      "description": "PM 必须了解的 AI/ML 基础知识",
      "category": "pm-basics",
      "level": 1,
      "content": [
        {
          "title": "什么是 AI / ML",
          "description": "AI（人工智能）是让机器模拟人类智能。ML（机器学习）是实现 AI 的一种方法，让机器从数据中学习。",
          "memoryCard": {
            "title": "AI 相关术语",
            "rows": [
              ["AI", "人工智能", "机器模拟人类智能"],
              ["ML", "机器学习", "从数据中学习规律"],
              ["DL", "深度学习", "多层神经网络学习"],
              ["LLM", "大语言模型", "ChatGPT、Claude 等"],
              ["GenAI", "生成式 AI", "能生成内容的 AI"]
            ]
          }
        },
        {
          "title": "LLM 能做什么",
          "description": "大语言模型（如 ChatGPT、Claude）的能力边界：",
          "memoryCard": {
            "title": "LLM 能力清单",
            "rows": [
              ["✅ 擅长", "文本生成、翻译、总结、问答"],
              ["✅ 擅长", "代码生成、调试、解释"],
              ["✅ 擅长", "创意写作、头脑风暴"],
              ["⚠️ 一般", "数学计算、逻辑推理"],
              ["❌ 不擅长", "实时信息、精确事实、物理世界"]
            ]
          }
        },
        {
          "title": "常见 AI 产品形态",
          "description": "目前主流的 AI 产品形态：",
          "tips": [
            "对话助手：ChatGPT、Claude、文心一言",
            "内容生成：Midjourney、Sora、Runway",
            "智能客服：自动回答用户问题",
            "推荐系统：抖音、淘宝的个性化推荐",
            "辅助工具：Notion AI、Copilot"
          ]
        },
        {
          "title": "AI 的局限性",
          "description": "AI 不是万能的，PM 需要了解其局限性：",
          "memoryCard": {
            "title": "AI 局限性",
            "rows": [
              ["幻觉问题", "可能生成虚假信息"],
              ["实时性", "无法获取最新信息"],
              ["精确性", "不适合需要 100% 准确的场景"],
              ["隐私数据", "不能处理敏感个人信息"],
              ["成本", "大规模使用成本较高"]
            ]
          }
        }
      ],
      "quiz": [
        {
          "text": "LLM 是什么？",
          "options": ["一种编程语言", "大语言模型", "数据库", "操作系统"],
          "correct": 1,
          "explanation": "LLM（Large Language Model）是大语言模型，如 ChatGPT、Claude。"
        },
        {
          "text": "以下哪个是 LLM 擅长的？",
          "options": ["实时股市行情", "文本生成和翻译", "精确数学计算", "物理世界操作"],
          "correct": 1,
          "explanation": "LLM 擅长文本生成、翻译、总结等文本处理任务。"
        },
        {
          "text": "AI 的「幻觉」问题是指？",
          "options": ["AI 会做梦", "AI 可能生成虚假信息", "AI 会生病", "AI 会消失"],
          "correct": 1,
          "explanation": "幻觉（Hallucination）是指 AI 可能生成看起来合理但实际上是虚假的信息。"
        },
        {
          "text": "以下哪个场景不适合用 AI？",
          "options": ["智能客服", "医疗诊断（100%准确）", "内容生成", "推荐系统"],
          "correct": 1,
          "explanation": "需要 100% 准确的场景（如医疗诊断）不适合完全依赖 AI。"
        }
      ]
    },
    // ============ PM 技能 ============
    {
      "id": "prompt-engineering",
      "title": "Prompt Engineering",
      "description": "写好提示词，让 AI 更好地为你工作",
      "category": "pm-skills",
      "level": 2,
      "content": [
        {
          "title": "什么是 Prompt",
          "description": "Prompt（提示词）是你给 AI 的指令。写好 Prompt 是新时代 PM 的必备技能。",
          "memoryCard": {
            "title": "Prompt 要素",
            "rows": [
              ["角色", "让 AI 扮演什么角色"],
              ["任务", "要 AI 做什么"],
              ["背景", "提供必要的上下文"],
              ["格式", "期望的输出格式"],
              ["约束", "限制条件"]
            ]
          }
        },
        {
          "title": "写好 Prompt 的原则",
          "description": "写好 Prompt 的核心原则：",
          "tips": [
            "清晰具体：避免模糊表述",
            "提供示例：给 AI 看你想要的格式",
            "分步拆解：复杂任务拆成多步",
            "迭代优化：根据结果不断调整",
            "控制长度：太长会导致 AI 忘记前面"
          ]
        },
        {
          "title": "常用 Prompt 技巧",
          "description": "实用的 Prompt 技巧：",
          "memoryCard": {
            "title": "技巧清单",
            "rows": [
              ["角色扮演", "\"你是一个资深 PM...\""],
              ["Few-shot", "给 2-3 个示例"],
              ["思维链", "\"请一步步思考...\""],
              ["结构化输出", "\"用表格形式输出\""],
              ["追问", "\"你确定吗？再检查一遍\""]
            ]
          },
          "practice": {
            "title": "示例：写 PRD",
            "code": "# 角色\n你是一个资深 PM，擅长写清晰的 PRD。\n\n# 任务\n帮我写一个「用户登录功能」的 PRD。\n\n# 要求\n1. 包含功能描述、用户故事、验收标准\n2. 用表格形式输出\n3. 语言简洁，避免空话"
          }
        },
        {
          "title": "PM 常用 Prompt 模板",
          "description": "PM 日常工作中可以用到的 Prompt 模板：",
          "tips": [
            "需求分析：\"分析以下用户反馈，提取核心需求...\"",
            "竞品分析：\"对比 A 和 B 产品的功能差异...\"",
            "PRD 生成：\"根据以下需求，生成 PRD 文档...\"",
            "数据分析：\"分析以下数据，找出问题并给出建议...\"",
            "会议总结：\"总结以下会议内容，列出行动项...\""
          ]
        }
      ],
      "quiz": [
        {
          "text": "写好 Prompt 的核心原则是什么？",
          "options": ["写得越长越好", "清晰具体、提供示例", "用专业术语", "让 AI 自己猜"],
          "correct": 1,
          "explanation": "写好 Prompt 要清晰具体，必要时提供示例让 AI 理解你想要的格式。"
        },
        {
          "text": "Few-shot 是什么技巧？",
          "options": ["拍照片", "给 AI 几个示例", "少说废话", "快速提问"],
          "correct": 1,
          "explanation": "Few-shot 是给 AI 几个示例，让它理解你想要的格式和风格。"
        },
        {
          "text": "Prompt 太长会怎样？",
          "options": ["AI 会更聪明", "AI 可能忘记前面的内容", "AI 会拒绝回答", "没有影响"],
          "correct": 1,
          "explanation": "Prompt 太长会导致 AI 忘记前面的内容，影响回答质量。"
        },
        {
          "text": "「思维链」技巧的作用是？",
          "options": ["让 AI 更快", "让 AI 一步步思考", "让 AI 更短", "让 AI 更幽默"],
          "correct": 1,
          "explanation": "思维链（Chain of Thought）让 AI 一步步思考，提高复杂问题的准确率。"
        }
      ]
    },
    {
      "id": "ai-product-design",
      "title": "AI 产品设计",
      "description": "如何设计 AI 驱动的产品功能",
      "category": "pm-skills",
      "level": 2,
      "content": [
        {
          "title": "判断是否需要 AI",
          "description": "不是所有功能都需要 AI，PM 需要判断是否值得：",
          "memoryCard": {
            "title": "AI 适用判断",
            "rows": [
              ["✅ 适合", "内容生成、智能推荐、对话交互"],
              ["✅ 适合", "图像识别、语音处理、数据分析"],
              ["❌ 不适合", "确定性规则、精确计算、简单逻辑"],
              ["⚠️ 慎重", "需要 100% 准确的场景"],
              ["⚠️ 慎重", "涉及隐私数据的场景"]
            ]
          }
        },
        {
          "title": "AI 功能设计原则",
          "description": "设计 AI 功能时要遵循的原则：",
          "memoryCard": {
            "title": "设计原则",
            "rows": [
              ["渐进式", "先做简单版本，逐步增强"],
              ["可控性", "用户能理解、能干预 AI 输出"],
              ["反馈机制", "用户能告诉 AI 哪里做得不好"],
              ["预期管理", "不要过度承诺 AI 能力"],
              ["降级方案", "AI 失败时有备选方案"]
            ]
          }
        },
        {
          "title": "AI 功能体验设计",
          "description": "AI 功能的用户体验设计要点：",
          "tips": [
            "加载状态：AI 生成需要时间，要有加载提示",
            "置信度展示：让用户知道 AI 的确定程度",
            "可编辑性：AI 输出应该可以被用户修改",
            "历史记录：保留 AI 生成的历史版本",
            "撤销功能：用户可以撤销 AI 的操作"
          ]
        },
        {
          "title": "AI 功能评估指标",
          "description": "如何衡量 AI 功能的效果：",
          "memoryCard": {
            "title": "评估指标",
            "rows": [
              ["准确率", "AI 输出的正确程度"],
              ["使用率", "用户使用该功能的频率"],
              ["采纳率", "用户采纳 AI 输出的比例"],
              ["修改率", "用户修改 AI 输出的比例"],
              ["满意度", "用户对 AI 功能的满意程度"]
            ]
          }
        }
      ],
      "quiz": [
        {
          "text": "以下哪个场景适合用 AI？",
          "options": ["银行转账（100%准确）", "智能客服", "简单数学计算", "密码验证"],
          "correct": 1,
          "explanation": "智能客服适合用 AI，而银行转账、简单计算、密码验证需要 100% 准确，不适合。"
        },
        {
          "text": "AI 功能的「可控性」是指？",
          "options": ["AI 可以控制用户", "用户能理解和干预 AI 输出", "AI 完全自动化", "用户无法干预"],
          "correct": 1,
          "explanation": "可控性是指用户能理解 AI 的输出，并能够干预和修改。"
        },
        {
          "text": "为什么 AI 功能需要降级方案？",
          "options": ["让产品更复杂", "AI 可能失败或不可用", "增加开发成本", "没有原因"],
          "correct": 1,
          "explanation": "AI 可能失败或不可用，降级方案确保用户体验不受影响。"
        },
        {
          "text": "\"采纳率\"指标衡量什么？",
          "options": ["AI 的准确率", "用户采纳 AI 输出的比例", "用户使用产品的频率", "AI 的响应速度"],
          "correct": 1,
          "explanation": "采纳率衡量用户采纳 AI 输出的比例，反映 AI 输出的质量。"
        }
      ]
    },
    {
      "id": "data-driven",
      "title": "数据驱动决策",
      "description": "用数据说话，做出正确的产品决策",
      "category": "pm-skills",
      "level": 2,
      "content": [
        {
          "title": "什么是数据驱动",
          "description": "数据驱动 = 用数据发现问题、验证假设、评估效果，而不是凭感觉做决策。",
          "memoryCard": {
            "title": "数据驱动流程",
            "rows": [
              ["1. 定义指标", "确定要关注的核心指标"],
              ["2. 收集数据", "埋点、统计、调研"],
              ["3. 分析数据", "找规律、发现问题"],
              ["4. 提出假设", "基于数据提出改进方向"],
              ["5. 验证效果", "A/B 测试验证假设"]
            ]
          }
        },
        {
          "title": "常用产品指标",
          "description": "PM 需要关注的核心指标：",
          "memoryCard": {
            "title": "指标分类",
            "rows": [
              ["用户增长", "DAU、MAU、新增用户"],
              ["用户活跃", "使用时长、使用频次、留存率"],
              ["商业价值", "转化率、ARPU、GMV"],
              ["产品体验", "满意度、NPS、崩溃率"],
              ["功能效果", "使用率、完成率、分享率"]
            ]
          }
        },
        {
          "title": "A/B 测试基础",
          "description": "A/B 测试是验证产品改动的科学方法：",
          "tips": [
            "定义假设：\"如果改 A，那么 B 会提升\"",
            "设计实验：控制变量，只改一个因素",
            "确定样本：样本太小结果不可靠",
            "观察时间：至少一个完整周期",
            "分析结果：看显著性，不要只看数字"
          ]
        },
        {
          "title": "数据陷阱",
          "description": "PM 需要避免的数据陷阱：",
          "memoryCard": {
            "title": "常见陷阱",
            "rows": [
              ["虚荣指标", "看起来好看但没意义"],
              ["幸存者偏差", "只看活下来的用户"],
              ["相关非因果", "A 和 B 相关不代表 A 导致 B"],
              ["样本偏差", "样本不代表整体"],
              ["过度解读", "把随机波动当趋势"]
            ]
          }
        }
      ],
      "quiz": [
        {
          "text": "数据驱动的核心是什么？",
          "options": ["看报表", "用数据做决策，而非凭感觉", "收集更多数据", "让老板看数据"],
          "correct": 1,
          "explanation": "数据驱动的核心是用数据发现问题、验证假设、评估效果，而非凭感觉做决策。"
        },
        {
          "text": "以下哪个是虚荣指标？",
          "options": ["DAU", "累计注册用户数", "留存率", "转化率"],
          "correct": 1,
          "explanation": "累计注册用户数是虚荣指标，看起来很大但没有实际意义，DAU、留存率、转化率才是关键。"
        },
        {
          "text": "A/B 测试的关键原则是什么？",
          "options": ["同时改多个变量", "只改一个变量，控制其他不变", "不需要对照组", "凭感觉判断结果"],
          "correct": 1,
          "explanation": "A/B 测试要控制变量，只改一个因素，才能确定因果关系。"
        },
        {
          "text": "\"相关非因果\"是什么意思？",
          "options": ["A 导致 B", "A 和 B 相关不代表 A 导致 B", "A 和 B 没关系", "B 导致 A"],
          "correct": 1,
          "explanation": "相关非因果是指两个事物相关，但不代表一个导致另一个，可能有第三个因素。"
        }
      ]
    },
    {
      "id": "cross-team",
      "title": "跨团队协作",
      "description": "与研发、设计、运营高效协作",
      "category": "pm-skills",
      "level": 2,
      "content": [
        {
          "title": "与研发协作",
          "description": "PM 和研发是最佳拍档，协作要点：",
          "memoryCard": {
            "title": "协作要点",
            "rows": [
              ["需求清晰", "PRD 写清楚，避免频繁变更"],
              ["技术对齐", "评审时确认技术可行性"],
              ["优先级明确", "什么是必须的，什么是可以等的"],
              ["及时响应", "研发有问题要及时解答"],
              ["尊重专业", "技术方案让研发决定"]
            ]
          }
        },
        {
          "title": "与设计协作",
          "description": "PM 和设计师协作要点：",
          "tips": [
            "明确目标：设计要解决什么问题",
            "提供背景：用户是谁、场景是什么",
            "给空间：不要画死了，让设计师发挥",
            "及时反馈：设计稿出来后快速反馈",
            "统一语言：用设计系统的术语沟通"
          ]
        },
        {
          "title": "与运营协作",
          "description": "PM 和运营协作要点：",
          "memoryCard": {
            "title": "协作要点",
            "rows": [
              ["需求来源", "运营是重要的需求来源"],
              ["数据共享", "共享用户反馈和数据"],
              ["功能培训", "新功能上线要培训运营"],
              ["活动配合", "产品功能支持运营活动"],
              ["效果复盘", "一起复盘活动效果"]
            ]
          }
        },
        {
          "title": "向上汇报",
          "description": "PM 需要向老板/上级汇报工作：",
          "tips": [
            "结论先行：先说结论，再说细节",
            "数据支撑：用数据说话，不要只讲故事",
            "给出方案：不只是提问题，要给方案",
            "管理预期：不要过度承诺",
            "定期同步：不要等到出问题才汇报"
          ]
        }
      ],
      "quiz": [
        {
          "text": "PM 与研发协作时，最重要的是？",
          "options": ["每天开会", "需求清晰、及时响应", "帮研发写代码", "监督研发工作"],
          "correct": 1,
          "explanation": "PM 与研发协作最重要的是需求清晰、及时响应，而不是过度干预技术实现。"
        },
        {
          "text": "与设计师协作时，PM 应该？",
          "options": ["画好原型让设计师照着做", "明确目标后给设计师发挥空间", "不跟设计师沟通", "自己设计"],
          "correct": 1,
          "explanation": "PM 应该明确目标和背景，然后给设计师发挥空间，不要把设计画死。"
        },
        {
          "text": "向上汇报的正确做法是？",
          "options": ["只报喜不报忧", "结论先行，用数据支撑", "事无巨细都说", "等老板问再说"],
          "correct": 1,
          "explanation": "向上汇报要结论先行、用数据支撑、给出方案，而不是只报喜或等老板问。"
        },
        {
          "text": "运营反馈的问题，PM 应该？",
          "options": ["忽略不管", "认真分析，给出解决方案", "让运营自己解决", "推给研发"],
          "correct": 1,
          "explanation": "运营是重要的需求来源，PM 应该认真分析运营反馈的问题并给出解决方案。"
        }
      ]
    },
    // ============ PM 实战 ============
    {
      "id": "pm-case-study",
      "title": "AI 产品案例分析",
      "description": "从真实案例中学习 AI 产品设计",
      "category": "pm-practice",
      "level": 3,
      "content": [
        {
          "title": "成功案例：Notion AI",
          "description": "Notion AI 是如何设计 AI 写作助手的：",
          "memoryCard": {
            "title": "关键设计点",
            "rows": [
              ["场景聚焦", "只做文档写作场景"],
              ["渐进增强", "先补全，再生成，后改写"],
              ["用户控制", "AI 建议由用户确认"],
              ["上下文感知", "理解文档上下文"],
              ["无感集成", "不打断用户工作流"]
            ]
          }
        },
        {
          "title": "成功案例：GitHub Copilot",
          "description": "GitHub Copilot 的产品设计亮点：",
          "tips": [
            "实时性：编码时实时给出建议",
            "低干扰：不打断程序员的心流",
            "可采纳：程序员可以选择采纳或忽略",
            "学习性：从项目代码中学习风格",
            "渐进信任：用得越多越准确"
          ]
        },
        {
          "title": "失败教训：AI 客服",
          "description": "一些 AI 客服失败的原因：",
          "memoryCard": {
            "title": "失败原因",
            "rows": [
              ["过度承诺", "宣传能解决所有问题"],
              ["能力不足", "实际解决率很低"],
              ["缺乏降级", "无法转人工"],
              ["用户挫败", "反复对话解决不了问题"],
              ["信任崩塌", "用户对 AI 客服失去信心"]
            ]
          }
        },
        {
          "title": "AI 产品设计教训",
          "description": "从案例中学到的教训：",
          "tips": [
            "不要过度承诺：AI 不是万能的",
            "场景要聚焦：不要什么都想做",
            "必须有降级：AI 失败时有备选",
            "用户体验优先：AI 是手段不是目的",
            "持续迭代：AI 能力在进步，产品也要迭代"
          ]
        }
      ],
      "quiz": [
        {
          "text": "Notion AI 成功的关键是？",
          "options": ["功能最多", "场景聚焦、用户控制", "价格最便宜", "广告最多"],
          "correct": 1,
          "explanation": "Notion AI 成功的关键是场景聚焦（只做文档写作）和用户控制（AI 建议由用户确认）。"
        },
        {
          "text": "GitHub Copilot 的产品设计亮点是？",
          "options": ["完全自动化", "实时建议、低干扰", "只能写简单代码", "必须完全采纳"],
          "correct": 1,
          "explanation": "Copilot 的亮点是实时给出建议、低干扰，程序员可以选择采纳或忽略。"
        },
        {
          "text": "AI 客服失败的常见原因是？",
          "options": ["AI 太聪明", "过度承诺、缺乏降级方案", "用户太少", "技术太先进"],
          "correct": 1,
          "explanation": "AI 客服常失败于过度承诺（说能解决所有问题）和缺乏降级方案（无法转人工）。"
        },
        {
          "text": "AI 产品设计的核心原则是？",
          "options": ["AI 功能越多越好", "用户体验优先，AI 是手段", "完全自动化", "不需要人工介入"],
          "correct": 1,
          "explanation": "AI 产品设计的核心是用户体验优先，AI 只是提升体验的手段，不是目的。"
        }
      ]
    },
    {
      "id": "pm-interview",
      "title": "PM 面试准备",
      "description": "AI 时代 PM 面试的核心问题和回答策略",
      "category": "pm-practice",
      "level": 3,
      "content": [
        {
          "title": "常见面试问题",
          "description": "PM 面试常见的问题类型：",
          "memoryCard": {
            "title": "问题类型",
            "rows": [
              ["产品思维", "如何设计一个功能？"],
              ["数据分析", "如何用数据验证假设？"],
              ["技术理解", "这个功能技术可行性？"],
              ["沟通协作", "如何处理与研发的分歧？"],
              ["AI 理解", "AI 能做什么不能做什么？"]
            ]
          }
        },
        {
          "title": "产品思维问题",
          "description": "回答产品思维问题的框架：",
          "tips": [
            "明确用户：谁会用这个功能？",
            "定义问题：要解决什么痛点？",
            "评估价值：为什么值得做？",
            "设计方案：怎么实现？",
            "衡量成功：怎么判断成功？"
          ],
          "practice": {
            "title": "示例问题",
            "code": "Q: 如何设计一个「智能回复」功能？\n\nA:\n1. 用户：需要快速回复消息的人\n2. 问题：打字慢、没时间、场景多\n3. 价值：提升沟通效率\n4. 方案：基于上下文生成 3 个候选回复\n5. 成功指标：回复采纳率 > 50%"
          }
        },
        {
          "title": "AI 相关问题",
          "description": "AI 时代 PM 面试可能被问到的问题：",
          "memoryCard": {
            "title": "AI 面试问题",
            "rows": [
              ["你用哪些 AI 工具？", "ChatGPT、Claude、Cursor 等"],
              ["AI 能做什么？", "文本、代码、图像生成"],
              ["AI 不能做什么？", "实时信息、精确计算"],
              ["如何设计 AI 功能？", "场景聚焦 + 用户控制"],
              ["AI 产品挑战？", "幻觉、成本、隐私"]
            ]
          }
        },
        {
          "title": "面试加分项",
          "description": "让面试官印象深刻的加分项：",
          "tips": [
            "展示作品：有实际的产品案例",
            "数据思维：用数据支撑决策",
            "技术理解：能和技术人员深度交流",
            "AI 应用：展示你如何用 AI 提升效率",
            "持续学习：关注行业动态，有见解"
          ]
        }
      ],
      "quiz": [
        {
          "text": "回答产品设计问题的正确顺序是？",
          "options": ["方案→用户→问题", "用户→问题→方案→衡量", "衡量→方案→用户", "随便说"],
          "correct": 1,
          "explanation": "回答产品设计问题应该：用户→问题→价值→方案→衡量成功。"
        },
        {
          "text": "AI 时代 PM 面试的加分项是？",
          "options": ["只会画原型", "展示 AI 应用能力和持续学习", "不关心技术", "只看工资"],
          "correct": 1,
          "explanation": "AI 时代 PM 加分项包括：展示 AI 应用能力、技术理解、数据思维和持续学习。"
        },
        {
          "text": "\"AI 能做什么\"这个问题的回答重点是？",
          "options": ["AI 什么都能做", "AI 什么都做不了", "展示你对 AI 能力边界的理解", "背诵 AI 定义"],
          "correct": 2,
          "explanation": "这个问题的关键是展示你对 AI 能力边界的理解，知道能做什么和不能做什么。"
        }
      ]
    }
  ]
};

const app = {
    currentModule: null,
    previousView: 'modules-view',
    currentCategory: 'all',
    currentPath: 'all', // 当前选中的学习路径

    // 初始化应用
    init() {
        Tutor.init();
        this.renderCategories();
        this.renderModules();
        this.updateOverallProgress();
    },

    // 渲染分类标签
    renderCategories() {
        const container = document.getElementById('category-tabs');
        if (!container) return;

        // 根据当前路径过滤分类
        let categories = contentData.categories;
        if (this.currentPath !== 'all') {
            categories = categories.filter(cat => cat.path === this.currentPath);
        }

        let html = `<button class="category-tab ${this.currentCategory === 'all' ? 'active' : ''}" onclick="app.filterCategory('all')">全部</button>`;

        categories.forEach(cat => {
            html += `<button class="category-tab ${this.currentCategory === cat.id ? 'active' : ''}" onclick="app.filterCategory('${cat.id}')">${cat.icon} ${cat.name}</button>`;
        });

        container.innerHTML = html;
    },

    // 过滤分类
    filterCategory(categoryId) {
        this.currentCategory = categoryId;
        this.renderCategories();
        this.renderModules();
    },

    // 切换学习路径
    switchPath(pathId) {
        this.currentPath = pathId;
        this.currentCategory = 'all'; // 切换路径时重置分类

        // 更新路径按钮状态
        document.querySelectorAll('.path-btn').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.includes(
                pathId === 'all' ? '全部' : (pathId === 'tech' ? '技术' : 'PM')
            ));
        });

        this.renderCategories();
        this.renderModules();
    },

    // 渲染模块列表
    renderModules() {
        const grid = document.getElementById('module-grid');
        grid.innerHTML = '';

        // 过滤模块（先按路径，再按分类）
        let modules = contentData.modules;

        // 按路径过滤
        if (this.currentPath !== 'all') {
            const pathCategories = contentData.categories
                .filter(cat => cat.path === this.currentPath)
                .map(cat => cat.id);
            modules = modules.filter(m => pathCategories.includes(m.category));
        }

        // 按分类过滤
        if (this.currentCategory !== 'all') {
            modules = modules.filter(m => m.category === this.currentCategory);
        }

        modules.forEach(module => {
            const progress = Storage.getModuleProgress(module.id);
            const card = document.createElement('div');
            card.className = `module-card ${progress.mastered ? 'mastered' : ''}`;
            card.onclick = () => this.selectModule(module.id);

            // 获取分类信息
            const category = contentData.categories.find(c => c.id === module.category);
            const categoryIcon = category ? category.icon : '';

            card.innerHTML = `
                <div class="module-header-row">
                    <span class="module-level level-${module.level}">${this.getLevelText(module.level)}</span>
                    <span class="module-category">${categoryIcon}</span>
                </div>
                <h3>${module.title}</h3>
                <p>${module.description}</p>
                <div class="module-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress.mastered ? 100 : (progress.score || 0)}%"></div>
                    </div>
                    <span>${progress.mastered ? '已掌握' : `${progress.score || 0}%`}</span>
                </div>
            `;

            grid.appendChild(card);
        });
    },

    // 获取等级文本
    getLevelText(level) {
        const levels = { 1: '入门', 2: '基础', 3: '进阶', 4: '实战' };
        return levels[level] || '未知';
    },

    // 选择模块
    selectModule(moduleId) {
        this.currentModule = contentData.modules.find(m => m.id === moduleId);
        if (!this.currentModule) return;

        this.showView('learn-view');
        this.renderLearnContent();
    },

    // 渲染学习内容
    renderLearnContent() {
        document.getElementById('learn-title').textContent = this.currentModule.title;

        const levelSpan = document.getElementById('learn-level');
        levelSpan.className = `module-level level-${this.currentModule.level}`;
        levelSpan.textContent = this.getLevelText(this.currentModule.level);

        // 渲染导航菜单
        this.renderContentNav();

        const container = document.getElementById('knowledge-points');
        container.innerHTML = '';

        // 检查是否有 sections 分组
        const hasSections = this.currentModule.sections && this.currentModule.sections.length > 0;

        if (hasSections) {
            // 按分组渲染
            this.currentModule.sections.forEach(section => {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'content-section';
                sectionDiv.id = `section-${section.id}`;
                sectionDiv.dataset.section = section.id;

                const sectionPoints = this.currentModule.content.filter(p => p.section === section.id);
                if (sectionPoints.length === 0) return;

                let sectionHtml = `<div class="section-header"><h3>${section.icon || '📑'} ${section.title}</h3></div>`;
                sectionHtml += '<div class="section-content">';

                sectionPoints.forEach((point) => {
                    const globalIdx = this.currentModule.content.indexOf(point);
                    sectionHtml += this.renderKnowledgePoint(point, globalIdx);
                });

                sectionHtml += '</div>';
                sectionDiv.innerHTML = sectionHtml;
                container.appendChild(sectionDiv);
            });

            // 渲染没有 section 的内容（兼容旧数据）
            const unsectionedPoints = this.currentModule.content.filter(p => !p.section);
            if (unsectionedPoints.length > 0) {
                const sectionDiv = document.createElement('div');
                sectionDiv.className = 'content-section';
                let sectionHtml = '<div class="section-content">';
                unsectionedPoints.forEach((point) => {
                    const globalIdx = this.currentModule.content.indexOf(point);
                    sectionHtml += this.renderKnowledgePoint(point, globalIdx);
                });
                sectionHtml += '</div>';
                sectionDiv.innerHTML = sectionHtml;
                container.appendChild(sectionDiv);
            }
        } else {
            // 无分组，直接渲染
            this.currentModule.content.forEach((point, index) => {
                const pointHtml = this.renderKnowledgePoint(point, index);
                container.innerHTML += pointHtml;
            });
        }

        // 设置滚动监听
        this.setupScrollSpy();
    },

    // 渲染单个知识点
    renderKnowledgePoint(point, index) {
        let html = `<div class="knowledge-point" id="point-${index}" data-index="${index}">`;
        html += `<h4>${point.title}</h4>`;
        html += `<p class="desc">${point.description}</p>`;

        // 记忆卡片
        if (point.memoryCard) {
            html += this.renderMemoryCard(point.memoryCard);
        }

        // 流程图
        if (point.diagram) {
            html += this.renderDiagram(point.diagram);
        }

        // 实操练习
        if (point.practice) {
            html += this.renderPractice(point.practice);
        }

        // 兼容旧格式
        if (point.code) {
            html += `<pre><code>${this.escapeHtml(point.code)}</code></pre>`;
        }

        if (point.tips && point.tips.length > 0) {
            html += '<ul>' + point.tips.map(tip => `<li>${tip}</li>`).join('') + '</ul>';
        }

        html += '</div>';
        return html;
    },

    // 渲染内容导航菜单
    renderContentNav() {
        const navList = document.getElementById('nav-list');
        if (!navList) return;

        navList.innerHTML = '';

        const hasSections = this.currentModule.sections && this.currentModule.sections.length > 0;

        if (hasSections) {
            // 按分组渲染导航
            this.currentModule.sections.forEach((section, idx) => {
                const li = document.createElement('li');
                li.className = 'nav-item';
                li.innerHTML = `
                    <a class="nav-link ${idx === 0 ? 'active' : ''}" data-section="${section.id}">
                        <span class="nav-icon">${section.icon || '📑'}</span>
                        ${section.title}
                    </a>
                `;
                li.querySelector('.nav-link').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.scrollToSection(section.id);
                });
                navList.appendChild(li);
            });
        } else {
            // 无分组，按知识点渲染
            this.currentModule.content.forEach((point, index) => {
                const li = document.createElement('li');
                li.className = 'nav-item';
                li.innerHTML = `
                    <a class="nav-link ${index === 0 ? 'active' : ''}" data-index="${index}">
                        <span class="nav-num">${index + 1}</span>
                        ${point.title}
                    </a>
                `;
                li.querySelector('.nav-link').addEventListener('click', (e) => {
                    e.preventDefault();
                    this.scrollToPoint(index);
                });
                navList.appendChild(li);
            });
        }
    },

    // 滚动到指定分组
    scrollToSection(sectionId) {
        const section = document.getElementById(`section-${sectionId}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.updateActiveNavBySection(sectionId);
        }
    },

    // 滚动到指定知识点
    scrollToPoint(index) {
        const point = document.getElementById(`point-${index}`);
        if (point) {
            point.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.updateActiveNav(index);
        }
    },

    // 更新导航高亮（按分组）
    updateActiveNavBySection(activeSectionId) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
            if (link.dataset.section === activeSectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    // 更新导航高亮（按知识点）
    updateActiveNav(activeIndex) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
            if (parseInt(link.dataset.index) === activeIndex) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    },

    // 设置滚动监听
    setupScrollSpy() {
        const container = document.getElementById('knowledge-points');
        if (!container) return;

        const hasSections = this.currentModule.sections && this.currentModule.sections.length > 0;

        if (hasSections) {
            // 监听分组
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.dataset.section;
                        if (sectionId) {
                            this.updateActiveNavBySection(sectionId);
                        }
                    }
                });
            }, {
                root: null,
                rootMargin: '-20px 0px -70% 0px',
                threshold: 0
            });

            container.querySelectorAll('.content-section').forEach(section => {
                observer.observe(section);
            });
        } else {
            // 监听知识点
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        this.updateActiveNav(index);
                    }
                });
            }, {
                root: null,
                rootMargin: '-20px 0px -70% 0px',
                threshold: 0
            });

            container.querySelectorAll('.knowledge-point').forEach(point => {
                observer.observe(point);
            });
        }
    },

    // 渲染记忆卡片
    renderMemoryCard(card) {
        if (!card || !card.rows) return '';
        let html = `<div class="memory-card"><div class="memory-card-title">🧠 ${card.title}</div><table class="memory-table">`;
        card.rows.forEach(row => {
            html += `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
        });
        html += '</table></div>';
        return html;
    },

    // 渲染流程图
    renderDiagram(diagram) {
        if (!diagram) return '';
        return `<div class="diagram-box"><div class="diagram-title">${diagram.title}</div><pre class="diagram-content">${this.escapeHtml(diagram.ascii)}</pre></div>`;
    },

    // 渲染实操练习
    renderPractice(practice) {
        if (!practice) return '';
        let html = `<div class="practice-box"><div class="practice-title">💻 ${practice.title}</div>`;
        if (practice.code) {
            html += `<pre><code>${this.escapeHtml(practice.code)}</code></pre>`;
        }
        if (practice.steps && practice.steps.length > 0) {
            html += '<ol class="practice-steps">' + practice.steps.map(step => `<li>${step}</li>`).join('') + '</ol>';
        }
        html += '</div>';
        return html;
    },

    // HTML 转义
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // 开始测试
    startQuiz() {
        Quiz.init(this.currentModule);
        this.showView('quiz-view');
        this.renderQuestion();
    },

    // 渲染问题
    renderQuestion() {
        const question = Quiz.getCurrentQuestion();
        if (!question) {
            this.showResult();
            return;
        }

        document.getElementById('quiz-progress').textContent =
            `问题 ${Quiz.currentQuestionIndex + 1}/${Quiz.getTotalQuestions()}`;
        document.getElementById('question-text').textContent = question.text;

        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';

        const labels = ['A', 'B', 'C', 'D'];
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            div.onclick = () => this.selectOption(index);
            div.innerHTML = `
                <span class="option-label">${labels[index]}</span>
                <span>${option}</span>
            `;
            optionsContainer.appendChild(div);
        });

        // 重置按钮状态
        document.getElementById('submit-answer').disabled = true;
        document.getElementById('submit-answer').style.display = 'inline-block';
        document.getElementById('next-question').style.display = 'none';
        document.getElementById('quiz-feedback').style.display = 'none';
    },

    // 选择选项
    selectedOption: null,
    selectOption(index) {
        this.selectedOption = index;
        document.querySelectorAll('.option').forEach((el, i) => {
            el.classList.toggle('selected', i === index);
        });
        document.getElementById('submit-answer').disabled = false;
    },

    // 提交答案
    submitAnswer() {
        if (this.selectedOption === null) return;

        const result = Quiz.submitAnswer(this.selectedOption);
        const options = document.querySelectorAll('.option');

        options.forEach((el, i) => {
            el.classList.remove('selected');
            if (i === Quiz.getCurrentQuestion().correct) {
                el.classList.add('correct');
            } else if (i === this.selectedOption && !result.isCorrect) {
                el.classList.add('wrong');
            }
        });

        // 显示反馈
        const feedback = document.getElementById('quiz-feedback');
        const feedbackContent = document.getElementById('feedback-content');
        feedback.style.display = 'block';
        feedback.className = `quiz-feedback ${result.isCorrect ? 'correct' : 'wrong'}`;
        feedbackContent.innerHTML = `
            <h4>${result.isCorrect ? '✓ 正确！' : '✗ 错误'}</h4>
            <p>${result.explanation || (result.isCorrect ? '继续保持！' : `正确答案是：${result.correctAnswer}`)}</p>
        `;

        // 切换按钮
        document.getElementById('submit-answer').style.display = 'none';
        document.getElementById('next-question').style.display = 'inline-block';

        this.selectedOption = null;
    },

    // 下一题
    nextQuestion() {
        Quiz.nextQuestion();
        if (Quiz.hasMoreQuestions()) {
            this.renderQuestion();
        } else {
            this.showResult();
        }
    },

    // 显示结果
    showResult() {
        const result = Quiz.getResult();
        this.showView('result-view');

        document.getElementById('score').textContent = result.correctCount;

        // 保存进度
        Storage.saveModuleProgress(
            this.currentModule.id,
            result.percentage,
            result.mastered
        );

        // 清除已掌握模块的错题
        if (result.mastered) {
            Storage.clearModuleWrongAnswers(this.currentModule.id);
        }

        // 渲染分析
        const analysis = document.getElementById('result-analysis');
        let analysisHtml = '<h4>答题分析</h4>';

        Quiz.questions.forEach((q, i) => {
            const answer = Quiz.answers[i];
            analysisHtml += `
                <div class="analysis-item">
                    <span class="status ${answer.isCorrect ? 'correct' : 'wrong'}">
                        ${answer.isCorrect ? '✓' : '✗'}
                    </span>
                    <span>问题 ${i + 1}: ${q.text.substring(0, 30)}...</span>
                </div>
            `;
        });

        if (result.wrongAnswers.length > 0) {
            analysisHtml += `<p style="margin-top: 15px; color: var(--error);">有 ${result.wrongAnswers.length} 道题需要复习</p>`;
        } else {
            analysisHtml += `<p style="margin-top: 15px; color: var(--success);">全部正确！你已经掌握了这个模块。</p>`;
        }

        analysis.innerHTML = analysisHtml;

        // 更新总进度
        this.updateOverallProgress();
    },

    // 复习错题
    reviewWrongAnswers() {
        const wrongAnswers = Quiz.wrongAnswers;

        if (wrongAnswers.length === 0) {
            alert('没有错题需要复习！');
            return;
        }

        this.showView('review-view');

        const container = document.getElementById('wrong-answers');
        container.innerHTML = wrongAnswers.map(wa => `
            <div class="wrong-item">
                <h4>${wa.question}</h4>
                <p class="your-answer">你的答案：${wa.userAnswer}</p>
                <p class="correct-answer">正确答案：${wa.correctAnswer}</p>
                <p class="explanation">${wa.explanation || ''}</p>
            </div>
        `).join('');
    },

    // 重新测试
    retakeQuiz() {
        this.startQuiz();
    },

    // 显示模块列表
    showModules() {
        this.showView('modules-view');
        this.renderModules();
        this.updateNav('学习');
    },

    // 显示配置监控
    showConfig() {
        this.showView('config-view');
        if (typeof ConfigApp !== 'undefined') {
            ConfigApp.init();
        }
        this.updateNav('配置');
    },

    // 更新导航状态
    updateNav(active) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.includes(active)) {
                btn.classList.add('active');
            }
        });
    },

    // AI 辅导
    askTutor() {
        if (!Tutor.hasApiKey()) {
            document.getElementById('api-modal').classList.add('active');
            return;
        }

        Tutor.setContext(this.currentModule);
        this.previousView = 'learn-view';
        this.showView('tutor-view');
    },

    // 从辅导返回
    backFromTutor() {
        this.showView(this.previousView);
    },

    // 发送问题
    async sendQuestion() {
        const input = document.getElementById('user-question');
        const question = input.value.trim();

        if (!question) return;

        // 显示用户消息
        this.addChatMessage(question, 'user');
        input.value = '';

        // 显示加载状态
        const loadingDiv = this.addChatMessage('正在思考...', 'ai', true);

        try {
            const answer = await Tutor.ask(question);
            loadingDiv.remove();
            this.addChatMessage(answer, 'ai');
        } catch (error) {
            loadingDiv.remove();
            this.addChatMessage(`错误: ${error.message}`, 'ai');
        }
    },

    // 添加聊天消息
    addChatMessage(text, type, isLoading = false) {
        const container = document.getElementById('chat-messages');
        const div = document.createElement('div');
        div.className = `message ${type}-message`;

        // 对 AI 消息进行格式化处理
        if (type === 'ai' && !isLoading) {
            div.innerHTML = `<div class="ai-response">${this.formatAIResponse(text)}</div>`;
        } else {
            // 用户消息直接转义
            const p = document.createElement('p');
            p.textContent = text;
            if (isLoading) {
                const loadingSpan = document.createElement('span');
                loadingSpan.className = 'loading';
                p.prepend(loadingSpan);
            }
            div.appendChild(p);
        }

        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        return div;
    },

    // 格式化 AI 回答（支持代码块、列表等）
    formatAIResponse(text) {
        // 先转义 HTML 特殊字符
        let formatted = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // 处理代码块 ```code```
        formatted = formatted.replace(/```(\w*)\n?([\s\S]*?)```/g, (_match, lang, code) => {
            return `<pre class="code-block"><code class="language-${lang}">${code.trim()}</code></pre>`;
        });

        // 处理行内代码 `code`
        formatted = formatted.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

        // 处理粗体 **text**
        formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

        // 处理斜体 *text*
        formatted = formatted.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // 处理换行
        formatted = formatted.replace(/\n/g, '<br>');

        return formatted;
    },

    // API Key 弹窗
    closeApiModal() {
        document.getElementById('api-modal').classList.remove('active');
    },

    saveApiKey() {
        const key = document.getElementById('api-key-input').value.trim();
        if (!key) {
            alert('请输入 API Key');
            return;
        }

        Tutor.setApiKey(key);
        this.closeApiModal();

        // 继续打开辅导
        Tutor.setContext(this.currentModule);
        this.previousView = 'learn-view';
        this.showView('tutor-view');
    },

    // 显示视图
    showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
    },

    // 更新总进度
    updateOverallProgress() {
        const progress = Storage.getOverallProgress(contentData.modules.length);
        document.getElementById('overall-progress').style.width = `${progress.percentage}%`;
        document.getElementById('progress-text').textContent = `${progress.percentage}% 已掌握`;
    }
};

// 启动应用
document.addEventListener('DOMContentLoaded', () => app.init());
