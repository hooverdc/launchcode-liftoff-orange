import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import ReviewServices from "../Services/ReviewServices"


const CreateReview = () => {
  const [review, setReview] = useState({
    id: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setReview({ ...review, [e.target.name]: value });
  };

  const saveReview = (e) => {
    e.preventDefault();
    ReviewServices.createReview(review)
      .then((response) => {
        console.log(response)
        navigate("/home")
      })
      .catch((error) => {
        console.log(error)
      });
    
    
  };

  const reset = (e) => {
    e.preventDefault();
    setReview({
      id: "",
      content: "",
    });
  };

  return (
    <>
      <Header />
      <div className="">
        <h1>Create a review for ?</h1>
      </div>
      <div>
        <label>Describe your visit:</label>
      </div>

      <div>
        <textarea
          name="content"
          value={review.content}
          onChange={(e) => handleChange(e)}
          rows={6}
          cols={50}
        ></textarea>
      </div>

      <div className="">
        <button className="" onClick={saveReview}>
          Submit
        </button>

        <button className="" onClick={reset}>
          Clear
        </button>
      </div>
    </>
  );
};

export default CreateReview;