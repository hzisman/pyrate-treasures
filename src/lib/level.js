import { levels } from '../levels';

export function getLevelDetails(level) {
    return levels[level];
}

export const levelCount = Math.max(...Object.keys(levels).map(key => Number(key)))