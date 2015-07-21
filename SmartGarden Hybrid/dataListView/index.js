'use strict';

app.dataListView = kendo.observable({
    onShow: function() {}
});
(function(parent) {
    var dataProvider = app.data.defaultProvider,
        dataSourceOptions = {
            type: 'everlive',
            transport: {
                typeName: 'BatteryState',
                dataProvider: dataProvider
            },
            schema: {
                model: {
                    fields: {
                        'Charge': {
                            field: 'Charge',
                            defaultValue: ''
                        },
                        'Voltage': {
                            field: 'Voltage',
                            defaultValue: ''
                        },
                    }
                }
            },
            serverSorting: true,
            serverPaging: true,
            pageSize: 50
        },
        dataSource = new kendo.data.DataSource(dataSourceOptions),
        dataListViewModel = kendo.observable({
            dataSource: dataSource
        });

    parent.set('dataListViewModel', dataListViewModel);
})(app.dataListView);