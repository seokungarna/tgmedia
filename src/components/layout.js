import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <StaticImage
       
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/tgmed.JPG"
        width={50}
        height={50}
        quality={95}
        alt="TG Medias logo"
      />
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
       Byggt av {` `} <a href="https://tg-media.se/">TG Media</a> - Copyright © {new Date().getFullYear()} <br />
       <a href="/om">Om</a> - <a href="/resor">Resor</a> - <a href="/kurser">Kurser</a>
       
      
      </footer>
    </div>
  )
}

export default Layout
