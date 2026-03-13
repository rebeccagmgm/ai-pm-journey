// data/hooks.js - Hooks 配置内容（含中文说明）
// 最后更新: 2026-03-11

const HooksData = {
    lastUpdate: "2026-03-11 23:55",
    items: [
        {
            name: "PreCompact",
            type: "压缩前",
            command: "pre-compact.js",
            description: "在上下文压缩前执行",
            summary: "【触发时机】上下文即将被压缩时。【功能】保存会话摘要到backups目录，确保重要信息不丢失。【输出】生成带时间戳的摘要文件，包含任务列表、修改文件、使用工具等。",
            config: {
                matcher: "*",
                hook: {
                    type: "command",
                    command: "node \"C:/Users/13246/.claude/plugins/everything-claude-code/scripts/hooks/pre-compact.js\""
                }
            }
        },
        {
            name: "SessionStart",
            type: "会话开始",
            command: "session-start.js",
            description: "会话开始时执行",
            summary: "【触发时机】新会话启动时。【功能】加载项目上下文，检查是否有之前的会话记录，初始化必要的环境。【输出】显示项目信息、上次会话摘要（如果有）。",
            config: {
                matcher: "*",
                hook: {
                    type: "command",
                    command: "node \"C:/Users/13246/.claude/plugins/everything-claude-code/scripts/hooks/session-start.js\""
                }
            }
        },
        {
            name: "Stop",
            type: "会话结束",
            command: "session-end.js",
            description: "会话结束时执行",
            summary: "【触发时机】会话正常结束时。【功能】保存会话记录，提取学习模式，更新统计数据。【输出】生成会话记录文件，包含完整的对话摘要和统计信息。",
            config: {
                matcher: "*",
                hook: {
                    type: "command",
                    command: "node \"C:/Users/13246/.claude/plugins/everything-claude-code/scripts/hooks/session-end.js\"",
                    timeout: 10,
                    async: true
                }
            }
        }
    ]
};
