(function () {
  fetch('https://cdn.contentful.com/spaces/vkb9vn7do3b1/environments/master/entries', {
    headers: {
      'Authorization': 'Bearer 4G5ArjLXcm2VbZ56-eJ1JbhD01JMYq4HPlorZyXeAIc'
    }
  }).then(result => {
    console.log(result)
    result
      .json()
      .then(data => {
        console.log(data)
        data.items.forEach(item => {
          const app = document.getElementById('app')
          const postContainer = document.createElement('div')

          const titleNode = document.createElement('h2')
          titleNode.innerText = item.fields.title
          postContainer.appendChild(titleNode)

          const dateNode = document.createElement('div')
          dateNode.innerText = new Date(item.sys.createdAt).toLocaleDateString()
          dateNode.classList.add('date')
          postContainer.appendChild(dateNode)

          const contentNode = document.createElement('div')
          contentNode.innerHTML = item.fields.content
          postContainer.appendChild(contentNode)

          app.appendChild(postContainer)        
        })
      })
  }).catch(error => {
    console.error(error)
  })
})()