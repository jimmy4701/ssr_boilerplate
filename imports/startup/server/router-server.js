import React                    from "react"
import { onPageLoad }           from "meteor/server-render"
import { renderToString }       from "react-dom/server"
import { ServerStyleSheet }     from "styled-components"
import {
  StaticRouter as Router,
  Switch
}                               from 'react-router-dom'
import MainLayoutServer         from "/imports/layouts/MainLayoutServer"
import Public                   from "/imports/components/routes/Public"
import { Helmet }               from "react-helmet"

onPageLoad(sink => {
  let browser = sink.request.browser.name
  browser = browser.toLowerCase()
  const isMobile = browser.indexOf("mobile") > -1

  const context = {}

  const path = sink.request.url.path

  console.log("SERVER: APPEL DE INDEX");
  console.log("SERVER: PATH", path);



    let htmlString = renderToString(
        <Router
          location={ path }
          context={ context }>
          <Switch>
            <Public component={ MainLayoutServer } path="/" isMobile={ isMobile } />
          </Switch>
        </Router>
    )
    console.log("SERVER: HTML STRING", htmlString);

    sink.renderIntoElementById("root", htmlString)
})
