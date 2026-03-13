// storage.js - 本地存储管理
const Storage = {
    KEYS: {
        PROGRESS: 'claude_learning_progress',
        API_KEY: 'claude_api_key',
        WRONG_ANSWERS: 'claude_wrong_answers'
    },

    // 获取学习进度
    getProgress() {
        const data = localStorage.getItem(this.KEYS.PROGRESS);
        return data ? JSON.parse(data) : {};
    },

    // 保存模块进度
    saveModuleProgress(moduleId, score, mastered) {
        const progress = this.getProgress();
        progress[moduleId] = {
            score,
            mastered,
            lastAttempt: new Date().toISOString(),
            attempts: (progress[moduleId]?.attempts || 0) + 1
        };
        localStorage.setItem(this.KEYS.PROGRESS, JSON.stringify(progress));
    },

    // 获取模块进度
    getModuleProgress(moduleId) {
        const progress = this.getProgress();
        return progress[moduleId] || { score: 0, mastered: false, attempts: 0 };
    },

    // 获取总体进度
    getOverallProgress(totalModules) {
        const progress = this.getProgress();
        const masteredCount = Object.values(progress).filter(p => p.mastered).length;
        return {
            mastered: masteredCount,
            total: totalModules,
            percentage: Math.round((masteredCount / totalModules) * 100)
        };
    },

    // 保存错题
    saveWrongAnswer(moduleId, question, userAnswer, correctAnswer) {
        const wrongAnswers = this.getWrongAnswers();
        const key = `${moduleId}-${question.id || Date.now()}`;
        wrongAnswers[key] = {
            moduleId,
            question: question.text,
            userAnswer,
            correctAnswer,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(this.KEYS.WRONG_ANSWERS, JSON.stringify(wrongAnswers));
    },

    // 获取错题
    getWrongAnswers() {
        const data = localStorage.getItem(this.KEYS.WRONG_ANSWERS);
        return data ? JSON.parse(data) : {};
    },

    // 获取模块错题
    getModuleWrongAnswers(moduleId) {
        const all = this.getWrongAnswers();
        return Object.entries(all)
            .filter(([key, value]) => value.moduleId === moduleId)
            .map(([key, value]) => value);
    },

    // 清除模块错题
    clearModuleWrongAnswers(moduleId) {
        const wrongAnswers = this.getWrongAnswers();
        Object.keys(wrongAnswers).forEach(key => {
            if (wrongAnswers[key].moduleId === moduleId) {
                delete wrongAnswers[key];
            }
        });
        localStorage.setItem(this.KEYS.WRONG_ANSWERS, JSON.stringify(wrongAnswers));
    },

    // API Key 管理
    saveApiKey(key) {
        localStorage.setItem(this.KEYS.API_KEY, key);
    },

    getApiKey() {
        return localStorage.getItem(this.KEYS.API_KEY);
    },

    hasApiKey() {
        return !!this.getApiKey();
    },

    // 重置所有数据
    resetAll() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    }
};
