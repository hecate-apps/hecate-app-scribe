# Changelog

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
