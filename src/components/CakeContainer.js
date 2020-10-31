import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from '../redux';
function CakeContainer(props) {
    return (
        <div style={{textAlign:"center"}}>
            <h2>Number Of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cakes</button>
        </div>
    )
}
///function to implement actions

//first step

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
