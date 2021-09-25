import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Icon,
  Grid,
  Divider,
  Image,
  Header,
  Segment,
  Label,
  Button,
  Dropdown,
  Menu,
} from "semantic-ui-react";
import "./Cart.css";
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  deleteProduct = (pid) => {
    axios
      .delete("/api/shopping", {
        params: {
          pid: pid,
        },
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => console.log(err));
  };
  componentDidMount = async () => {
    const products = [];
    axios
      .get("/api/shopping",{
        user : this.props.userDetails.user
      })
      .then((res) => {
        console.log(res.data.data);
        res.data.data.map(async (product, k) => {
          let { pid, pname, pprice, pimage } = product;
          products.push({
            pid: pid,
            pname: pname,
            pprice: pprice,
            pimage: pimage,
          });
        });
        return products;
      })
      .then((products) => {
        this.setState({
          products: products,
        });
        console.log("STATE");
        console.log(this.state.products);
      });

    const options = [
      { key: 1, text: "Choice 1", value: 1 },
      { key: 2, text: "Choice 2", value: 2 },
      { key: 3, text: "Choice 3", value: 3 },
    ];
  };
  normalizeProductName = (pName) => {
    return pName ? pName.substring(0, 80) + "..." : pName;
  };
  render() {
    return (
      <>
        <Container style={{ margin: "10vh" }}>
          <Segment>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Header style={{ "padding-left": "2vh" }} size="huge">
                    {" "}
                    Shopping Cart
                  </Header>
                </Grid.Column>
                <Grid.Column textAlign="right">
                  <Label>
                    <Icon name="rupee sign" />
                    Price
                  </Label>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider section={true} />

            <Grid>
              {this.state.products
                ? this.state.products.map((product) => (
                    <>
                      {" "}
                      <Grid.Row
                        key={product.pid}
                        columns={3}
                        style={{
                          "padding-left": "10vh",
                          "padding-right": "10vh",
                        }}
                      >
                        <Grid.Column>
                          <Image className="s-image" src={product.pimage} />
                        </Grid.Column>
                        <Grid.Column>
                          <Header
                            as="a"
                            href={`/dashboard/products/${product.pname}/${product.pid}`}
                          >
                            {this.normalizeProductName(product.pname)}
                          </Header>
                          <Grid>
                            <Grid.Row columns={2} divided>
                              <Grid.Column>
                                <Menu compact>
                                  <Dropdown text="Quantity" simple item />
                                </Menu>
                              </Grid.Column>
                              <Grid.Column>
                                <Button
                                  onClick={() =>
                                    this.deleteProduct(product.pid)
                                  }
                                  content={<Icon name="trash" />}
                                ></Button>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                          <Label icon={"rupee sign"}>
                            <Icon name="rupee sign" />
                            {product.pprice.replace("₹", "")}
                          </Label>
                        </Grid.Column>
                      </Grid.Row>
                      <Divider />
                    </>
                  ))
                : ""}
            </Grid>
          </Segment>
        </Container>
      </>
    );
  }
}
