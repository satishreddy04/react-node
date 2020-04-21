import GraingerPalette from './colorPalette';

const FontWeights = {
  Regular: 400,
  Medium: 600, //Dustin told us to make Medium 600
};

const Typography = {
  fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
  fontWeight: FontWeights.Regular,
  h1: {
    fontSize: '24px',
    fontWeight: FontWeights.Regular,
    marginBottom: '24px',
  },
  h2: {
    fontSize: '16px',
    fontWeight: FontWeights.Medium,
    marginBottom: '8px',
  },
  h4: {
    fontSize: '14px',
    fontWeight: FontWeights.Regular,
    color: GraingerPalette.primaryColors.grey,
  },
  body1: {
    fontSize: '16px',
    fontWeight: FontWeights.Regular,
  },
  body2: {
    fontSize: '14px',
    fontWeight: FontWeights.Regular,
  },
  caption: {
    fontSize: '12px',
    fontWeight: FontWeights.Regular,
  },
  button: {
    fontSize: '14px',
    fontWeight: FontWeights.Medium,
  },
};

export default Typography;
export { FontWeights };
