# Electron Desktop - 데스크톱 앱 개발 교육

Electron을 사용한 크로스 플랫폼 데스크톱 애플리케이션 개발 교육 프로젝트입니다.

## 🖥️ 주요 예제 (45+)

### 1. 윈도우 관리 (8개)
- ✅ MainWindow - 메인 윈도우 생성
- ✅ MultiWindow - 다중 윈도우
- ✅ Frameless - 프레임 없는 윈도우
- ✅ Transparent - 투명 윈도우
- ✅ WindowState - 윈도우 상태 저장
- ✅ Modal - 모달 윈도우
- ✅ TrayWindow - 트레이 윈도우
- ✅ Splash - 스플래시 스크린

### 2. IPC 통신 (7개)
- ✅ RendererToMain - 렌더러→메인 통신
- ✅ MainToRenderer - 메인→렌더러 통신
- ✅ SyncIPC - 동기 IPC
- ✅ AsyncIPC - 비동기 IPC
- ✅ StreamIPC - 스트림 IPC
- ✅ BroadcastIPC - 브로드캐스트
- ✅ TypedIPC - 타입 안전 IPC

### 3. 파일 시스템 (7개)
- ✅ FileDialog - 파일 다이얼로그
- ✅ FileRead - 파일 읽기
- ✅ FileWrite - 파일 쓰기
- ✅ FileWatch - 파일 감시
- ✅ DirectoryPicker - 디렉토리 선택
- ✅ DragDrop - 드래그&드롭
- ✅ RecentFiles - 최근 파일

### 4. 메뉴 & 트레이 (6개)
- ✅ ApplicationMenu - 앱 메뉴
- ✅ ContextMenu - 컨텍스트 메뉴
- ✅ SystemTray - 시스템 트레이
- ✅ DockMenu - 독 메뉴 (macOS)
- ✅ MenuShortcuts - 메뉴 단축키
- ✅ DynamicMenu - 동적 메뉴

### 5. 네이티브 기능 (7개)
- ✅ Notifications - 시스템 알림
- ✅ PowerMonitor - 전원 모니터링
- ✅ Screen - 화면 정보
- ✅ Clipboard - 클립보드
- ✅ Shell - 쉘 명령
- ✅ GlobalShortcut - 전역 단축키
- ✅ SystemPreferences - 시스템 설정

### 6. 데이터 저장 (5개)
- ✅ ElectronStore - 로컬 스토리지
- ✅ SQLite - 데이터베이스
- ✅ IndexedDB - IndexedDB 사용
- ✅ EncryptedStorage - 암호화 저장
- ✅ ConfigManager - 설정 관리

### 7. 네트워킹 (4개)
- ✅ HttpRequest - HTTP 요청
- ✅ WebSocket - WebSocket 연결
- ✅ DownloadManager - 다운로드 관리
- ✅ ProxySettings - 프록시 설정

### 8. 보안 (4개)
- ✅ CSP - Content Security Policy
- ✅ ContextIsolation - 컨텍스트 격리
- ✅ NodeIntegration - Node 통합 설정
- ✅ SecurePreload - 안전한 preload

### 9. 성능 & 최적화 (3개)
- ✅ LazyLoading - 지연 로딩
- ✅ ProcessCommunication - 프로세스 간 통신
- ✅ MemoryManagement - 메모리 관리

### 10. 배포 & 업데이트 (4개)
- ✅ AutoUpdater - 자동 업데이트
- ✅ CodeSigning - 코드 서명
- ✅ Installer - 인스톨러 생성
- ✅ VersionManagement - 버전 관리

## 🚀 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 모드 실행
pnpm dev

# 빌드
pnpm build

# Windows용 빌드
pnpm build:win

# macOS용 빌드
pnpm build:mac

# Linux용 빌드
pnpm build:linux
```

## 📚 학습 경로

1. **기본 윈도우** (1주) - Electron 기초
2. **IPC 통신** (1주) - 프로세스 간 통신
3. **네이티브 API** (1주) - 시스템 통합
4. **보안** (1주) - 보안 best practice
5. **배포** (1주) - 앱 빌드 및 배포

## 🛠️ 기술 스택

- Electron 28
- React 18
- TypeScript 5
- Vite 5
- electron-builder

## 🎯 주요 기능

- 크로스 플랫폼 지원 (Windows, macOS, Linux)
- 타입 안전 IPC 통신
- 자동 업데이트
- 시스템 트레이 통합
- 파일 시스템 접근
- 네이티브 알림

## 📦 빌드 결과물

- Windows: NSIS 인스톨러, Portable EXE
- macOS: DMG, ZIP
- Linux: AppImage, DEB
