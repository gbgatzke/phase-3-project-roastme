class CoffeeTypeController < ApplicationController
    def index
       render json: CoffeeType.all
    end

    def create
        new_coffee = CoffeeType.create!(coffee_type_params)
        render json: new_coffee
    end

    def show
        render json: CoffeeType.find(params[:id])
    end

    def roaster
        render json: CoffeeType.find(params[:id]).roaster
    end

    def average_rating
        render json: CoffeeType.find(params[:id]).reviews.average(:rating).to_i
    end

    private

    def coffee_type_params
        params.permit(
            :blend_name,
            :intensifier,
            :origin,
            :notes,
            :muffin_pairing,
            :img_url,
            :roaster_id
        )
    end
end