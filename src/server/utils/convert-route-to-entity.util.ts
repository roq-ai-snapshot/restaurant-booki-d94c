const mapping: Record<string, string> = {
  chefs: 'chef',
  guests: 'guest',
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
