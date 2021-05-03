export const lightTheme = {
    colors: {
        background: "hsl(0, 0%, 98%)",
        input: "hsl(0, 0%, 52%)",
        text: "hsl(200, 15%, 8%)",
        elements: "hsl(0, 0%, 100%)",
    },
    breakpoints: {
        mobile: 375,
        desktop: 1440,
    },
    fontSize: {
        homepageItems: 14,
        detailPage: 16,
    },
    fontFamily: {
        primary: "'Nunito Sans', sans-serif",
    },
    fontWeights: {
        light: 300,
        semiBold: 600,
        extraBold: 800,
    }
}

export const darkTheme = {
    ...lightTheme,
    colors: {
        background: "hsl(207, 26%, 17%)",
        text: "hsl(0, 0%, 100%)",
        elements: "hsl(209, 23%, 22%)",
    }
}