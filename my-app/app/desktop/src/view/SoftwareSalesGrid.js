// my-app\app\desktop\src\view\SoftwareSalesGrid.js
Ext.define('MyApp.view.SoftwareSalesGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'softwaresalesgrid',
  requires: [
    'Ext.grid.Panel', // Add this line to require Ext.grid.Panel
    'MyApp.store.SoftwareSales',
  ],
  extend: 'Ext.panel.Panel', // Change this line to extend Ext.panel.Panel
  title: 'Software Sales',
  store: {
    type: 'softwaresales',
  },
  columns: [
    { text: 'ID', dataIndex: 'id', flex: 1 },
    { text: 'Company Name', dataIndex: 'company_name', flex: 2 },
    { text: 'Revenue', dataIndex: 'revenue', flex: 1, formatter: 'usMoney' },
    { text: 'URL', dataIndex: 'url', flex: 2 },
    {
      text: 'Last Entry Date',
      dataIndex: 'last_entry_date',
      flex: 1,
      xtype: 'datecolumn',
      format: 'Y-m-d',
    },
    {
      text: 'Active Status',
      dataIndex: 'active_status',
      flex: 1,
      xtype: 'booleancolumn',
      trueText: 'Active',
      falseText: 'Inactive',
    },
  ],
});
