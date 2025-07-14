"use client"

import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import "./style.scss"
import SearchSuggestion from './SearchSuggest'




const Navbar = () => {
  const [searchValue, setSearchValue] = useState("")

  // references
  const searchIconRef = useRef<HTMLDivElement | null>(null)
  const suggestionTab = useRef<HTMLDivElement | null>(null)
  const SearchBox = useRef<HTMLInputElement | null>(null);


  const isSearchBoxFade = (isFocus: boolean) => {
    if (!searchIconRef.current) return
    const searchIcon = searchIconRef.current
    searchIcon.classList.toggle("NotFocusedSearchIcon", !isFocus);
    searchIcon.classList.toggle("Focused", isFocus);


    if (!suggestionTab.current) return
    suggestionTab.current?.classList.toggle("active", isFocus)

  }

  const FocusInput = () => {
    let searchbox = SearchBox.current
    if (!searchbox) return
    searchbox.focus()

  }

  return (
    <div className='Navbar'>
      <div className="Branding">
        <div className="Logo">
          Logo
        </div>
      </div>
      <div className="Search-Bar">
        <div className="Search-Container" onClick={() => { FocusInput() }}>
          <div className="Search-Icon" ref={searchIconRef} >
            <FontAwesomeIcon icon={faMagnifyingGlass} />

          </div>
          <div className="Search-Box" role="button" tabIndex={0}>
            <input type="text" ref={SearchBox} name="Product-Search-Box" id="Product-Search-Box" aria-label="Search products" spellCheck="false" onBlur={() => { isSearchBoxFade(false) }} onFocus={() => { isSearchBoxFade(true) }} placeholder='Search For Product....' value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} />
          </div>
        </div>
        <SearchSuggestion SuggestionTab={suggestionTab} />
      </div>
      <div className="User-Options">

        <div className="Cart-Page">
          <div className="icon">
            <ShoppingBasketOutlinedIcon />
          </div>
          <div className="Title">Cart</div>
        </div>
        <div className="Profile-Page">
          <div className="icon">
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
          <div className="Title">
            Login
          </div>
          <div className="Drop-Down-Arrow">
            <ArrowDropDownOutlinedIcon />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Navbar
