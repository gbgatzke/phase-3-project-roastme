class Roaster < ApplicationRecord
    has_many :coffee_types
    has_many :reviews, through: :coffee_types

    
end
