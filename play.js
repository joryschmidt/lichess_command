function play(min, sec) {
  
  var challenges = $('.challenge');
  if (arguments.length === 0) return challenges.eq(Math.floor(Math.random() * challenges.length)).find('.accept').click();
  else {
    challenges = challenges.filter(function() {
      return $(this).find('.desc').text().search(new RegExp(min + '\\+' + sec)) !== -1;
    });
  
    if (challenges.length === 0) console.log('No challenges matching the specified time control');
    else {
      return challenges.eq(Math.floor(Math.random() * challenges.length)).find('.accept').click();
    }
  }
}