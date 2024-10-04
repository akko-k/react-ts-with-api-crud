# react-ts-with-api-crud

Todoリスト

## 目次

1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

※dockerを使用しているのでPCに入っていない場合はインストールをお願いします。

https://matsuand.github.io/docs.docker.jp.onthefly/desktop/mac/install/

### 1. docker イメージを作成

```
sudo docker compose build
```

### 2. docker コンテナを起動

```
docker compose up -d
```

### 3. マイグレーション、シーディングを実行

```
chmod +x init.sh
./init.sh
```

### 4. ブラウザに表示

```
url: http://localhost:3000/
```

注: Todo のデータが表示されない場合は、少し待ってからリロードしてください。  
（バックエンドのアプリケーションの立ち上げに少し時間がかかるため）

## 2. アプリケーションの仕様

### 仕様

- Todoリスト
  - Todo一覧表示
  - Todo検索処理
  - Todo新規登録処理
  - Todo詳細表示
  - Todo編集処理
  - Todo削除処理

### 構成技術

#### フロントエンド

- typescript: 4.9.5
- react: 18.3.1
- react-dom: 18.3.1
- @fortawesome/react-fontawesome: 0.2.2
- @fortawesome/free-solid-svg-icons: 6.6.0

#### バックエンド

- typescript: 5.6.2
- prisma: 5.19.1

#### その他

- docker
- MySQL: 8.0

## 補足

### DB のデータを初期化したい場合

prisma は migration のロールバック機能がないため、データベースを初期化するにはコンテナのボリュームを削除する必要があります。 コンテナが起動している状態で、以下のコマンドを実行してボリュームを削除してください。

```
docker compose down -v
```

### コンテナのログを確認したい場合

フロントエンド、バックエンド、DB コンテナのログを確認する方法

#### 1. コンテナ ID を確認

コンテナを起動している状態で、以下のコマンドでコンテナ ID(CONTAINER ID)を確認する。

```
docker ps
```

各イメージに対応する コンテナ ID を確認

- バックエンド: react-ts-with-api-crud-backend
- フロントエンド: react-ts-with-api-crud-frontend
- DB: mysql:8.0

以下のコマンドで各コンテナのログを確認

```
docker logs -f [コンテナID]
```
