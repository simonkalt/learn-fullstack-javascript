module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recormmended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 2, { SwitchCase: 1 }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 2, 'single'],
        semi: ['error', 'always'],
        'no-console': ['warn', { allow: ['clear', 'info', 'error', 'dir', 'trace'] }],

    }
};
