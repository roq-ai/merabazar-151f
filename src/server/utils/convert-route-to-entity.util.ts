const mapping: Record<string, string> = {
  brokerages: 'brokerage',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
