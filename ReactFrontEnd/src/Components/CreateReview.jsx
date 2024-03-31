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
      <div className="container">
      <div className="flex justify-center">
        <h1 className="font-semibold">Create a review for ?</h1>
      </div>
      <div className="flex justify-center pt-6">
        <label className="font-semibold">Describe your visit:</label>
      </div>

      <div className="flex justify-center pt-6">
        <textarea
          name="content"
          value={review.content}
          onChange={(e) => handleChange(e)}
          rows={10}
          cols={100}
        ></textarea>
      </div>

      <div className="flex justify-center space-x-10 pt-6">
        <button className=" bg-green-700 hover:bg-green-900 font-semibold text-amber-950" onClick={saveReview}>
          Submit
        </button>

        <button className="bg-red-700 hover:bg-red-900 font-semibold text-amber-950" onClick={reset}>
          Clear
        </button>
      </div>
      </div>
    </>
  );
};

export default CreateReview;