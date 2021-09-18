import React, { Component } from "react";
import cheerio from "cheerio";
import axios from "axios";
import pretty from "pretty";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("/api/products")
      .then((res) => {
        console.log("RES");
        // console.log(res.data);
		const productList = []; 
		const $ = cheerio.load(res.data.data.toString());
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
			id : id,
			brand: brand,
			name: name,
			price:price,
			rating:rating,
			image:image,
			link:link
		  })
          
          
        });
        this.setState({
			products:productList,
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
      {this.state.products.map((item)=>
	  (
		   
		  <div>{item}</div>
	  ))}
      </div>
    );
  }
}

export default Dashboard;
