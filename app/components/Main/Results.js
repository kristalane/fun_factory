// // Include React as a dependency
// var React = require("react");
// // Include our helpers for API calls
// var helpers = require("../../utils/helpers");
// var Facts = require("./Facts")
// // Results Component Declaration
// var Results = React.createClass({
//   // Here we will save states for the contents we save
//   getInitialState: function() {
//     return {}
//   },
//   // This code handles the sending of the search terms to the parent Search component
//   handleClick: function(item) {
//     console.log("CLICKED");
//     console.log(item);
//     helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(function() {
//       console.log(item.web_url);
//     });
//   },
//   // A helper method for mapping through our articles and outputting some HTML
//   renderFacts: function() {
//     return this.props.results.map(function(fact, index) {
//       // Each fact thus represents a list group item with a known index
//       return (
//         <div key={index}>
//           <li className="list-group-item">
//             <h3>
//               <span>
//                 <em>{fact}</em>
//               </span>
//               <span>
//                 <button className="btn btn-primary" onClick={() => this.handleClick(fact)}>Save</button>
//               </span>
//             </h3>
//           </li>
//         </div>
//       );
//     }.bind(this));
//   },
//   // A helper method for rendering a container to hold all of our articles
//   renderContainer: function() {
//     return (
//       <div className="main-container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="panel panel-primary">
//               <div className="panel-heading">
//                 <h1 className="panel-title">
//                   <strong>
//                     <i className="fa fa-list-alt"></i>
//                     Results
//                   </strong>
//                 </h1>
//               </div>
//               <div className="panel-body">
//                 <ul className="list-group">
//                   {this.renderFacts()}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       )
//     },
//     render: function() {
//       return (this.renderContainer());
//     },
// });
// // Export the module back to the route
// module.exports = Results;
