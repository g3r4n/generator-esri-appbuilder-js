/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('wab:theme subgenerator', function() {
    beforeEach(function(done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
            if (err) {
                return done(err);
            }

            this.theme = helpers.createGenerator('wab:theme', [
                '../../theme'
            ]);
            console.log('cleared folder and created theme generator');
            done();
        }.bind(this));
    });

    describe('when scaffolding theme', function() {

        beforeEach(function(done) {
            helpers.mockPrompt(this.theme, {
                themeName: 'TestTheme',
                desc: 'A test theme.',
                author: 'Test Authorsen'
            });
            this.theme.run({}, function() {
                done();
            });
        });

        it('it creates expected files', function( /*done*/ ) {
            var expected = [
                // add files you expect to exist here.'
                'themesDev/Testtheme/common.css',
                'themesDev/Testtheme/layouts/default/config.json',
                'themesDev/Testtheme/images',
                'themesDev/Testtheme/layouts',
                'themesDev/Testtheme/manifest.json',
                'themesDev/Testtheme/panels',
                'themesDev/Testtheme/styles',
                'themesDev/Testtheme/widgets',
                'themesDev/Testtheme/images/cancel.png',
                'themesDev/Testtheme/images/close.png',
                'themesDev/Testtheme/images/double_arrow.png',
                'themesDev/Testtheme/images/icon.png',
                'themesDev/Testtheme/layouts/default',
                'themesDev/Testtheme/layouts/default/icon.png',
                'themesDev/Testtheme/panels/DockablePanel',
                'themesDev/Testtheme/panels/FoldablePanel',
                'themesDev/Testtheme/panels/SimpleBorderPanel',
                'themesDev/Testtheme/panels/TitlePanel',
                'themesDev/Testtheme/panels/DockablePanel/images',
                'themesDev/Testtheme/panels/DockablePanel/Panel.html',
                'themesDev/Testtheme/panels/DockablePanel/Panel.js',
                'themesDev/Testtheme/panels/DockablePanel/images/bar_down.png',
                'themesDev/Testtheme/panels/DockablePanel/images/bar_left.png',
                'themesDev/Testtheme/panels/DockablePanel/images/bar_right.png',
                'themesDev/Testtheme/panels/DockablePanel/images/bar_up.png',
                'themesDev/Testtheme/panels/DockablePanel/images/nav_down.png',
                'themesDev/Testtheme/panels/DockablePanel/images/nav_left.png',
                'themesDev/Testtheme/panels/DockablePanel/images/nav_right.png',
                'themesDev/Testtheme/panels/DockablePanel/images/nav_up.png',
                'themesDev/Testtheme/panels/FoldablePanel/FoldableDijit.js',
                'themesDev/Testtheme/panels/FoldablePanel/FoldableWidgetFrame.js',
                'themesDev/Testtheme/panels/FoldablePanel/Panel.js',
                'themesDev/Testtheme/panels/SimpleBorderPanel/Panel.js',
                'themesDev/Testtheme/panels/TitlePanel/Panel.js',
                'themesDev/Testtheme/styles/black',
                'themesDev/Testtheme/styles/cyan',
                'themesDev/Testtheme/styles/default',
                'themesDev/Testtheme/styles/green',
                'themesDev/Testtheme/styles/black/style.css',
                'themesDev/Testtheme/styles/cyan/style.css',
                'themesDev/Testtheme/styles/default/style.css',
                'themesDev/Testtheme/styles/green/style.css',
                'themesDev/Testtheme/widgets/HeaderController',
                'themesDev/Testtheme/widgets/HeaderController/config.json',
                'themesDev/Testtheme/widgets/HeaderController/css',
                'themesDev/Testtheme/widgets/HeaderController/images',
                'themesDev/Testtheme/widgets/HeaderController/manifest.json',
                'themesDev/Testtheme/widgets/HeaderController/nls',
                'themesDev/Testtheme/widgets/HeaderController/PopupTileNodes.js',
                'themesDev/Testtheme/widgets/HeaderController/setting',
                'themesDev/Testtheme/widgets/HeaderController/Widget.html',
                'themesDev/Testtheme/widgets/HeaderController/Widget.js',
                'themesDev/Testtheme/widgets/HeaderController/css/images',
                'themesDev/Testtheme/widgets/HeaderController/css/style.css',
                'themesDev/Testtheme/widgets/HeaderController/css/images/arrow.png',
                'themesDev/Testtheme/widgets/HeaderController/css/images/close.png',
                'themesDev/Testtheme/widgets/HeaderController/images/app-logo.png',
                'themesDev/Testtheme/widgets/HeaderController/images/group_icon.png',
                'themesDev/Testtheme/widgets/HeaderController/images/icon.png',
                'themesDev/Testtheme/widgets/HeaderController/images/more_icon.png',
                'themesDev/Testtheme/widgets/HeaderController/nls/ar',
                'themesDev/Testtheme/widgets/HeaderController/nls/cs',
                'themesDev/Testtheme/widgets/HeaderController/nls/da',
                'themesDev/Testtheme/widgets/HeaderController/nls/de',
                'themesDev/Testtheme/widgets/HeaderController/nls/es',
                'themesDev/Testtheme/widgets/HeaderController/nls/et',
                'themesDev/Testtheme/widgets/HeaderController/nls/fi',
                'themesDev/Testtheme/widgets/HeaderController/nls/fr',
                'themesDev/Testtheme/widgets/HeaderController/nls/he',
                'themesDev/Testtheme/widgets/HeaderController/nls/it',
                'themesDev/Testtheme/widgets/HeaderController/nls/ja',
                'themesDev/Testtheme/widgets/HeaderController/nls/ko',
                'themesDev/Testtheme/widgets/HeaderController/nls/lt',
                'themesDev/Testtheme/widgets/HeaderController/nls/lv',
                'themesDev/Testtheme/widgets/HeaderController/nls/nb',
                'themesDev/Testtheme/widgets/HeaderController/nls/nl',
                'themesDev/Testtheme/widgets/HeaderController/nls/pl',
                'themesDev/Testtheme/widgets/HeaderController/nls/pt-BR',
                'themesDev/Testtheme/widgets/HeaderController/nls/pt-PT',
                'themesDev/Testtheme/widgets/HeaderController/nls/ro',
                'themesDev/Testtheme/widgets/HeaderController/nls/ru',
                'themesDev/Testtheme/widgets/HeaderController/nls/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/sv',
                'themesDev/Testtheme/widgets/HeaderController/nls/th',
                'themesDev/Testtheme/widgets/HeaderController/nls/tr',
                'themesDev/Testtheme/widgets/HeaderController/nls/zh-cn',
                'themesDev/Testtheme/widgets/HeaderController/nls/ar/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/cs/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/da/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/de/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/es/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/et/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/fi/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/fr/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/he/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/it/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/ja/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/ko/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/lt/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/lv/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/nb/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/nl/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/pl/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/pt-BR/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/pt-PT/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/ro/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/ru/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/sv/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/th/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/tr/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/nls/zh-cn/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/css',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls',
                'themesDev/Testtheme/widgets/HeaderController/setting/Setting.html',
                'themesDev/Testtheme/widgets/HeaderController/setting/Setting.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/css/style.css',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ar',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/cs',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/da',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/de',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/es',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/et',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/fi',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/fr',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/he',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/it',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ja',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ko',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/lt',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/lv',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/nb',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/nl',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/pl',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/pt-BR',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/pt-PT',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ro',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ru',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/sv',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/th',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/tr',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/zh-cn',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ar/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/cs/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/da/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/de/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/es/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/et/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/fi/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/fr/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/he/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/it/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ja/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ko/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/lt/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/lv/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/nb/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/nl/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/pl/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/pt-BR/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/pt-PT/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ro/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/ru/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/sv/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/th/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/tr/strings.js',
                'themesDev/Testtheme/widgets/HeaderController/setting/nls/zh-cn/strings.js'
            ];
            helpers.assertFile(expected);
        });

        it('should set author in manifest.json ', function() {
          helpers.assertFileContent('themesDev/Testtheme/manifest.json', /"author": "Test Authorsen"/g);
        });

        it('should set themeName in manifest.json ', function() {
          helpers.assertFileContent('themesDev/Testtheme/manifest.json', /"name": "Testtheme"/g);
        });

        it('should set description in manifest.json ', function() {
          helpers.assertFileContent('themesDev/Testtheme/manifest.json', /"description": "A test theme."/g);
        });

    });

});