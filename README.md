# StudentSoupApp

> [StudentSoup](https://github.com/TeamDogeC-2/StudentSoup) 기반 앱 제작 프로젝트

## 설치 방법(MAC OS):

1. Homebrew는 맥(Mac)에서 필요한 패키지를 설치하고 관리하는 맥(Mac)용 패키지 관리자입니다. [Homebrew](https://brew.sh/)를 사용하면 맥(Mac)에서 간단하게 필요한 패키지를 설치할 수 있습니다.

- 아래에 명령어를 통해 맥(Mac)에 Homebrew가 설치되었는지 확인합니다.

```sh
brew --version
```

- Homebrew의 버전이 표시되지 않는다면, 아래에 명령어를 실행하여 Homebrew를 설치합니다.

```sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. react-native는 Ruby의 2.7.5 버전이 필요합니다. rbenv는 Ruby를 버전별로 설치하고 관리할 수 있게 도와주는 툴입니다. macOS에서는 기본적으로 Ruby의 2.6.8이 설치되어 있으므로 rbenv를 사용하여 버전 2.7.5의 Ruby를 설치할 필요가 있습니다.

- 다음 명령어를 실행하여 rbenv를 설치합니다.

```sh
brew install rbenv
```

- rbenv가 설치되었다면, 이제 다음 명령어를 사용하여 버전 2.7.5의 Ruby를 설치합니다.

```sh
rbenv install 2.7.5
```

- Ruby 2.7.5를 설치하였다면 다음 명령어를 사용하여 2.7.5 버전의 Ruby를 기본 버전으로 설정합니다.

```sh
rbenv global 2.7.5
rbenv rehash
```

3. Watchman은 특정 폴더나 파일을 감시하다가 변화가 생기면, 특정 동작을 실행하도록 설정하는 역할을 합니다. react-native에서는 소스코드의 추가, 변경이 발생하면 다시 빌드하기 위해 Watchman을 사용하고 있습니다.

- Watchman을 설치하기 위해 아래의 Homebrew 명령어를 실행합니다.

```sh
brew install watchman
```

- 설치가 완료되었다면, 아래의 명령어를 실행하여 Watchman이 잘 설치되었는지 확인합니다.

```sh
watchman –version
```

4. 이제 react-native로 앱을 개발하기 위해 필요한 React Native CLI를 설치해 봅시다. 아래의 npm 명령어를 통해 React Native CLI를 설치합니다.

```sh
npm install -g react-native-cli
npx react-native --version
```

- 문제없이 설치되었다면, 아래와 같이 React Native CLI의 버전을 확인할 수 있습니다.

```sh
react-native-cli: 2.0.1
react-native: n/a - not inside a React Native project
```

## 추가 사항:

- SDK 위치를 찾을수 없을때
  프로젝트로 이동한 다음 Android 디렉터리로 이동합니다. 다음 이름으로 파일을 만듭니다.

```sh
local.properties
```

- 파일을 열고 아래와 같이 Android SDK 경로를 붙여넣습니다.

```sh
sdk.dir = /Users/USERNAME/Library/Android/sdk
```

여기서 USERNAME은 사용자 이름 입니다.

- [Ruby](https://codecamper.me/blog/122/)버전 업데이트 방법 MAC
- [RUby](https://bgsnorfa.medium.com/fix-rbenv-or-ruby-command-not-found-after-changing-from-bash-to-zsh-6ab159e65765)의 버전이 2.7.5로 변경되지 않을때
- JDK 버전은 11을 권장합니다. 더 높은 JDK 버전을 사용하면 문제가 발생할 수 있습니다.

---

- Node.js,Cocoapods,Xcode는 기존 프로젝트에서도 사용해왔기 때문에 따로 설명은 안하겠습니다.
- 시스템에 이미 Node를 설치한 경우 Node 14 이상인지 확인하세요.

---

## 설치 방법(윈도우):

1. Chocolatey를 설치하기 위해서, 명령 프롬프트(cmd)를 관리자 권한으로 실행하고, 아래에 명령어를 실행합니다.

```sh
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

설치가 완료되었다면, 명령 프롬프트(cmd)를 재실행한 후, 아래에 명령어를 실행하여 설치가 잘 되었는지 확인합니다.

```sh
choco –version
```

2. React Native에는 또한 Chocolatey를 사용하여 설치할 수 있는 Java SE 개발 키트(JDK) 가 필요합니다.
   관리자 명령 프롬프트를 열고(명령 프롬프트를 마우스 오른쪽 버튼으로 클릭하고 "관리자 권한으로 실행" 선택) 다음 명령을 실행합니다.

```sh
choco install -y nodejs-lts openjdk11
```

- JDK는 11을 권장합니다, 더 높은 JDK 버전을 사용하면 문제가 발생할 수 있습니다.

3. Android 스튜디오를 다운로드하여 설치 합니다. Android Studio 설치 마법사에서 다음 항목 옆의 상자가 모두 선택되어 있는지 확인하십시오.

---

- Android SDK
- Android SDK Platform
- Android Virtual Device

---

> [안드로이드 스튜디오 설치](https://dev-yakuza.posstree.com/ko/react-native/install-on-windows/)에 관한 링크(환경 변수 설정)

---

- Node.js는 기존 프로젝트에서도 사용해왔기 때문에 따로 설명은 안하겠습니다.
- 시스템에 이미 Node를 설치한 경우 Node 14 이상인지 확인하세요.

---

## 개발 환경 설정

초기 Repositories 에서 clone 할시 아래 문구를 터미널에서 실행시켜주세요.

```sh
npm install
```

## 업데이트 내역

- 23-01-11
  - 생성: 문서 생성

## 해결 필요

- 23-01-11
  - 안드로이드 시뮬레이터로 실행시 환경 변수설정 안내 없음.
