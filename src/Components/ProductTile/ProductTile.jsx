import React, { Component } from "react";
import StarRatings from "react-star-ratings";
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
    if (ratingStr === undefined) {
      return 0;
    } else {
      return parseFloat(ratingStr.split(" out of ")[0]);
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

  render() {
    return (
      <>
        <Item divided>
          <Item.Image size="medium" src={this.props.image}  className='productImage'/>

          <Item.Content>
            <Item.Header as="div">
              <Header
                id={this.props.id}
                onClick={this.productDetails}
                onMouseEnter={this.hoveredRefer}
                onMouseLeave={this.hoveredOff}
                size="medium"
                className="title"
              >
                {this.normalizeProductName(this.props.name)}
              </Header>

              <StarRatings
                rating={this.getRating(this.props.rating)}
                starRatedColor="#FFE85A"
                starDimension="20px"
                starSpacing="2.5px"
              />
            </Item.Header>
            <Item.Meta>
              <Label size="medium" color="green">
                <Icon name="dollar sign" color="white" /> {this.props.price}
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
