const fs = require('fs')
const path = require('path')
const postcss = require('postcss')

function isInsideRoot(rule) {
  return rule.selectors.length !== 1 || rule.selectors[0] !== ':root' || rule.parent.type !== 'root'
}

function isVariableDeclaration(decl) {
  return Boolean(decl.value) && decl.prop.startsWith('--')
}

function parse(css, options) {
  const root = postcss.parse(css, {
    from: options.from,
    parser: options.parser,
  })

  const variables = {}
  root.walkRules(rule => {
    if (isInsideRoot(rule)) {
      return
    }

    rule.each(decl => {
      if (isVariableDeclaration(decl)) {
        const name = decl.prop.slice(2)
        variables[name] = decl.value
      }
    })
  })
  return variables
}

function parseFileSync(fileName, options) {
  const css = fs.readFileSync(fileName, 'utf-8')
  return parse(css, { ...options, from: fileName })
}

function themeReplacements() {
  const fileName = path.resolve(__dirname, './styles/theme.scss')
  const variables = parseFileSync(fileName, {})
  return Object.entries(variables).reduce((memo, e) => {
    memo[e[0]] = `var(--${e[0]})`
    return memo
  }, {})
}
module.exports = { themeReplacements }
