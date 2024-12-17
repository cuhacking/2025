{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "cuhacking-2025-dev-env";

  buildInputs = [
    pkgs.pnpm
    pkgs.figlet
    pkgs.jp2a
    pkgs.git
    pkgs.gh
    pkgs.lazygit
    pkgs.zellij
    pkgs.zsh
    pkgs.eza
  ];

  shellHook = ''
    pnpm env use 22.11.0 --global

    alias  l='eza -lh  --icons=auto' # long list
    alias ls='eza --icons=auto --sort=name --group-directories-first'
    alias ll='eza -lha --icons=auto --sort --group-directories-first' # long list all
    alias ld='eza -lhD --icons=auto' # long list dirs
    alias lt='eza --icons=auto --tree' # list folder as tree

    jp2a --color ./libs/shared/assets/logos/cuHacking/logo-icon-wordmark-gradient-green.png

  '';
}
