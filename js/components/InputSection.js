export function InputSection() {
    const section = document.createElement("section");
    section.className = "input-section";

    section.innerHTML = `
        <button
            class="icon-btn utility-btn"
            title="달력보기"
            aria-label="달력보기"
            type="button"
        >
            📅
        </button>

        <button
            class="icon-btn utility-btn"
            title="할 일 보기"
            aria-label="할 일 보기"
            type="button"
        >
            ☑️
        </button>

        <input
            type="text"
            class="input-box"
            placeholder="지금 떠오른 생각을 입력하세요..."
            aria-label="생각 입력"
        >

        <!-- ChatGPT 스타일 마이크 버튼 -->
        <button
            class="voice-btn"
            title="음성 입력"
            aria-label="음성 입력"
            type="button"
        >
            <svg
                class="voice-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z"></path>
                <path d="M19 11a7 7 0 0 1-14 0"></path>
                <path d="M12 18v4"></path>
                <path d="M8 22h8"></path>
            </svg>
        </button>

        <!-- ChatGPT 스타일 전송 버튼 -->
        <button
            class="send-btn"
            type="button"
            aria-label="전송"
            title="전송"
        >
            <svg
                class="send-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M12 19V5"></path>
                <path d="M6.5 10.5 12 5l5.5 5.5"></path>
            </svg>
        </button>
    `;

    const input = section.querySelector(".input-box");
    const sendButton = section.querySelector(".send-btn");

    // 입력 내용이 없으면 전송 버튼 비활성화
    sendButton.disabled = true;

    input.addEventListener("input", () => {
        sendButton.disabled = input.value.trim().length === 0;
    });

    // Enter 키 전송 준비
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && input.value.trim()) {
            sendButton.click();
        }
    });

    return section;
}