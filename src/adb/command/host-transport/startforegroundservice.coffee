Command = require '../../command'
Protocol = require '../../protocol'
Parser = require '../../parser'

StartActivityCommand = require './startactivity'

class StartForegroundServiceCommand extends StartActivityCommand
  execute: (options) ->
    args = this._intentArgs options
    if options.user or options.user is 0
      args.push '--user', this._escape options.user
    this._run 'startforegroundservice', args

module.exports = StartForegroundServiceCommand
