import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEnvelope, faHandshake } from "@fortawesome/free-solid-svg-icons";

export default function SellYourBook(props) {
    const history = useHistory();

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
    const { handleCreate, categories } = props;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="container pt-4">
            <div className="row d-flex justify-content-around">
                <div className="col-sm-4 col-md-4 mt-2">
                    <div className="content1 sell-step-container d-flex justify-content-center align-items-center">
                        <div>
                        <FontAwesomeIcon size="2x" className="text-white" icon={faCheckSquare}/>
                        <h2>1. Fill out the form</h2>
                        <p>We will tell you how much <br/> we'll pay you</p>
                        </div>
                    </div>
                    {/* <img src="https://i.imgur.com/8EzvAKw.png" alt="coinbase" /> */}
                </div>

                <div className="col-sm-4 col-md-4 mt-2">
                    <div className="content2 sell-step-container d-flex justify-content-center align-items-center">
                       <div>
                       <FontAwesomeIcon size="2x" className="text-white" icon={faEnvelope}/>
                       <h2> 2. Mail Your Books for Free</h2>
                        <p>
                            Print a prepaid shipping label and tape it to the
                            package
                        </p>
                       </div>
                    </div>
                </div>

                <div className="col-sm-4 col-md-4 mt-2">
                    <div className="content3 sell-step-container d-flex justify-content-center align-items-center">
                        <div>
                        <FontAwesomeIcon size="2x" className="text-white" icon={faHandshake}/>
                        <h2> 3. Get paid</h2>
                        <p>
                            After we Inspect your book,we will Send your payment
                        </p>
                        </div>
                    </div>

                    {/* <img src="https://i.imgur.com/pzSPT2L.png" alt="" /> */}
                </div>

                <div className=" col-sm-12 col-md-12 d-flex justify-content-center">
                    <div className="sell-form">
                        <div className="wrapper">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleCreate(formData);
                                    history.push("/books");
                                }}
                            >
                                <h3>Your Book Info</h3>
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
                                    className="btn btn-success"
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
        </div>
    );
}
