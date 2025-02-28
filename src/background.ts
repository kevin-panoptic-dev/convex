chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.url) {
        let url = new URL(changeInfo.url);

        if (url.hostname.includes("google.com") && url.searchParams.has("q")) {
            let query = url.searchParams.get("q");

            if (query === null) {
                return;
            }

            if (query.includes("<<")) {
                console.log("Detected special query:", query);

                // Extract the part before and after "<<"
                let [searchText, keyword] = query
                    .split("<<")
                    .map((str) => str.trim());

                console.log("Search Text:", searchText);
                console.log("Keyword:", keyword);

                // Do something with the extracted values (e.g., open a different page)
                if (keyword.trim() === "!") {
                    let translateUrl = `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(
                        searchText
                    )}`;
                    chrome.tabs.update(tabId, { url: translateUrl });
                }
            }
        }
    }
});
