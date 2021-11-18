package com.sampleapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import android.widget.Toast;

public class ActivityStarterModule extends ReactContextBaseJavaModule {
    //constructor
    public ActivityStarterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "ActivityStarter";
    }
    //Custom function that we are going to export to JS
    @ReactMethod
     void showToast() {
        Toast.makeText(getReactApplicationContext(), "Message from Android", Toast.LENGTH_SHORT).show();
    }
}