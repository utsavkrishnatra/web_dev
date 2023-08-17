import React from "react";
import { connect } from "react-redux";
function Bat(props) {

  console.log(props.bats);
  return (
    <>
      <h1> Bats Buy/Sell</h1>
      <h2>No. of Bats:{props.bats}</h2>
     
      <div>
        <span>
          <button onClick={props.buy} id="Buy">
            Buy
          </button>
        </span>
        <span>
          <button onClick={props.sell}>Sell</button>
        </span>

        <input
          type="text" placeholder="Type a number"
          onChange={(e) => props.setVal(e.target.value)}
        />
      </div>
    </>
  );
}

const mapStateToProps = (store) => {
  return store.Bat;
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy: () => dispatch({ type: "Buy" }),
    sell: () => dispatch({ type: "Sell" }),
    setVal: (value) => dispatch({ type: "setVal", payload: value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bat);
