module.exports = {
    overrides: [
        {
            'files': [
                '*.ts',
                '*.tsx',
            ],
            "parserOptions": {
              "project": [
                "tsconfig.base.json"
              ],
              "createDefaultProgram": true
            },
            "extends": [
              "plugin:@ngrx/strict",
            ],
            'rules': {
                "@ngrx/use-consistent-global-store-name": [
                    "error",
                    "_store$"
                ],
                "@ngrx/avoid-mapping-selectors": "off",
                "@ngrx/prefer-effect-callback-in-block-statement": "off"
            }
        },
    ],
};
