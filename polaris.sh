#!/bin/bash

# Check if project name is supplied
if [ -z "$1" ]; then
  echo "Usage: $0 <new-project-name>"
  exit 1
fi

# Variables
TEMPLATE_REPO_URL="https://gitlab.com/cadens.studio/polaris.git"
NEW_PROJECT_NAME=$1
NEW_PROJECT_REPO_URL="https://gitlab.com/cadens.studio/$NEW_PROJECT_NAME.git"
TARGET_DIR="$HOME/Developer/$NEW_PROJECT_NAME"

# Clone the template repository
git clone $TEMPLATE_REPO_URL $TARGET_DIR

# Navigate to the new project directory
cd $TARGET_DIR

# Remove the old git history
rm -rf .git

# Initialize a new git repository
git init

# Rename master branch to main
git branch -m master main

# Add the new remote origin
git remote add origin $NEW_PROJECT_REPO_URL

# Remove the Polaris script
rm -f polaris.sh

# Add all files
git add .

# Commit the changes
git commit -m "Initial commit from Polaris template"

# Push to the new repository
git push -u origin main

echo "New project $NEW_PROJECT_NAME created successfully."
