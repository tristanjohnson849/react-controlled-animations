module.exports = {
    entryPointStrategy: 'expand',
    entryPoints: 'src/',
    exclude: '**/*.+(spec|stories).ts*(x)', 
    out: 'build/docs',
    theme: 'github-wiki', 
}