import React, { Component } from "react";
import axios from "axios";
import cheerio from "cheerio";
import mongoose from "mongoose";
import { tsUnionType } from "@babel/types";
import { html } from "cheerio/lib/api/manipulation";
import {
  Image,
  Segment,
  Header,
  HeaderContent,
  Grid,
  Container,
  Button,
  Divider,
  Label,
} from "semantic-ui-react";
import "./ProductDetails.css";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: {},
    };
  }
  componentDidMount = () => {
    console.log(this.props);
    const { asin, name } = this.props.match.params;
    axios
      .get("/api/products/details", {
        params: {
          asin: asin,
          name: name,
        },
      })
      .then((res) => {
        console.log("Product Details : ");
        console.log(res);
        this.setState({
          productDetails: this.getProductDetails(res.data.data),
        });
        console.log("STATE");
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getProductDetails = (data) => {
    const $ = cheerio.load(data);
    const title = $("#productTitle").text();
    const price = $("#priceblock_ourprice").text();
    const image = $("#landingImage").attr("data-old-hires");

    //document.querySelectorAll('.a-spacing-small.item.imageThumbnail.a-declarative')[0].querySelector('img')
    console.log("THUMB iMAGES");

    const thumbImages = (callback) => {
      let images = [];
      $(".a-spacing-small.item").each((el, k) => {
        images.push($(k).find("img").attr("src"));
      });
      callback(images);
      return images;
    };

    const features = (callback) => {
      let listOfFeatures = [];
      $("div#feature-bullets>ul>li>span").each((el, i) => {
        listOfFeatures.push(i.firstChild.data);
        // listOfFeatures.push($(el).children()[0].text());
      });
      callback(listOfFeatures);
      return listOfFeatures;
    };
    const Product = {
      title: title,
      price: price,
      image: image,
      features: [],
      thumbImages: [],
      // features: features(),
      // thumbImages: thumbImages(),
    };
    features((result) => {
      Product.features = result;
    });
    thumbImages((result) => {
      Product.thumbImages = result;
    });
    console.log("PRODUCT OBJECT");
    console.log(Product);
    return { ...Product };
  };
  render() {
    return (
      <>
        <Container fluid style={{ padding: "8vh" }}>
          <Grid divided>
            <Grid.Row columns={4}>
              <Grid.Column width={2}>
                {this.state.productDetails.thumbImages
                  ? this.state.productDetails.thumbImages.map((img) => (
                      <Image src={img} className="img-hover" />
                    ))
                  : ""}
              </Grid.Column>
              <Grid.Column width={6}>
                <Image size="huge" src={this.state.productDetails.image} />
              </Grid.Column>
              <Grid.Column width={5}>
                <Header>{this.state.productDetails.title}</Header>
                <Header.Content>
                  {this.state.productDetails.features
                    ? this.state.productDetails.features.map((feature) => (
                        <li>{feature}</li>
                      ))
                    : ""}
                </Header.Content>
              </Grid.Column>
              <Grid.Column divided width={3}>
                Price :{" "}
                <Label color={"purple"}>
                  {this.state.productDetails.price}
                </Label>
                <Button
                  onClick={this.addProduct}
                  style={{ margin: "1vh", width: "40vh" }}
                  circular
                >
                  Buy Now{" "}
                </Button>
                <Button style={{ margin: "1vh", width: "40vh" }} circular>
                  Add to Cart
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
        </Container>

        {/* <div>{this.state.productDetails.toString()}</div>
        <div>{this.state.productDetails.productDetails.title}</div>
        <div>{this.state.productDetails.productDetails.price}</div>
        <img src={this.state.productDetails.productDetails.image} alt="product" />
        <li>
          {this.state.productDetails.productDetails.features.map((el, k) => {
            <ul key={k}>{el}</ul>;
          })}
        </li> */}
      </>
    );
  }
  addProduct = () => {
    axios
      .post("/api/shopping", {
        pid: this.props.match.params.asin,
        pname: this.state.productDetails.title,
        pprice: this.state.productDetails.price,
        pimage : this.state.productDetails.image
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // axios
    //   .post("/api/shopping", {

    //       pid: this.props.match.params.asin,
    //       pname: this.state.productDetails.title,
    //       pprice: this.state.productDetails.price,

    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
}
