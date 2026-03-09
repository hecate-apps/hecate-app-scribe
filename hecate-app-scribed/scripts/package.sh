#!/usr/bin/env bash
set -euo pipefail

## Package the scribe plugin as a .tar.gz for in-VM loading.
##
## Output: _build/plugin/hecate-app-scribe.tar.gz
## Contents:
##   ebin/           - All compiled .beam files (consolidated from all apps)
##   priv/static/    - Frontend assets (if built)
##   manifest.json   - Plugin metadata

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
BUILD_DIR="$ROOT_DIR/_build/plugin"
STAGING_DIR="$BUILD_DIR/staging"

echo "==> Compiling..."
cd "$ROOT_DIR"
rebar3 compile

echo "==> Preparing package..."
rm -rf "$STAGING_DIR"
mkdir -p "$STAGING_DIR/ebin"

## Consolidate all .beam files from root app + domain apps
for ebin_dir in \
    "$ROOT_DIR/_build/default/lib/hecate_app_scribed/ebin" \
    "$ROOT_DIR/_build/default/lib/guide_document_lifecycle/ebin" \
    "$ROOT_DIR/_build/default/lib/project_documents/ebin" \
    "$ROOT_DIR/_build/default/lib/query_documents/ebin"; do
    if [ -d "$ebin_dir" ]; then
        cp "$ebin_dir"/*.beam "$STAGING_DIR/ebin/" 2>/dev/null || true
    fi
done

echo "  $(find "$STAGING_DIR/ebin" -name '*.beam' | wc -l) .beam files"

## Copy static assets if they exist
STATIC_DIR="$ROOT_DIR/priv/static"
if [ -d "$STATIC_DIR" ]; then
    mkdir -p "$STAGING_DIR/priv"
    cp -r "$STATIC_DIR" "$STAGING_DIR/priv/static"
    echo "  Static assets included"
else
    echo "  No static assets (run frontend build first)"
fi

## Copy manifest.json from repo root (single source of truth)
MANIFEST_SRC="$ROOT_DIR/../manifest.json"
if [ ! -f "$MANIFEST_SRC" ]; then
    echo "ERROR: manifest.json not found at $MANIFEST_SRC"
    exit 1
fi
cp "$MANIFEST_SRC" "$STAGING_DIR/manifest.json"

## Create the tarball
cd "$STAGING_DIR"
tar czf "$BUILD_DIR/hecate-app-scribe.tar.gz" .

echo "==> Package created: $BUILD_DIR/hecate-app-scribe.tar.gz"
echo "    Install with: cp $BUILD_DIR/hecate-app-scribe.tar.gz ~/.hecate/plugins/scribe/"
echo "    Then extract:  cd ~/.hecate/plugins/scribe/ && tar xzf hecate-app-scribe.tar.gz"
