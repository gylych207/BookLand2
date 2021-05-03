import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneBook } from "../services/books";
import ReactStars from "react-rating-stars-component";

const BookInfo = (props) => {
    const [book, setBook] = useState(null);
    const { id } = useParams();
    const { handleDelete } = props;

    useEffect(() => {
        const fetchBook = async () => {
            const bookData = await getOneBook(id);
            setBook(bookData);
        };
        fetchBook();
    }, [id]);

    return (
        <div className="container-book-info pt-4">
            <div className="row d-flex justify-content-center align-items-start">
                <div className="col-11 col-sm-8 col-md-8 customize-book-info-card">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-11 col-sm-11 col-md-6 mt-2">
                            <div className="book-div">
                                <span className="instock">In stock</span>
                                <img
                                    src={book?.image_url}
                                    alt=""
                                    className="book-info-image"
                                />
                                <button className="btn btn-primary mt-2 customize-btn">
                                    <Link
                                        to={`/books/${book?.id}/edit`}
                                        className="customize-link"
                                    >
                                        Customize{" "}
                                    </Link>
                                </button>

                                <button
                                    className="btn btn-danger delete-book-btn mt-2"
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div className="col-11 col-sm-11 col-md-6 mt-2 card-text-style ">
                            <div className="book-info-text">
                                <p>
                                    <span>Name:</span> {book?.title}
                                </p>
                                <p>
                                    <span>Condition:</span> {book?.condition}
                                </p>
                                <p>
                                    <span>ISBN: </span>
                                    {book?.isbn}
                                </p>
                                <p>
                                    <span>Rental Price: </span> {book?.price}$
                                </p>
                                <p>
                                    <span>Author: </span>
                                    {book?.author_name}
                                </p>
                                <p>Free 2 Day Shipping</p>
                                <p>Arrive 01.05.2021</p>

                                <div className="d-flex align-items-center">
                                    <p> Book Overall Rating: {book?.rating} </p>
                                    <span className="reviews-star">
                                        <ReactStars
                                            className="due"
                                            value={1}
                                            edit={false}
                                            count={1}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </span>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link to={`/books/${id}/rents`}>
                                    <button className="btn btn-primary rent-btn">
                                        RENT
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-container">
                <div className="reviews">
                    {/* <input type="textarea" />
                    <img src="https://i.imgur.com/opaqxyG.png" alt="" /> */}
                </div>
                <div className="photo">
                    <img
                        className="img-fluid"
                        src="https://i.imgur.com/t0UsMu4.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default BookInfo;
