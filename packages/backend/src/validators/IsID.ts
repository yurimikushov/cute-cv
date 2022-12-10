import { registerDecorator } from 'class-validator'
import { isString, size } from 'lodash'

// nanoid pkg is used for id generation
// it's default nanoid's output length
const ID_LENGTH = 21

const IsID = () => (object: object, propertyName: string) => {
  registerDecorator({
    name: 'isId',
    target: object.constructor,
    propertyName,
    options: {
      message: `${propertyName} must be of string type and equal to ${ID_LENGTH} characters`,
    },
    validator: {
      validate(value: unknown) {
        return isString(value) && size(value) === ID_LENGTH
      },
    },
  })
}

export default IsID
