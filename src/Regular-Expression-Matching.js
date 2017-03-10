/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//   var preceding = [];

//   if(s.length !== p.length)
//   for(var i=0; i< s.length;)
// };
// 
$.get('url', function(data) {
  var series = [];


  //focus,其他同理
  var focus = data.focusnum.map(function(elem, index) {
    return {
      name: elem.city,
      value: elem.count
    }
  });

  series.push(focus);

  //focus,其他同理
  data.fansnum.forEach(function(elem, index) {

  });
});