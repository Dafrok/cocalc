(function (document) {
    var app = document.getElementById('app')
    app.route = 'members'
    app.baseUrl = '/'
    app.scrollPageToTop = function() {
        // app.$.headerPanelMain.scrollToTop(true);
    }

    app.pageName = {
        recents: 'RECENTS',
        members: 'MEMBERS',
        wars: 'WARS',
        power: 'POWER',
        calculagraph: 'CALCULAGRAPH',
        charts: 'CHARTS',
        about: 'ABOUT'
    }
    window.addEventListener('WebComponentsReady', function() {
        // imports are loaded and elements have been registered
        console.log('ready')
    });
    app.addEventListener('dom-change', function() {
        console.log('Our app is ready to rock!');
    })
})(document)
