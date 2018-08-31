import * as bsl from '.'

process.env.LOG_TARGETS = 'stdout:0'

describe('bs-logger', () => {
  it('should export required helpers', () => {
    expect(Object.keys(bsl)).toMatchInlineSnapshot(`
Array [
  "LogMethod",
  "Logger",
  "createLogger",
  "lastSequenceNumber",
  "resetSequence",
  "LogContext",
  "LogContexts",
  "LogLevelName",
  "LogLevels",
  "logLevelNameFor",
  "parseLogLevel",
  "LogMessage",
  "LogMessageFormatter",
  "LogMessageTranslator",
  "registerLogFormatter",
  "resetLogFormatters",
  "default",
  "logger",
  "setup",
  "DEFAULT_LOG_TARGET",
  "LogTarget",
  "parseLogTargets",
  "testing",
]
`)
  })

  it('should not create any logger until default logger is used', () => {
    const factory = jest.fn(() => () => () => void 0)
    bsl.setup(factory)
    expect(factory).not.toHaveBeenCalled()
    bsl.default('hello')
    expect(factory).toHaveBeenCalledTimes(1)
  })
})
