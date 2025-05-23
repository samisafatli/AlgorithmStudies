const fs = require('fs');
const path = require('path');
const readline = require('readline');

function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) =>
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer.trim());
        })
    );
}

async function main() {
    const number = await ask("🔢 Problem number: ");
    const title = await ask("📘 Problem title: ");
    const difficulty = await ask("💪 Difficulty (Easy/Medium/Hard): ");
    const tags = await ask("🏷️ Tags (comma separated): ");
    const url = await ask("🔗 LeetCode URL: ");

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const fileName = `${String(number).padStart(3, '0')}-${slug}.js`;
    const folder = path.join('leetcode', difficulty.toLowerCase());

    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }

    const filePath = path.join(folder, fileName);

    const content = `// LeetCode Problem #${number}: ${title}
// Difficulty: ${difficulty}
// Tags: ${tags}
// Link: ${url}
// Time Complexity: 
// Space Complexity: 

/**
 * @param {any} input
 * @return {any}
 */
function solution(input) {
    // Your solution here
}

module.exports = solution;
`;

    fs.writeFileSync(filePath, content);
    console.log(`✅ File created at: ${filePath}`);
}

main();
