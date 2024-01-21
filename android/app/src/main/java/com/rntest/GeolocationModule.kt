package com.rntest

import android.content.Context
import android.content.Context.LOCATION_SERVICE
import android.location.LocationManager
import android.location.LocationRequest
import android.os.Build
import android.util.Log
import androidx.annotation.RequiresApi
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class GeolocationModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private val context: Context = reactContext
    override fun getName() = "GeolocationModule"

    private val locationManager = context.getSystemService(LOCATION_SERVICE) as LocationManager

    private fun isLocationEnabled(): Boolean {
        return locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER) ||
                locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER)
    }

    @RequiresApi(Build.VERSION_CODES.S)
    val locationRequestBuilder = LocationRequest.Builder(5000)
    @RequiresApi(Build.VERSION_CODES.S)
    val locationRequest = locationRequestBuilder.build()


    @RequiresApi(Build.VERSION_CODES.S)
    @ReactMethod
    fun getLocation(promise: Promise) {
        Log.d("GeolocationModule", isLocationEnabled().toString())
        if(isLocationEnabled()) {
            if (ContextCompat.checkSelfPermission(context, android.Manifest.permission.ACCESS_FINE_LOCATION)
                != android.content.pm.PackageManager.PERMISSION_GRANTED
            ) {
                ActivityCompat.requestPermissions(
                    currentActivity!!,
                    arrayOf(android.Manifest.permission.ACCESS_FINE_LOCATION),
                    1
                )
            } else {
                    locationManager.getCurrentLocation(LocationManager.GPS_PROVIDER, locationRequest,null , context.mainExecutor) {
                        try {
                            if (it == null) {
                              throw Error("Can't get location")
                            }
                            val lat = it.latitude
                            val lng = it.longitude
                            val alt = it.altitude
                            val coordinates = mapOf("lat" to lat, "lng" to lng, "alt" to alt)
                            val readableMap =
                                com.facebook.react.bridge.Arguments.makeNativeMap(coordinates)
                            Log.d("GeolocationModule", "location: $coordinates")
                            promise.resolve(readableMap)
                        } catch (e: Throwable) {
                            promise.reject("GeolocationModule", e)
                            Log.d("GeolocationModule", "Exception: $e")
                        }
                    }
            }
        }

    }
}