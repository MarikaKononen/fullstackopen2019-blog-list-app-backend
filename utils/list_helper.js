const dummy = (blogs) => {
  console.log('from dummy test', blogs)
  return 1
}

const totalLikes = (blogs) => {
  // console.log('blogs from attribute', blogs)
  let sum = 0
  // eslint-disable-next-line no-unused-vars
  const totLikes = blogs.map( blog => sum += blog.likes)
  // console.log('totalLikesfunction: ', totLikes)
  return sum
}

module.exports = {
  dummy,
  totalLikes
}