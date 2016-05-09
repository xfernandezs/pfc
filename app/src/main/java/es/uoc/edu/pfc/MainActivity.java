package es.uoc.edu.pfc;

import android.os.Bundle;
import android.content.res.Configuration;
import org.apache.cordova.*;
import com.parse.Parse;
import com.parse.ParseAnalytics;
import com.parse.ParseObject;

public class MainActivity extends DroidGap
{
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        // Set by <content src="index.html" /> in config.xml
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");
        Parse.initialize(this, "as17B246NEIMTr19h8fCYEB1CHuKeyFxcyCHcoMj", "jsgiIeFWO2p40BS981MIOvhiC9Zf2oHONV5qQ8Og"); 
        ParseAnalytics.trackAppOpened(getIntent());
        ParseObject testObject = new ParseObject("TestObject");
        testObject.put("foo", "bar");
        testObject.saveInBackground();
    }
    
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig); 
    }
    
    @Override
    public void onStart() {
        super.onStart();
    }

    @Override
    public void onStop() {
        super.onStop();
    }
}

