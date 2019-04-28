## Electron Example

### 安装
```
  git clone https://github.com/ounana/electron-example.git
  cd electron-example
  npm install
```
### 启动开发
```
  npm start
  npm run estart
```
### 打包构建
```
  npm run build
  npm run package
```
### help
```
  electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> --out=<outdir> 

  <sourcedir> -> source dir
  <appname> -> default pageage.json name
  --platform -> darwin | linux | mas | win32
  --arch -> 64
  --overwrite -> cover
  --app-version -> default pageage.json version
  --electron-version -> electron version
  --asar -> open asar
  --icon -> icon path, mac:.icns win:.ico
  --ignore -> node_modules
  --electron-version -> If omitted, it will use the version of the nearest local installation of electron

```