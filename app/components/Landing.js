// Include React as a dependency
import React from "react";

const Landing = () => {

  render: function() {
    console.log("Render Results", this.state.results);

    return (
      <div className="main-container">
        <p>something showed up here!</p>
      </div>
    );
  }
}
// Export the module back to the route
module.exports = Landing;
