import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    fontColor: "hsl(200, 15%, 8%)",
    cardBg: "hsl(0, 0%, 100%)",
    bodyBg: "hsl(0, 0%, 98%)",
    shadowColor: "hsl(0, 0%, 92%)",
    borderColor: "hsl(0, 0%, 92%)",
}

export const darkTheme = {
    fontColor: "hsl(0, 0%, 100%)",
    bodyBg: "hsl(207, 26%, 17%)",
    cardBg: "hsl(209, 23%, 22%)",
    shadowColor: "hsl(209, 34%, 15%)",
    borderColor: "hsl(209, 34%, 15%)",
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.bodyBg};
        color: ${props => props.theme.fontColor};
        transition: background-color .2s ease-in-out;
    }

    .card, header, input, select, option {
        background-color: ${props => props.theme.cardBg};
        color: ${props => props.theme.fontColor}
    }

    // input, select, option {
    //     color: hsl(0, 0%, 52%)
    // }

    .card-img-top {
        border-bottom: 1px ${props => props.theme.borderColor}
    }

    .details button {
        background-color: ${props => props.theme.cardBg};
        color: ${props => props.theme.fontColor}
    }

    .border {
        background-color: ${props => props.theme.cardBg};
        border: 1px solid ${props => props.theme.borderColor}!important
    }
`