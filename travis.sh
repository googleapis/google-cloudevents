#!/bin/sh

set -e

# Script for the Travis build. (It's simpler to call a single
# script from .travis.yml than to have multiple steps.)

# This script:
# - Compiles the protos into a file descriptor set.
# - Generates the event registry, updating README.md.
# - Checks for changes in README.md, for consistency.

# Each of the scripts already describes what it's doing, so we
# just make it clear which script is being run at any point.

echo "Running compile.sh"
./compile.sh

echo "Running generate-event-registry.sh"
./generate-event-registry.sh tmp/protos.pb

echo "Checking for consistency between README.md and the protos."
echo "If this reports a difference, please edit README.md manually"
echo "or run the event registry generator and commit the change."
echo "See README.md for instructions on running the generator."
# Leave a blank line to avoid the output getting confused with
# the message above.
echo ""
git diff --exit-code README.md

echo "Consistency check completed successfully."
