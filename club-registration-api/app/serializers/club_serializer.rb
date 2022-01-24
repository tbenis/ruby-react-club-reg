class ClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :description, :date_founded
end
