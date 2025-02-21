import {SettingsProvider} from "@interfaces/setting-provider";
import {Option as OptionModule} from "../modules/option.module";

export class Option {
    public chat: OptionModule.Chat;
    public general: OptionModule.General;
    public shortcuts: OptionModule.Shortcuts;
    public notification: OptionModule.Notification;
    public vip: OptionModule.VIP;

    constructor(private settingsProvider: SettingsProvider) {
        this.chat = new OptionModule.Chat(settingsProvider);
        this.general = new OptionModule.General(settingsProvider);
        this.shortcuts = new OptionModule.Shortcuts(settingsProvider);
        this.notification = new OptionModule.Notification(settingsProvider);
        this.vip = new OptionModule.VIP(settingsProvider);
    }
}
