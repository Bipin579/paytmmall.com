import "./Homepage.css";
import { Grid, GridItem } from "@chakra-ui/react";
import { Carosel } from "../components/Carousel.jsx";

const Homepage = () => {

  let groceryBox = document.querySelector(".grocery-container");
  
  const groceryPrev = () => {
    let width = groceryBox.clientWidth;
    groceryBox.scrollLeft = groceryBox.scrollLeft - width;
    console.log(width);
  };

  const groceryNext = () => {
    let width = groceryBox.clientWidth;
    groceryBox.scrollLeft = groceryBox.scrollLeft + width;
    console.log(width);
  };

  return (
    <div id='main'>
      <div className="product-container">
        <Carosel />
      </div>
      <h1>Grocery & Home Furnishing</h1>
      <div className="grocery">
      <button className="groceryprebtn" onClick={groceryPrev}>
        <p>&lt;</p>
      </button>
      <button className="grocerynextbtn" onClick={groceryNext}>
        <p>&gt;</p>
      </button>
      <div className="grocery-container">
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498479/1613247367528.png?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>Big Bazaar</h3>
        </div>
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498482/1620737072141.png?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>Big Bazaar</h3>
        </div>
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498480/1620737097910.jpg?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>Big Bazaar</h3>
        </div>
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>Big Bazaar</h3>
        </div>
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498484/1610566898069.jpg?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>@Home</h3>
        </div>
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498485/1620737113562.png?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>@Home</h3>
        </div>
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498490/1610567023040.png?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>@Home</h3>
        </div>
        <div className="grocerycard">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/498486/1610567208285.png?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>@Home</h3>
        </div>
      </div>
    </div>

      <h1>Jewellery Brands</h1>
      <Grid
        className="shops"
        templateColumns="repeat(4, 1fr)"
        templateRows="600px"
        gap={12}
      >
        <GridItem w="100%" h="10">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/711188/1613028659969.png?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>Big Bazaar</h3>
        </GridItem>

        <GridItem w="100%" h="10">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/711194/1620745874093.jpg?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>Urban Ladder</h3>
        </GridItem>

        <GridItem w="100%" h="10">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/711199/1613028660058.jpg?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>@Home</h3>
        </GridItem>

        <GridItem w="100%" h="10">
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view_item/711200/1620745456365.jpg?imwidth=414&impolicy=hq"
            alt="Bazar"
          />
          <h3>More</h3>
        </GridItem>
      </Grid>

      <div id="foot">
        <h4>
          Paytm Mall - India’s Leading Online Shopping Experience, Brought to
          You by Paytm
        </h4>
        <p className="p">
          Online shopping with Paytm Mall is quick, convenient and trouble-free.
          You can shop for the desired product right from the comfort of your
          home and get them delivered straight to your doorstep.
        </p>
        <p className="p">
          Browse Paytm Mall and get access to over 65 million products ranging
          from smartphones, tablets to laptops, sarees, kurtas & kurtis to
          t-shirts, sneakers, sport shoes to sandals, earrings, watches to
          fitness bands, chimneys, cookware to gas stoves, dairy products, baby
          products to makeup kits and many more.
        </p>
        <h4>What are we offering on Paytmmall.com?</h4>
        <p className="p">
          Paytm Mall strives hard to make your online shopping a more pleasant
          and cost-effective experience by providing the top quality products at
          the best price rates in India. Our collection of products consist of
          electronic appliances, clothes, grocery, home and kitchen products,
          backpacks, automobiles, books and stationery, to name a few.
        </p>
        <p className="p">
          The super value bazaar offers an extensive range of grocery products
          like daily food staples, ready to cook food, high on nutrition food,
          beauty, make-up, personal care, health, baby care products and many
          more. Also take a look at the latest Automobile section that consists
          of cars, bikes, scooters, sports bikes, accessories, riding gear and
          automotive care.
        </p>
        <p className="p">
          Shop by categories, check out all the available deals, limited period
          offers, cashback offers, seasonal sales, and there is so much more to
          make your online shopping experience enjoyable & gratifying!
        </p>
        <h4>Benefits of shopping on Paytmmall.com</h4>
        <p className="p">
          User-Friendly: Leading online shopping experience in India which is
          simple and faster to load. Shop on the go and get the products
          delivered in just a few easy clicks.
        </p>
        <p className="p">
          Safe & Secure Shopping: You need not worry about your account
          credentials or personal details. Each and every transaction at Paytm
          Mall is securely processed and you can be rest assured that your money
          is in safe hands.
        </p>
        <p className="p">
          Check Out Closely: View products of your choice in detail with clear
          images and thorough descriptions before buying.
        </p>
        <p className="p">
          Multiple Payment Options: Choose a payment option of your choice i.e.
          Credit/Debit Cards, Netbanking and UPI. Use Paytm Wallet for quick
          checkouts & hassle-free payments
        </p>
        <p className="p">
          Paytm Postpaid Services: Now, you can buy today and pay next month
          with Paytm-ICICI Bank Postpaid.
        </p>
        <p className="p">
          Order History: All your orders show up at one place, you can track
          them or repeat them with ease. Trouble-free returns, track request &
          replacement of your orders
        </p>
        <p className="p">
          24x7 Customer Care: For all your queries and concerns regarding your
          shopping orders, head over to paytmmall.com/care or call us at
          01204606060 anytime
        </p>
        <p className="p">
          The products paired with amazing deals are a topping on the cake that
          no one would want to miss. Paytm Mall World Store offers access to
          imported products ranging from beauty and personal care, watches,
          jewellery and so much more that too at exclusive price rates.
        </p>
        <p className="p">
          Paytm Mall presents benefits like faster delivery with easy returns
          and payment options. Moreover, you can also take delight in online
          shopping with cash on delivery (COD) option as & when needed.
        </p>
        <Grid
          className="footbox"
          templateColumns="repeat(4, 1fr)"
          templateRows="300px"
          gap={10}
        >
          <GridItem w="100%" h="10">
            <img
              src="https://t4.ftcdn.net/jpg/01/25/83/03/240_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg"
              alt="logo"
            />
            <h4>24*7 Help</h4>
            <p>
              Need Help? Click Here. You can also talk to us on 0120 4606060 to
              resolve your query.
            </p>
          </GridItem>
          <GridItem w="100%" h="10">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1489/1489589.png"
              alt="logo"
            />
            <h4>Paytm Trust</h4>
            <p>
              Your money is yours! All refunds come with no question asked
              guarantee.
            </p>
          </GridItem>
          <GridItem w="100%" h="10">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8867/8867287.png"
              alt="logo"
            />
            <h4>100% Assurance</h4>
            <p>
              At Paytm, we provide 100% assurance. If you have any issue, your
              money is immediately refunded. Sit back and enjoy your shopping.
            </p>
          </GridItem>
          <GridItem w="100%" h="10">
            <img
              src="https://t3.ftcdn.net/jpg/04/97/75/72/240_F_497757293_8Oir83ATiF90BG5gf8RJrip2zxf0FkCx.jpg"
              alt="logo"
            />
            <h4>Paytm Mall Promise</h4>
            <p>
              Products with this tag are quality checked, and shipped the same
              day from certified warehouses. So you get the right product,
              faster.
            </p>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default Homepage;
