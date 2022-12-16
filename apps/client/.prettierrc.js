// @ts-check

const {
  withTailwind,
  orderNextWithOrg,
} = require("@leomotors/config/prettier");

module.exports = withTailwind({ importOrder: orderNextWithOrg("@org") });
