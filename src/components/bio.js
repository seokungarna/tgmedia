/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = ({person}) => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  // let author = {}
  // if (person) author.name = person
  // else author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social
  let personz = ''
  if (person) personz = person
  else personz = data.site.siteMetadata?.author.name

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {personz && (
        <p>
         Skriven av <strong>{personz}</strong>
          {` `}
         
        </p>
      )}
    </div>
  )
}

export default Bio
