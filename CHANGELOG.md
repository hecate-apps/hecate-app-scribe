# Changelog

## [0.2.1] - 2026-03-17

### Fixed
- Fix compile error: add missing `state_module/0` callback to `document_aggregate` (required by evoq 1.12.0)
- Fix supervisor crash: unlink supervisor from plugin loader's temporary init process

## [0.2.0] - 2026-03-17

### Changed
- Update hecate_sdk from 0.1.0 to 0.6.1
- Update reckon_db from 1.3.3 to 1.6.0
- Sync all version sources to 0.2.0
- Update package.sh to include .app files alongside .beam files
- Update min_sdk_version to 0.6.0

### Added
- scripts/bump-version.sh for automated version synchronization

## [0.1.6] - 2026-03-09

### Fixed

- Fix double `/api/` prefix in frontend API calls — "New" button and all document operations now work
- Add `display_name` to manifest for friendly UI labels ("Scribe" instead of "hecate-app-scribe")
- Use emoji shortcode `pencil2` instead of raw UTF-8 icon
- Add `hecate_sdk` to dialyzer `plt_extra_apps` (fixes CI dialyzer failure)

## [0.1.5] - 2026-03-09

### Fixed

- Add `tag` field to `app_scribe:manifest()` — frontend needs it to load the custom element
- Bump version to 0.1.5 (aligns manifest.json, app_scribe.erl)

## [0.1.2] - 2026-03-09

### Fixed

- Plugin name corrected to `hecate-app-scribe` (was incorrectly shortened to `scribe`)
- Tarball, routes, and plugin directory now use full name

## [0.1.1] - 2026-03-09

### Changed

- Switch from container (OCI) to in-VM plugin model
- CI builds `.tar.gz` plugin package instead of Docker image
- Remove Dockerfile and docker.yml workflow
- Remove `oci_image` from manifest (replaced by `plugin_type: in_vm`)
- Add `callback_module` and `plugin_type` to manifest

## [0.1.0] - 2026-03-05

### Added

- **Daemon** (`hecate-app-scribed`)
  - Root app with Cowboy Unix socket API, health/manifest endpoints, plugin registrar
  - CMD app `guide_document_lifecycle` with 4 desks:
    - `initiate_document` — create new documents (POST /api/documents)
    - `rename_document` — rename documents (PUT /api/documents/:id)
    - `archive_document` — archive documents (DELETE /api/documents/:id)
    - `revise_document_content` — save document content (PUT /api/documents/:id/content)
  - PRJ app `project_documents` with SQLite store and 4 event projections
  - QRY app `query_documents` with document list, detail, and content read APIs
  - Event-sourced aggregate with bit-flag status (INITIATED, RENAMED, ARCHIVED, REVISED)
  - ReckonDB `documents_store` created at startup

- **Frontend** (`hecate-app-scribew`)
  - TipTap rich text editor with formatting toolbar
  - Document list with create/archive operations
  - Auto-save with 2-second debounce
  - Extensions: StarterKit, Underline, TextAlign, Placeholder, CharacterCount, Typography
  - Web component `<scribe-studio>` for hecate-web integration

- **CI/CD**
  - GitHub Actions: CI (frontend check + daemon compile/test/dialyzer), Docker (OCI build), Release
  - Multi-stage Dockerfile (node -> erlang -> alpine runtime)

- **Tests**
  - 51 unit tests covering command/event serialization, handler validation, aggregate business rules
