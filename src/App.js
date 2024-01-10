import Card from "./Card";
import cards from "./cards";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-evenly row">

        {/* Use of array.map */}
        {cards.map(( singleCard => {
          return <Card key={singleCard.id} {...singleCard} />
        }))}

      </div>
    </div>
  );
}

export default App;