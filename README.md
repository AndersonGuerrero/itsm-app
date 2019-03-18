# React Native  Itsm App

In the root directory
* Install dependencies: `npm install`
* Install dependencies: `npm start`

### iOS

In the `ios` directory

* Install Pods: `gem install cocoapods`
* Install Pods: `pod install`
* Install xcpretty: `gem install xcpretty`
* Launch: `open Sample.xcworkspace`

### Android

* You might need to do this to run it in Android Studio or on real device: `adb reverse tcp:8081 tcp:8081`
* And for the sample server: `adb reverse tcp:3000 tcp:3000`
* To run from command line try: `react-native run-android`


### Tests

The integration tests are run using [Appium](http://appium.io/).

To run tests:

* Make sure you have the 9.0 simulators installed in XCode
* Compile app for the test environment: `npm run compile:test`
* Launch simulator and tests: `npm test`

### Compiling

You can compile and put it on the phone with: `npm run install:staging`

Not that there's a staging server at this point, but it's an example of how to compile things via the command line.

### Android

We'll get there, but we're still working on the iOS version.

# Current Concepts

### Navigation

The sole method of navigation (what's showing on the screen and where the back button goes) is via urls. We parse urls to determine the route stack. There is some stuff to make "related" url navigation look "right" (push and pop). Making everything addressable by URL is great for deep linking and forces each screen to be able to load all on it's own from simple data.

The Router handles parsing different routes depending if you are logged in or not. The urls must be able to represent the entire navigation stack, so that means they can be recursive like my friend's friend's friend's feed (sample://dashboard/follows/john/follows/sarah/follows/amy/posts).

#### Data storage

Info is currently stored as json to the local file system.

#### API

It uses superagent to do HTTP requests and sets headers and other things like that.

#### i18n

We've internationalized our app. Each component definies it's own keys.
This provides a sample of how that works.

#### Android too

We shipped our Android app! We need to update this to work there too.
