// SECTION: Event Handlers

const yesButton = document.getElementById("yesButton");
const maybeButton = document.getElementById("maybeButton");
const responseMessage = document.getElementById("responseMessage");

// Helper to show a sweet message
function showMessage(text) {
  if (!responseMessage) return;
  responseMessage.textContent = text;
  responseMessage.hidden = false;
}

// Creates a small floating heart element
function createFloatingHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "falling-heart";
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;

  heart.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-5.3-3.3-8.2-6.2A5.6 5.6 0 0 1 7 4.3c1.4 0 2.8.7 3.6 1.9C11.2 5 12.6 4.3 14 4.3a5.6 5.6 0 0 1 3.2 10.5C17.3 17.7 12 21 12 21z"
        fill="rgba(224,123,90,0.95)"
      />
    </svg>
  `;

  document.body.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

function burstHearts(anchorElement) {
  if (!anchorElement) return;
  const rect = anchorElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 9; i++) {
    const offsetX = centerX + (Math.random() - 0.5) * 80;
    const offsetY = centerY + (Math.random() - 0.5) * 20;
    createFloatingHeart(offsetX, offsetY);
  }
}

if (yesButton) {
  yesButton.addEventListener("click", (event) => {
    burstHearts(yesButton);
    showMessage("You just made me the happiest person. I can't wait to spend Valentine's Day with you, Deoka.");
  });
}

if (maybeButton) {
  maybeButton.addEventListener("click", () => {
    burstHearts(maybeButton);
    showMessage("I'll happily spend all day convincing you how much you mean to me.");
  });
}

