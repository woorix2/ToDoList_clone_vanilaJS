const quotes = [
    {
        quote: "There is no mistaking a real book when one meets it. It is like falling in love.",
        author: "Christopher Morley"
    },
    {
        quote: "One truth is clear, Whatever is, is right.",
        author: "Alexander Pope"
    },
    {
        quote: "Tyranny cannot defeat the power of ideas.",
        author: "Helen Keller"
    },
    {
        quote: "They are never alone that are accompanied with noble thoughts.",
        author: "Sir Philip Sidneyy"
    },
    {
        quote: "Laziness is nothing more than the habit of resting before you get tired.",
        author: "Jules Renard"
    },
    {
        quote: "Some rise by sin, and some by virtue fall.",
        author: "William Shakespeare"
    },
    {
        quote: "Silence is the virtue of fools.",
        author: "Sir Francis Bacon"
    },
    {
        quote: "We are none of us infallible--not even the youngest of us.",
        author: "W. H. Thompson"
    },
    {
        quote: "God is the indwelling and not the transient cause of all things.",
        author: "Baruch Spinoza"
    },
    {
        quote: "Strive for excellence, not perfection.",
        author: "H. Jackson Brown Jr."
    }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote span:last-child");

const todatysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todatysQuote.quote;
author.innerText = todatysQuote.author;