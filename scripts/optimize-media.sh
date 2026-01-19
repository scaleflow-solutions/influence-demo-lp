#!/bin/bash

# Media Optimization Script for Influence LP
# This script converts the heavy GIF to optimized video formats
# Prerequisites: Install ffmpeg with `brew install ffmpeg`

ASSETS_DIR="public/assets"

echo "=== Media Optimization Script ==="
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg is not installed."
    echo "Install it with: brew install ffmpeg"
    echo ""
    echo "Alternatively, use online tools:"
    echo "  - https://cloudconvert.com/gif-to-mp4"
    echo "  - https://ezgif.com/gif-to-mp4"
    echo ""
    echo "Upload hero-background.gif and convert to:"
    echo "  1. MP4 (H.264) - save as hero-bg.mp4"
    echo "  2. WebM (VP9) - save as hero-bg.webm"
    echo ""
    exit 1
fi

echo "✓ ffmpeg found"
echo ""

# Convert GIF to MP4
if [ -f "$ASSETS_DIR/hero-background.gif" ]; then
    echo "Converting hero-background.gif to MP4..."
    ffmpeg -i "$ASSETS_DIR/hero-background.gif" \
        -movflags faststart \
        -pix_fmt yuv420p \
        -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
        -c:v libx264 \
        -crf 23 \
        -preset medium \
        "$ASSETS_DIR/hero-bg.mp4" -y

    echo "Converting hero-background.gif to WebM..."
    ffmpeg -i "$ASSETS_DIR/hero-background.gif" \
        -c:v libvpx-vp9 \
        -crf 30 \
        -b:v 0 \
        -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" \
        "$ASSETS_DIR/hero-bg.webm" -y

    # Show size comparison
    echo ""
    echo "=== Size Comparison ==="
    ls -lh "$ASSETS_DIR/hero-background.gif" "$ASSETS_DIR/hero-bg.mp4" "$ASSETS_DIR/hero-bg.webm" 2>/dev/null
    echo ""
    echo "✓ Video conversion complete!"
    echo "You can now delete hero-background.gif to save space"
else
    echo "❌ hero-background.gif not found in $ASSETS_DIR"
fi

echo ""

# Optimize PNG logo if pngquant is available
if command -v pngquant &> /dev/null; then
    if [ -f "$ASSETS_DIR/influence-logo.png" ]; then
        echo "Optimizing influence-logo.png..."
        pngquant --quality=65-80 --force --output "$ASSETS_DIR/influence-logo-optimized.png" "$ASSETS_DIR/influence-logo.png"
        mv "$ASSETS_DIR/influence-logo-optimized.png" "$ASSETS_DIR/influence-logo.png"
        echo "✓ Logo optimized"
    fi
else
    echo "ℹ️  Install pngquant for PNG optimization: brew install pngquant"
fi

echo ""
echo "=== Optimization Complete ==="
