#!/usr/bin/env node

import YAML from 'yaml';
import { marked } from 'marked';
import fs from 'fs';

const LEVEL_ORDER = [
    'single-element',
    'multiple-elements',
    'single-row',
    'column-slice',
    'row-slice',
];

const markdownAttributes = [
    'explanation',
];

const TARGET_FILE = './src/levels.js';
const LEVELS_DIR = './content/levels'

function levelFileScore(file) {
    const levelName = file.replace('.yaml', '');
    const levelIndex = LEVEL_ORDER.indexOf(levelName);
    return levelIndex !== -1 ? levelIndex: Infinity;
}

const levelsFiles = fs.readdirSync(LEVELS_DIR).sort((f0, f1) => levelFileScore(f0) - levelFileScore(f1));

const levels = {};

for (const [index, levelFile] of levelsFiles.entries()) {
    const level = YAML.parse(fs.readFileSync(`${LEVELS_DIR}/${levelFile}`, 'utf8'));
    
    for (const attr of markdownAttributes) {
        if (level.hasOwnProperty(attr)) {
            level[attr] = marked.parse(level[attr]);
        }
    }

    levels[index+1] = level;
}

fs.writeFileSync(TARGET_FILE, `export const levels = ${JSON.stringify(levels, null, 4)}`);
