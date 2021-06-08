const hashFormat = /^[a-f0-9]{40}$/

export class CommitHash {
  private hash: string

  constructor(longCommitHash: string) {
    if (!hashFormat.test(longCommitHash)) {
      throw Error(
        `Input "${longCommitHash}" is not a valid full length commit hash.`
      )
    }

    this.hash = longCommitHash
  }

  long(): string {
    return this.hash
  }

  short(): string {
    return this.long().substr(0, 7)
  }
}
