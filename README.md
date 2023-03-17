# **원티드 프리온보딩 인턴쉽 3주차 과제**

[AI기반 RPA 기술에 특화된 벤처기업 플렉시스 기업](http://flexsys.co.kr/) 과제 입니다.

### **🔗 결과 링크**

- [최종 결과물 바로가기](https://pre-onboarding-9th-3-8.netlify.app/chart)

## **📝 과제 목적**

- 주어진 데이터를 기반으로 시계열 차트 만들기
- Best Practice 만들어 제출하기

## ✅ 과제 진행 방법

[기능 구현 목록](./REQUIREMENTS.md)을 작성 후 아래와 같이 분류하였습니다.

1. 시계열 차트 구현
2. 툴팁 구현
3. 필터링 구현

분류에 따라 팀원 개개인이 과제를 수행했습니다. 리뷰 시간을 정하여 해당 시간에 PR에서 코드리뷰를 했습니다. 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다. [이슈](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-3-8/issues)와 [PR메시지](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-3-8/pulls)를 활용하여 문서화하였습니다.

## 🌟 Best Practice 선정 및 이유

- **Mar 17, 2023** 　|　**[필터링 기능 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-3-8/issues/1)**
    
    • useSearchParams를 커스텀 훅으로 만들어서 재사용 및 가독성 향상
    
    • 지역에 대한 다중 필터링
    
- **Mar 15, 2023**  　|　**[차트, 호버 기능 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-3-8/issues/10)**
    
    • 중복되는 년도, 월을 분리하는 함수를 만든 것
    
    • 코드의 가독성 (변수명 활용을 잘 하여 의미부여를 명확하게 한 점)
    
    • useChart 커스텀 훅을 이용한 관심사 분리가 된 점
    

## **🐞 이슈 및 버그**

- **Mar 17, 2023**  　|　[Charts 크기에 따른 하이라이트 이슈](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-3-8/issues/26)
- **Mar 16, 2023**  　|　[Recharts dot 렌더링 이슈 공유](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-3-8/issues/12)
- **Mar 15, 2023**  　|　[EDA: 목데이터 특성 파악](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-3-8/issues/11)

## **👨‍💻 팀원 소개**
<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/67201870?v=4"  alt="김상연님"/><br />
        <br/>
        <a href="https://github.com/greyHairChooseLife">
          <img src="https://img.shields.io/badge/김상연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90181028?v=4'  alt="박지헌님"/><br />
        <br/>
        <a href="https://github.com/jiheon788">
          <img src="https://img.shields.io/badge/박지헌-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/106523012?v=4"  alt="복준우님"/><br />
       <br/>
        <a href="https://github.com/bokjunwoo">
          <img src="https://img.shields.io/badge/복준우-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/48446896?v=4"  alt="양소연님"/><br/>
                <br/>
        <a href="https://github.com/Noeyso">
          <img src="https://img.shields.io/badge/양소연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/62588402?v=4"  alt="정찬욱님"/><br />
       <br/>
        <a href="https://github.com/raw20">
          <img src="https://img.shields.io/badge/정찬욱-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
       <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/팀장 : 조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/82688516?v=4"  alt="최정훈님"/><br/>
                <br/>
        <a href="https://github.com/jhoon9494">
          <img src="https://img.shields.io/badge/최정훈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/17325845?v=4"  alt="한호수님"/><br/>
       <br/>
        <a href="https://github.com/tnghgks">
          <img src="https://img.shields.io/badge/한호수-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>


## **🚀 기능**

- 시계열 차트
- 툴팁 표시
- 필터링 기능 (지역별, 다중선택)

![demo](https://user-images.githubusercontent.com/17325845/225849849-52da46a7-a5d5-4bb9-b1e9-f21dfbb5fc33.gif)

## ✨ 기술 스택

- React
- Typescript
- axios
- craco
- react-router-dom
    - 쿼리스트링으로 필터 관리
- Recharts
    - 컴포넌트 단위로 리액트스럽게 코드관리 가능
    - 상세한 문서 및 예시
    - 다양한 커스터마이징 기능을 제공

## 🤝 협업 툴

- Discord
- Notion
- Github

## **🗂️ 디렉토리 구조**

```bash
src
 ┣ api
 ┣ assets
 ┃ ┗ icons
 ┣ components
 ┃ ┗ chart
 ┣ constants
 ┣ interface
 ┣ lib
 ┃ ┣ hooks
 ┃ ┗ utils
 ┗ pages
   ┗ chartpage
```

## ⚙️ 설치 및 실행 가이드

### Install

```bash
npm i
```

### Build

```bash
npm run build
```

### Start
```bash
npm start
```
