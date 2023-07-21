interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Property Seller'],
  customerRoles: [],
  tenantRoles: ['Property Seller', 'Real Estate Agent', 'Property Inspector', 'Customer Support Representative'],
  tenantName: 'Brokerage',
  applicationName: 'MeraBazar',
  addOns: ['chat', 'notifications', 'file'],
};
