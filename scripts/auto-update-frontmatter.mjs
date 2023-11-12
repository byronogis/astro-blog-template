#!/usr/bin/env zx

import 'zx/globals'
import process from 'node:process'

$.cwd = process.cwd()

try {
  echo('\nStart working on auto-update-frontmatter...')

  const stagedMdPaths = (await $`git diff --cached --name-only --diff-filter=ACM | grep '\.md$'`.quiet()).stdout.trim().split('\n')
  echo(`Found ${stagedMdPaths.length} staged markdown files:\n${chalk.green(stagedMdPaths.join('\n'))}`)

  const currentDate = (await $`date +"%Y-%m-%d"`.quiet()).stdout.trim()
  // echo(`Current date: ${currentDate}`)

  echo('Updating frontmatter...')

  await spinner(() => Promise.all(stagedMdPaths.map(mdPath => updateFrontmatter(mdPath, currentDate))))

  await $`git add ${stagedMdPaths}`.quiet()

  echo('Done!\n')
}
catch (err) {
  // echo(err)
  echo('No staged markdown files found, skip auto-update-frontmatter.\n')
}

async function updateFrontmatter(mdPath, currentDate) {
  const fileContent = fs.readFileSync(path.join($.cwd, mdPath), 'utf8')
  await sleep(2000)

  const frontmatterRegex = /^---\n([\s\S]*?)\n---/
  const match = fileContent.match(frontmatterRegex)
  if (!match) {
    echo(`No frontmatter found in ${mdPath}`)
    return
  }

  const data = YAML.parse(match[1])
  data.modifiedTime = currentDate

  const newFileContent = fileContent.replace(frontmatterRegex, `---\n${YAML.stringify(data)}\n---`)
  fs.writeFileSync(path.join($.cwd, mdPath), newFileContent)
}
