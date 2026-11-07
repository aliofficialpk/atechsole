import React, { useRef, useEffect } from 'react'
import './Hero.css'
import heroVideo from '../assets/Event-videos/Hero_section_video.mp4'

const Hero = () => {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        // Reset video when it reaches 22 seconds (loop first 22 seconds)
        const handleTimeUpdate = () => {
            if (video.currentTime >= 22) {
                video.currentTime = 0
            }
        }

        video.addEventListener('timeupdate', handleTimeUpdate)
        return () => video.removeEventListener('timeupdate', handleTimeUpdate)
    }, [])

    return (
        <section id="hero" className="hero-video-section">
            <div className="hero-video-overlay"></div>
            <video
                ref={videoRef}
                className="hero-background-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={heroVideo} type="video/mp4" />
            </video>
        </section>
    )
}

export default Hero
