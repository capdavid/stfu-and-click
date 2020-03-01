interface Colors {
  primary: string;
  white: string;
  black: string;
  grey: string;
  lightGrey: string;
  lighterGrey: string;
  lightBlue: string;
  lighterBlue: string;
  darkBlue: string;
  lightRed: string;
  // lightBlue: string;
  // primary: string;
}

export interface Theme {
  colors: Colors;
}

export const colors = {
  primary: '#498fe2',
  white: '#fff',
  black: '#000',
  grey: '#333',
  lightGrey: '#ccc',
  lighterGrey: '#f2f2f2',
  lightBlue: '#dce9f8',
  lighterBlue: '#ecf3fd',
  darkBlue: '#4180cb',
  lightRed: '#ff6666'
};

export const theme: Theme = {
  colors
};
