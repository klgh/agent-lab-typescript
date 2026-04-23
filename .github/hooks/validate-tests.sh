#!/bin/bash
# Validation hook that runs tests and blocks agent if tests fail
# Exit codes:
#   0 - success (tests passed)
#   2 - blocking error (tests failed, prevent agent from finishing)
#   1 - warning (non-blocking)

set -e

echo "🧪 Running test validation..."

# Run tests
if npm run test > /tmp/test-output.log 2>&1; then
  echo "✅ All tests passed"
  exit 0
else
  echo "❌ Tests failed - blocking agent from finishing"
  cat /tmp/test-output.log
  exit 2
fi
