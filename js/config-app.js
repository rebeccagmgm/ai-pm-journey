// config-app.js - 配置监控仪表板逻辑（支持中文摘要）
const ConfigApp = {
    currentSection: 'rules',
    expandedItems: new Set(),

    // 初始化
    init() {
        this.renderDashboard();
    },

    // 渲染仪表板
    renderDashboard() {
        const container = document.getElementById('config-content');
        if (!container) return;

        const summary = {
            rules: RulesData?.items?.length || 0,
            agents: AgentsData?.items?.length || 0,
            skills: SkillsData?.items?.length || 0,
            commands: CommandsData?.items?.length || 0,
            hooks: HooksData?.items?.length || 0
        };

        container.innerHTML = `
            <div class="config-header">
                <h2>Claude Code 配置监控</h2>
                <div class="config-meta">
                    <span class="last-update">最后更新: ${RulesData?.lastUpdate || '未知'}</span>
                    <button class="btn btn-secondary" onclick="ConfigApp.showRefreshGuide()">🔄 更新数据</button>
                </div>
            </div>

            <div class="config-summary">
                <div class="summary-card active" onclick="ConfigApp.showSection('rules')">
                    <span class="summary-count">${summary.rules}</span>
                    <span class="summary-label">Rules</span>
                </div>
                <div class="summary-card" onclick="ConfigApp.showSection('agents')">
                    <span class="summary-count">${summary.agents}</span>
                    <span class="summary-label">Agents</span>
                </div>
                <div class="summary-card" onclick="ConfigApp.showSection('skills')">
                    <span class="summary-count">${summary.skills}</span>
                    <span class="summary-label">Skills</span>
                </div>
                <div class="summary-card" onclick="ConfigApp.showSection('commands')">
                    <span class="summary-count">${summary.commands}</span>
                    <span class="summary-label">Commands</span>
                </div>
                <div class="summary-card" onclick="ConfigApp.showSection('hooks')">
                    <span class="summary-count">${summary.hooks}</span>
                    <span class="summary-label">Hooks</span>
                </div>
            </div>

            <div class="config-details" id="config-details">
                ${this.renderSection('rules')}
            </div>
        `;
    },

    // 渲染各部分详情
    renderSection(section) {
        const dataMap = {
            rules: RulesData,
            agents: AgentsData,
            skills: SkillsData,
            commands: CommandsData,
            hooks: HooksData
        };

        const data = dataMap[section]?.items || [];
        this.currentSection = section;

        let html = `<div class="detail-section" id="section-${section}">
            <h3>${this.getSectionTitle(section)} (${data.length})</h3>
            <div class="detail-list">`;

        data.forEach((item, index) => {
            const isExpanded = this.expandedItems.has(`${section}-${index}`);
            const hasContent = item.content && item.content.length > 0;
            const hasSummary = item.summary && item.summary.length > 0;

            html += `
                <div class="detail-item-wrapper">
                    <div class="detail-item ${hasSummary || hasContent ? 'has-content' : ''}" onclick="ConfigApp.toggleItem('${section}', ${index})">
                        <span class="item-name">${item.name}</span>
                        <span class="item-desc">${item.description || ''}</span>
                        ${item.category ? `<span class="item-category">${item.category}</span>` : ''}
                        ${item.type ? `<span class="item-type-tag">${item.type}</span>` : ''}
                        ${hasSummary || hasContent ? `<span class="expand-icon">${isExpanded ? '▼' : '▶'}</span>` : ''}
                    </div>
                    ${hasSummary && isExpanded ? `
                        <div class="item-summary">
                            <div class="summary-header">
                                <span>📝 中文摘要</span>
                                ${hasContent ? `<button class="btn btn-sm btn-outline" onclick="ConfigApp.showOriginal('${section}', ${index}, event)">查看原文</button>` : ''}
                            </div>
                            <div class="summary-body">${item.summary}</div>
                        </div>
                    ` : ''}
                    ${hasContent && isExpanded && !hasSummary ? `
                        <div class="item-content">
                            <div class="content-header">
                                <span>${item.name}</span>
                                <button class="btn btn-sm" onclick="ConfigApp.copyContent('${section}', ${index}, event)">📋 复制</button>
                            </div>
                            <pre class="content-body">${this.escapeHtml(item.content)}</pre>
                        </div>
                    ` : ''}
                </div>
            `;
        });

        html += '</div></div>';
        return html;
    },

    // 获取部分标题
    getSectionTitle(section) {
        const titles = {
            rules: '📋 Rules (规则)',
            agents: '🤖 Agents (智能体)',
            skills: '🎯 Skills (技能)',
            commands: '⚡ Commands (命令)',
            hooks: '🪝 Hooks (钩子)'
        };
        return titles[section] || section;
    },

    // 显示特定部分
    showSection(section) {
        const container = document.getElementById('config-details');
        container.innerHTML = this.renderSection(section);

        // 更新选中状态
        document.querySelectorAll('.summary-card').forEach(card => {
            card.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    },

    // 展开/收起项目
    toggleItem(section, index) {
        const key = `${section}-${index}`;
        if (this.expandedItems.has(key)) {
            this.expandedItems.delete(key);
        } else {
            this.expandedItems.add(key);
        }

        // 重新渲染该部分
        const container = document.getElementById('config-details');
        container.innerHTML = this.renderSection(section);
    },

    // 显示原文
    showOriginal(section, index, event) {
        event.stopPropagation();

        const dataMap = {
            rules: RulesData,
            agents: AgentsData,
            skills: SkillsData,
            commands: CommandsData,
            hooks: HooksData
        };

        const item = dataMap[section]?.items[index];
        if (!item?.content) return;

        // 创建模态框显示原文
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content modal-large">
                <div class="modal-header">
                    <h3>${item.name} - 原文</h3>
                    <button class="btn btn-sm" onclick="this.closest('.modal').remove()">✕ 关闭</button>
                </div>
                <pre class="content-body modal-body">${this.escapeHtml(item.content)}</pre>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="navigator.clipboard.writeText(\`${this.escapeJs(item.content)}\`).then(()=>alert('已复制'))">📋 复制全文</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    },

    // 复制内容
    copyContent(section, index, event) {
        event.stopPropagation();

        const dataMap = {
            rules: RulesData,
            agents: AgentsData,
            skills: SkillsData,
            commands: CommandsData,
            hooks: HooksData
        };

        const content = dataMap[section]?.items[index]?.content || '';
        navigator.clipboard.writeText(content).then(() => {
            const btn = event.target;
            const originalText = btn.textContent;
            btn.textContent = '✅ 已复制';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 1500);
        });
    },

    // HTML 转义
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // JS 字符串转义
    escapeJs(text) {
        return text.replace(/`/g, '\\`').replace(/\\/g, '\\\\');
    },

    // 显示更新指南
    showRefreshGuide() {
        const modal = document.getElementById('refresh-modal');
        modal.classList.add('active');
    },

    // 关闭更新指南
    closeRefreshModal() {
        const modal = document.getElementById('refresh-modal');
        modal.classList.remove('active');
    }
};
