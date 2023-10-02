How to run the scripts using postgresql command line:

psql -U postgres -c "create database movie"
psql -U postgres -d movie -f B2_build_movie_db.sql
psql -U postgres -d movie -f C2_build_framework_db.sql
psql -U postgres -d movie -f omdb_data.backup
psql -U postgres -d movie -f imdb.backup
psql -U postgres -d movie -f wi.backup
psql -U postgres -d movie -f Insertions.sql