# Parcel Web Dev Boilerplate

[Parcel](https://parceljs.org/) を使ったウェブサイト開発環境のボイラープレートです。

dependencies の過不足は適宜処理してください。

- HTML: Pug
- CSS: Sass, Autoprefixer
- JS: TypeScript + Babel

Parcel がポリフィル指定をよしなにしてくれているので .babelrc ファイルは不要です。

IE11 への対応は、JS のエントリーポイントに

```
// for IE11
import "core-js/stable";
import "regenerator-runtime/runtime";
```

を追加しています。

## development

```bash
ndenv install 12.18.0
ndenv rehash
```

```bash
npm ci
npm start
```

`localhost:1234` が起動します。

複数の HTML を扱う場合は

```
parcel src/*.pug
```

としてください。

## build

```bash
npm run build
```

`dist/` にビルドされます。

## test

```bash
npm run test
```

- markuplint
- stylelint
- html-validator

が実行されます。

## format

```bash
npm run prettier:fix
```

`prettier --write .` が実行されます。

設定ファイルはありません。Prettier のデフォルトに従います。
