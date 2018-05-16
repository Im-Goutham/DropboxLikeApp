package com.navigation_sample;
import android.os.Bundle; //Include this//
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;//Include this//


public class MainActivity extends ReactActivity {
  //Include this start//
  @Override
   protected void onCreate(Bundle savedInstanceState) {
       SplashScreen.show(this, true);
       super.onCreate(savedInstanceState);
   }
   //Include this end//
    @Override
    protected String getMainComponentName() {
        return "navigation_sample";
    }
}
