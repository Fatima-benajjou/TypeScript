import { Book } from "./book.js"

export class Library {
    books : Book [] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(title: string) :void{
        let index: number = this.books.findIndex((book) => book.title == title)
        this.books.splice(index,1)
    }

    findBookByTitle(title: string): Book {
        return this.books.find(book => book.title == title)
    }

    listAvailableBooks() : Book [] {
        return this.books.filter(book => book.isAvailable)
    }

    getBooksByAuthor(authorName: string) : Book [] {
        return this.books.filter(book => book.author.name == authorName)
    }

}

