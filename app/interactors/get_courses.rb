class GetCourses
  include Interactor

  def call
    context.courses = Course.all
  end
end