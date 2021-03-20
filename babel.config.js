module.exports = {
    presets: [
        '@babel/preset-env',
        ["@babel/preset-react", {
            runtime: 'automatic'
        }]
    ]
}

/*
*    runtime: 'automatic'
*   way to not import react when you are suing JSX (react17)
* */
