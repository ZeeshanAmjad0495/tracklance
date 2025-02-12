import performActions from './src';

const args = process.argv.slice(2);

if (!args.length) {
  throw new Error('No arguments provided');
}

const command = args.includes('list') ? args.join(' ') : args[0];

if (command === undefined) {
  throw new Error('No command provided');
}
performActions(args, command);
