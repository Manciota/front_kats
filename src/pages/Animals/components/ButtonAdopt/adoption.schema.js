import * as yup from 'yup'

const validation = {
  string: 'O campo deve ser um texto!',
  number: 'O campo deve ser um numero!',
  required: 'Campo obrigatorio!',
  phone: 'Numero invalido!',
  cpf: 'O CPF deve conter 11 digitos'
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const schema = yup
  .object({
    name: yup.string(validation.string).required(validation.required),
    phone: yup.string().matches(phoneRegExp, validation.phone),
    cpf: yup
      .string(validation.string)
      .min(11, validation.cpf)
      .required(validation.required),
    address: yup.string(validation.string).required(validation.required)
  })
  .required()
