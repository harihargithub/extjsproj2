// my-app\app\desktop\src\viewmodel\SoftwareSalesViewModel.js
Ext.define('MyApp.viewmodel.SoftwareSalesViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.softwaresales',
  stores: {
    softwaresales: {
      type: 'softwaresales',
    },
  },
});
