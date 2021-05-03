import React from "react";
import ReactStars from "react-rating-stars-component";

const Profile = (props) => {
    const { handleRentBookDelete, rentData, handleBookRating } = props;

    return (
        <div className="book-info">
            <div className="text-center text-white py-3">
                <h2> Rented Book </h2>
            </div>
            <div className="overflow-auto profile-book-container">
                <div className="row d-flex justify-content-center m-2">
                    {rentData.map((book) => (
                        <div
                            key={book.id}
                            className="col-6 col-sm-4 col-md-2 mt-2"
                        >
                            <div
                                class="card"
                                style={{
                                    width: " 50rem !important",
                                    height: "18rem",
                                }}
                            >
                                <div class="text-center pt-2 px-2">
                                    <img
                                        class="card-img-top img-fluid w-75 "
                                        src="/book.jpeg"
                                        alt=""
                                    />
                                </div>
                                <div class="card-body text-white rented-card-container">
                                    <h5 className="card-title">
                                        {book?.description}
                                    </h5>

                                    <p className="card-tex">
                                        Due: {book?.days}
                                    </p>
                                    <div className="rent-book-reviews">
                                        <ReactStars
                                            className="profile-due"
                                            value={book.rating}
                                            count={5}
                                            onChange={(e) =>
                                                handleBookRating(book.id, e)
                                            }
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() =>
                                                handleRentBookDelete(book.id)
                                            }
                                        >
                                            {" "}
                                            Return{" "}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
