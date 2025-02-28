// syntax: key = keyword, value list = [query, link, description]
const table: Record<string, [string, string, string]> = {
    img: [
        "https://www.google.com/search?tbm=isch&q=",
        "https://images.google.com/",
        "Google Image",
    ],
    ytb: [
        "https://www.google.com/search?q=",
        "https://www.youtube.com/",
        "YouTube",
    ],
    lab: [
        "https://colab.research.google.com/search?q=",
        "https://colab.research.google.com/",
        "Google Colab",
    ],
    rdt: [
        "https://www.reddit.com/search/?q=",
        "https://www.reddit.com/",
        "Reddit",
    ],
    tsl: [
        "https://translate.google.com/?sl=auto&tl=en&text=",
        "https://translate.google.com/",
        "Google Translate",
    ],
    wik: [
        "https://en.wikipedia.org/w/index.php?search=",
        "https://en.wikipedia.org/wiki/",
        "Wikipedia",
    ],
};
export default table;
