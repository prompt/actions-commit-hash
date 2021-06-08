import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const hash: string = core.getInput('commit')

    core.setOutput('long', hash)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
