class Club < ApplicationRecord
  has_one_attached :logo
  # validates :name, presence: true, uniqueness: true, length: { minimum: 3 }
  # validates :date_founded, presence: true
  # validates :summary, presence: true
  # validate :date_founded_cannot_be_in_the_future
  # validates :description, length: { minimum: 10 }

  scope :alphabeticallize, -> { order(:name) }

  def date_founded_cannot_be_in_the_future
    if date_founded.present? && date_founded > Date.today
      errors.add(:date_founded, "Cannot be in the future")
    end
  end
end
