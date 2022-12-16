// @ts-check

const {
  withSortImports,
  orderNestWithOrg,
} = require("@leomotors/config/prettier");

module.exports = withSortImports({ importOrder: orderNestWithOrg("@org") });
