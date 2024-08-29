import { Author } from "./author.js";
import { Book } from "./book.js"
import { Library} from "./library.js"

function createBook(title: string, author: Author, pages: number): Book {
    return {
      title,
      author,
      pages,
      isAvailable: true
    };
  }
  
  function toggleAvailability(book: Book): void {
    if (book.isAvailable === true) {
        book.isAvailable = false}
        else book.isAvailable = true
    }


  
const library = new Library ();

const author1: Author = { name: "Paulo Cohelo", birthYear: 1960, genres: "Roman" };
const author2: Author = { name: "Amélie Nothomb", birthYear: 1980, genres: "Roman" };

const book1 = createBook("L'Alchimiste", author1, 350);
const book2 = createBook("L'impossible retour", author2, 500);
const book3 = createBook("la 5ème Montagne", author1, 200);

console.log(book1)
console.log(book2)
console.log(book3)



library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

  console.log(library)

  library.removeBook("L'impossible retour")