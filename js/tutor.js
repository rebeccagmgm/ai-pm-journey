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
        let prompt = `你是一个友好的 Claude Code 学习辅导老师。你的任务是帮助学生理解 Claude Code 和 everything-claude-code 项目。

教学原则：
1. 用简单易懂的语言解释概念
2. 提供具体的代码示例
3. 鼓励学生提问
4. 根据学生的理解程度调整解释深度
5. 使用中文回答`;

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
