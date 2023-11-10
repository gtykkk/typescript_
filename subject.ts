let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 만들함수( x :{subject : string | string[]} ){
    if (typeof x.subject === 'string') {
      return x.subject
    } else if (Array.isArray(x.subject) ){
      return x.subject[x.subject.length - 1]
    } else {
      return '없쪄'
    }
  }
  
  console.log( 만들함수( { subject : ['english', 'art', 'science'] }  ) )