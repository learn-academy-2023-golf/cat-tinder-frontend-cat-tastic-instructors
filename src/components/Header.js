import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import catLogo from "../assets/cat-logo.png"

const Header = () => {
  return(
    <> 
      <Nav
        justified
        pills
      >
        <NavItem>
          <NavLink to="/">
            <img src={catLogo} alt="two black cats living fur happily after"/>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex">
            Meet the Cats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew">
            Create a Purr-file
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}

export default Header