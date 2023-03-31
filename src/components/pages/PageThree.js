import React from "react";
import { useEffect, useState } from "react";
import useContentful from "../useContentful";
export default function PageThree() {

  const [photos, setPhotos] = useState([]);
  const { getPhotos } = useContentful();

  const banana = photos.map((photo) => {
    return photo.avatar[0].fields.file.url
  })

 console.log(photos)
 console.log(banana)

  useEffect(() => {
    getPhotos().then((response) => response && setPhotos(response));
  }, []);

  
  
  return (
    <>
      <div class="flex-box">
        <div id="green-smoothie">
          <h1>Banana Smoothie</h1>
          <p>
            Have you met a perfect strawberry smoothie? Smoothies aren’t as easy
            to throw together it seems. Sure, you can throw random fruit and
            yogurt in the blender and whiz it up. But for the perfect creamy
            texture and the perfect just sweet enough fruit flavor? You’ve got
            to know something about smoothies. Alex and I have finally found our
            perfect strawberry smoothie recipe, which is below. Make it,
            memorize it, and make a perfect healthy smoothie on repeat!
          </p>
          <p>
            While it’s hard to go wrong putting yummy things in a blender, there
            is an order to the process that works well. I recommend starting
            with the liquid on the bottom, to help with pureeing, and layering
            the other ingredients in order from soft to firm. See more tips on
            How to Make a Smoothie here!
          </p>

          <ol>
            <li>
              Add the Liquids. In this case, a cup of low-fat milk goes into the
              blender first.
            </li>
            <br />
            <li>
              Add the Yogurt, If Using. I do think that using banana-flavored
              Greek yogurt makes a difference in this smoothie. The tangy-sweet
              flavor and thick, creamy texture of Greek yogurt is really good!
              But if you don’t have or want to use yogurt, feel free to leave it
              out.
            </li>
            <br />
            <li>
              Add the Fruit. I prefer to use frozen fruit, because it makes the
              smoothie thicker and colder.
            </li>
            <br />
            <li>
              Add the Ice. Not everyone uses ice, but it does thicken the
              smoothie and chill it even more.
            </li>
            <br />
            <li>Blend and Serve!</li>
          </ol>
        </div>

        <div
          class="card mb-3 ingredients shadow p-2 mb-5 border-0"
          style={{ maxWidth: "200px" }}
        >
           
          <img
            src={banana}
            width="210px"
            height="240px"
            class="img-fluid rounded-start"
            alt="..."
            title="Banana Smoothie"
          />


          <div class="ingredients-text">
            <h2>Ingredients</h2>
            <h6>Frozen banana</h6>
            <h6>Fresh half an orange</h6>
            <h6>Greek yogurt</h6>
            <button
              class="btn btn-primary share-btn"
              id="shareButton1"
              style={{
                margin: "3% 0% 7% 0%",
                backgroundColor: "#f18c86",
                borderColor: "#f18c86",
              }}
            >
              Share
              <i class="fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
