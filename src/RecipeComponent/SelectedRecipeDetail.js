import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function SelectedRecipeDetail({ recipe }) {
  return (
    <>
      <div>
        <section class="py-5">
          <div class="container" style={{ margin: "auto" }}>
            <div class="row gx-5">
              <aside class="col-lg-6">
                <div class="border rounded-4 mb-3 d-flex justify-content-center">
                  <img
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100vh",
                      margin: "auto",
                    }}
                    class="rounded-4 fit"
                    src={recipe["recipe"]["image"]}
                  />
                </div>
              </aside>
              <main class="col-lg-6">
                <div class="ps-lg-3">
                  <h4 class="title text-dark"> {recipe["recipe"]["label"]}</h4>
                  <hr />
                  <div class="mb-3">
                    <h5>
                      CUISINE TYPE - {recipe["recipe"]["cuisineType"]["0"]}
                    </h5>
                  </div>
                  <div class="mb-3">
                    <h5>DISH TYPE - {recipe["recipe"]["dishType"]["0"]}</h5>
                  </div>
                  <hr />
                  <div class="mb-3">
                    <h5 style={{ color: "red" }}>
                    {
                      recipe["recipe"]["cautions"]["0"] &&(<>
                        CAUTIONS- <br />
                      {recipe["recipe"]["cautions"]["0"]} <br />
                      </>) ||
                      recipe["recipe"]["cautions"]["1"] &&(<>
                        {recipe["recipe"]["cautions"]["0"]} <br />
                      {recipe["recipe"]["cautions"]["1"]} <br />
                      </>) ||
                      recipe["recipe"]["cautions"]["1"] &&(<>
                        {recipe["recipe"]["cautions"]["0"]} <br />
                      {recipe["recipe"]["cautions"]["1"]} <br />
                      {recipe["recipe"]["cautions"]["2"]}
                      </>)
                    }
                    </h5>
                    <br />
                    <h5 style={{ color: "green" }}>
                      DIET LABELS- <br />
                      {recipe["recipe"]["dietLabels"]["0"]} <br />
                      {recipe["recipe"]["dietLabels"]["1"]} <br />
                      {recipe["recipe"]["dietLabels"]["2"]}
                    </h5>
                  </div>
                  <hr />
                  <div class="mb-3">
                    <h5>MEAL TYPE- {recipe["recipe"]["mealType"]["0"]}</h5>
                  </div>
                  <hr />
                  <div class="mb-3">
                    <h5>
                      INGREDIENTS-
                      <br />
                      {recipe["recipe"]["ingredientLines"]["0"]} <br />
                      {recipe["recipe"]["ingredientLines"]["1"]}
                    </h5>
                    <br />
                  </div>
                </div>
                <Link to="/allProducts">
                  <Button
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                      backgroundColor: "var(--text-color",
                    }}
                  >
                    Shop With Us
                  </Button>
                </Link>
              </main>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SelectedRecipeDetail;
