{ pkgs ? import <nixpkgs> {}, DB ? "" }:

let
  pgPort = "5432";
  pgUser = "postgres";
  pgDatabase = "postgres";
  pgPassword = "password";
  pgHost = "localhost";
  pgLog = "$PGDATA/postgresql.log";

in pkgs.mkShell {
  name = "cuhacking-2025-dev-db";

  buildInputs = [
    pkgs.postgresql
  ];

  shellHook = ''
    export PGDATA="$PWD/pgdata"
    export PGUSER="${pgUser}"
    export PGDATABASE="${pgDatabase}"
    export PGPASSWORD="${pgPassword}"
    export PGHOST="${pgHost}"

    alias psqlx="psql -p ${pgPort} -d $PGDATABASE -U $PGUSER"

    start_db() {
      if [ ! -d "$PGDATA" ]; then
        echo "Initializing PostgreSQL database..."
        initdb -D "$PGDATA" --no-locale --encoding=UTF8 --username=$PGUSER

        echo "listen_addresses = '*'" >> "$PGDATA/postgresql.conf"
        echo "unix_socket_directories = '$PGDATA'" >> "$PGDATA/postgresql.conf"

        echo "host all all 127.0.0.1/32 md5" >> "$PGDATA/pg_hba.conf"
        echo "local all ${pgUser} trust" >> "$PGDATA/pg_hba.conf"

        pg_ctl start -o "-p ${pgPort} -k \"$PGDATA\"" -l "${pgLog}"

        psql -d ${pgDatabase} -U ${pgUser} -c "ALTER USER ${pgUser} WITH PASSWORD '${pgPassword}';"

        sed -i 's/local all postgres trust/local all postgres md5/' "$PGDATA/pg_hba.conf"

        pg_ctl restart -D "$PGDATA"

        # Create database only if it doesn't exist
        psql -p ${pgPort} -U ${pgUser} -tc "SELECT 1 FROM pg_database WHERE datname = '${pgDatabase}'" | grep -q 1 || createdb "${pgDatabase}" -p ${pgPort} -U ${pgUser}
      else
        echo "Starting PostgreSQL..."
        pg_ctl start -o "-p ${pgPort} -k \"$PGDATA\"" -l "${pgLog}"
      fi

      echo ""
      echo "***************************************************"
      echo "PostgreSQL is running on port ${pgPort}"
      echo "DATABASE_URI=postgres://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}"
      echo "***************************************************"
      echo ""
    }

   stop_db() {
      echo "Stopping PostgreSQL..."
      if pg_ctl status -D "$PGDATA" > /dev/null 2>&1; then
        pg_ctl stop -D "$PGDATA"
        echo "PostgreSQL stopped."
      else
        echo "PostgreSQL is not running."
      fi
    }

    destroy_db() {
      echo "Destroying database..."
      if pg_ctl status -D "$PGDATA" > /dev/null; then
        pg_ctl stop -D "$PGDATA"
        rm -rf "$PGDATA"
        echo "PostgreSQL server stopped and all data removed."
      fi
    }

    case "${DB}" in
      up)
        start_db
        exit 0
        ;;
      down)
        stop_db
        exit 0
        ;;
      destroy)
        destroy_db
        exit 0
        ;;
    esac
  '';
}
