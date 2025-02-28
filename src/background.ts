import table from "./lookup";

function inTable(key: string, table: Record<string, [string, string, string]>) {
    return Object.keys(table).includes(key.toLowerCase());
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.url) {
        const url = new URL(changeInfo.url);

        if (!url.hostname.includes("google.com") && !url.searchParams.has("q"))
            return;

        const query = url.searchParams.get("q");

        if (query === null || query.includes("!") || !query.includes("<<"))
            return;

        const [searchText, keyword] = query
            .split("<<")
            .map((str) => str.trim());

        if (!inTable(keyword, table)) return;

        const redirectUrl = table[keyword][0] + searchText;

        chrome.tabs.update(tabId, { url: redirectUrl });
    }
});
