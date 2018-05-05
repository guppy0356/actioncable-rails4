class Book < ActiveRecord::Base
  after_commit :broadcast

  private
    def broadcast
      ActionCable.server.broadcast 'book_channel', {price: price, title: title}
    end
end
