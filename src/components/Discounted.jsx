import { books } from "../data"
import Book from "./ui/Book"

function Discounted() {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <div className="section__title">
            Discounted <span className="purple">Books</span>
          </div>
          <div className="books">
            {
              books
                .filter(book => book.salePrice > 0)
                .slice(0, 8)
                .map(book => <Book book={book} key={book.id} />)
                
            }
          </div>
        </div>
      </div>
    </section>
  )
}
export default Discounted