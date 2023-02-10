# Costagram
Instagram 을 레퍼런스로하여 CRUD 기능을 이용해 구현해보는 토이 프로젝트입니다:) 

### 로그인, 회원가입 (Kakao Oauth)
![Jan-19-2023 22-38-50](https://user-images.githubusercontent.com/106587166/213458510-c2796225-4514-4947-ac9a-2b20fde9e8f6.gif)
Kakao Oauth요청을 통해 로그인 성공 시, accessToken, ProfileImage, name 값을 받아오고 LocalStorage에 해당 데이터들을 저장시켜 추후, CRUD기능에 활용될 수 있도록 구현하였습니다.

### 댓글 등록, 삭제
![Jan-19-2023 22-42-56](https://user-images.githubusercontent.com/106587166/213458536-c15be164-2043-4cd0-a65c-c84abdb49de6.gif)
#### 댓글 등록
Kakao Oauth를 통해 받은 Access Token과 함께 댓글 내용을 Body에 담아 요청하였고, react query의 mutation을 통해 post요청 후 성공했을 때, invalidatequeies기능을 사용하여 자동으로 전체 게시글에 대한 get요청이 이루어질 수 있도록 구현하였습니다.

#### 댓글 삭제
Kakao Oauth를 통해 받은 LocalStorage의 name값과 해당 댓글의 작성자 이름을 비교하여, 같은 경우에만 삭제버튼이 활성화되게 구현하였습니다.

### 사진 업로드 및 캐러셀
![사진업로드](https://user-images.githubusercontent.com/103915161/218027772-c5f9d521-2866-4a33-9c42-a38c60a0b974.gif)

### kakao 지도 API, 포스팅 
![지도와 글쓰기](https://user-images.githubusercontent.com/103915161/218027787-77007cbf-0cfd-4128-af84-2238cc721823.gif)
