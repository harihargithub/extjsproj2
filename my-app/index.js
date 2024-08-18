// This file exists so the webpack build process will succeed
Ext._find = require('lodash.find');

Ext.application({
  name: 'MyApp',

  launch: function () {
    Ext.create('Ext.grid.Panel', {
      title: 'Sample Grid',
      store: Ext.data.StoreManager.lookup('sampleStore'),
      columns: [
        { text: 'Column 1', dataIndex: 'field1' },
        { text: 'Column 2', dataIndex: 'field2' },
      ],
      height: 200,
      width: 400,
      renderTo: Ext.getBody(),
      listeners: {
        afterrender: function () {
          console.log('Grid has been rendered successfully.');
        },
      },
    });
  },
});
