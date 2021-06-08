import * as core from '@actions/core'
import {CommitHash} from './commit-hash'

async function run(): Promise<void> {
  try {
    const commit: CommitHash = new CommitHash(core.getInput('commit'))

    core.setOutput('long', commit.long())
    core.setOutput('short', commit.short())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
