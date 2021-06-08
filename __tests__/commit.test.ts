import {CommitHash} from '../src/commit-hash'

const exampleCommitLong: string = '734713bc047d87bf7eac9674765ae793478c50d3'
const exampleCommitShort: string = '734713b'

describe('commit hash', () => {
  it('accepts valid full length commit hash', () => {
    expect(new CommitHash(exampleCommitLong).long()).toBe(exampleCommitLong)
  })

  it('rejects short commit hash', () => {
    expect(() => {
      new CommitHash(exampleCommitShort)
    }).toThrow(Error)
  })

  it('provides short version of commit hash', () => {
    expect(new CommitHash(exampleCommitLong).short()).toBe(exampleCommitShort)
  })
})
