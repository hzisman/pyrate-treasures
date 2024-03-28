import { backInOut } from 'svelte/easing';

export function blowOut(node, { duration=1000 }) {
    return {
        duration,
        css: t => {
            const eased = backInOut(t);
            return `
                transform: scale(${eased}) rotate(${(1 - eased) * -180}deg);
            `;
        }
    };
}