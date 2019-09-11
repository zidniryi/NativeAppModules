import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class HelloManager extends ReactContextBaseJavaModule {
    public HelloManager(ReactApplicationContext reactContext){
        super(reactContext);
    }

    @override
    public String getName() {
        return "HelloManager";
    }
}

