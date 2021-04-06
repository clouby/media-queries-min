import json2mq from 'json2mq'

const templates = {
  default: {
    xs: json2mq({ maxWidth: 576 }),
    sm: json2mq({ minWidth: 576 }),
    md: json2mq({ minWidth: 768 }),
    lg: json2mq({ minWidth: 992 }),
    xl: json2mq({ minWidth: 1200 })
  },
  'emerald-ui': {
    xs: json2mq({ maxWidth: 480 }),
    sm: json2mq({ minWidth: 768 }),
    md: json2mq({ minWidth: 992 }),
    lg: json2mq({ minWidth: 1200 })
  }
}

export default templates
