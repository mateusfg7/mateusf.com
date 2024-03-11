#!/bin/sh

# Setup ZSH
mv ~/.zshrc ~/.zshrc.bak
sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.5/zsh-in-docker.sh)" -- \
   -t https://github.com/denysdovhan/spaceship-prompt \
   -p git -p bun \
   -p https://github.com/zsh-users/zsh-autosuggestions \
   -p https://github.com/zsh-users/zsh-completions \
   -p https://github.com/zdharma-continuum/fast-syntax-highlighting

# Setup GIT
git config --global alias.co "checkout"
git config --global alias.cm "checkout main"
git config --global alias.cb "checkout -b"
git config --global alias.st "status -sb"
git config --global alias.lg "log --pretty=format:'%Cred%h%Creset %C(bold)%cr%Creset %Cgreen<%an>%Creset %s' --max-count=30"
git config --global alias.rollback "reset --soft HEAD~1"

# Install PNPM
wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -