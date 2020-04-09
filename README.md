# epub-to-image


## install

- install calibre for `ebook-convert` (epub to pdf)
```bash
$ sudo apt-get update
$ sudo apt-get -y install calibre
```
https://manual.calibre-ebook.com/generated/en/ebook-convert.html


- install imagemagick and more for `pdf-image` (pdf to image)
```bash
$ sudo apt-get install imagemagick ghostscript poppler-utils
```


## usage

```bash
$ node app.js test.pdf
// or
$ node app.js test.epub
```
