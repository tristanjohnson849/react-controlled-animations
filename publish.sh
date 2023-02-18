set -e

npm run prepare-release
git commit -m'Version bump'
git push --follow-tags

cp package.json build/
cp CHANGELOG.md build/
cp README.md build/
cp LICENSE build/

cd build
npm publish
