class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

     fix() {
        this.state = this.state * 1.5
    };

 set state(val) {
        if (val > 100) {
            this._state = 100;
        } else if (val < 0) {
            this._state = 0;
        } else {
            this._state = val;
        }
    }

 get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = `magazine`;
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = `book`;
        this.author = author;
    }
}

class NovelBook extends Book {
    type = `novel`;
}

class FantasticBook extends Book {
    type = `fantastic`;
}

class DetectiveBook extends Book {
    type = `detective`;
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    };


findBookBy(type, value) {
        for (let elem of this.books) {
            if (elem[type] === value) {
                return elem;
            }
        }
        return null;

  };
 giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(elem => elem.name === bookName);
        if (bookIndex === -1) {
            return null;
        } else {
            let book = this.books[bookIndex]
            this.books.splice(bookIndex, 1);
            return book;

          }
    };
}
  
