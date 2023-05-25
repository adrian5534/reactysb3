import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
//import * as styles from "../components/index.module.css"

import * as DerivAPI  from "/@deriv/deriv-api"
import { w3cwebsocket } from "websocket"

const connection = new w3cwebsocket('wss://ws.binaryws.com/websockets/v3?app_id=36323');
const api = new DerivAPI({ connection });

/*const app_id = 36323;*/

const underlying = await api.underlying('R_100');
const ticks = await underlying.ticks();
ticks.onUpdate(tick => {
  CharacterData.show(tick);
});
CharacterData. init(ticks.list);
;
const IndexPage = () => (
  <Layout>
    <h1>
      Hello from a <b>DSG Page</b>
    </h1>
    <p>This page is not created until requested by a user.</p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/reference/rendering-options/deferred-static-generation/">
        documentation about Deferred Static Generation
      </a>
      .
    </p>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />


export default IndexPage