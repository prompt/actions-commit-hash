import * as core from '@actions/core'
import {CommitHash} from './commit-hash'

async function run(): Promise<void> {
  try {
    const commit: CommitHash = new CommitHash(core.getInput('commit'))
    const prefix: string = core.getInput('prefix') || ''

    core.setOutput('long', prefix + commit.long())
    core.setOutput('short', prefix + commit.short())

    core.setOutput('hash', commit.long())
  } catch (error: unknown) {
    core.setFailed(
      error instanceof Error
        ? error.message
        : 'an unknown error occurred when running actions-commit-hash'
    )
  }
}

run()
