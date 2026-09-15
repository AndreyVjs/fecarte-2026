class AchievementsManager {
    constructor() {
      this.storageKey = "telefone_preto_endings_v1";
      this.unlockedEndings = this.loadProgress();
    }
  
    loadProgress() {
      try {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
      } catch (e) {
        return [];
      }
    }
  
    unlockEnding(endingId) {
      if (endingId && !this.unlockedEndings.includes(endingId)) {
        this.unlockedEndings.push(endingId);
        localStorage.setItem(this.storageKey, JSON.stringify(this.unlockedEndings));
      }
      this.updateCounter();
    }
  
    resetProgress() {
      this.unlockedEndings = [];
      localStorage.removeItem(this.storageKey);
      this.updateCounter();
      this.renderGrid();
    }
  
    updateCounter() {
      const countEl = document.getElementById("endings-count");
      if (countEl) {
        countEl.textContent = `${this.unlockedEndings.length} / 17`;
      }
    }
  
    renderGrid() {
      const gridEl = document.getElementById("achievements-grid");
      if (!gridEl) return;
      gridEl.innerHTML = "";
  
      const ALL_ENDINGS = ["6A", "6B", "6C", "6D", "6E", "6F", "6G", "6H", "6I", "6J", "6K", "6L", "6M", "6N", "6O", "6P", "6Q"];
  
      ALL_ENDINGS.forEach(id => {
        const isUnlocked = this.unlockedEndings.includes(id);
        const card = document.createElement("div");
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
        card.innerHTML = `
          <span class="card-code">[FINAL ${id}]</span>
          <h3 class="card-title">${isUnlocked ? `Desfecho ${id}` : '??? (BLOQUEADO)'}</h3>
          <p class="card-desc">${isUnlocked ? 'Final descoberto.' : 'Jogue novamente com outras escolhas.'}</p>
        `;
        gridEl.appendChild(card);
      });
    }
  }
  
  const achievementsManager = new AchievementsManager();