package com.rntest
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.util.Log
import java.text.SimpleDateFormat
import java.util.Calendar
import java.util.Locale

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CalendarModule"
    private val dateFormat = "yyyy-MM-dd"

    @ReactMethod fun createCalendarEvent(name: String, location: String, startDate: String) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
        val sdf = SimpleDateFormat(dateFormat, Locale.UK)
        val eStartDate = Calendar.getInstance()
        try {
            sdf.parse(startDate)?.let {
                eStartDate.time = it
            }
        } catch (e: Error) {
            Log.d("CalendarModuleError", "Error: $e")
        }
    }

    override fun getConstants(): MutableMap<String, Any> = hashMapOf("DEFAULT_EVENT_NAME" to "New Event")

}

