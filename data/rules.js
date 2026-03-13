// data/rules.js - Rules 配置内容（含中文摘要）
// 最后更新: 2026-03-11

const RulesData = {
    lastUpdate: "2026-03-11 23:55",
    items: [
        {
            name: "coding-style.md",
            description: "编码风格规范",
            category: "root",
            summary: "【核心原则】不可变性优先（禁止直接修改对象）、小文件优于大文件（200-800行）、全面错误处理、输入验证（使用zod）、代码质量清单。",
            content: `# Coding Style

## Immutability (CRITICAL)

ALWAYS create new objects, NEVER mutate:

\`\`\`javascript
// WRONG: Mutation
function updateUser(user, name) {
  user.name = name // MUTATION!
  return user
}

// CORRECT: Immutability
function updateUser(user, name) {
  return {
    ...user,
    name
  }
}
\`\`\`

## File Organization

MANY SMALL FILES > FEW LARGE FILES:
- High cohesion, low coupling
- 200-400 lines typical, 800 max
- Extract utilities from large components
- Organize by feature/domain, not by type

## Error Handling

ALWAYS handle errors comprehensively:

\`\`\`typescript
try {
  const result = await riskyOperation()
  return result
} catch (error) {
  console.error('Operation failed:', error)
  throw new Error('Detailed user-friendly message')
}
\`\`\`

## Input Validation

ALWAYS validate user input:

\`\`\`typescript
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  age: z.number().int().min(0).max(150)
})

const validated = schema.parse(input)
\`\`\`

## Code Quality Checklist

Before marking work complete:
- [ ] Code is readable and well-named
- [ ] Functions are small (<50 lines)
- [ ] Files are focused (<800 lines)
- [ ] No deep nesting (>4 levels)
- [ ] Proper error handling
- [ ] No console.log statements
- [ ] No hardcoded values
- [ ] No mutation (immutable patterns used)`
        },
        {
            name: "agents.md",
            description: "Agent 编排规则",
            category: "root",
            summary: "【可用Agent】planner(计划)、architect(架构)、tdd-guide(测试)、code-reviewer(审查)、security-reviewer(安全)、build-error-resolver(构建错误)等。【使用原则】复杂功能用planner、写完代码用code-reviewer、新功能用tdd-guide。",
            content: `# Agent Orchestration

## Available Agents

Located in \`~/.claude/agents/\`:

| Agent | Purpose | When to Use |
|-------|---------|-------------|
| planner | Implementation planning | Complex features, refactoring |
| architect | System design | Architectural decisions |
| tdd-guide | Test-driven development | New features, bug fixes |
| code-reviewer | Code review | After writing code |
| security-reviewer | Security analysis | Before commits |
| build-error-resolver | Fix build errors | When build fails |
| e2e-runner | E2E testing | Critical user flows |
| refactor-cleaner | Dead code cleanup | Code maintenance |
| doc-updater | Documentation | Updating docs |

## Immediate Agent Usage

No user prompt needed:
1. Complex feature requests - Use **planner** agent
2. Code just written/modified - Use **code-reviewer** agent
3. Bug fix or new feature - Use **tdd-guide** agent
4. Architectural decision - Use **architect** agent

## Parallel Task Execution

ALWAYS use parallel Task execution for independent operations:

\`\`\`markdown
# GOOD: Parallel execution
Launch 3 agents in parallel:
1. Agent 1: Security analysis of auth.ts
2. Agent 2: Performance review of cache system
3. Agent 3: Type checking of utils.ts

# BAD: Sequential when unnecessary
First agent 1, then agent 2, then agent 3
\`\`\`

## Multi-Perspective Analysis

For complex problems, use split role sub-agents:
- Factual reviewer
- Senior engineer
- Security expert
- Consistency reviewer
- Redundancy checker`
        },
        {
            name: "git-workflow.md",
            description: "Git 工作流",
            category: "root",
            summary: "【提交格式】<type>: <subject>，类型包括feat/fix/refactor/docs/test/chore。【PR流程】分析完整提交历史→起草PR摘要→包含测试计划→push -u。【开发流程】计划→TDD→代码审查→提交。",
            content: `# Git Workflow

## Commit Message Format

\`\`\`
<type>: <subject>

<body>
\`\`\`

Types: feat, fix, refactor, docs, test, chore, perf, ci

Note: Attribution disabled globally via ~/.claude/settings.json.

## Pull Request Workflow

When creating PRs:
1. Analyze full commit history (not just latest commit)
2. Use \`git diff [base-branch]...HEAD\` to see all changes
3. Draft comprehensive PR summary
4. Include test plan with TODOs
5. Push with \`-u\` flag if new branch

## Feature Implementation Workflow

1. **Plan First**
   - Use **planner** agent to create implementation plan
   - Identify dependencies and risks
   - Break down into phases

2. **TDD Approach**
   - Use **tdd-guide** agent
   - Write tests first (RED)
   - Implement to pass tests (GREEN)
   - Refactor (IMPROVE)
   - Verify 80%+ coverage

3. **Code Review**
   - Use **code-reviewer** agent immediately after writing code
   - Address CRITICAL and HIGH issues
   - Fix MEDIUM issues when possible

4. **Commit & Push**
   - Detailed commit messages
   - Follow conventional commits format`
        },
        {
            name: "performance.md",
            description: "性能优化指南",
            category: "root",
            summary: "【模型选择】Haiku(日常任务，3x省钱)→Sonnet(主开发)→Opus(复杂架构)。【上下文管理】避免最后20%窗口处理大型重构。【深度推理】ultrathink + Plan模式 + 多角度分析。",
            content: `# Performance Optimization

## Model Selection Strategy

**Haiku 4.5** (90% of Sonnet capability, 3x cost savings):
- Lightweight agents with frequent invocation
- Pair programming and code generation
- Worker agents in multi-agent systems

**Sonnet 4.5** (Best coding model):
- Main development work
- Orchestrating multi-agent workflows
- Complex coding tasks

**Opus 4.5** (Deepest reasoning):
- Complex architectural decisions
- Maximum reasoning requirements
- Research and analysis tasks

## Context Window Management

Avoid last 20% of context window for:
- Large-scale refactoring
- Feature implementation spanning multiple files
- Debugging complex interactions

Lower context sensitivity tasks:
- Single-file edits
- Independent utility creation
- Documentation updates
- Simple bug fixes

## Ultrathink + Plan Mode

For complex tasks requiring deep reasoning:
1. Use \`ultrathink\` for enhanced thinking
2. Enable **Plan Mode** for structured approach
3. "Rev the engine" with multiple critique rounds
4. Use split role sub-agents for diverse analysis

## Build Troubleshooting

If build fails:
1. Use **build-error-resolver** agent
2. Analyze error messages
3. Fix incrementally
4. Verify after each fix`
        },
        {
            name: "security.md",
            description: "安全规范",
            category: "root",
            summary: "【必检项】无硬编码密钥、输入验证、SQL注入防护、XSS防护、CSRF保护、权限验证、限流。【密钥管理】永远用环境变量。【安全响应】发现问题时立即停止→用security-reviewer→修复CRITICAL问题→轮换泄露的密钥。",
            content: `# Security Guidelines

## Mandatory Security Checks

Before ANY commit:
- [ ] No hardcoded secrets (API keys, passwords, tokens)
- [ ] All user inputs validated
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (sanitized HTML)
- [ ] CSRF protection enabled
- [ ] Authentication/authorization verified
- [ ] Rate limiting on all endpoints
- [ ] Error messages don't leak sensitive data

## Secret Management

\`\`\`typescript
// NEVER: Hardcoded secrets
const apiKey = "sk-proj-xxxxx"

// ALWAYS: Environment variables
const apiKey = process.env.OPENAI_API_KEY
if (!apiKey) {
  throw new Error('OPENAI_API_KEY not configured')
}
\`\`\`

## Security Response Protocol

If security issue found:
1. STOP immediately
2. Use **security-reviewer** agent
3. Fix CRITICAL issues before continuing
4. Rotate any exposed secrets
5. Review entire codebase for similar issues`
        },
        {
            name: "testing.md",
            description: "测试要求",
            category: "root",
            summary: "【覆盖率】最低80%。【测试类型】单元测试(函数)、集成测试(API/DB)、E2E测试(关键流程)。【TDD流程】写测试→运行(失败)→写代码→运行(通过)→重构→验证覆盖率。使用tdd-guide agent。",
            content: `# Testing Requirements

## Minimum Test Coverage: 80%

Test Types (ALL required):
1. **Unit Tests** - Individual functions, utilities, components
2. **Integration Tests** - API endpoints, database operations
3. **E2E Tests** - Critical user flows (Playwright)

## Test-Driven Development

MANDATORY workflow:
1. Write test first (RED)
2. Run test - it should FAIL
3. Write minimal implementation (GREEN)
4. Run test - it should PASS
5. Refactor (IMPROVE)
6. Verify coverage (80%+)

## Troubleshooting Test Failures

1. Use **tdd-guide** agent
2. Check test isolation
3. Verify mocks are correct
4. Fix implementation, not tests (unless tests are wrong)

## Agent Support

- **tdd-guide** - Use PROACTIVELY for new features, enforces write-tests-first
- **e2e-runner** - Playwright E2E testing specialist`
        },
        {
            name: "development-workflow.md",
            description: "开发工作流",
            category: "common",
            summary: "【第0步】先搜索现有方案(GitHub/npm/PyPI)，复用优先。【第1步】用planner做计划。【第2步】TDD开发。【第3步】code-reviewer审查。【第4步】详细提交信息+常规格式。",
            content: `# Development Workflow

> This file extends [common/git-workflow.md](./git-workflow.md) with the full feature development process.

## Feature Implementation Workflow

0. **Research & Reuse** _(mandatory before any new implementation)_
   - **GitHub code search first:** Run \`gh search repos\` and \`gh search code\`
   - **Exa MCP for research:** Use \`exa-web-search\` MCP during planning
   - **Check package registries:** Search npm, PyPI, crates.io
   - Prefer battle-tested libraries over hand-rolled solutions

1. **Plan First**
   - Use **planner** agent to create implementation plan
   - Generate planning docs before coding
   - Identify dependencies and risks

2. **TDD Approach**
   - Use **tdd-guide** agent
   - Write tests first (RED)
   - Implement to pass tests (GREEN)
   - Refactor (IMPROVE)
   - Verify 80%+ coverage

3. **Code Review**
   - Use **code-reviewer** agent immediately after writing code
   - Address CRITICAL and HIGH issues

4. **Commit & Push**
   - Detailed commit messages
   - Follow conventional commits format`
        },
        {
            name: "hooks.md",
            description: "Hooks 系统",
            category: "common",
            summary: "【Hook类型】PreToolUse(执行前)、PostToolUse(执行后)、Stop(会话结束)。【TodoWrite】用于跟踪多步骤任务、验证理解、显示进度。【警告】谨慎使用自动接受权限。",
            content: `# Hooks System

## Hook Types

- **PreToolUse**: Before tool execution (validation, parameter modification)
- **PostToolUse**: After tool execution (auto-format, checks)
- **Stop**: When session ends (final verification)

## Auto-Accept Permissions

Use with caution:
- Enable for trusted, well-defined plans
- Disable for exploratory work
- Never use dangerously-skip-permissions flag
- Configure \`allowedTools\` in \`~/.claude.json\` instead

## TodoWrite Best Practices

Use TodoWrite tool to:
- Track progress on multi-step tasks
- Verify understanding of instructions
- Enable real-time steering
- Show granular implementation steps

Todo list reveals:
- Out of order steps
- Missing items
- Extra unnecessary items
- Wrong granularity
- Misinterpreted requirements`
        },
        {
            name: "patterns.md",
            description: "通用模式",
            category: "common",
            summary: "【骨架项目】先搜索成熟模板，用并行Agent评估(安全/扩展性/相关性)。【Repository模式】统一数据访问接口(findAll/findById/create/update/delete)。【API响应】统一的响应格式(success/data/error/meta)。",
            content: `# Common Patterns

## Skeleton Projects

When implementing new functionality:
1. Search for battle-tested skeleton projects
2. Use parallel agents to evaluate options:
   - Security assessment
   - Extensibility analysis
   - Relevance scoring
   - Implementation planning
3. Clone best match as foundation
4. Iterate within proven structure

## Design Patterns

### Repository Pattern

Encapsulate data access behind a consistent interface:
- Define standard operations: findAll, findById, create, update, delete
- Concrete implementations handle storage details
- Business logic depends on the abstract interface
- Enables easy swapping of data sources

### API Response Format

Use a consistent envelope for all API responses:
- Include a success/status indicator
- Include the data payload (nullable on error)
- Include an error message field (nullable on success)
- Include metadata for paginated responses (total, page, limit)`
        },
        {
            name: "verification-first.md",
            description: "验证优先",
            category: "common",
            summary: "【核心原则】未验证的工作不得汇报。【验证内容】文件创建、语法检查、配置格式、能运行、核心功能测试、边界情况、错误处理。【禁止】做完就说完成、假设能工作、跳过验证。",
            content: `# Verification First

## 核心原则

**未验证的工作不得汇报给用户。**

## 必须验证的内容

### 代码开发
- [ ] 所有文件已创建
- [ ] 语法检查通过（JS/TS/Python 等）
- [ ] JSON/YAML 配置文件格式正确
- [ ] 能正常运行（启动服务器/执行脚本）

### 功能实现
- [ ] 核心功能已测试
- [ ] 边界情况已考虑
- [ ] 错误处理已实现

## 验证方法

1. **文件检查**: 确认所有文件存在
2. **语法检查**: 使用 linter 或解析器
3. **运行测试**: 实际执行代码
4. **功能测试**: 手动或自动化测试关键路径

## 汇报格式

验证通过后，汇报应包含：
- ✅ 已验证的内容
- 🔧 实现的功能
- 📍 关键文件路径

## 禁止行为

- ❌ 做完就说"完成了"
- ❌ 假设代码能工作
- ❌ 跳过验证直接汇报`
        }
    ]
};
