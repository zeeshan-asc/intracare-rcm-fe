export const colors = {
  primary: {
    DEFAULT: '#084B86',
    light: '#0F7CFF',
    lighter: '#9AC8FF',
    accent: '#0060D3',
    pale: '#5EB7F4',
    muted: 'rgba(8, 75, 134, 0.22)',
  },
  danger: {
    DEFAULT: '#EE0606',
    dark: '#820000',
    accent: '#FF7A58',
    light: 'rgba(255, 122, 88, 0.41)',
    muted: 'rgba(255, 122, 88, 0.31)',
  },
  warning: {
    DEFAULT: '#FF8000',
    light: 'rgba(255, 166, 0, 0.43)',
    subtle: '#FFC300',
    pale: 'rgba(255, 248, 36, 0.54)',
  },
  success: {
    DEFAULT: '#0DBA0D',
    dark: '#006200',
    light: '#71FF71',
    muted: 'rgba(13, 186, 13, 0.21)',
  },
  surface: {
    DEFAULT: '#FFFFFF',
    highlight: '#C9D7E4',
    muted: 'rgba(184, 184, 184, 0.36)',
    light: '#E6E6E6',
    border: '#DDDDDD',
  },
  text: {
    primary: '#161719',
    secondary: '#5F5F5F',
  },
  border: {
    DEFAULT: '#B8B8B8',
  },
} as const;

export const fonts = {
  poppins: 'Poppins, sans-serif',
  prompt: 'Prompt, sans-serif',
} as const;

export const fontSizes = {
  headingXl: '30px',
  headingLg: '12px',
  headingMd: '10px',
  bodyLg: '11px',
  bodyMd: '7px',
  bodySm: '6px',
  bodyXs: '5px',
  bodyXxs: '4px',
  bodyXxxs: '3px',
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const lineHeights = {
  tight: 1.1,
  normal: 1.4,
  relaxed: 1.5,
} as const;

export const spacing = {
  xs: '3px',
  sm: '6px',
  md: '10px',
  lg: '15px',
  xl: '25px',
  '2xl': '35px',
} as const;

export const borderRadius = {
  sm: '3px',
  md: '4px',
  lg: '6px',
  xl: '7px',
  pill: '66px',
} as const;

export const shadows = {
  sm: '1px 1px 2px rgba(0, 0, 0, 0.14)',
  md: '2px 2px 2px rgba(0, 0, 0, 0.14)',
} as const;

export const gradients = {
  header: 'linear-gradient(81.48deg, #084B86 70.195%, #0F7CFF 106.04%)',
  progress: 'linear-gradient(to right, #0F7CFF, #9AC8FF)',
  success: 'linear-gradient(to right, #0DBA0D, #71FF71)',
  danger: 'linear-gradient(to right, #EE0606, #FF7A58)',
  timeline: 'linear-gradient(to right, #5EB7F4 11.538%, #B8B8B8 28.68%)',
} as const;

export const riskLevels = {
  critical: {
    label: 'Critical',
    bgColor: colors.danger.light,
    textColor: colors.danger.DEFAULT,
  },
  high: {
    label: 'High',
    bgColor: colors.warning.light,
    textColor: colors.warning.DEFAULT,
  },
  medium: {
    label: 'Medium',
    bgColor: colors.warning.pale,
    textColor: colors.warning.subtle,
  },
  low: {
    label: 'Low Risk',
    bgColor: colors.success.muted,
    textColor: colors.success.DEFAULT,
  },
} as const;

export type RiskLevel = keyof typeof riskLevels;
export type ColorToken = typeof colors;
export type FontToken = typeof fonts;
