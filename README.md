# epub-to-image

![image](https://user-images.githubusercontent.com/4863629/78865358-0bbbbc00-7a70-11ea-8aaa-f8a64d85df8d.png)

## 環境需求

- Node.js v24 或更高版本

## 安裝步驟

- 安裝 calibre 以使用 `ebook-convert` (將 epub 轉換為 pdf)
```bash
$ sudo apt-get update
$ sudo apt-get -y install calibre
```
https://manual.calibre-ebook.com/generated/en/ebook-convert.html


- 安裝 imagemagick 及其他相關套件以使用 `pdf-image` (將 pdf 轉換為圖片)
```bash
$ sudo apt-get install imagemagick ghostscript poppler-utils
```


## 使用方式

```bash
$ node app.js test.pdf
// 或
$ node app.js test.epub
```
