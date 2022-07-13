import logger from './shared/logger'
import {Command} from 'commander'
import {create} from "./commands/create";
import {compile} from "./commands/compile";
import {release} from "./commands/release";

const program = new Command()

program.version(`sweetheart-design-script ${require('../package.json').version}`).usage('<command> [options]')

program.command('create <name>').description('创建组件目录').action(create)

program
    .command('compile')
    .description('编译组件库代码')
    .option('-nu, --noUmd', '不编译 umd 目标代码')
    .action(compile)

program
    .command('release')
    .option('-r --remote <remote>', 'Remote name')
    .description('Release all packages and generate changelogs')
    .action(release)

program.on('command:*', ([cmd]) => {
    program.outputHelp()
    logger.error(`\nUnknown command ${cmd}.\n`)
    process.exitCode = 1
})

program.parse()
