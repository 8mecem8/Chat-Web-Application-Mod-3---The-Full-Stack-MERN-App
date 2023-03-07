import React from 'react'


import { TopBarContainer,LogoContainer,TopBarCover,TopButtonsContainer } from './index.style'
import LogoLogin from "../../../assets/chat-box.png"

function TopBar() {



  return (
    <>
        <TopBarContainer>
          <TopBarCover>

            <LogoContainer>
              <img src={LogoLogin} alt='loging screen Logo'/>
              <h2>Chat-Pal</h2>
            </LogoContainer>

            <TopButtonsContainer>
                <button>Logout</button>
            </TopButtonsContainer>
          </TopBarCover>
        </TopBarContainer>
    </>
  )
}

export default TopBar