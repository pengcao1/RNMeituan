package com.plugin.baseinfo;

import android.os.Build;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNAndroidInfo extends ReactContextBaseJavaModule {
    private static final String TAG = RNAndroidInfo.class.getSimpleName();
    public RNAndroidInfo(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void getOSVersion(Callback success,Callback failed){
        Log.d(TAG,"osversion = "+Build.VERSION.RELEASE);
        success.invoke(Build.VERSION.RELEASE);
    }

    @ReactMethod
    public void getOSSDKVersion(Callback success,Callback failed){
        Log.d(TAG,"osSdk = "+Build.VERSION.SDK_INT);
        success.invoke(Build.VERSION.SDK_INT);
    }
    @ReactMethod
    public void getProduct(Callback success,Callback failed){
        Log.d(TAG,"product = "+Build.PRODUCT);
        success.invoke(Build.PRODUCT);
    }
}
