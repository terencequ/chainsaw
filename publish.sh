npm install
npm config set sign-git-tag false
npm version patch -m "Bump version to %s" --force
npm publish --access public