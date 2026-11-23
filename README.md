# ASTERIA · 아스테리아 연대기 모바일 아카이브

휴대폰과 PC에서 열 수 있는 **GitHub Pages 전용 정적 웹사이트**입니다.

## GitHub에 배포하기

1. GitHub에서 새 저장소(예: `asteria`)를 만듭니다.
2. 이 ZIP을 **컴퓨터에서 압축 해제**합니다.
3. 저장소의 최상위에 `index.html`, `assets/` 폴더, `.nojekyll`, `manifest.webmanifest` 등 **압축 해제한 모든 내용**을 업로드합니다. ZIP 파일 자체만 업로드하면 사이트가 실행되지 않습니다.
4. GitHub 저장소의 **Settings → Pages → Build and deployment → Deploy from a branch**를 선택합니다.
5. `main` 브랜치, `/(root)` 디렉터리를 선택하고 저장합니다.
6. 배포 후 `https://깃허브사용자명.github.io/asteria/` 주소로 스마트폰에서 접속합니다. 저장소 이름을 다르게 지정하면 주소의 마지막 부분도 바뀝니다.

파일이 많으므로 **GitHub Desktop** 또는 Git 명령으로 업로드하는 것이 편리합니다. GitHub 웹 업로드는 한 번에 올릴 수 있는 파일 수와 크기에 제한이 있습니다.

```sh
git init
git add .
git commit -m "Publish ASTERIA mobile archive"
git branch -M main
git remote add origin https://github.com/깃허브사용자명/asteria.git
git push -u origin main
```

### Markdown 설정집

GitHub에서 [`ASTERIA_전체설정.md`](ASTERIA_전체설정.md)를 열면 인물 62명, 국가, 역사, 신, 몬스터 80종을 일반 문서 형태로 읽을 수 있습니다. 같은 폴더의 이미지 경로를 사용하므로 일러스트도 표시됩니다.

## 모바일에서 사용하기

- 상단 **☰ 메뉴**에서 인물 도감·몬스터 도감·연대기·대륙 지도 등으로 이동합니다.
- 인물 검색과 시대 필터, 몬스터 검색과 등급 필터를 사용할 수 있습니다.
- 대륙 지도는 손가락으로 좌우로 밀어 살펴볼 수 있습니다.
- 긴 화면에서는 오른쪽 아래 ↑ 버튼으로 맨 위로 돌아갈 수 있습니다.
- 휴대폰의 **홈 화면에 추가** 기능으로 바로가기를 만들 수 있습니다.

## 데이터 보관 관련 주의

- GitHub Pages는 **정적 웹 호스팅**입니다. 사이트의 편집 기능은 브라우저에 로컬로 저장될 뿐, GitHub 저장소 원본을 수정하지 않습니다.
- **PC와 휴대폰 사이 자동 동기화는 지원하지 않습니다.** `자료 관리 → 전체 자료 백업`에서 JSON을 내려받고 다른 기기에서 가져오는 방식으로 이동할 수 있습니다.
- GitHub Pages에 공개한 사이트는 다른 사람들이 접속할 수 있습니다. 비공개 자료라면 공개 저장소에 올리기 전에 검토하세요.
- 이 프로젝트는 이미지 파일을 별도 분리했으므로 HTML만 복사하지 말고 **assets 폴더까지 모두 업로드**해야 합니다.
- 원본의 사용자 입력·편집·이미지 업로드·백업 기능을 유지했습니다. 브라우저별 저장 공간 정책은 다를 수 있습니다.
- 인터넷에 처음 접속할 때는 필요한 이미지가 내려받아집니다. **오프라인 전체 열람은 보장하지 않습니다.**

## 구조

- `index.html` : 첫 페이지, 모바일 탐색 UI
- `ASTERIA_전체설정.md` : 전체 설정의 검색 가능한 Markdown판
- `assets/css/style.css` : 원본 디자인 + 모바일 반응형 스타일
- `assets/js/app.js` : 원본 아카이브 데이터와 기능
- `assets/js/mobile.js` : 메뉴·페이지 탐색·맨 위로 이동
- `assets/images/` : 원본에 포함된 일러스트를 분리한 웹 이미지
- `assets/icons/` : 홈 화면 아이콘
- `manifest.webmanifest` : 모바일 바로가기용 사이트 정보
- `.nojekyll` : GitHub Pages에서 정적 파일 이름을 그대로 제공

## 편집 내용 업데이트

아카이브의 기본 설정을 바꾸려면 `assets/js/app.js` 또는 HTML 원본을 다시 생성해 배포해야 합니다. 브라우저에서 개인적으로 수정한 내용은 `자료 관리`에서 JSON 파일로 백업하세요.
