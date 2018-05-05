class BookChannel < ApplicationCable::Channel
  def subscribed
    stream_from "book_channel"
  end
end
