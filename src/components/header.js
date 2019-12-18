import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "@emotion/styled"
import theme from "../styles/theme"

const MainTitle = styled("div")`
  margin: 0;
  font-family: "Bangers";
  a {
    color: ${theme.colors.primary};
    font-size: 4rem;
    :hover {
      text-decoration: none;
    }
    @media (max-width: ${theme.breakpoints.l}) {
      font-size: 3.5rem;
    }
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 3rem;
    }
  }
`

const ContentCenter = styled("div")`
  margin: 0 auto;
  max-width: ${theme.maxWidth};
  padding: 1.45rem 1.0875rem;
`

const BlocHeader = styled("header")`
  padding-bottom: 1.45rem;
  background-color: ${theme.colors.bgSnd};
`

const Header = ({ siteTitle }) => (
  <BlocHeader>
    <ContentCenter>
      <MainTitle>
        <Link to="/">{siteTitle}</Link>
      </MainTitle>
    </ContentCenter>
  </BlocHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
