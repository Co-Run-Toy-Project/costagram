module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',
        fontGray: '#818181',
        underbarGray: '#B8B8B8',
        likesGray: '#BBBBBB',
        likesRed: '#ED4956',
        postBlue: '#B3DBFF',
        postDeepBlue: '#0095F6',
        inputGray: '#EFEFEF',
        inputFontGray: '#767676', // 검색 아이콘, 글씨
      },
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      desktop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
};
