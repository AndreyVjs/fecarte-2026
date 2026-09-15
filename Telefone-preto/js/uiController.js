class UIController {
    renderChapter(chapterNode, onChoiceClick) {
      document.getElementById("chapter-title").textContent = chapterNode.titulo;
  
      const phoneSvg = document.getElementById("phone-svg");
      const phoneBadge = document.getElementById("phone-status-text");
      const redPulse = document.getElementById("red-pulse");
  
      if (chapterNode.isRinging) {
        phoneSvg.classList.add("ringing");
        phoneBadge.textContent = "📞 TOCANDO...";
        phoneBadge.classList.add("ringing-badge");
        redPulse.classList.add("active");
        audioEngine.playPhoneRing();
      } else {
        phoneSvg.classList.remove("ringing");
        phoneBadge.textContent = "DESCONECTADO";
        phoneBadge.classList.remove("ringing-badge");
        redPulse.classList.remove("active");
        audioEngine.stopPhoneRing();
      }
  
      this.typeText(chapterNode.texto, () => {
        this.renderButtons(chapterNode.botoes, onChoiceClick);
      });
  
      if (chapterNode.isEnding && chapterNode.endingId) {
        achievementsManager.unlockEnding(chapterNode.endingId);
      }
  
      if (chapterNode.addItem) {
        inventorySystem.addItem(chapterNode.addItem);
      }
    }
  
    typeText(fullText, callback) {
      const textEl = document.getElementById("chapter-text");
      const buttonsEl = document.getElementById("choice-buttons");
      buttonsEl.innerHTML = "";
  
      textEl.textContent = "";
      let i = 0;
  
      const interval = setInterval(() => {
        if (i < fullText.length) {
          textEl.textContent += fullText.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          if (callback) callback();
        }
      }, 15);
    }
  
    renderButtons(botoes, onChoiceClick) {
      const buttonsEl = document.getElementById("choice-buttons");
      buttonsEl.innerHTML = "";
      if (!botoes) return;
  
      botoes.forEach(btnData => {
        if (btnData.reqItem && !inventorySystem.hasItem(btnData.reqItem)) {
          return;
        }
  
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = btnData.texto;
        btn.addEventListener("click", () => {
          audioEngine.playClickSound();
          onChoiceClick(btnData.destino);
        });
        buttonsEl.appendChild(btn);
      });
    }
  }
  
  const uiController = new UIController();