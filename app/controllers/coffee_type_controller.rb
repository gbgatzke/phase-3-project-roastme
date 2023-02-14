class CoffeeTypeController < ApplicationController
    
    def index
       render json: CoffeeType.all
    end

    def create
        coffee_type = CoffeType.create!(coffee_type_params)
        render json: coffee_type
    end

    def show
        render json: CoffeeType.find(params[:id])
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