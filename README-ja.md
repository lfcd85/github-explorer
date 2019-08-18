# GitHub Explorer

GitHub 上のリポジトリを検索して、検索結果を一覧表示する Web アプリです。<br>
英語版のドキュメントは `README.md` をご覧ください。

## 仕様

- 検索ワードの入力と同時に検索が走ります（インクリメンタルサーチ）
- リポジトリをタップ／クリックすると、リポジトリの詳細画面に遷移します
- React, Redux を使用しています
  - その他の使用技術: TypeScript, GraphQL (Apollo Client), Jest 等を使用しました
  - セットアップには [Create React App](https://github.com/facebook/create-react-app) を利用しました
  - Webpack や Babel 等の設定は、Create React App 標準のものを利用しています

## インストール

### GitHub API Token の設定

事前に GitHub GraphQL API v4 のトークンを用意してください。権限はデフォルトのまま（ `public access` のみ）で十分です。<br>
`cp .env.example .env` を実行し、生成された `.env` ファイルに API トークンを入力してください。

### Node.js のバージョン設定

開発環境の Node.js バージョンは `v10.16.2` です。<br>
nvm (Node Version Manager) をインストール済の場合は、下記コマンドを実行することで Node.js のバージョンが `v10.16.2` に切り替わります。

```
nvm install
nvm use
```

## 起動

### `yarn start` (or `npm start` )

ローカル開発環境でアプリが起動します。<br>
[http://localhost:3000](http://localhost:3000) でブラウザでの動作確認が可能です。

### `yarn test` (or `npm test` )

Jest と Enzyme を用いたテストを行います。<br>
現在のところ、テストは React コンポーネントの描画確認が主です。

### `yarn build` (or `npm run build` )

プロダクション環境用のコードを `build` ディレクトリにビルドします。
