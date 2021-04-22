const execSync = require('child_process').execSync;

const getShortPath = (path, userPath, lastShown = 3) => {
  const shortUserPath = path.indexOf(userPath) == 0 ? `~/${path.slice(userPath.length + 1)}` : path
  const dirs = shortUserPath.split('/').reverse().map((dir,index) => index > (lastShown - 1) ? dir[0] : dir).reverse()
  const output = dirs.join('/')
  console.log(output)
  return output
}

const userPath = `/Users/${execSync('whoami', { encoding: 'utf-8' })}`.split(`\n`)[0]
exports.app = () => {
  getShortPath(process.argv[2], userPath, 3)
}


