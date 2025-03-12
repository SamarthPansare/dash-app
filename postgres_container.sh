docker run --name postgres-container \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=dashboard_app \
  -p 5432:5432 \
  -v ./init.sql:/docker-entrypoint-initdb.d/init.sql \
  -d postgres

