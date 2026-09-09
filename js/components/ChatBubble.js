export function ChatBubble({
    type = "user",
    message,
    time
}) {
    const bubble = document.createElement("div");

    bubble.className = `chat-bubble ${type}`;

    bubble.innerHTML = `
        <div class="message">
            ${message}
        </div>

        <div class="timestamp">
            ${time}
        </div>
    `;

    return bubble;
}
