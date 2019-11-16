const { remote } = require('electron')
const { Menu } = remote

const onPrefsClicked1 = function() {
    alert('You clicked Prefs-1')
}
const onPrefsClicked2 = function() {
    alert('You clicked Prefs-2')
}
const onPrefsClicked3 = function() {
    alert('You clicked Prefs-3')
}

const template = [
    {
        label: 'Electron-1',
        submenu: [
            {
                label: 'Prefs-1',
                click: function() {
                    onPrefsClicked1()
                },
                accelerator:
                    process.platform === 'darwin'
                        ? 'Alt+Command+I'
                        : 'Ctrl+Shift+I'
            }
        ]
    },
    {
        label: 'Electron-2',
        submenu: [
            {
                label: 'Prefs-2',
                click: function() {
                    onPrefsClicked2()
                }
            },
            {
                label: 'Prefs-3',
                click: function() {
                    onPrefsClicked3()
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
