var React = require("react");
var AutoCarousel = require("./LandingComponents/Carousel");
var MuiThemeProvider = require("material-ui/styles/MuiThemeProvider");

const Landing = React.createClass({

  render: function () {

    return (
      <div>
        <p>something showed up here!</p>
        <MuiThemeProvider />
          <AutoCarousel />
      </div>
    );
  }
});


// Export the module back to the route
module.exports = Landing;


// React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: object. Check the render method of `Landing`.
