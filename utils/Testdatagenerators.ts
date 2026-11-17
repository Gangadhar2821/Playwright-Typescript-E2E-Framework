
export function generateRandomEmailID(): string {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let username = "";

    for (let i = 0; i < 10; i++) {
        username += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `${username}@example.com`;
}