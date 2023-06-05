## v0.16.4

- Fixed the selfupdate command not working on Windows due to missing `.exe` in the extracted binary path ([#2589](https://github.com/pocketbase/pocketbase/discussions/2589)).
  _Note that the command on Windows will work on v0.16.4+ onwards, meaning that you still will have to update manually one more time to v0.16.4._

- Added `int64`, `int32`, `uint`, `uint64` and `uint32` support when scanning `types.DateTime` ([#2602](https://github.com/pocketbase/pocketbase/discussions/2602))

- Updated dependencies.


## v0.16.3

- Fixed schema fields sort not working on Safari/Gnome Web ([#2567](https://github.com/pocketbase/pocketbase/issues/2567)).

- Fixed default `PRAGMA`s not being applied for new connections ([#2570](https://github.com/pocketbase/pocketbase/discussions/2570)).


## v0.16.2

- Fixed backups archive not excluding the local `backups` directory on Windows ([#2548](https://github.com/pocketbase/pocketbase/discussions/2548#discussioncomment-5979712)).

- Changed file field to not use `dataTransfer.effectAllowed` when dropping files since it is not reliable and consistent across different OS and browsers ([#2541](https://github.com/pocketbase/pocketbase/issues/2541)).

- Auto register the initial generated snapshot migration to prevent incorrectly reapplying the snapshot on Docker restart ([#2551](https://github.com/pocketbase/pocketbase/discussions/2551)).

- Fixed missing view id field error message typo.


## v0.16.1

- Fixed backup restore not working in a container environment when `pb_data` is mounted as volume ([#2519](https://github.com/pocketbase/pocketbase/issues/2519)).

- Fixed Dart SDK realtime API preview example ([#2523](https://github.com/pocketbase/pocketbase/pull/2523); thanks @xFrann).

- Fixed typo in the backups create panel ([#2526](https://github.com/pocketbase/pocketbase/pull/2526); thanks @dschissler).

- Removed unnecessary slice length check in `list.ExistInSlice` ([#2527](https://github.com/pocketbase/pocketbase/pull/2527); thanks @KunalSin9h).

- Avoid mutating the cached request data on OAuth2 user create ([#2535](https://github.com/pocketbase/pocketbase/discussions/2535)).

- Fixed Export Collections "Download as JSON" ([#2540](https://github.com/pocketbase/pocketbase/issues/2540)).

- Fixed file field drag and drop not working in Firefox and Safari ([#2541](https://github.com/pocketbase/pocketbase/issues/2541)).


## v0.16.0

- Added automated backups (_+ cron rotation_) APIs and UI for the `pb_data` directory.
  The backups can be also initialized programmatically using `app.CreateBackup("backup.zip")`.
  There is also experimental restore method - `app.RestoreBackup("backup.zip")` (_currently works only on UNIX systems as it relies on execve_).
  The backups can be stored locally or in external S3 storage (_it has its own configuration, separate from the file uploads storage filesystem_).

- Added option to limit the returned API fields using the `?fields` query parameter.
  The "fields picker" is applied for `SearchResult.Items` and every other JSON response. For example:
  ```js
  // original: {"id": "RECORD_ID", "name": "abc", "description": "...something very big...", "items": ["id1", "id2"], "expand": {"items": [{"id": "id1", "name": "test1"}, {"id": "id2", "name": "test2"}]}}
  // output:   {"name": "abc", "expand": {"items": [{"name": "test1"}, {"name": "test2"}]}}
  const result = await pb.collection("example").getOne("RECORD_ID", {
    expand: "items",
    fields: "name,expand.items.name",
  })
  ```

- Added new `./pocketbase update` command to selfupdate the prebuilt executable (with option to generate a backup of your `pb_data`).

- Added new `./pocketbase admin` console command:
  ```sh
  // creates new admin account
  ./pocketbase admin create test@example.com 123456890

  // changes the password of an existing admin account
  ./pocketbase admin update test@example.com 0987654321

  // deletes single admin account (if exists)
  ./pocketbase admin delete test@example.com
  ```

- Added `apis.Serve(app, options)` helper to allow starting the API server programmatically.

- Updated the schema fields Admin UI for "tidier" fields visualization.

- Updated the logs "real" user IP to check for `Fly-Client-IP` header and changed the `X-Forward-For` header to use the first non-empty leftmost-ish IP as it the closest to the "real IP".

- Added new `tools/archive` helper subpackage for managing archives (_currently works only with zip_).

- Added new `tools/cron` helper subpackage for scheduling task using cron-like syntax (_this eventually may get exported in the future in a separate repo_).

- Added new `Filesystem.List(prefix)` helper to retrieve a flat list with all files under the provided prefix.

- Added new `App.NewBackupsFilesystem()` helper to create a dedicated filesystem abstraction for managing app data backups.

- Added new `App.OnTerminate()` hook (_executed right before app termination, eg. on `SIGTERM` signal_).

- Added `accept` file field attribute with the field MIME types ([#2466](https://github.com/pocketbase/pocketbase/pull/2466); thanks @Nikhil1920).

- Added support for multiple files sort in the Admin UI ([#2445](https://github.com/pocketbase/pocketbase/issues/2445)).

- Added support for multiple relations sort in the Admin UI.

- Added `meta.isNew` to the OAuth2 auth JSON response to indicate a newly OAuth2 created PocketBase user.


## v0.15.3

- Updated the Admin UI to use the latest JS SDK to resolve the `isNew` record field conflict ([#2385](https://github.com/pocketbase/pocketbase/discussions/2385)).

- Fixed `editor` field fullscreen `z-index` ([#2410](https://github.com/pocketbase/pocketbase/issues/2410)).

- Inserts the default app settings as part of the system init migration so that they are always available when accessed from within a user defined migration ([#2423](https://github.com/pocketbase/pocketbase/discussions/2423)).


## v0.15.2

- Fixed View query `SELECT DISTINCT` identifiers parsing ([#2349-5706019](https://github.com/pocketbase/pocketbase/discussions/2349#discussioncomment-5706019)).

- Fixed View collection schema incorrectly resolving multiple aliased fields originating from the same field source ([#2349-5707675](https://github.com/pocketbase/pocketbase/discussions/2349#discussioncomment-5707675)).

- Added OAuth2 redirect fallback message to notify the user to go back to the app in case the browser window is not auto closed.


## v0.15.1

- Trigger the related `Record` model realtime subscription events on [custom model struct](https://pocketbase.io/docs/custom-models/) save ([#2325](https://github.com/pocketbase/pocketbase/discussions/2325)).

- Fixed `Ctrl + S` in the `editor` field not propagating the quick save shortcut to the parent form.

- Added `⌘ + S` alias for the record quick save shortcut (_I have no Mac device to test it but it should work based on [`e.metaKey` docs](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey)_).

- Enabled RTL for the TinyMCE editor ([#2327](https://github.com/pocketbase/pocketbase/issues/2327)).

- Reduced the record form vertical layout shifts and slightly improved the rendering speed when loading multiple `relation` fields.

- Enabled Admin UI assets cache.


## v0.15.0

- Simplified the OAuth2 authentication flow in a single "all in one" call ([#55](https://github.com/pocketbase/pocketbase/issues/55)).
  Requires JS SDK v0.14.0+ or Dart SDK v0.9.0+.
  The manual code-token exchange flow is still supported but the SDK method is renamed to `authWithOAuth2Code()` (_to minimize the breaking changes the JS SDK has a function overload that will proxy the existing `authWithOauth2` calls to `authWithOAuth2Code`_).
  For more details and example, you could check https://pocketbase.io/docs/authentication/#oauth2-integration.

- Added support for protected files ([#215](https://github.com/pocketbase/pocketbase/issues/215)).
  Requires JS SDK v0.14.0+ or Dart SDK v0.9.0+.
  It works with a short lived (~5min) file token passed as query param with the file url.
  For more details and example, you could check https://pocketbase.io/docs/files-handling/#protected-files.

- **!** Fixed typo in `Record.WithUnkownData()` -> `Record.WithUnknownData()`.

- Added simple loose wildcard search term support in the Admin UI.

- Added auto "draft" to allow restoring previous record state in case of accidental reload or power outage.

- Added `Ctrl + S` shortcut to save the record changes without closing the panel.

- Added "drop files" support for the file upload field.

- Refreshed the OAuth2 Admin UI.


## v0.14.5

- Added checks for `nil` hooks in `forms.RecordUpsert` when used with custom `Dao` ([#2277](https://github.com/pocketbase/pocketbase/issues/2277)).

- Fixed unique detailed field error not returned on record create failure ([#2287](https://github.com/pocketbase/pocketbase/discussions/2287)).


## v0.14.4

- Fixed concurrent map write pannic on `list.ExistInSliceWithRegex()` cache ([#2272](https://github.com/pocketbase/pocketbase/issues/2272)).
