npm config set sign-git-tag false
npm version patch -m "Bump version to %s"
npm publish --access public
read -s -n 1 -p "Press any key to continue . . ."
echo ""