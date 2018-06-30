const fetch = require('node-fetch')

exports.getusers = async (ctx, next) => {
  const users = [{ name: 'Dead Horse' }, { name: 'Jack' }, { name: 'Tom' }];
  let listdata;
  await fetch("https://www.easy-mock.com/mock/5b31b7195b00583c51b94987/test1/list", {
    method: "GET"
  })
    .then(res => res.text())
    .then(myJson => {
      listdata = JSON.parse(myJson).data;
    })
    .catch(error => {
    })
  await ctx.render('wellen', {
    listdata
  })
}
