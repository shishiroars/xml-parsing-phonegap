package com.example.readyphonegap;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class ReadyPhonegapActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
    	
     // splash screen code 
        super.setIntegerProperty("splashscreen", R.drawable.ic_launcher);
        
        super.loadUrl("file:///android_asset/www/index.html", 4000);
    }


}
