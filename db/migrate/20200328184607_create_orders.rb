class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :email, null: false, default: ""
      t.float :total, null: false, default: 0

      t.timestamps
    end
  end
end
