#!/usr/bin/env bash
set -euo pipefail

# Bump version across all Scribe artifacts:
#   - manifest.json
#   - hecate-app-scribed/src/hecate_app_scribed.app.src
#   - hecate-app-scribed/src/app_scribe.erl (manifest/0 version)
#   - hecate-app-scribed/rebar.config (relx release)
#   - hecate-app-scribew/package.json

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"

if [[ $# -ne 1 ]]; then
    echo "Usage: $0 <new-version>"
    echo "Example: $0 1.2.0"
    exit 1
fi

NEW_VERSION="$1"

if ! [[ "$NEW_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    echo "Error: Version must be semver (X.Y.Z), got: $NEW_VERSION"
    exit 1
fi

echo "Bumping to version $NEW_VERSION"

bump_file() {
    local file="$1"
    local pattern="$2"
    local replacement="$3"
    if [[ -f "$file" ]]; then
        sed -i "s|$pattern|$replacement|" "$file"
        echo "  Updated $file"
    fi
}

# manifest.json
bump_file "$REPO_ROOT/manifest.json" \
    '"version": "[0-9]*\.[0-9]*\.[0-9]*"' \
    "\"version\": \"$NEW_VERSION\""

# Root app.src
bump_file "$REPO_ROOT/hecate-app-scribed/src/hecate_app_scribed.app.src" \
    '{vsn, "[0-9]*\.[0-9]*\.[0-9]*"}' \
    "{vsn, \"$NEW_VERSION\"}"

# app_scribe.erl — version => <<"X.Y.Z">> (only the line starting with spaces+version)
CALLBACK="$REPO_ROOT/hecate-app-scribed/src/app_scribe.erl"
if [[ -f "$CALLBACK" ]]; then
    sed -i "/min_sdk_version/!s/version => <<\"[0-9]*\.[0-9]*\.[0-9]*\">>/version => <<\"$NEW_VERSION\">>/" "$CALLBACK"
    echo "  Updated $CALLBACK"
fi

# rebar.config
bump_file "$REPO_ROOT/hecate-app-scribed/rebar.config" \
    '{release, {hecate_app_scribed, "[0-9]*\.[0-9]*\.[0-9]*"}' \
    "{release, {hecate_app_scribed, \"$NEW_VERSION\"}"

# package.json
bump_file "$REPO_ROOT/hecate-app-scribew/package.json" \
    '"version": "[0-9]*\.[0-9]*\.[0-9]*"' \
    "\"version\": \"$NEW_VERSION\""

echo ""
echo "Version bumped to $NEW_VERSION in all artifacts."
echo "Next steps:"
echo "  1. Update CHANGELOG.md"
echo "  2. git add -A && git commit -m 'chore: Release v$NEW_VERSION'"
echo "  3. git tag v$NEW_VERSION"
echo "  4. git push && git push --tags"
