# Description: 初期設定スクリプト

# データベースの初期設定
docker exec -i mysql_db mysql -uroot -ppass -e "
  CREATE DATABASE IF NOT EXISTS REACT_TS_WITH_API_CRUD_DB;
  CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'pass';
  GRANT ALL PRIVILEGES ON REACT_TS_WITH_API_CRUD_DB.* TO 'user'@'%';
  GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'user'@'%';
  FLUSH PRIVILEGES;"

# バックエンドのコンテナ内でマイグレーションとシードを実行
docker exec -w /usr/src/backend node_backend yarn prisma migrate dev --name init
docker exec -w /usr/src/backend node_backend yarn seed
