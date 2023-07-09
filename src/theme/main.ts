import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    palette: any
  }
}

const theme = {
  palette: {
    primary: {
      main: '#7986cb'
    },
    background: {
      default: '#fefefe'
    },
    text: {
      primary: 'rgba(0,0,0,0.8)'
    }
  }
}

export default theme
