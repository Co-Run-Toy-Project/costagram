module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA', // main 전체 배경색
        fontGray: '#818181', // 게시물 회색 글씨
        underbarGray: '#B8B8B8', // 상단 네비 구분선
        likesGray: '#BBBBBB', // 좋아요 기본
        likesRed: '#ED4956', // 좋아요 클릭
        postBlue: '#B3DBFF', // 게시버튼 기본
        postDeepBlue: '#0095F6', // 게시버튼 활성화
        inputGray: '#EFEFEF', // 검색창 배경
        inputFontGray: '#767676', // 검색 아이콘, 글씨
      },
    },
    screens: {
      mobile: '470px',
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      desktop: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
