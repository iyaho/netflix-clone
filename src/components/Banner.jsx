import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height: 68px;
    width: 100vw;
    display:flex;

    padding: 13px 58px;
    box-sizing:border-box;
`;
const Logo = styled.img`
    height: 100%;
`;

const NavText = styled.ul`
    display: flex;
    color:white;
    list-style:none;

    height:100%;
    flex:1;

    align-items:center;
`

const NavIcon = styled.ul`
    display: flex;
    list-style:none;
    
    height:100%;
`

const NavTextItem = styled.li`
    
`

const NavIconItem = styled.li`
    width:fit-content;
    color:
    &>img{
        height:100%;
    }
`
function Banner(props){
    return (
        <Wrapper>
            <Logo 
                src="https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png"/>
                <NavText>
                    <NavTextItem>홈</NavTextItem>
                    <NavTextItem>TV프로그램</NavTextItem>
                    <NavTextItem>영화</NavTextItem>
                    <NavTextItem>최신 등록 콘텐츠</NavTextItem>
                    <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
                </NavText>
                <NavIcon>
                    <NavIconItem>
                        <img src="/bell.svg" alt=""/>
                    </NavIconItem>
                    <NavIconItem>
                        <img src="/gift.svg" alt=""/>
                    </NavIconItem>
                    <NavIconItem>
                        <img src="/search.svg" alt=""/>
                    </NavIconItem>
                </NavIcon>
        </Wrapper>

    );
};

export default Banner;