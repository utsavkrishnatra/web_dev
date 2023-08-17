import { connect } from "react-redux";


function Ball(props){

    console.log(props);

    return(
        <>
            <h1> Balls</h1>
            <h2>No. of Balls:{props.balls}</h2>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </>
    )
}

const mapStateToProps =(store)=>{
    return store.Ball;
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
    
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Ball)