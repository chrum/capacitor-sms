import { registerPlugin } from '@capacitor/core';
const SmsManager = registerPlugin('SmsManager', {
    web: () => import('./web').then(m => new m.SmsManagerPluginWeb()),
});
export { SmsManager };
export * from './definitions';
//# sourceMappingURL=index.js.map