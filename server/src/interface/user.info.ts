export interface UserInfo {
  id: String;
  name: String;
  password: String;
  token: String; // 작성자 토큰
}

export interface post {
  id: String; // 게시글 아이디
  writer: String; // 작성자의 토큰
  content: String; // 게시글 내용
  place: Number; // 위도 & 경도
  image: String; // 게시글 사진
  // noticeToken: String; // 글 고유 토큰
}
