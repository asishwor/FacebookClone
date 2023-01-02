import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color:#097ceb;
        --section-bg-color:#f0f2f5;
        --white-color:#ffffff;
        --heading-font-color:#050505;
        --color-danger:#FA383E;
        --success-color:#00A400;
        --color-orange:#f9c857;
        --body-font-color:#65676b;
    }
    body{
        background-color: var(--section-bg-color);
        height: 100vh;
        overflow-y: hidden;
    }
    *{
        margin: 0;
        padding: 0;
    }

.mainContent{
    max-height: calc(100vh - 61px);
    overflow-y: auto;
}
    .active{
    color: var(--primary-color);
    border-bottom: 3px solid var(--primary-color);
    padding-inline: 35px;
    padding-block: 10px;
    &:hover{
        background-color: transparent;
        border-radius: 0;
    }
}
.container{
    max-width: 1440px;
    padding: 0 15px;
    width: 100%;
    margin: 0 auto;
}
input:focus{
    outline: none;
}
.rightAside{
    max-height: calc(98vh - 61px);
    overflow-y: scroll;
    &::-webkit-scrollbar{
        height: 5px;
        width: 9px;
    }
    &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    visibility: hidden;
    border-radius: 30px;
    }
    &:hover::-webkit-scrollbar-thumb{
    visibility : visible;

    }
}
.leftaside{
    max-height: calc(98vh - 61px);
    overflow-y: auto;
    &::-webkit-scrollbar{
width: 9px;
height: 20px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgray;
        visibility: hidden;
        border-radius: 30px;
    }
    &:hover::-webkit-scrollbar-thumb{
        visibility: visible;
    }
}
/*
::-webkit-scrollbar{
    width: 10px;

} */


`;
