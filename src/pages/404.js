import * as React from "react"

import LayoutBasico from "../layouts/LayoutBasico"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <LayoutBasico>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutBasico>
)

export default NotFoundPage
