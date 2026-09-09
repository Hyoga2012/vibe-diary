export function Header() {
    const header = document.createElement("header");
    header.className = "app-header";

    header.innerHTML = `
        <span class="app-title">Stream Diary</span>
        <span class="status-indicator">
            ● AI 분류 대기중
        </span>
    `;

    return header;
}
