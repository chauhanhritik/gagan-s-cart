import React, { Component } from "react";
import cheerio from "cheerio";
import axios from "axios";
import pretty from "pretty";
import { Grid, Segment, Container, Item, Pagination } from "semantic-ui-react";
import ProductTile from "../ProductTile/ProductTile";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      total: null,
    };
  }
  componentDidMount = () => {
    console.log(this.props);
    axios
      .get("/api/products", {
        params: {
          data: this.props.match.params.id,
        },
      })
      .then(async (res) => {
        console.log("RES");
        // console.log(res.data);
        const productList = [];
        const $ = await cheerio.load(res.data.data.toString());
        const total = $(".a-pagination li:nth-child(6)").text();
        console.log(`total : ${total}`);
        this.setState({
          total: total,
        });
        //.s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 sg-col sg-col-12-of-16
        $(".s-asin").each((i, el) => {
          const id = $(el).attr("data-asin");
          const brand = $(el).find("h5 .a-size-base-plus").text();
          const name = $(el).find("h2 span").text();
          const price = $(el).find(".a-price-whole").text();
          const rating = $(el)
            .find(".a-spacing-top-micro span")
            .attr("aria-label");

          const image = $(el).find(".s-image").attr("src");
          const link =
            "https://www.amazon.in" + $(el).find(".a-link-normal").attr("href");
          const datas = { id, brand, name, price, rating, image, link };
          productList.push({
            id: id,
            brand: brand,
            name: name,
            price: price,
            rating: rating,
            image: image,
            link: link,
          });
        });
        this.setState({
          products: productList,
        });
      })
      .catch((err) => {
        console.log("Error in scraping" + err);
      });
  };
  render() {
    return (
      <div>
        Dashboard
        <br />
        <Container fluid>
          <Grid columns={2} divided>
            <Grid.Row stretched>
              <Grid.Column width={4}>
                <Segment>1</Segment>
              </Grid.Column>
              <Grid.Column width={12}>
                {this.state.products.map((item, k) => (
                  <Segment key={k} compact>
                    <Item.Group>
                      {" "}
                      <ProductTile
                        {...item}
                        history={this.props.history}
                      />{" "}
                    </Item.Group>
                  </Segment>
                ))}
              </Grid.Column>
              <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={parseInt(this.state.total)}
                siblingRange={1}
                totalPages={10}
              />
            </Grid.Row>
            <Grid.Row stretched>
              <Grid.Column style={{ minWidth: 500 }}>Footer</Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
