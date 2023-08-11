import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import CarousalSlider from "../components/CrousalSlide/CarousalSlider";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST", // POST
        headers: {
          "Content-Type": "application/json", // Corrected header name from 'headera' to 'headers'
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("data :>> ", data[0], data[1]); // Changed 'response' to 'data'
        setFoodItem(data[0]);
        setFoodCat(data[1]);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-dark text-light">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="bg-dark text-light">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important " }}
          >
            <div
              className="carousel-inner"
              id="carousel"
              style={{ zIndex: "1" }}
            >
              <div class="carousel-caption d-none d-md-block">
                <form class="form-inline justify-content-center">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    style={{
                      width: "90%",
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  {/* <button
                    class="btn btn-outline-success my-2 my-sm-0 text-white"
                    type="submit"
                  >
                    Search
                  </button> */}
                </form>
              </div>
              <div className="carousel-item active">
                <img
                  src="https://source.unsplash.com/random/500×500/?burger"
                  className="d-block w-100"
                  alt="..."
                  style={{
                    filter: "brightness(30%)",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/500×500/?pizza"
                  className="d-block w-100"
                  alt="..."
                  style={{
                    filter: "brightness(30%)",
                  }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://source.unsplash.com/random/500×500/?sandwich"
                  className="d-block w-100"
                  alt="..."
                  style={{
                    filter: "brightness(30%)",
                  }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {foodCat !== [] ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem !== [] ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <>
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            {
                              <Card
                                foodItem={filterItems}
                                // foodName={filterItems.name}
                                options={filterItems.options[0]}
                                // imgSrc={filterItems.img}
                              />
                              // {console.log(filterItems,"filterItems")}
                            }
                          </div>
                        </>
                      );
                    })
                ) : (
                  <div>no data found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>====*****</div>
        )}
        {/* <Card /> */}
      </div>
      <div className="text-muted ">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
