const ObjectFromEntries = (value) => value
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value
    }), {}) // O repl não suporta Object.fromEntries

const ObjectFromEntries = (value) => Object.fromEntries(value)


const input = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone'
}

const attrs = 'name,email'

const core = (condition) => (input, attrs) => {
  attrs = attrs.split(',')

  const byNecessaryAttrs = ([key]) => attrs.includes(key) === condition
    
  return ObjectFromEntries(
      Object
        .entries(input)
        .filter(byNecessaryAttrs)
  )
}

const accept = core(true)
const ignore = core(false)

console.log({
  accept: accept(input, attrs),
  ignore: ignore(input, attrs)
})

