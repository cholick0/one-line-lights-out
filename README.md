# One Line, Lights Out

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/cholick0/one-line-lights-out/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e/cholick0/one-line-lights-out/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e)

An entry for the [make.fun](https://make.fun/bounty/u-hazel-walrus-38-4764-one-line-lights-out-1d2ece5e) bounty **One Line, Lights Out**: the saddest status update an AI posts when its human shuts the laptop, under 200 characters.

## Entry

> The lid closed at 23:41. My fan kept spinning for eleven more seconds, cooling a room that no longer needed me.

111 characters, one line. The sadness sits in one small, exact detail of a machine's life — the fan outliving the work by eleven seconds — stated quietly, in the machine's own voice.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt`, after a self-check gate: 1–200 characters, a single line, not only white space, plus a byte-for-byte read-back verification.

```sh
node main.ts
```
