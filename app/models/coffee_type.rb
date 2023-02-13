class CoffeeType < ApplicationRecord
    belongs_to :roaster
    has_many :reviews

    def average_rating
        self.reviews.average(:rating).to_i
    end
end
