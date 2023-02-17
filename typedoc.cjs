module.exports = {
    entryPointStrategy: 'expand',
    entryPoints: 'src/',
    exclude: '**/*.+(test|stories).ts*(x)', 
    out: 'build/docs',
    theme: 'github-wiki', 
}
