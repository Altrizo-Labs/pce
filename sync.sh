#!/bin/bash

set -e

TOKEN=""

SOURCE_REPO="https://${TOKEN}@github.com/AxleGlobal/edusight.git"
TARGET_REPO="https://${TOKEN}@github.com/EduSight-ai/EduSite.git"
SYNC_DIR="/tmp/repo-sync"

if [ ! -d "$SYNC_DIR" ]; then
    mkdir -p "$SYNC_DIR"
fi

cd "$SYNC_DIR"

if [ ! -d "source" ]; then
    echo "Cloning source repository..."
    git clone --mirror "$SOURCE_REPO" source
fi

cd source

echo "Fetching updates from source repository..."
git fetch --all

if ! git remote | grep -q target; then
    echo "Adding target repository as a remote..."
    git remote add target "$TARGET_REPO"
fi

echo "Pushing only main branch to target repository..."
git push --force target refs/heads/main:refs/heads/main || true

pwd
cd ..
echo "Cleaning up..."
cd ..
rm -rf "$SYNC_DIR"

echo "Main branch synced successfully!"