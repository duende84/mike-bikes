class SaveOrder
  include Interactor::Organizer

  organize CreateOrder, NotifyAdmin
end
