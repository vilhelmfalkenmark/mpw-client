import React, { Component } from "react";
import WithCss from "hocs/styles/WithCss";

import s from "./DynamicPage.css";

class DynamicPage extends Component {
  render() {
    return (
      <main className={s({ container: true })}>
        <h1>DynamicPage route</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia
          nulla vitae urna vestibulum dignissim sit amet id risus. Cras lobortis
          ipsum non leo ornare, sed eleifend odio suscipit. Pellentesque
          facilisis, justo a finibus pretium, libero sem vestibulum nunc, ut
          semper quam felis non nulla. Curabitur id lectus id arcu porttitor
          bibendum quis at ligula. Donec at massa dapibus, facilisis mauris id,
          pellentesque odio. Pellentesque euismod eu dui non rhoncus. Integer
          laoreet ornare metus et convallis. Sed quis maximus sapien, non
          dignissim odio. In ut quam at tellus vulputate lobortis id eget nisi.
          Pellentesque a volutpat augue. In non pharetra est. Ut eu massa metus.
          Praesent in convallis tortor. Donec dolor magna, efficitur quis
          molestie eu, sagittis a lorem. Vivamus ac finibus magna, et placerat
          tortor. Curabitur tempus at nulla eu iaculis. In vel eros eleifend,
          pulvinar libero quis, feugiat risus. Aenean rutrum euismod turpis,
          eget viverra mi vulputate id. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam suscipit placerat nisi ut elementum. Phasellus
          ac magna dignissim, vestibulum massa a, posuere purus.
        </p>
      </main>
    );
  }
}

export default WithCss(DynamicPage, s);
