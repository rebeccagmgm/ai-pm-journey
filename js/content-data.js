// content-data.js - 学习内容数据
// 精简版：核心概念 + 记忆卡片 + 实操命令

const contentData = {
  "title": "Claude Code 学习系统",
  "description": "精简高效的学习内容",
  "categories": [
    { "id": "beginner", "name": "入门篇", "icon": "🚀" },
    { "id": "core", "name": "核心篇", "icon": "⚙️" },
    { "id": "advanced", "name": "进阶篇", "icon": "🔧" },
    { "id": "practice", "name": "实战篇", "icon": "⚔️" }
  ],
  "modules": [
    {
      "id": "quick-start",
      "title": "Claude Code 快速入门",
      "description": "5分钟上手 Claude Code",
      "category": "beginner",
      "level": 1,
      "content": [
        {
          "title": "核心概念",
          "description": "Claude Code = AI 编程助手 + 终端运行 + 自然语言交互",
          "memoryCard": {
            "title": "五大概念速记",
            "rows": [
              ["Rules", "始终生效", "定义行为规范"],
              ["Commands", "手动触发", "执行预定义任务"],
              ["Skills", "按需加载", "注入领域知识"],
              ["Agents", "按需启动", "专业子任务"],
              ["Hooks", "事件触发", "自动化拦截"]
            ]
          },
          "practice": {
            "title": "动手练习",
            "steps": [
              "打开终端，输入 claude 启动",
              "输入 \"帮我写一个 hello world 程序\"",
              "观察 Claude 如何理解和执行任务"
            ]
          }
        },
        {
          "title": "安装配置",
          "description": "安装后添加插件市场获取更多功能",
          "memoryCard": {
            "title": "关键路径速记",
            "rows": [
              ["规则目录", "~/.claude/rules/"],
              ["命令目录", ".claude/commands/"],
              ["技能目录", ".claude/skills/"],
              ["代理目录", ".claude/agents/"],
              ["钩子目录", ".claude/hooks/"]
            ]
          },
          "practice": {
            "title": "安装插件",
            "code": "# 添加插件市场\n/plugin marketplace add affaan-m/everything-claude-code\n\n# 安装插件\n/plugin install everything-claude-code",
            "steps": [
              "运行添加市场命令",
              "运行安装插件命令",
              "手动复制 rules 目录"
            ]
          }
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
          "text": "以下哪个不是核心概念？",
          "options": ["Agents", "Skills", "Containers", "Hooks"],
          "correct": 2,
          "explanation": "五大核心概念：Rules, Commands, Skills, Agents, Hooks"
        },
        {
          "text": "如何启动 Claude Code？",
          "options": ["打开 claude.com", "运行 claude 命令", "双击图标", "安装插件"],
          "correct": 1,
          "explanation": "在终端运行 claude 命令即可启动。"
        },
        {
          "text": "Rules 存储在哪个目录？",
          "options": ["~/.claude/commands/", "~/.claude/rules/", "~/.claude/agents/", "~/.claude/skills/"],
          "correct": 1,
          "explanation": "Rules 存储在 ~/.claude/rules/ 目录。"
        },
        {
          "text": "Rules 什么时候加载？",
          "options": ["手动调用时", "启动时自动加载", "需要时加载", "从不加载"],
          "correct": 1,
          "explanation": "Rules 在启动时自动加载，始终生效。"
        }
      ]
    },
    {
      "id": "rules-guide",
      "title": "Rules 完全指南",
      "description": "始终生效的行为规范",
      "category": "core",
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
      "title": "Commands 完全指南",
      "description": "斜杠命令快速执行任务",
      "category": "core",
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
      "title": "Agents 完全指南",
      "description": "独立的专业子代理",
      "category": "core",
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
      "id": "skills-complete-guide",
      "title": "Skills 完全指南（2026最新版）",
      "description": "从零掌握 Claude Code Skills 体系",
      "category": "core",
      "level": 2,
      "content": [
        {
          "title": "一、什么是 Skills？",
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
          "title": "二、Skills vs 传统提示词",
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
          },
          "practice": {
            "title": "结论",
            "steps": [
              "临时用一次？写提示词就够了",
              "长期用、团队用？就该用 Skills",
              "Skills 写一次，放固定地方，任何时候打开就有"
            ]
          }
        },
        {
          "title": "三、三个核心概念",
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
          "title": "四、文件结构",
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
          "title": "五、触发机制",
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
          },
          "practice": {
            "title": "总结",
            "steps": [
              "安装好就忘了它",
              "用自然语言描述需求",
              "Claude 会自动调用",
              "只有少数需手动触发（如 /plan、/tdd）"
            ]
          }
        },
        {
          "title": "六、安装方式",
          "description": "两种安装方式：插件市场安装（推荐 90% 场景）和本地手动安装。",
          "memoryCard": {
            "title": "三种市场对比",
            "rows": [
              ["官方市场", "Anthropic 维护", "可单独安装，优先选择"],
              ["社区市场", "社区开发者", "全装，按需选择"],
              ["独立市场", "独立仓库", "专属索引"]
            ]
          },
          "practice": {
            "title": "安装命令",
            "code": "# 官方市场（可单独安装）\n/plugin marketplace add anthropics/claude-plugins-official\n/plugin install code-simplifier@claude-plugins-official\n\n# 社区市场（全装）\n/plugin marketplace add affaan-m/everything-claude-code\n/plugin install everything-claude-code\n\n# 独立市场\n/plugin marketplace add obra/superpowers-marketplace.git\n/plugin install superpowers@superpowers-marketplace"
          }
        },
        {
          "title": "七、热门 Skills 推荐",
          "description": "精选必装插件，按优先级排序。",
          "memoryCard": {
            "title": "必装插件 Top 3",
            "rows": [
              ["🥇 everything-claude-code", "41k+ ⭐", "50+ Skills 全覆盖"],
              ["🥈 claude-mem", "16k+ ⭐", "解决金鱼记忆问题"],
              ["🥉 superpowers", "22k+ ⭐", "TDD + 代码审查"]
            ]
          },
          "practice": {
            "title": "安装必装插件",
            "code": "# 第一优先：everything-claude-code\n/plugin marketplace add affaan-m/everything-claude-code\n/plugin install everything-claude-code\n\n# 第二优先：claude-mem（跨会话记忆）\n/plugin marketplace add thedotmack/claude-mem\n/plugin install claude-mem\n\n# 第三优先：superpowers\n/plugin marketplace add obra/superpowers-marketplace.git\n/plugin install superpowers@superpowers-marketplace"
          }
        },
        {
          "title": "八、官方插件精选",
          "description": "Anthropic 官方维护的插件，质量有保障，可单独安装。",
          "memoryCard": {
            "title": "官方插件列表",
            "rows": [
              ["code-simplifier", "识别冗余、简化逻辑", "代码重构"],
              ["skill-creator", "根据需求生成 Skill", "创建自定义"],
              ["code-review", "规范检查和改进建议", "代码审查"],
              ["security-guidance", "安全编码最佳实践", "安全"],
              ["frontend-design", "生成 UI 组件", "前端设计"]
            ]
          },
          "practice": {
            "title": "安装官方插件",
            "code": "# 首次添加官方市场（只需一次）\n/plugin marketplace add anthropics/claude-plugins-official\n\n# 按需安装单个插件\n/plugin install code-simplifier@claude-plugins-official\n/plugin install skill-creator@claude-plugins-official"
          }
        },
        {
          "title": "九、新手安装指南",
          "description": "按优先级和场景推荐安装策略。",
          "memoryCard": {
            "title": "按优先级安装",
            "rows": [
              ["🥇 第一", "everything-claude-code", "50+ Skills 必装"],
              ["🥈 第二", "claude-mem", "长期项目必备"],
              ["🥉 第三", "superpowers", "提升代码质量"],
              ["4", "code-simplifier（官方）", "代码简化重构"],
              ["5", "skill-creator（官方）", "创建自定义技能"]
            ]
          },
          "practice": {
            "title": "按场景推荐",
            "steps": [
              "大型项目开发 → everything + claude-mem + superpowers",
              "追求代码质量 → superpowers + code-simplifier",
              "国内内容创作 → baoyu-skills（宝玉老师出品）",
              "离线环境 → 本地手动安装"
            ]
          }
        },
        {
          "title": "十、常见问题",
          "description": "Skills 使用中的常见问题解答。",
          "memoryCard": {
            "title": "FAQ",
            "rows": [
              ["不生效？", "重启 Claude Code，检查路径和文件名"],
              ["查看已安装？", "/plugin 或 ls ~/.claude/skills/"],
              ["只装某一个？", "市场不能，本地手动可以"],
              ["Windows 失败？", "用 HTTPS 地址，配置 Git 代理"]
            ]
          },
          "practice": {
            "title": "排查步骤",
            "code": "# 检查文件路径\nls ~/.claude/skills/\n\n# 检查文件名（必须是 SKILL.md）\nls ~/.claude/skills/*/SKILL.md\n\n# 查看已安装插件\n/plugin"
          }
        },
        {
          "title": "十一、本地手动安装",
          "description": "不经过包管理体系，直接复制 Skill 文件夹到本地目录。适合特殊场景。",
          "memoryCard": {
            "title": "手动安装场景",
            "rows": [
              ["未上架市场", "从 GitHub 直接复制"],
              ["敏感密钥", "需要完全本地运行"],
              ["深度修改", "需要修改 Skill 源码"],
              ["离线环境", "无法访问网络"]
            ]
          },
          "practice": {
            "title": "手动安装命令",
            "code": "# macOS/Linux - 用户范围（所有项目）\ncp -r <skill-folder> ~/.claude/skills/\n\n# macOS/Linux - 项目范围（仅当前项目）\ncp -r <skill-folder> ./.claude/skills/\n\n# Windows PowerShell（用户范围）\nCopy-Item -Recurse \".\\skill-folder\" \"$env:USERPROFILE\\.claude\\skills\\\"\n\n# 安装后重启 Claude Code"
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
        },
        {
          "text": "必装插件第一优先级是？",
          "options": ["claude-mem", "superpowers", "everything-claude-code", "code-simplifier"],
          "correct": 2,
          "explanation": "everything-claude-code 包含 50+ Skills，覆盖全开发流程，是必装首选。"
        },
        {
          "text": "claude-mem 解决什么问题？",
          "options": ["代码格式化", "跨会话记忆项目上下文", "网络请求", "文件管理"],
          "correct": 1,
          "explanation": "claude-mem 解决 Claude 的「金鱼记忆」问题，跨会话保持项目上下文。"
        },
        {
          "text": "官方市场相比社区市场的优势？",
          "options": ["插件更多", "可单独安装某个插件", "更新更快", "免费"],
          "correct": 1,
          "explanation": "官方市场可单独安装某个插件，社区市场通常是全装。"
        },
        {
          "text": "Windows 添加市场失败怎么办？",
          "options": ["放弃安装", "使用 HTTPS 地址，配置 Git 代理", "换 Linux", "联系客服"],
          "correct": 1,
          "explanation": "Windows 需使用 HTTPS 地址（不用 SSH），配置 Git 代理或选择本地手动安装。"
        },
        {
          "text": "什么情况适合本地手动安装？",
          "options": ["网络正常", "未上架市场、敏感密钥、离线环境", "团队协作", "测试插件"],
          "correct": 1,
          "explanation": "未上架插件、涉及敏感密钥、需要深度修改、完全离线环境适合手动安装。"
        },
        {
          "text": "Skills 安装后不生效首先应该？",
          "options": ["重新安装", "重启 Claude Code", "换电脑", "联系支持"],
          "correct": 1,
          "explanation": "新增 Skills 必须重启 Claude Code 才能生效。"
        },
        {
          "text": "如何查看已安装的 Skills？",
          "options": ["/skills", "/plugin 或 ls ~/.claude/skills/", "/list", "/show"],
          "correct": 1,
          "explanation": "使用 /plugin 查看插件，或用 ls ~/.claude/skills/ 查看手动安装的 Skills。"
        },
        {
          "text": "SKILL.md 中 description 的作用？",
          "options": ["显示名称", "决定 Skill 何时被激活", "文件描述", "版本号"],
          "correct": 1,
          "explanation": "description 是灵魂，Claude 靠这段描述判断「什么时候该激活这个 Skill」。"
        },
        {
          "text": "大型项目开发推荐安装哪些？",
          "options": ["只装官方插件", "everything + claude-mem + superpowers", "随便装一个", "不需要安装"],
          "correct": 1,
          "explanation": "大型项目推荐 everything-claude-code + claude-mem + superpowers 三件套。"
        },
        {
          "text": "国内内容创作者推荐安装？",
          "options": ["everything-claude-code", "baoyu-skills", "superpowers", "官方插件"],
          "correct": 1,
          "explanation": "baoyu-skills 是宝玉老师出品，适合国内内容创作者。"
        }
      ]
    },
    {
      "id": "hooks-guide",
      "title": "Hooks 完全指南",
      "description": "事件触发的自动化脚本",
      "category": "core",
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
      "title": "持续学习系统",
      "description": "从会话中自动提取模式",
      "category": "advanced",
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
      "id": "verification-tdd",
      "title": "验证与 TDD 实践",
      "description": "测试驱动开发工作流",
      "category": "advanced",
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
      "id": "security-summary",
      "title": "安全与最佳实践",
      "description": "安全检查 + 五大概念总结",
      "category": "practice",
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
    }
  ]
};
