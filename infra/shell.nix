{ pkgs ? import <nixpkgs> {}, DB ? "" }:

let
  logoPath = "../libs/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png";
  teamLogoPath = "../libs/shared/assets/logos/cuHacking/team-logos.png";
  pgLog = "$PGDATA/postgresql.log";

in pkgs.mkShell {
  name = "cuhacking-2025-dev-env";

  buildInputs = [
    pkgs.zellij
    pkgs.neovim
    pkgs.nerd-fonts.jetbrains-mono
    pkgs.ascii-image-converter
    pkgs.postgresql
    pkgs.lazysql
    pkgs.lazygit
    pkgs.btop
    pkgs.atac
    # pkgs.sampler
    pkgs.yazi
    pkgs.bat
    pkgs.browsh
    # pkgs.netscanner
    pkgs.zsh
  ];

  shellHook = ''
    export PGDATABASE="$DATABASE_NAME"
    export PGPASSWORD="$DATABASE_PASSWORD"
    export PGUSER="$DATABASE_USER"
    export PGHOST="$DATABASE_HOST"
    export PGPORT="$DATABASE_PORT"
    export PGDATA="$PWD/pgdata"

    alias psqlx="psql -p $PGPORT -d $PGDATABASE -U $PGUSER"

    start_db() {
      if [ ! -d "$PGDATA" ]; then
        echo "Initializing PostgreSQL database..."
        initdb -D "$PGDATA" --no-locale --encoding=UTF8 --username=$PGUSER

        echo "listen_addresses = '*'" >> "$PGDATA/postgresql.conf"
        echo "unix_socket_directories = '$PGDATA'" >> "$PGDATA/postgresql.conf"

        echo "host all all 127.0.0.1/32 md5" >> "$PGDATA/pg_hba.conf"
        echo "local all $PGUSER trust" >> "$PGDATA/pg_hba.conf"

        pg_ctl start -o "-p $PGPORT -k \"$PGDATA\"" -l "${pgLog}"

        psql -d $PGDATABASE -U $PGUSER -c "ALTER USER $PGUSER WITH PASSWORD '$PGPASSWORD';"

        sed -i 's/local all postgres trust/local all postgres md5/' "$PGDATA/pg_hba.conf"

        pg_ctl restart -D "$PGDATA"

        # Create database only if it doesn't exist
        psql -p $PGPORT -U $PGUSER -tc "SELECT 1 FROM pg_database WHERE datname = '$PGDATABASE'" | grep -q 1 || createdb "$PGDATABASE" -p $PGPORT -U $PGUSER
      else
        echo "Starting PostgreSQL..."
        pg_ctl start -o "-p $PGPORT -k \"$PGDATA\"" -l "${pgLog}"
      fi

      echo ""
      echo "***************************************************"
      echo "PostgreSQL is running on port $PGPORT"
      echo "DATABASE_URI=$DATABASE_URI"
      echo "Lazysql Connection URL: postgres://$DATABASE_USER:$DATABASE_PASSWORD@127.0.0.1:$DATABASE_PORT/$DATABASE_NAME/?sslmode=disable"
      echo "***************************************************"
      echo ""
      ascii-image-converter ${logoPath} --color -f -b
      echo "Leave None Behind Regardless of Our Development Cost 💚⌨🐧🚀🔥"
    }

   stop_db() {
      echo "Stopping PostgreSQL..."
      if pg_ctl status -D "$PGDATA" > /dev/null 2>&1; then
        pg_ctl stop -D "$PGDATA"
        ascii-image-converter ${teamLogoPath} --color -f -b
        echo "PostgreSQL stopped. 💤🛌"
      else
        ascii-image-converter ${teamLogoPath} --color -f -b
        echo "PostgreSQL is not running. 💤🛌"
      fi
    }

    destroy_db() {
      echo "Destroying database..."
      if ls | grep pgdata; then
        pg_ctl stop -D "$PGDATA"
        rm -rf $PGDATA
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

zellij -n zellij.config.kdl

stop_db

zellij da -y
echo "🚪 Exiting Nix shell..."
exit

# trap 'echo "🚪 Exiting Nix shell..."; zellij da;' EXIT
 '';
}
