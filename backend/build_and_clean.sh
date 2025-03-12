#!/bin/bash

# Define the base directory
BASE_DIR="."

# Function to build and clean a React project
build_and_clean() {
  local project_dir="$1"
  echo "Building project in: $project_dir"
  
  # Navigate to the project directory
  cd "$project_dir" || { echo "Failed to navigate to $project_dir"; exit 1; }
  
  # Install dependencies and build the project
  echo "Installing dependencies..."
  npm install --silent
  echo "Building the project..."
  npm run build
  
  # Check if the build was successful
  if [ $? -eq 0 ]; then
    echo "Build successful for $project_dir"
  else
    echo "Build failed for $project_dir"
    exit 1
  fi
  
  # Clean up by removing node_modules
  echo "Removing node_modules in $project_dir..."
  rm -rf node_modules
  
  # Navigate back to the base directory
  cd - || { echo "Failed to navigate back to base directory"; exit 1; }
}

# Find all directories named "project" and process them
find "$BASE_DIR" -type d -name "project" | while read -r dir; do
  build_and_clean "$dir"
done

echo "All projects have been built and cleaned."
