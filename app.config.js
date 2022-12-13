import 'dotenv/config' 

export default ({config}) => {
  const appConfig = ({
    ...config,
    expo: {
      "name": "Beer Fridge App",
      "icon": "bill.png",
      "version": "1.0.0",
      "slug": "your-app-slug",
      "ios": {
        "bundleIdentifier": "com.odelz.beefridgeapp",
        "buildNumber": "1.0.0"
      },
      "scheme": "myapp"

    }
  });
  return appConfig;
}

