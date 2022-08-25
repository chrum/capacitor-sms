import { WebPlugin } from '@capacitor/core';
import { SmsManagerPlugin, SmsSendOptions } from "./definitions";
export declare class SmsManagerPluginWeb extends WebPlugin implements SmsManagerPlugin {
    NOT_SUPPORTED: string;
    constructor();
    send(options: SmsSendOptions): Promise<void>;
}
