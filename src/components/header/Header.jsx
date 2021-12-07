import React from 'react'
import './Header.scss'

import { FaSearch } from 'react-icons/fa'
import { BsBellFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { AiFillMessage } from 'react-icons/ai'

function Header() {
    return (
        <header>
        <div className="headerIcons">
          <FaSearch />
        </div>
        <div className="headerIcons circle mail">
          <IoMdMail />
          <span>4</span>
        </div>
        <div className="headerIcons circle bell">
          <BsBellFill />
          <span>4</span>
        </div>
        <div className="headerIcons circle message">
          <AiFillMessage />
          <span>4</span>
        </div>

        <div className="pic">
          <span></span>
        </div>

      </header>
    )
}

export default Header
