# Commit Hash

A GitHub Action for using the long and short [hash of a commit][git/commits]
&mdash; with an optional prefix.

```
pr-mpt/actions-commit-hash@v0
```

## Inputs

All inputs are optional.

| ID | Description | Default | Examples |
| ---- | ----------- | ------- | -------- |
| `commit` | Full, 40-character SHA-1 hash of the commit | `${{github.sha}}` | `734713bc047d87bf7eac9674765ae793478c50d3` |

## Outputs

| ID | Description | Example |
| ---- | --------- | -------- |
| `long` | Full, 40-character SHA-1 hash of the commit | `734713bc047d87bf7eac9674765ae793478c50d3` |

[git/commits]: https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History
