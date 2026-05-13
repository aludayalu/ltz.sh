#!/usr/bin/env bash

set -euo pipefail

if [ "$#" -ne 2 ]; then
    echo "Usage: ./build.sh <project-directory> <output-directory>"
    exit 1
fi

PROJECT_DIR="$(cd "$1" && pwd)"
OUTPUT_DIR="$(mkdir -p "$2" && cd "$2" && pwd)"

TARGETS=(
    "linux amd64"
    "linux arm64"
    "darwin amd64"
    "darwin arm64"
)

for target in "${TARGETS[@]}"; do
    read -r GOOS GOARCH <<< "$target"

    OUTPUT_NAME="${GOOS}-${GOARCH}"

    echo "Building ${OUTPUT_NAME}"

    (
        cd "$PROJECT_DIR"

        GOOS="$GOOS" \
        GOARCH="$GOARCH" \
        CGO_ENABLED=0 \
        go build \
            -ldflags="-s -w" \
            -o "${OUTPUT_DIR}/${OUTPUT_NAME}" \
            .
    )
done

cat <<EOF

Builds written to ${OUTPUT_DIR}
EOF