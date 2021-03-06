/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import "../styles/global.scss"
import { theme, globalStyles } from "../styles"

import Header from "./header"
import Footer from "./footer"

import { myContext } from "../../provider"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <div
            className={
              context.isDark
                ? "globalStyle darkTheme"
                : "globalStyle lightTheme"
            }
          >
            <>
              <ThemeProvider theme={theme}>
                <Global styles={globalStyles} />
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
                <Footer />
              </ThemeProvider>
            </>
          </div>
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
