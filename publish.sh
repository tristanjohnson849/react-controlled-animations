npm run prepare-release
git push --follow-tags
cp package.json build/
cd build
npm publish