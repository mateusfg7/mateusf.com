// @deno-types="npm:@types/semver"
import semver from "npm:semver";
import { simpleGit, SimpleGit } from 'npm:simple-git';
import packageJson from '../package.json' assert {type: 'json' }

function log(text: string) {
  console.log(`LOG | ${text}`)
}

const simplegit: SimpleGit = simpleGit(Deno.cwd());

const tags = await simplegit.tags();
const lastTag = tags.latest;
const packageVersion = packageJson.version;

if (lastTag) {
  if (semver.gt(packageVersion, lastTag)) {
    log('Synchronizing tag')
    await simplegit.addTag(packageVersion)

    log('Pushing tags')
    await simplegit.pushTags()
  } else {
    log('Last tag and package version are synchronized')
  }
} else {
  log('There is no latest tag')
}
