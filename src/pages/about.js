import React from "react";

export default ({ data }) =>
  <div>
    <h1>
       A little more about me
    </h1>
    <p>
      My name is Jacob and I like working with web and mobile technologies.
    </p>

    <p>
      I currently live in the Boston area. Feel free to message me at <a href="https://twitter.com/jakeduchen" alt="link to jacob duchen's twitter" target="_blank">@jakeduchen</a>
    </p>
  </div>

  export const query = graphql`
    query AboutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
