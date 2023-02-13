class Roaster < ApplicationRecord
    has_many :coffee_types
    has_many :reviews, through: :coffee_types

    def average_rating
        self.reviews.average(:rating).to_i
    end
end
