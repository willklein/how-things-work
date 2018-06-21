// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  MarkdownSlides,
} from 'spectacle';

// eslint-disable-next-line
import slides from '!raw-loader!./slides.md';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'fade']}
        transitionDuration={800}
        theme={theme}
      >
        {MarkdownSlides(slides)}
      </Deck>
    );
  }
}
