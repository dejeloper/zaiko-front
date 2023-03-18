export const menuSidebar = [
  {
    'pathname': 'dashboard',
    'name': 'Tablero',
    'icon': 'ri-dashboard-line',
    'items': [
      { 'name': 'Inicio', 'url': '/dashboard/Home' },
      { 'name': 'Analytics', 'url': '/dashboard/Analytics' },
      { 'name': 'Fintech', 'url': '/dashboard/Fintech' },
    ]
  },
  {
    'pathname': 'ecommerce',
    'name': 'Comercio',
    'icon': 'ri-shopping-cart-line',
    'items': [
      { 'name': 'Clientes', 'url': '/ecommerce/Customers' },
      { 'name': 'Ordenes', 'url': '/ecommerce/Ordens' },
      { 'name': 'Facturas', 'url': '/ecommerce/Invoices' },
      { 'name': 'Compras', 'url': '/ecommerce/Shop' },
      { 'name': 'Carrito de Compras', 'url': '/ecommerce/Cart' },
      { 'name': 'Pagos', 'url': '/ecommerce/Pay' },
    ]
  },
  {
    'pathname': 'inbox',
    'name': 'Inbox',
    'icon': 'ri-mail-line',
    'url': '/Inbox'
  },
  {
    'pathname': 'settings',
    'name': 'Configuraciones',
    'icon': 'ri-settings-3-line',
    'items': [
      { 'name': 'Parámetros', 'url': '/settings/Parameters' },
      { 'name': 'Listas', 'url': '/settings/List' },
      { 'name': 'Colores', 'url': '/settings/Colors' },
    ]
  }
];