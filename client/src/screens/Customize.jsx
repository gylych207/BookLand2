import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBook } from "../services/books";

const Customize = (props) => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
      const fetchBook = async () => {
        const bookData = await getOneBook(id);
        setBook(bookData);
      }
      fetchBook();
    }, [id])

    const [formData, setFormData] = useState({
        title: "",
        condition: "",
        isbn: "",
        image_url: "",
        price: "",
        author_name: "",
        category_id: "",
    });
    const { title, condition, isbn, image_url, price, author_name } = formData;
    const { books, categories, handleUpdate } = props;

    useEffect(() => {
        const prefillFormData = () => {
            const book = books.find((book) => {
                return book.id === Number(id);
            });
            setFormData({
                name: book.title,
            });
        };
        if (books.length) {
            prefillFormData();
        }
    }, [books, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="customize-screen">
            <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-8 col-sm-4 col-md-4 mt-2 card-text-style customize-book-container ">
                            <div className="text-center book-info-text">
                                <div className="book-div">
                                    <img
                                        src={book?.image_url}
                                        alt=""
                                        className="book-info-image img-fluid"
                                    />
                                </div>
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
                            </div>
                        </div>

                <div className="col-9 col-sm-5 col-md-5 mt-2">
                    <div className="wrapper customize-wrapper px-5 py-4">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdate(id, formData);
                            }}
                            id="form"
                        >
                            <h3>Customize Your Book</h3>
                            <label>
                                Title:
                                <input
                                    name="title"
                                    type="text"
                                    value={title}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Condition:
                                <input
                                    name="condition"
                                    type="text"
                                    value={condition}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                ISBN:
                                <input
                                    name="isbn"
                                    type="text"
                                    value={isbn}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                imageURL:
                                <input
                                    name="image_url"
                                    type="text"
                                    value={image_url}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                price:
                                <input
                                    name="price"
                                    type="text"
                                    value={price}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                author:
                                <input
                                    name="author_name"
                                    type="text"
                                    value={author_name}
                                    onChange={handleChange}
                                />
                            </label>
                            <select
                                defaultValue="hi"
                                onChange={handleChange}
                                name="category_id"
                            >
                                <option disabled value="hi">
                                    --select a category--
                                </option>
                                {categories.map((category) => (
                                    <option
                                        value={category.id}
                                        key={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="submit"
                                value="Send"
                                name="submit"
                                id="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;
