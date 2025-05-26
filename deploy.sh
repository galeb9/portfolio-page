#!/bin/bash

set -e

echo "🔧 Building project..."
if npm run build; then
  echo "✅ Build succeeded."
else
  echo "❌ Build failed. Aborting deployment."
  exit 1
fi

echo "🚀 Deploying to Firebase..."
if firebase deploy; then
  echo "✅ Firebase deployment succeeded."
else
  echo "❌ Firebase deployment failed."
  exit 1
fi
