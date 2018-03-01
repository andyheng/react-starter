import React, { Fragment } from "react";
import {connect} from "react-redux";

const Starter = (props) => {
  console.log(props.sample);
  return (
    <div className="container">
      <h1>React Starter!</h1>
      <p>A highly opinionated custom React boilerplate and backend. Built while working through <em>The Complete React Web Developer Course (with Redux)</em> by Andrew Mead and some personal projects, this comes with:</p>
      <ul>
        <li>A fully structured React starter application</li>
        <li>A Webpack configuation, along with SASS pre-processing and development / production settings</li>
        <li>Babel configuration with multiple ease of use plugins</li>
        <li>Redux state management, and a sample react-redux state pre-configured</li>
        <li>A basic Node + Express backend server</li>
      </ul>
      <p>This boilerplate is more than enough to build a complete React application, while being clear with what exactly is happening behind the scenes.</p>
      <h2>Why use this over <code>create-react-app</code>?</h2>
      <p>That's a good question. You probably shouldn't, as this is a very personal package that was mainly used while learning React and building personal hobby applications. That being said, I personally find myself very comfortable with this setup even if it may be not as rich as CRA.</p>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    sample: state.sample
  }
)

export default connect(mapStateToProps)(Starter);