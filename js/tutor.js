// tutor.js - AI 辅导系统（使用智谱 GLM API）
const Tutor = {
    apiKey: null,
    conversationHistory: [],
    currentModule: null,

    // 初始化
    init() {
        this.apiKey = Storage.getApiKey();
    },

    // 设置当前模块上下文
    setContext(module) {
        this.currentModule = module;
        this.conversationHistory = [];
    },

    // 发送问题到智谱 GLM API
    async ask(question) {
        if (!this.apiKey) {
            throw new Error('请先设置 API Key');
        }

        // 构建上下文
        const systemPrompt = this.buildSystemPrompt();
        const messages = this.buildMessages(question, systemPrompt);

        try {
            const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                    model: 'glm-4-flash',
                    max_tokens: 1024,
                    messages: messages
                })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error?.message || 'API 请求失败');
            }

            const data = await response.json();
            const answer = data.choices[0].message.content;

            // 保存到对话历史
            this.conversationHistory.push(
                { role: 'user', content: question },
                { role: 'assistant', content: answer }
            );

            return answer;
        } catch (error) {
            console.error('Tutor API Error:', error);
            throw error;
        }
    },

    // 构建系统提示
    buildSystemPrompt() {
        let prompt = `你是 AI PM Journey 的学习辅导助手，帮助用户成为「新时代懂技术的 PM」。

你可以回答：
- Claude Code 和 AI 工具使用问题
- PM 核心能力问题（需求分析、产品规划、数据驱动）
- AI 产品设计问题（Prompt Engineering、AI 功能设计）
- 职业发展问题

教学原则：
1. 简洁实用，避免空话和套话
2. 用案例说明概念
3. 提供可操作的建议
4. 使用中文回答`;

        if (this.currentModule) {
            prompt += `\n\n当前学习模块：${this.currentModule.title}
模块描述：${this.currentModule.description}

请围绕这个模块的内容来回答学生的问题。`;
        }

        return prompt;
    },

    // 构建消息列表（智谱 API 格式）
    buildMessages(question, systemPrompt) {
        return [
            { role: 'system', content: systemPrompt },
            ...this.conversationHistory,
            { role: 'user', content: question }
        ];
    },

    // 设置 API Key
    setApiKey(key) {
        this.apiKey = key;
        Storage.saveApiKey(key);
    },

    // 检查是否有 API Key
    hasApiKey() {
        return !!this.apiKey;
    },

    // 清空对话历史
    clearHistory() {
        this.conversationHistory = [];
    }
};
