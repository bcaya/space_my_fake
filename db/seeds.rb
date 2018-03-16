
   100.times do
 author = Faker::Simpsons.character
 content = Faker::Matz.quote
 title = Faker::SlackEmoji.emoji
 avatar = Faker::Avatar.image(author, '50x50', 'png', 'set2')
 Post.create(author: author, content: content, title: title, avatar: avatar)
end