class RoasterController < ApplicationController
    
    def index
       render json: Roaster.all
    end

    def create
        roaster = Roaster.create!(roaster_params)
        render json: roaster
    end

    def show
        render json: Roaster.find(params[:id])
    end

    def destroy
        render json: Roaster.find(params[:id]).destroy
    end

    def roaster_coffees
        render json: Roaster.find(params[:id]).coffee_types
    end

    def average_rating
        render json: Roaster.find(params[:id]).reviews.average(:rating).to_i
    end

    private

    def roaster_params
        params.permit(:name, :img_url, :website_url)
    end
end