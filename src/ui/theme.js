import { createGlobalStyle } from 'styled-components'
import { get, isString } from 'lodash'

export const themeValue = path => props => {
  const value = get(props.theme, path)

  if (value) {
    return value
  } else {
    throw new Error(`The provided path - ${path} - was not found in the theme.`)
  }
}

export const hexToRGB = (hex, alpha) => {
  if (!hex || !isString(hex) || !hex.length === 7) return ''

  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

const colors = {
  primary: {
    base: '#2B6497',
    interaction: '#1E466A',
    highlight: '#3882C5',
  },
  secondary: {
    pale: '#E7E7E7',
    base: '#9A9A9A',
    interaction: '#7B7B7B',
    highlight: '#C8C8C8',
  },
  accent: {
    base: '#FF7100',
    interaction: '#A64A00',
    highlight: '#FF9540',
  },
  warning: {
    base: '#d00',
    interaction: '#a00',
  },
  foreground: '#3d3d3d',
  background: '#ffffff',
}

const borderRadius = {
  none: 'none',
  normal: '4px',
  oval: '30px',
}

const spacing = {
  small: '0.8rem',
  medium: '1.2rem',
  large: '2.4rem',
  xl: '3.2rem',
}

export const theme = {
  colors,
  borderRadius,
  overlayColors: {
    primary: hexToRGB(colors.primary.base, 0.9),
    secondary: hexToRGB(colors.secondary.base, 0.9),
    accent: hexToRGB(colors.accent.base, 0.9),
    background: hexToRGB(colors.background, 0.9),
  },
  sizes: {
    // these sizes are used for breakpoints
    small: '500px', // @TODO: convert to em
    medium: '900px', // @TODO: convert to em
    large: '1200px', // @TODO: convert to em
    huge: '1500px', // @TODO: convert to em
  },
  typography: {
    sans: '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: {
      fontSize: '1.5rem',
      lineHeight: 1.33,
      fontSizeSmall: '1.3rem',
      fontSizeMini: '1.1rem',
      color: colors.foreground,
    },
    h1: {
      fontSize: '4.0rem',
      lineHeight: 1.2,
      fontWeight: 300,
    },
    h2: {
      fontSize: '3.6rem',
      lineHeight: 1.25,
      fontWeight: 300,
    },
    h3: {
      fontSize: '3.0rem',
      lineHeight: 1.3,
      fontWeight: 300,
    },
    h4: {
      fontSize: '2.4rem',
      lineHeight: 1.35,
      fontWeight: 300,
    },
    h5: {
      fontSize: '1.8rem',
      lineHeight: 1.5,
      fontWeight: 300,
    },
    h6: {
      fontSize: '1.5rem',
      lineHeight: 1.6,
      fontWeight: 300,
    },
    a: {
      color: colors.primary.base,
      colorHover: colors.primary.interaction,
    },
  },
  buttons: {
    background: {
      primary: colors.primary.base,
      primaryHollow: 'transparent',
      primaryInverted: colors.background,
      primaryInvertedHollow: 'transparent',
      secondary: colors.secondary.base,
      secondaryHollow: colors.background,
      accent: colors.accent.base,
      warning: colors.warning.base,
    },
    hoverBackground: {
      primary: colors.primary.interaction,
      primaryHollow: colors.primary.base,
      primaryInverted: 'transparent',
      primaryInvertedHollow: colors.background,
      secondary: colors.secondary.interaction,
      secondaryHollow: colors.secondary.pale,
      accent: colors.accent.interaction,
      warning: colors.warning.interaction,
    },
    foreground: {
      primary: colors.background,
      primaryHollow: colors.primary.base,
      primaryInverted: colors.primary.base,
      primaryInvertedHollow: colors.background,
      secondary: colors.background,
      secondaryHollow: colors.foreground,
      accent: colors.background,
      warning: colors.background,
    },
    hoverForeground: {
      primary: colors.background,
      primaryHollow: colors.background,
      primaryInverted: colors.background,
      primaryInvertedHollow: colors.primary.base,
      secondary: colors.background,
      secondaryHollow: colors.foreground,
      accent: colors.background,
      warning: colors.background,
    },
    border: {
      primary: 'none',
      primaryHollow: `1px solid ${colors.primary.base}`,
      primaryInverted: `1px solid transparent`,
      primaryInvertedHollow: `1px solid ${colors.background}`,
      secondary: 'none',
      secondaryHollow: `1px solid ${colors.secondary.base}`,
      accent: 'none',
      warning: 'none',
    },
    hoverBorder: {
      primary: 'none',
      primaryHollow: `1px solid ${colors.primary.base}`,
      primaryInverted: `1px solid ${colors.background}`,
      primaryInvertedHollow: `1px solid ${colors.background}`,
      secondary: 'none',
      secondaryHollow: `1px solid ${colors.secondary.base}`,
      accent: 'none',
      warning: 'none',
    },
    borderRadius,
  },
  layout: {
    siteWidth: '120rem',
    spacing,
  },
}

export const GlobalStyle = createGlobalStyle`
  html {
    /* 1rem = 14px @ base browser settings */
    font-size: 87.5%;
    width: 100%;
    height: 100%;

    @media all and (min-width: ${theme.sizes.medium}) {
      /* 1rem = 10px @ base browser settings */
      font-size: 62.5%;
    }
  }
  body {
    font-family: ${theme.typography.sans};
    font-size: ${theme.typography.body.fontSize};
    line-height: ${theme.typography.body.lineHeight};
    background-color: ${theme.colors.background};
    color: ${theme.colors.foreground};
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }
`
