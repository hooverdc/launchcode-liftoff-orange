import React, { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useGlobalContext } from '../context';
import { Carousel } from 'flowbite-react';
import {useQuery, useQueryClient} from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import FavoritesServices from '../Services/FavoritesServices';

const getParkInfoURL="https://developer.nps.gov/api/v1/parks?parkCode="
const api_key=import.meta.env.VITE_REACT_APP_NPS_API_KEY;

function ParkDetails() {
  const [singlePark, setPark] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { parkCode } = useParams();
  // const { searches } = useGlobalContext();
  const mapRef = useRef();

  //this sets parkId equal to the parkcode at then end of the current url
  const parkId = useParams().parkcode;

  //const [parkCodes, setParkCodes] = useState();

  const user = {
    id: 2,
    username: "paulUser",
    password: "userPaul",
  };

  const [favorites, setFavorites] = useState({
    id: "",
    parkCode: parkId,
    user: user,
  });

  let faveParkCodes = [];

  //This useEffect gets user favorited park codes and checks if searched for park is already favorited//

  useEffect(() => {
    async function getFaveParkCodes() {
      try {
        const response = await FavoritesServices.getFavoritesByUserId(2);
        response.data.map((data) => {
          faveParkCodes.push(data.parkCode);
        });
      } catch (error) {
        console.log(error);
      }
      if (faveParkCodes.includes(parkId)) {
        setToggle(true);
      }
    }
    getFaveParkCodes();
    console.log(faveParkCodes);
  });

  const saveToFavorites = () => {
    setFavorites({ ...favorites, parkCode: parkId, user: user });
    setToggle(true);
    FavoritesServices.createFavorite(favorites)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    //below uses react query to make an API call, which is then accessible to review & itinerary pages via (['singlePark'])
    const { data, error, isLoading } = useQuery({
      queryKey: ["singlePark"],
      queryFn: () =>
        fetch(
          "https://developer.nps.gov/api/v1/parks?parkCode=" +
            parkId +
            "&api_key=" + api_key 
        ).then((res) => res.json()),
    });

  if (error) return <div>There was an error</div>;
  if (isLoading) return <div>DATA IS LOADING...</div>;

  //initialize single park object
  const parkInfo = data.data[0];

  //intialize lat/long from Park (not "addresses")
  const latlong = [Number(parkInfo.latitude), Number(parkInfo.longitude)];

    //initializes phone # for contact info
    const phone = parkInfo.contacts.phoneNumbers[0].phoneNumber;

  //template for phone number formatting
  let newPhone = "(xxx) xxx-xxxx";

    //parses unformatted phone numbers
    if (phone.length == 10) {
      for (let i = 0; i < phone.length; i++) {
        newPhone = newPhone.replace("x", phone[i]);
      }
    } else {
      newPhone = phone;
    }

  //initializes collection of addresses
  const addresses = [parkInfo.addresses];

  //separates physical addresses into new array
  const physicalAddresses = [];

    if (addresses.length = 1) {
      physicalAddresses.push(addresses[0])
    } else {
      for (let i = 0; i < addresses.length; i++) {
        for (let j = 0; j < addresses[i].length; j++) {
          if (addresses[i][j].type == "Physical") {
            physicalAddresses.push(addresses[i][j]);
          }
        }
      }
    }

    const markerAddress = {
      name: parkInfo.fullName,
      street: physicalAddresses[0][0].line1,
      city: physicalAddresses[0][0].city,
      state: physicalAddresses[0][0].stateCode,
      zip: physicalAddresses[0][0].postalCode,
    };

  //creates map marker on map
  function POI({ coords }) {
    return (
      <Marker position={coords}>
        <Popup className="font-bold text-lg">
          <div className="flex flex-col items-center">
            <div>{markerAddress.name}</div>
            <div>{markerAddress.street}</div>
            <div>
              {markerAddress.city}, {markerAddress.state} {markerAddress.zip}
            </div>
          </div>
        </Popup>
      </Marker>
    );
  }

  //creates map
  function MapMaker({ coords }) {
    return (
      <div className="flex justify-center h-1/2 m-5">
        <MapContainer
          center={coords}
          zoom={11}
          ref={mapRef}
          scrollWheelZoom={false}
          className="w-3/4 h-screen rounded-xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <POI coords={latlong} />
        </MapContainer>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="h-full bg-nps-green-300 pt-20 pb-20 px-10 rounded-md">
        <div name="title" className="flex flex-col items-center">
          <div>
            <h1 className="underline underline-offset-4 px-5 py-4">
              {parkInfo.fullName}
            </h1>
          </div>
          <div name="designation" className="flex px-2">
            <div className="underline underline-offset-2 px-3">
              Designation:{" "}
            </div>
            <div>{parkInfo.designation}</div>
          </div>
          <div name="states" className="flex px-2">
            <div className="underline underline-offset-2 px-3">States:</div>
            <div>{parkInfo.states}</div>
          </div>
        </div>

        <div name="images" className="py-10 h-svh">
          <Carousel slide={false} className=" shadow-2xl">
            {parkInfo.images.map((image, idx) => (
              <img key={idx} src={image.url} className="" />
            ))}
          </Carousel>
        </div>

        <div name="description" className="px-40 py-10">
          {parkInfo.description}
        </div>
        <div name="weather" className="px-40 py-10">
          <p className="underline underline-offset-2">Weather: </p>
          {parkInfo.weatherInfo}
        </div>

        <div name="activities" className="px-40 py-10">
          <p className="underline underline-offset-2">Activities:</p>
          {parkInfo.activities.map((activity) => {
            return activity.name + ", ";
          })}
        </div>

          <div
            name="contact-info"
            className="bg-nps-green-600 drop-shadow-2xl  my-20 py-5 w-1/2 flex flex-col items-center text-center mx-auto rounded-2xl"
          >
            <div>
              <p className="underline underline-offset-4 font-semibold">
                Park Contact Info
              </p>
            </div>
            <div>
              <p>{parkInfo.contacts.emailAddresses[0].emailAddress}</p>
              <p>{newPhone}</p>
              {/* <p className="">place holder text</p> */}
            </div>
          </div>

        <div name="button group" className="flex justify-evenly">
          {toggle ? (
            <button className="bg-yellow-500 rounded-3xl">Favorited</button>
          ) : (
            <button
              className="bg-yellow-300 rounded-3xl"
              onClick={saveToFavorites}
            >
              Add to favorites
            </button>
          )}
          <Link to="/createreview">
            <button className="bg-yellow-300 rounded-3xl" onClick={() => {window.scroll(0,0);}}>Review</button>
          </Link>
          <Link to="/itinerary">
            <button className=" bg-yellow-300 rounded-3xl" onClick={() => {window.scroll(0,0);}}>
              Create Itinereary
            </button>
          </Link>
        </div>
        <div name="map" className="pt-10 drop-shadow-2xl">
          <MapMaker coords={latlong} />
        </div>
      </div>
    </>
  );
}

export default ParkDetails