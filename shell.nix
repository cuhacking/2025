{ pkgs ? import <nixpkgs> {} }:

let
  installPnpmCommand = "curl -fsSL https://get.pnpm.io/install.sh | sh -";

in pkgs.mkShell {
  name = "cuhacking-2025-dev-env";

  buildInputs = [
    pkgs.docker
    pkgs.figlet
    pkgs.jp2a
    pkgs.git
    pkgs.gh
    pkgs.lazygit
    pkgs.zellij
    pkgs.eza
    pkgs.yazi
    pkgs.zsh
  ];

  shellHook = ''
     # Check if pnpm exists, if not, install it
    if ! command -v pnpm >/dev/null 2>&1; then
      echo "pnpm not found, installing..."
      ${installPnpmCommand}
      echo "Please re-run the Nix Shell"
      exit
    fi

    pnpm env use 22.11.0 --global

    # Aliases
    alias l='eza -lh --icons=auto'
    alias ls='eza --icons=auto --sort=name --group-directories-first'
    alias ll='eza -lha --icons=auto --sort --group-directories-first'
    alias ld='eza -lhD --icons=auto'
    alias lt='eza --icons=auto --tree'
    alias y='yazi'
    alias mkdir='mkdir -p'

    # Display jp2a image
    jp2a --color ./libs/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png
  '';
}
