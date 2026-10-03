import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react from "react";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href ="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" claassName="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {
          new Array(5).fill(0).map((_, index) => 
            <FontAwesomeIcon icon="star" key={index} />
          )
        }
      </div>
      <div className="book__price">
      {book.salePrice ? (
        <>
          <span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
          ${book.salePrice.toFixed(2)}
        </>
      ) : (
        <>${book.originalPrice.toFixed(2)}</>
      )}
      </div>
    </div>
  );
};

export default Book;