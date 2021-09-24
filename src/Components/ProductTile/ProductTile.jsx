import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import axios from 'axios';
import {
  Item,
  Image,
  Segment,
  Header,
  Icon,
  Grid,
  Container,
  Label,
  Button,
  Divider,
} from "semantic-ui-react";
import "./ProductTile.css";
export default class ProductTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
    };
  }
  componentDidMount = () => {
    console.log(this.props);
  };
  normalizeProductName = (pName) => {
    return pName ? pName.substring(0, 80) + "..." : pName;
  };
  getRating = (ratingStr) => {
    console.log(ratingStr);
    if (ratingStr.includes("out of")) {
      try {
        return parseFloat(ratingStr.split(" out of ")[0]);
      } catch {
        return 0;
      }
    } else {
      return 0;
    }
  };
  hoveredRefer = (event) => {
    event.preventDefault();
    event.target.style.color = "#8A81FF";
  };
  hoveredOff = (event) => {
    event.preventDefault();
    event.target.style.color = "black";
  };
  productDetails = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  };
  showProductDetails = () =>
  {
    this.props.history.replace(`/dashboard/products/${this.props.link}`);
  };

  render() {
    return (
      <>
        <Item >
          <a >
            <div class="s-image-container" onMouseEnter={this.hoverOnImage}>
              <img class="s-image" src={this.props.image} alt="product" />
            </div>
          </a>

          {/* <Item.Image   src={this.props.image} /> */}

          <Item.Content>
            <Item.Header as="div">
              <a href={`/dashboard/products/${this.props.name}/${this.props.id}`}>
                <Header
                  id={this.props.id}
                  onMouseEnter={this.hoveredRefer}
                  onMouseLeave={this.hoveredOff}
                  size="medium"
                  className="title"
                >
                  {this.normalizeProductName(this.props.name)}
                </Header>
              </a>

              {this.props.rating !== undefined ? (
                <StarRatings
                  rating={this.getRating(this.props.rating)}
                  starRatedColor="#FFE85A"
                  starDimension="20px"
                  starSpacing="2.5px"
                />
              ) : (
                <Header size="tiny" color="red">
                  No ratings yet
                </Header>
              )}
            </Item.Header>
            <Item.Meta>
              <Label size="large" className="priceTag">
                <Icon name="rupee sign" color="white" />{" "}
                {this.props.price + ".00"}
              </Label>
            </Item.Meta>
            <Item.Description></Item.Description>
            <Item.Extra>
              {" "}
              <Button animated="vertical">
                <Button.Content hidden>Shop</Button.Content>
                <Button.Content visible>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Divider />

        {/* <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item> */}
      </>
    );
  }
}
