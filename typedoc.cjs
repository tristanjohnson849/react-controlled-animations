module.exports = {
    entryPointStrategy: 'expand',
    entryPoints: 'src/',
    exclude: '**/*.{test,stories}.{ts,tsx}', 
    out: 'build/docs',
    theme: 'github-wiki', 
}
