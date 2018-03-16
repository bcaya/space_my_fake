class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :avatar
      t.string :author
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
