import Card from "./Card";

const cards = [{
  username: "Marco",
  price: 2.50,
  url: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b13305_1.jpg",
  title: "200€ Airbnb +400P"
},
{
  username: "Lucia",
  price: 5.50,
  url: "https://a71eba0458acf57331d3-d31ce5ebd093935dff8526660841b743.ssl.cf2.rackcdn.com/products/b17471_1.jpg",
  title: "20€ PS Store +40P"
}]

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-evenly row">

        {/* Use of array.map */}
        {cards.map(( singleCard => {
          return <Card {...singleCard} />
        }))}

      </div>
    </div>
  );
}

export default App;