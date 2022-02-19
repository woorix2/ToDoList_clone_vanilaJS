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
        quote: "The best way to keep children home is to make the home atmosphere pleasant--and let the air out of the tires.",
        author: "Dorothy Parker"
    },
    {
        quote: "They are never alone that are accompanied with noble thoughts.",
        author: "Sir Philip Sidneyy"
    },
    {
        quote: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
        author: "Carl Jung"
    },
    {
        quote: "Some rise by sin, and some by virtue fall.",
        author: "William Shakespeare"
    },
    {
        quote: "The most perfidious way of harming a cause consists of defending it deliberately with faulty arguments.",
        author: "Friedrich Nietzsche"
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

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todatysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todatysQuote.quote;
author.innerText = todatysQuote.author;