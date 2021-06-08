# Commit Hash

A GitHub Action for using the long and short [hash of a commit][git/commits]
&mdash; with an optional prefix.

```
pr-mpt/actions-commit-hash@v0
```

## Inputs

All inputs are optional.

| ID | Description | Default | Examples |
| :- | :---------- | :------ | :------- |
| `commit` | Full, 40-character SHA-1 hash of the commit | `${{github.sha}}` | `734713bc047d87bf7eac9674765ae793478c50d3` |
| `prefix` | Optional string prepended to `short` and `long` |  | `commit` `sha-` |

## Outputs

| ID | Description | Examples |
| :- | :---------- | :------ |
| `short` | Short, 7-character hash of the commit with optional prefix | `734713b` `sha-734713b` |
| `long` | Full, 40-character SHA-1 hash of the commit with optional prefix | `734713bc047d87bf7eac9674765ae793478c50d3` `sha-734713bc047d87bf7eac9674765ae793478c50d3` |
| `hash` | Original, 40-character SHA-1 hash of the commit without prefix | `734713bc047d87bf7eac9674765ae793478c50d3` |

## Examples

### Build image with commit tag

[docker/build-push-action] builds Docker images with tags, here we tag the image
we're building with the short commit hash.

```yaml
jobs:
  tag-image:
    runs-on: ubuntu-latest
    steps:
    steps:
      - id: commit
        uses: pr-mpt/actions-commit-hash@v0
      - uses: docker/setup-buildx-action@v1
      - name: Build image for commit
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ${{ steps.commit.outputs.short }}
```

### Prefix commit hash for `workflow_run` event

[`workflow_run`][events/workflow_run] events are handled by Workflows within the
context of the main branch, therefore the `github.sha` context value does not
represent the commit that triggered the Workflow and we must use the `head_sha`
value on the event.

```yaml
on:
  workflow_run:
    workflows:
      - Build
    types:
      - completed

jobs:
  tag-image:
    runs-on: ubuntu-latest
    steps:
    steps:
      - id: commit
        uses: pr-mpt/actions-commit-hash@v0
        with:
          commit: "${{ github.event.workflow_run.head_sha }}"
          prefix: "sha-"
      - uses: docker/setup-buildx-action@v1
      - name: Build image for commit
        uses: docker/build-push-action@v2
        with:
          push: true
          tags: ${{ steps.commit.outputs.short }}
```

[git/commits]: https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
[docker/build-push-action]: https://github.com/docker/build-push-action
[events/workflow_run]: https://docs.github.com/en/actions/reference/events-that-trigger-workflows#workflow_run
