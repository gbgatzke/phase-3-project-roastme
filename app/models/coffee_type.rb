class CoffeeType < ApplicationRecord
    belongs_to :roaster
    has_many :reviews
end
