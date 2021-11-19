# Sample App

This Sample application allow us to store user details in local storages and It has register and login feature to move forward to see the dashboard screen which has bridging concept to have a communication with iOS & Android native components.

Please go ahead and play around  :)

## Covered :
  
  - Login screen with Email & Password
  - Register screen with Email, Password & Name
  - Covered basic validations
  - Dashboard screen with 4 bottom tabs & dashboard have logout button.
  - Developed bridging concept for Android & iOS.
  - Showing android native Toast from Android native module & Message from iOS native as well
  - Used **Redux** for state management.
  - Used Persist storage for store user details.
  - Project working on both Android and iOS
  - Project running on latest RN 0.66.3
  - I have created app UI as per some best pratice approach.

## Not Covered :  Willing to implement in the future.

  - I could not design the fancy UI due to time constraints
  - I could've done more validations if i get more time
  - Since, its storing values in Redux, not used any Activity loaders
  - I could not design 4 tabs attractively and no colors added

## Grading criteria followed:

  - **Architecture and approach** - (Using **Container and View pattern** for design patten and proper folder structure Architecture)
  - **Execution** - App runs successfully in both Android and iOS
  - **Code readability and style** - Written clean code and very convenient to read. Maintained proper comments and kept style files wisely. 
    (Tried to use all latest methods)

## How to setup code :

- Step 1 : 	download code from repo

- Step 2 : 	remove **yarn.lock** file from download code ( if any )

- Step 3 : 	do **npm install** or **yarn install** ( if you have configured **yarn** in your project )

  ### If you want to run in iOS :-

      -  pod install ( all of your packages to be installed in your Pod file )

      -  yarn run ios or react-native run-ios ( app will run in your simulator or connected iOS device )
      
      
  ### If you want to run in Android :-

      -  open your android studio and make sure your gradle getting success ( all of your packages to be synced in your gradle )

      -  yarn run ios or react-native run-android ( app will run in your emulator or connected Android device )

## Packages used : (Technologies)

  Project is created with:
  
  - react (17.0.2)
  - react-native (0.66.3)
  - @react-native-async-storage/async-storage (1.15.11)
  - @react-navigation/bottom-tabs (6.0.9)
  - @react-navigation/native (6.0.6)
  - @react-navigation/stack (6.0.11)
  - react-native-gesture-handler (1.10.3)
  - react-native-safe-area-context (3.3.2)
  - react-native-size-matters (0.4.0)
  - react-native-screens (3.9.0)
  - jest (26.6.3) - devDependencies

## Thinking & Decisions :

  - Created Navigator and Routes for maintaining stacks/screens
  - Created ColourPalette for maintaining colors

## Happy coding ...
