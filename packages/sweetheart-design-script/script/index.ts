import logger from './shared/logger'
import {Command} from 'commander'
import {create} from "./commands/create";
import {compile} from "./commands/compile";
import {release} from "./commands/release";
import {jest} from "./commands/jest";

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
    .option('-r --remote <remote>', '远程名称')
    .description('释放所有的包并生成变更日志')
    .action(release)

program
    .command('jest')
    .description('Run Jest in work directory')
    .option('-w, --watch', 'Watch files for changes and rerun tests related to changed files')
    .option('-wa, --watchAll', 'Watch files for changes and rerun all tests when something changes')
    .option('-c, --component <componentName>', 'Test a specific component')
    .option('-cc --clearCache', 'Clear test cache')
    .action(jest)

program.on('command:*', ([cmd]) => {
    program.outputHelp()
    logger.error(`\nUnknown command ${cmd}.\n`)
    process.exitCode = 1
})

program.parse()
