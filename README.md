## 시작하기

```bash
yarn dev
```

## 프로젝트 구조

```bash
├── apis // 서버 api를 호출하는 함수가 있는 파일이 들어있는 폴더
├── assets // 프로젝트에서 쓰일 에셋이 들어있는 폴더
│   ├── icons // 프로젝트에서 쓰일 아이콘이 들어있는 폴더
│   └── images // 프로젝트에서 쓰일 이미지가 들어있는 폴더
├── components // 컴포넌트가 들어있는 폴더
├── pages // next.js의 자동 라우팅을 위한 페이지가 들어있는 폴더
├── shared // 프로젝트에서 공유될 상수, 클래스, 인터페이스 등이 들어있는 폴더
└── utils
```

## Eslint, Prettier

- 기본 설정 되어있는 것에서 **웹만해서는 거의 수정하지 않는다.**
- 수정해야 할 일이 생기면 풀리퀘스트 메시지나 다른 멤버가 볼 수 있는 곳에 이유를 작성한다.
- Vscode 익스텐션에 있는 eslint와 prettier를 설치한다.
- eslint와 prettier가 제시하는 코드를 **웹만해서는 거의 따르도록 한다.** `Ctrl / Cmd` + `.` 으로 제시하는 것을 쉽게 확인할 수 있다.
- 주석처리를 통한 eslint 무시를 **필요한 상황에서 제한적으로 사용한다.**

## 커밋 규칙

> 노션 확인

## 컴포넌트 파일

- 파일 확장자는 `.tsx`로 한다.
- 한 파일 안에서 style과 컴포넌트를 관리한다.

  예)

```
/components/Component.tsx

const Container = styled.div`
...
`

const Component:FC = () => {
    ...

    return <Container>hello world!</Container>
}
```

- 컴포넌트 명은 영문으로 하고 대문자로 시작한다.
- 작성한 컴포넌트는 `components/index.ts`에서 다시 export 해준다.
  - `@component`로 접근 가능하게 하기 위해서이다.

## React Query

- 따로 리액트 쿼리 관련한 폴더 / 파일을 만들지 않는다.
- 사용하는 컴포넌트 안에서 useQuery / useMutation을 import해 사용한다.
- key값은 queryKey enum에서 관리한다.

## 페이지

- `pages`안에 페이지 파일을 생성해 작성한 컴포넌트를 사용하여 페이지를 구성한다.

## import

- 기존에 `../../../` 이런 방식으로 import하지 않고 `@폴더`로 접근하여 import한다.
  예) `../../../Feed` -> `@component/Feed`
