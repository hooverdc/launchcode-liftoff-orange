import React, { useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import ReviewServices from "../Services/ReviewServices"
import { queryClient } from "../main";

const CreateReview = () => {
  const [review, setReview] = useState({
    id: "",
    content: "",
  });

  //fetches react query cached data
  const singlePark = queryClient.getQueryData(["singlePark"])

  //breaks down JSON into single park object
  const parkDetails = singlePark.data[0]

  //confirms above declarations in console // remove if not needed for testing
  console.log("HERE IS THE REACT QUERY CACHED DATA FROM PARK DETAILS")
  console.log(singlePark)
  console.log(parkDetails)

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

  /*This is supposed to be the page you go to when you are at the park you searched
  for page and click on an add review button. So hopefully we can figure out a way to 
  import a park name and code or id from the search page.*/

  //refer to "parkDetails.(property)" below to access its key/values
  return (
    <>
      <Header />
      <div className="container">
      <div className="flex justify-center">
        <h1 className="font-semibold">Create a review for {parkDetails.fullName}</h1>
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