'use strict';

app.home = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.defaultProvider,
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'Readings',
                dataProvider: dataProvider
            },
            schema: {
                model: {
                    fields: {
                        'AirTemperature': {
                            field: 'AirTemperature',
                            defaultValue: ''
                        },
                    },
                    icon: function() {
                        var i = 'globe';
                        return kendo.format('km-icon km-{0}', i);
                    }
                }
            },
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        homeModel = kendo.observable({
            dataSource: dataSource,
            itemClick: function(e) {
                app.mobileApp.navigate('#home/details.html?uid=' + e.dataItem.uid);
            },
            detailsShow: function(e) {
                var item = e.view.params.uid,
                    itemModel = dataSource.getByUid(item);
                homeModel.set('currentItem', itemModel);
            },
            currentItem: null
        });

    parent.set('homeModel', homeModel);
})(app.home);