import React from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { green400, green600, blue400, blue600, red400, red600 } from 'material-ui/styles/colors';


const AutoCarousel = () => (
  <div>
    <AutoRotatingCarousel
      label="Get started"
      // onStart = "/login"
      open
      // TODO: onStart= redirect to login page
    >
      <Slide
        media={<img src="https://www.rd.com/wp-content/uploads/sites/2/2016/05/FavoriteFactsThatAreFalse_5.jpg" />}
        mediaBackgroundStyle={{ backgroundColor: red400 }}
        contentStyle={{ backgroundColor: red400 }}
        title="Welcome to the FACTory!"
        subtitle="See more facts by logging in or signing up."
      />
      <Slide
        media={<img src="https://www.rd.com/wp-content/uploads/sites/2/2016/05/FavoriteFactsThatAreFalse_1.jpg" />}
        mediaBackgroundStyle={{ backgroundColor: blue400 }}
        contentStyle={{ backgroundColor: blue400 }}
        title="Fact Categories"
        subtitle="get facts about: Trivia, Numbers, Math, Year"
      />
      <Slide
        media={<img src="https://www.rd.com/wp-content/uploads/sites/2/2016/05/FavoriteFactsThatAreFalse_3.jpg" />}
        mediaBackgroundStyle={{ backgroundColor: green400 }}
        contentStyle={{ backgroundColor: green400 }}
        title="May the force be with you"
        subtitle="FACT: The Force is a metaphysical and ubiquitous power in the Star Wars universe."
      />
    </AutoRotatingCarousel>
  </div>
);

export default AutoCarousel;
