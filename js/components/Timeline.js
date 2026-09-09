import { ChatBubble } from "./ChatBubble.js";

export function Timeline() {
    const container = document.createElement("main");
    container.className = "timeline-container";

    const dateDivider = document.createElement("div");
    dateDivider.className = "date-divider";
    dateDivider.textContent = "오늘, 8월 19일";

    container.appendChild(dateDivider);

    const messages = [
        {
            type: "ai-prompt",
            message: `
                지금 무슨 생각을 하시나요?<br>
                지금 무엇이 떠올랐나요?<br>
                지금 무엇을 기록하려고 하나요?<br>
                편하게 적어 보세요.
            `,
            time: "오전 11:21"
        },
        {
            type: "user",
            message: `
                갑자기 문득 새로운 프로젝트 아이디어가 떠올랐다.<br>
                사용자가 기록할 때 아무 생각 안 들게 만드는 게 핵심이야.
            `,
            time: "오전 11:22"
        }
    ];

    messages.forEach((message) => {
        container.appendChild(
            ChatBubble(message)
        );
    });

    return container;
}
