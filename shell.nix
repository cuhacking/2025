{ pkgs ? import <nixpkgs> {} }:

let
  installPnpmCommand = "curl -fsSL https://get.pnpm.io/install.sh | sh -";

in pkgs.mkShell {
  name = "cuhacking-2025-dev-env";

  buildInputs = [
    # ============
    pkgs.figlet
    pkgs.cowsay
    pkgs.hollywood
    pkgs.cmatrix
    # ============
    pkgs.git
    pkgs.gh
    pkgs.lazygit
    pkgs.zellij
    pkgs.eza
    pkgs.yazi
    pkgs.zsh
    pkgs.zsh-autosuggestions
    pkgs.zsh-syntax-highlighting
    # ============
    pkgs.jp2a
    # ============
    pkgs.docker
  ];

  shellHook = ''
     # Check if pnpm exists, if not, install it
    if ! command -v pnpm >/dev/null 2>&1; then
      echo "pnpm not found, installing..."
      ${installPnpmCommand}
      echo "Please re-run the Nix Shell"
      exit
    fi

    # # Source Powerlevel10k if available
    # if [ -f "${pkgs.zsh-powerlevel10k}/share/zsh-powerlevel10k/powerlevel10k.zsh-theme" ]; then
    #   echo "Sourcing Powerlevel10k..."
    #   echo 'source ${pkgs.zsh-powerlevel10k}/share/zsh-powerlevel10k/powerlevel10k.zsh-theme' >> ~/.zshrc
    # fi

    pnpm env use 22.13.1 --global

    # Aliases
    alias l='eza -lh --icons=auto'
    alias ls='eza --icons=auto --sort=name --group-directories-first'
    alias ll='eza -lha --icons=auto --sort --group-directories-first'
    alias ld='eza -lhD --icons=auto'
    alias lt='eza --icons=auto --tree'
    alias y='yazi'
    alias mkdir='mkdir -p'
    alias pn='pnpm'

    # echo 'plugins=(zsh-autosuggestions zsh-syntax-highlighting)' >> ~/.zshrc

    # Display jp2a image
    jp2a --color --color-depth=24 -f ./libs/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png
    echo 💚⌨🐧🚀🔥

    trap 'jp2a --color --color-depth=24 -f ./libs/shared/assets/logos/cuHacking/team-logos.png; echo 💤🛌' EXIT
  '';
}
