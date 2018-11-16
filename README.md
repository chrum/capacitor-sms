# Capacitor SMS plugin

[![npm](https://img.shields.io/npm/v/@byteowls/capacitor-sms.svg)](https://www.npmjs.com/package/@byteowls/capacitor-sms)
[![npm](https://img.shields.io/npm/dt/@byteowls/capacitor-sms.svg?label=npm%20downloads)](https://www.npmjs.com/package/@byteowls/capacitor-sms)
[![Twitter Follow](https://img.shields.io/twitter/follow/michaelowl_web.svg?style=social&label=Follow&style=flat-square)](https://twitter.com/michaelowl_web)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/moberwasserlechner)

This is plugin for sending short messages using the devices features.

## Installation

`npm i @byteowls/capacitor-sms`

## Configuration

This example shows the common process of configuring this plugin.

Although it was taken from a Angular 6 application, it should work in other frameworks as well.

### Register plugin

Find the init component of your app, which is in Angular `app.component.ts` and register this plugin by

```
import {registerWebPlugin} from "@capacitor/core";
import {Sms} from '@byteowls/capacitor-sms';

@Component()
export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("Register custom capacitor plugins");
        registerWebPlugin(Sms);
        // other stuff
    }
}
```

### Use it

```typescript
import {
  Plugins
} from '@capacitor/core';

@Component({
  template: '<button (click)="onOAuthBtnClick()">Login with OAuth</button>' +
   '<button (click)="onLogoutClick()">Logout OAuth</button>'
})
export class SignupComponent {
    onOAuthBtnClick() {
        Plugins.OAuth2Client.authenticate(
            oauth2Options
        ).then(resourceUrlResponse => {
            let accessToken = resourceUrlResponse["access_token"];
            let oauthUserId = resourceUrlResponse["id"];
            let name = resourceUrlResponse["name"];
            // go to backend
        }).catch(reason => {
            console.error("OAuth rejected", reason);
        });
    }

    onLogoutClick() {
            Plugins.OAuth2Client.logout(
                oauth2Options
            ).then(() => {
                // do something
            }).catch(reason => {
                console.error("OAuth logout failed", reason);
            });
        }
}
```

### Options

See the `oauth2Options` interface at https://github.com/moberwasserlechner/capacitor-sms/blob/master/src/definitions.ts#L16

**Attention:** For security reasons this plugin does not has a option for the **app secret** because it should **never** be stored in client side code.


## Platform: Android

**Register the plugin** in `com.companyname.appname.MainActivity#onCreate`

```
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        List<Class<? extends Plugin>> additionalPlugins = new ArrayList<>();
        // Additional plugins you've installed go here
        // Ex: additionalPlugins.add(TotallyAwesomePlugin.class);
        additionalPlugins.add(SmsPlugin.class);

        // Initializes the Bridge
        this.init(savedInstanceState, additionalPlugins);
    }
```

## Platform: iOS

- Not supported yet

## Platform: Web/PWA

- Not supported.

## Platform: Electron

- Not supported.


## Contribute

### Fix a bug or create a new feature

Please do not mix more than one issue in a feature branch. Each feature/bugfix should have its own branch and its own Pull Request (PR).

1. Create a issue and describe what you want to do at [Issue Tracker](https://github.com/moberwasserlechner/capacitor-sms/issues)
2. Create your feature branch (`git checkout -b feature/my-feature` or `git checkout -b bugfix/my-bugfix`)
3. Test your changes to the best of your ability.
5. Commit your changes (`git commit -m 'Describe feature or bug'`)
6. Push to the branch (`git push origin feature/my-feature`)
7. Create a Github pull request

### Code Style

This repo includes a .editorconfig file, which your IDE should pickup automatically.

If not please use the sun coding convention. Please do not use tabs at all!

Try to change only parts your feature or bugfix requires.

## License

MIT. Please see [LICENSE](https://github.com/moberwasserlechner/capacitor-sms/blob/master/LICENSE).

## BYTEOWLS Software & Consulting

This plugin is powered by BYTEOWLS Software & Consulting and was build for [Team Conductor](https://team-conductor.com/en/) - Next generation club management platform.

