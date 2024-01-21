package com.rntest

import android.util.Log
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.YouTubePlayer
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.listeners.AbstractYouTubePlayerListener
import com.pierfrancescosoffritti.androidyoutubeplayer.core.player.views.YouTubePlayerView

class RNUTubeView: SimpleViewManager<YouTubePlayerView>() {

    override fun getName() = REACT_CLASS

    companion object {
        const val REACT_CLASS = "RNUTubeView"
    }

    private var videoId: String? = null

    @ReactProp(name = "videoId")
    fun setVideoId(view: YouTubePlayerView, newId: String?) {
        Log.d("UTubeView", "$newId: $videoId")
        if(newId == null || newId == videoId) return
        videoId = newId
    }

    override fun createViewInstance(reactContext: ThemedReactContext): YouTubePlayerView {
        val player = YouTubePlayerView(reactContext)

        player.enableAutomaticInitialization = false
        player.initialize(object: AbstractYouTubePlayerListener() {
            override fun onReady(youTubePlayer: YouTubePlayer) {
                val newId = videoId?: ""
                youTubePlayer.loadVideo(newId, 0f)
            }
                                                                 }
            , false
        )

        return player
    }
}