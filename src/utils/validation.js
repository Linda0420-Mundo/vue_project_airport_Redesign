export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validateRequired = (value) => {
  return value && value.trim().length > 0
}

export const validateMinLength = (value, min) => {
  return value && value.length >= min
}

export const validateMaxLength = (value, max) => {
  return value && value.length <= max
}

export const validatePhone = (phone) => {
  const re = /^[0-9-+()]*$/
  return re.test(phone)
}

export const getValidationError = (value, rules) => {
  if (rules.required && !validateRequired(value)) {
    return '此欄位為必填'
  }
  if (rules.email && !validateEmail(value)) {
    return '請輸入有效的電子郵件地址'
  }
  if (rules.minLength && !validateMinLength(value, rules.minLength)) {
    return `最少需要 ${rules.minLength} 個字元`
  }
  if (rules.maxLength && !validateMaxLength(value, rules.maxLength)) {
    return `最多只能輸入 ${rules.maxLength} 個字元`
  }
  if (rules.phone && !validatePhone(value)) {
    return '請輸入有效的電話號碼'
  }
  return ''
}
