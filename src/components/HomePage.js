import React from "react";
import { useEffect, useState } from "react";
import useContentful from "./useContentful";

export default function HomePage() {

  const [photos, setPhotos] = useState([]);
    const { getPhotos } = useContentful();
  
    const blueberry = photos.map((photo) => {
      return photo.avatar[2].fields.file.url
    })

    const strawberrie = photos.map((photo) => {
      return photo.avatar[8].fields.file.url
    })

    const img1 = photos.map((photo) => {
      return photo.avatar[5].fields.file.url
    })

    const img2 = photos.map((photo) => {
      return photo.avatar[6].fields.file.url
    })

    const img3 = photos.map((photo) => {
      return photo.avatar[7].fields.file.url
    })
  
    console.log(photos)
    console.log(blueberry)

    useEffect(() => {
        getPhotos().then((response) => response && setPhotos(response));
      }, []);
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="jumbotron p-3">
            <h1 className="text-center title-text">
              Welcome to Smoothie planet!
            </h1>
            <hr />
            <p>
              Smoothies have become an on-the-go staple for health-conscious
              eaters, and we have to agree: They’re ridiculously easy to make,
              filled with fruits and veggies, and are ready in seconds. But not
              all smoothies are created equal. In fact, many store-bought
              smoothies are loaded with excess sugar and calories. So, if you’re
              looking for healthy smoothie recipes, we have the expert-approved
              tips, tricks, and ingredients to toss into your blender ASAP.
            </p>
          </div>
        </div>

        <div className="row row-card-main">
          <div className="col">
            <div className="card mb-3 cards-main border-0">
              <div className="row g-0 item-card-main">
                <div className="col-md-4">
                  <img
                    src={blueberry}
                    class="img-fluid rounded-start"
                    alt="..."
                    title="Blueberry Smoothie"
                  />
                </div>
                <div className="col-md-8 d-flex">
                  <div class="card-body">
                    <h5 class="card-title ">Blueberry Smoothie Bowl</h5>
                    <p class="card-text">
                      Blend together frozen blueberries, almond milk, almond
                      butter, and vanilla until ultra-creamy and divine. Once
                      you divide into two bowls, decorate with fresh
                      blueberries, hemp seeds, vanilla granola.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <a
                      href={img2}
                      class="btn btn-primary border-0"
                      style={{ backgroundColor: "#f18c86", maxWidth: "10em" }}
                    >
                      Go to receipe
                    </a>
                    <button
                      class="btn btn-primary share-btn"
                      id="shareButton1"
                      style={{
                        margin: " 3% 0% 7% 0%",
                        backgroundColor: "#f18c86",
                        borderColor: "#f18c86",
                        maxWidth: "10em",
                      }}
                    >
                      Share
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-3 border-0">
              <div class="row g-0 item-card-main">
                <div class="col-md-4">
                  <img
                    src={strawberrie}
                    class="img-fluid rounded-start"
                    alt="..."
                    title="Strawberry Smoothie"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Berry, Chia, and Mint Smoothie</h5>
                    <p class="card-text">
                      Red is our favorite color in this ruby smoothie packed
                      with strawberries, raspberries, and beets. It’ll give you
                      a ton of gut-friendly fiber, and a refreshing sip from the
                      surprising addition of mint.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <a
                      href={img2}
                      class="btn btn-primary border-0"
                      style={{ backgroundColor: "#f18c86", maxWidth: "10em" }}
                    >
                      Go to receipe
                    </a>
                    <button
                      class="btn btn-primary share-btn"
                      id="shareButton2"
                      style={{
                        margin: "3% 0% 7% 0%",
                        backgroundColor: "#f18c86",
                        borderColor: "#f18c86",
                        maxWidth: "10em",
                      }}
                    >
                      Share
                      <i class="fa-solid fa-share-nodes"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
