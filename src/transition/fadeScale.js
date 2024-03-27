export function fadeScale(node, { duration = 1000, startScale = 0, finalScale = 1}) {
    const opacity = +getComputedStyle(node).opacity;
    const diff = finalScale - startScale;
    return {
        duration,
        css: t => {
            return `
                transform: scale(${diff*t + startScale});
                opacity: ${t * opacity}
            `;
        }
    };
}