import React from "react"
import { Nav, NavItem, NavbarBrand } from "reactstrap"
import { NavLink } from "react-router-dom"
import catLogo from "../assets/cat-logo.png"

const Header = () => {
  return(
    <header> 
      <Nav justified>
        <NavItem>
          <NavLink to="/">
            <img 
              src={catLogo} 
              alt="two black cats living fur happily after"
              height="40"
              width="60"
            />
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
    </header>
  )
}

export default Header