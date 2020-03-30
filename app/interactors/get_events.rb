class GetEvents
  include Interactor

  def call
    context.events = Event.all
  end
end