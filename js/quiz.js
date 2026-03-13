// quiz.js - 测试系统
const Quiz = {
    currentModule: null,
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    wrongAnswers: [],

    // 初始化测试
    init(module) {
        this.currentModule = module;
        this.currentQuestionIndex = 0;
        this.answers = [];
        this.wrongAnswers = [];
        this.questions = this.generateQuestions(module);
    },

    // 生成测试题
    generateQuestions(module) {
        // 从模块的知识点生成测试题
        if (module.quiz && module.quiz.length > 0) {
            // 随机选择5道题
            const shuffled = [...module.quiz].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, Math.min(5, shuffled.length));
        }
        return [];
    },

    // 获取当前问题
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    },

    // 获取问题总数
    getTotalQuestions() {
        return this.questions.length;
    },

    // 提交答案
    submitAnswer(answerIndex) {
        const question = this.getCurrentQuestion();
        const isCorrect = answerIndex === question.correct;

        this.answers.push({
            questionIndex: this.currentQuestionIndex,
            answerIndex,
            isCorrect
        });

        if (!isCorrect) {
            this.wrongAnswers.push({
                question: question.text,
                userAnswer: question.options[answerIndex],
                correctAnswer: question.options[question.correct],
                explanation: question.explanation
            });
            // 保存到存储
            Storage.saveWrongAnswer(
                this.currentModule.id,
                { text: question.text },
                question.options[answerIndex],
                question.options[question.correct]
            );
        }

        return {
            isCorrect,
            correctAnswer: question.options[question.correct],
            explanation: question.explanation
        };
    },

    // 下一题
    nextQuestion() {
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    },

    // 获取测试结果
    getResult() {
        const correctCount = this.answers.filter(a => a.isCorrect).length;
        const total = this.questions.length;
        const percentage = Math.round((correctCount / total) * 100);
        const mastered = percentage >= 80;

        return {
            correctCount,
            total,
            percentage,
            mastered,
            wrongAnswers: this.wrongAnswers
        };
    },

    // 检查是否还有问题
    hasMoreQuestions() {
        return this.currentQuestionIndex < this.questions.length;
    }
};
