import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.randomQuoteAPIBtn = document.getElementById("random-quote-api-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    this.currentQuote = newQuote;
    this.displayCurrentQuote();
  }

  getRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  getRandomQuoteViaAPI() {
    RandomQuote.getRandomQuoteViaAPI().then((quote) =>
      this.changeCurrentQuote(quote)
    );

    // блокируем кнопку
    // this.randomQuoteAPIBtn.disabled = true;
    // this.randomQuoteAPIBtn.textContent = "Загрузка...";

    // RandomQuote.getRandomQuoteViaAPI()
    //   .then((quote) => {
    //     if (quote) {
    //       this.currentQuote = quote;
    //       this.displayCurrentQuote();
    //     }
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     this.quoteTextElement.textContent = "Ошибка загрузки цитаты";
    //     this.quoteAuthorElement.textContent = "—";
    //   })
    //   .finally(() => {
    //     // возвращаем кнопку в исходное состояние
    //     this.randomQuoteAPIBtn.disabled = false;
    //     this.randomQuoteAPIBtn.textContent = "Random quote via API";
    //   });
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote());
    this.randomQuoteAPIBtn.addEventListener("click", () => {
      this.getRandomQuoteViaAPI();
      // this.randomQuoteAPIBtn.textContent = "Загрузка...";
    });
  }
}

export default RandomQuotesApp;
