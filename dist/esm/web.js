import { WebPlugin } from '@capacitor/core';
export class SmsManagerPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'SmsManager',
            platforms: ['web']
        });
        this.NOT_SUPPORTED = "ERR_PLATFORM_NOT_SUPPORTED";
    }
    async send(options) {
        return new Promise((resolve, reject) => {
            reject(this.NOT_SUPPORTED);
        });
    }
}
//# sourceMappingURL=web.js.map