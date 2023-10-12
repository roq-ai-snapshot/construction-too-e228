interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee'],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own customer information',
    'View tool information',
    'View store information',
    'View supplier information',
  ],
  ownerAbilities: ['Manage users', 'Manage suppliers', 'Manage customers', 'Manage stores'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/c2e0a9e0-a6d3-4461-a367-1e3145533f85',
};
