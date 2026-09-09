export function InputSection() {
    const section = document.createElement("section");
    section.className = "input-section";

    section.innerHTML = `
        <button
            class="icon-btn"
            title="달력보기"
            type="button"
        >
            📅
        </button>

        <button
            class="icon-btn"
            title="할 일 보기"
            type="button"
        >
            ☑️
        </button>

        <input
            type="text"
            class="input-box"
            placeholder="지금 떠오른 생각을 입력하세요..."
        >

        <button
            class="icon-btn"
            title="음성 입력"
            aria-label="음성 입력"
            type="button"
        >
            <svg
                class="voice-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
            >
                <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z"></path>
                <path d="M19 11a7 7 0 0 1-14 0M12 18v4M8 22h8"></path>
            </svg>
        </button>

        <button
            class="send-btn"
            type="button"
            aria-label="전송"
        >
            ↑
        </button>
    `;

    return section;
}
