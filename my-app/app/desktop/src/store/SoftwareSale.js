// my-app\app\desktop\src\store\SoftwareSale.js
Ext.define('MyApp.store.SoftwareSales', {
  extend: 'Ext.data.Store',
  model: 'MyApp.model.SoftwareSale',
  alias: 'store.softwaresales',
  proxy: {
    type: 'ajax',
    url: 'app/desktop/src/util/SoftwareSale.json',
    reader: {
      type: 'json',
      rootProperty: '',
    },
  },
  autoLoad: true,
});
