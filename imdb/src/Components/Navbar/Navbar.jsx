import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import img from "../../../src/assets/IMDB_Logo_2016.svg.png";

import { BiMoviePlay } from "react-icons/bi";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        {" "}
        <Link to="/">
          <img className="imdb" src={img} alt="" />
        </Link>
        <Link to="/movies/popular">
          {" "}
          <span>Popular</span>{" "}
        </Link>
        <Link to="/movies/top_rated">
          {" "}
          <span>Top Rated</span>{" "}
        </Link>
        <Link to="/movies/upcoming">
          <span>Upcoming</span>{" "}
        </Link>
      </div>
      <div className="navbarRight">
        <div> <h1 className="watchListIcon" style={{ fontSize: '3rem' }}>
    <BiMoviePlay />
  </h1></div>
  <div>
  <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={{ color: 'black', backgroundColor: 'Gold',fontWeight:"bolder" }}>
    Login
  </MenuButton>
  <MenuList>
    <MenuItem minH='48px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        alt='Fluffybuns the destroyer'
        mr='12px'
      />
      <span style={{ color: 'black' }}>Login</span>
    </MenuItem>
    <MenuItem minH='40px'>
      <Image
        boxSize='2rem'
        borderRadius='full'
        src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
        alt='Simon the pensive'
        mr='12px'
      />
      <span style={{ color: 'black' }}>Sign Up</span>
    </MenuItem>
  </MenuList>
</Menu>
  </div>
 
</div>
    </div>
  );
};

export default Navbar;
