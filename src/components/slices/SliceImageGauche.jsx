import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import theme from "../../styles/theme"

const SectionImageDroite = styled("section")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${theme.breakpoints.m}) {
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;
  }

  .texte_a_droite {
    align-self: center;
    padding: 3rem;
    grid-row: 1;
    grid-column: 2;

    @media (max-width: ${theme.breakpoints.m}) {
      grid-row: 2;
      grid-column: 1;
      padding: 0;
    }
  }
`

export default ({ slice }) => {
  return (
    <SectionImageDroite>
      <div
        className="texte_a_droite"
        dangerouslySetInnerHTML={{ __html: slice.items[0].texte_a_droite.html }}
      />
      <div className="image_a_gauche">
        <Img
          fluid={slice.items[0].image_a_gauche.localFile.childImageSharp.fluid}
        />
      </div>
    </SectionImageDroite>
  )
}
