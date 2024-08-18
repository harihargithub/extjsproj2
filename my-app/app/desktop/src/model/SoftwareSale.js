// my-app\app\desktop\src\model\SoftwareSale.js
Ext.define('MyApp.model.SoftwareSale', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'id', type: 'int' },
    { name: 'company_name', type: 'string' },
    { name: 'revenue', type: 'float' },
    { name: 'url', type: 'string' },
    { name: 'last_entry_date', type: 'date', dateFormat: 'Y-m-d' },
    { name: 'active_status', type: 'boolean' },
  ],
});
